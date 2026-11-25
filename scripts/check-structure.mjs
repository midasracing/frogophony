import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const errors = [];
const skipped = new Set(['.git', 'node_modules', 'dist', '.private']);
function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (skipped.has(entry.name)) return [];
    const path = resolve(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}
const all = walk(root);
const source = resolve(root, 'src');
for (const path of all) {
  const name = relative(root, path);
  if (/\.pdf$/i.test(path)) errors.push('Private PDF must not be in project: ' + name);
  if (!path.startsWith(source + sep) || !/\.[cm]?[jt]sx?$/.test(path)) continue;
  const text = readFileSync(path, 'utf8');
  for (const match of text.matchAll(/(?:\bfrom\s*|\bimport\s*\(?\s*)['"]([^'"]+)['"]/g)) {
    const target = match[1];
    if (!target.startsWith('.')) continue;
    const abs = resolve(dirname(path), target);
    if (!abs.startsWith(source + sep)) errors.push('Runtime import outside src: ' + name + ' -> ' + target);
    const candidates = [abs, ...['.ts','.tsx','.js','.jsx','.json','.css'].map(ext=>abs+ext), ...['index.ts','index.tsx','index.js'].map(ext=>resolve(abs,ext))];
    if (!candidates.some(x=>existsSync(x)&&statSync(x).isFile())) errors.push('Unresolved import: ' + name + ' -> ' + target);
  }
}
for (const file of ['src/App.tsx','src/features/lesson/useDemoSession.ts','src/content/demo/quizzes.ts','src/music/audio/playDemoNotes.ts','src/components/mascot/Kumka.tsx','docs/research/verified-claims.json','docs/research/audits/audit-log.md']) {
  if (!existsSync(resolve(root,file))) errors.push('Missing canonical file: '+file);
}
for (const file of ['src/Kumka.tsx','src/styles.css','docs/research/audit-log.md']) {
  if (existsSync(resolve(root,file))) errors.push('Obsolete path: '+file);
}
if(errors.length) { console.error(errors.join('\n')); process.exitCode=1; }
else console.log('Project structure OK; runtime imports resolve and no source PDFs found.');
