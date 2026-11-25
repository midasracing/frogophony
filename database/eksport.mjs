import { readFileSync } from 'node:fs';

// node database/eksport.mjs --robocza > /tmp/baza-muzyczna.json
// Bez flagi eksport obejmuje wyłącznie treści dopuszczone do publikacji.
const args = process.argv.slice(2);
if (args.length > 1 || (args.length === 1 && args[0] !== '--robocza')) {
  console.error('Użycie: node database/eksport.mjs [--robocza]');
  process.exit(1);
}
const robocza = args.includes('--robocza');
const read = name => JSON.parse(readFileSync(new URL(name, import.meta.url), 'utf8'));
const podreczniki = new Set(read('reading-ledger.json').books.map(book => book.sourceId));
const wpisy = new Map();

for (const claim of read('verified-claims.json').claims) {
  if (claim.status !== 'source-checked' || (!robocza && claim.releaseApproved !== true)) continue;
  if (!claim.sourceRefs.length || !claim.sourceRefs.every(ref =>
    ref.access === 'direct-read' && podreczniki.has(ref.sourceId)
  )) continue;

  const tresc = claim.statement.normalize('NFC').trim();
  const zakres = claim.scope.normalize('NFC').trim();
  if (!wpisy.has(tresc)) wpisy.set(tresc, { tresc, zakres: [] });
  const wpis = wpisy.get(tresc);
  if (zakres && !wpis.zakres.includes(zakres)) wpis.zakres.push(zakres);
}

if (!wpisy.size) {
  console.error('Brak wpisów podręcznikowych spełniających warunki eksportu.');
  process.exit(1);
}

const baza = {
  wersja: 1,
  jezyk: 'pl-PL',
  status: robocza ? 'robocza-niepelna' : 'zatwierdzone-wpisy',
  wpisy: [...wpisy.values()],
};
process.stdout.write(JSON.stringify(baza, null, 2) + '\n');
