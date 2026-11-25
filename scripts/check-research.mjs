import { readFileSync } from 'node:fs';
const read=name=>JSON.parse(readFileSync(new URL('../database/'+name,import.meta.url),'utf8'));
function check(s,c,k,g,m,v){
const errors=[],nonempty=x=>typeof x==="string"&&x.trim().length>0;
function index(items,label){const map=new Map();if(!Array.isArray(items)){errors.push("missing "+label);return map;}for(const x of items){if(!x||!nonempty(x.id)||map.has(x.id)){errors.push("invalid id "+label);continue;}map.set(x.id,x);}return map;}
const src=index(s.sources,"sources"),req=index(c.subjects.flatMap(x=>x.requirements),"requirements"),claims=index(k.claims,"claims"),fixtures=index(g.cases,"fixtures"),lessons=index(m.lessons,"lessons"),cov=index(v.requirements,"coverage");
function refs(xs,map,label){if(!Array.isArray(xs)){errors.push("missing array "+label);return;}if(new Set(xs).size!==xs.length)errors.push("duplicate "+label);for(const id of xs)if(!map.has(id))errors.push("unknown "+label+" "+id);}
const pages=p=>Array.isArray(p)&&p.length===2&&p.every(n=>Number.isInteger(n)&&n>0)&&p[0]<=p[1];
for(const sub of c.subjects)for(const r of sub.requirements){const z=src.get(r.sourceId);if(!z||z.type!=="law"||!["verified-page","verified-partial"].includes(z.status)||!pages(r.pages)||!pages(sub.pages)||r.pages[0]<sub.pages[0]||r.pages[1]>sub.pages[1]||r.sourceStatus!=="page-reviewed")errors.push("bad requirement "+r.id);}
for(const q of claims.values()){if(!nonempty(q.statement)||!nonempty(q.scope)||!nonempty(q.checkedAt)||q.status!=="source-checked"||!Array.isArray(q.sourceRefs)||!q.sourceRefs.length)errors.push("bad claim "+q.id);for(const r of q.sourceRefs??[]){const z=src.get(r.sourceId);if(!z||!nonempty(r.locator)||r.access!=="direct-read"||!["verified-page","verified-partial"].includes(z.status))errors.push("unsupported claim "+q.id);}refs(q.fixtures,fixtures,q.id);if(q.releaseApproved!==false)errors.push("release blocked pending real review registry "+q.id);}
for(const x of cov.values()){if(!req.has(x.id))errors.push("unknown coverage "+x.id);refs(x.claimIds,claims,x.id);if(x.status!==(x.claimIds?.length?"partial":"unmapped"))errors.push("bad status "+x.id);}
for(const id of req.keys())if(!cov.has(id))errors.push("missing coverage "+id);
for(const l of lessons.values()){refs(l.curriculumIds,req,l.id);refs(l.claimIds,claims,l.id);if(l.status!=="draft")errors.push("release blocked pending review registry and runtime gate "+l.id);}
return errors;
}
function negatives(s,c,k,g,m,v){const clone=x=>JSON.parse(JSON.stringify(x));const tests=[];const test=(name,a,b,d,e,f,h)=>{if(!check(a,b,d,e,f,h).length)tests.push(name);};
test("unknown claim",s,c,k,g,{...m,lessons:[{id:"x",status:"draft",claimIds:["unknown"],curriculumIds:[]}]},v);
test("missing arrays",s,c,k,g,{...m,lessons:[{id:"x",status:"draft"}]},v);
test("fake lesson approval",s,c,k,g,{...m,lessons:[{id:"x",status:"approved",claimIds:[k.claims[0].id],curriculumIds:[v.requirements[0].id],musicReview:"fake",pedagogyReview:"fake",engineTest:"fake"}]},v);
const empty=clone(k);empty.claims[0].sourceRefs[0].locator=" ";test("empty locator",s,c,empty,g,m,v);
const fake=clone(k);fake.claims[0].releaseApproved=true;fake.claims[0].teacherReview="fake";test("fake claim approval",s,c,fake,g,m,v);
test("missing coverage",s,c,k,g,m,{...v,requirements:v.requirements.slice(1)});
const page=clone(c);page.subjects[0].requirements[0].pages=[1,2];test("bad page",s,page,k,g,m,v);
return tests;}
const [s,c,k,g,m,v]=['sources.json','official-curriculum.json','verified-claims.json','golden-cases.json','lesson-manifest.json','coverage-map.json'].map(read);
const errors=check(s,c,k,g,m,v).concat(negatives(s,c,k,g,m,v).map(x=>'Negative case not rejected: '+x));
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log('Research metadata OK; 7 negative tests rejected. No music/pedagogy certification.');

// Kompendium: kontrola spójności, nie certyfikacja muzyczna.
const hasla=read('kompendium/hasla.json'), szczegoly=read('kompendium/wesolowski-dane-szczegolowe.json');
const claimIds=new Set(k.claims.map(q=>q.id)), sourceIds=new Set(s.sources.map(q=>q.id)), hasloIds=new Set(hasla.hasla.map(q=>q.id));
const validRefs=xs=>Array.isArray(xs)&&xs.length>0&&xs.every(r=>sourceIds.has(r.sourceId)&&typeof r.locator==='string'&&r.locator.trim());
const ce=[];
if(hasla.jezyk!=='pl-PL'||szczegoly.jezyk!=='pl-PL'||hasloIds.size!==hasla.hasla.length||szczegoly.dopuszczoneDoPublikacji!==false)ce.push('Invalid compendium metadata');
for(const q of hasla.hasla)if(!q.definicja||!q.omowienie||q.dopuszczoneDoPublikacji!==false||!validRefs(q.odwolania)||!Array.isArray(q.podstawa)||!q.podstawa.length||q.podstawa.some(id=>!claimIds.has(id)))ce.push('Invalid entry '+q.id);
for(const q of szczegoly.slownik.terminy)if(!q.termin||!q.znaczenie||q.dopuszczoneDoPublikacji!==false||!validRefs(q.odwolania))ce.push('Invalid term '+q.termin);
if(new Set(szczegoly.slownik.terminy.map(q=>q.termin.toLocaleLowerCase('pl'))).size!==szczegoly.slownik.terminy.length)ce.push('Duplicate term');
for(const q of szczegoly.projektyZadan)if(!hasloIds.has(q.haslo)||!validRefs(q.odwolania)||q.dopuszczoneDoPublikacji!==false||!q.zasadyOceny)ce.push('Invalid exercise draft '+q.id);
for(const q of szczegoly.rytm)if(!validRefs(q.odwolania)||q.podstawa.some(id=>!claimIds.has(id)))ce.push('Invalid rhythm rule '+q.id);
const major=[0,2,4,5,7,9,11], scaleBase=[0,2,4,5,7,9,11,12];
const matrix=szczegoly.interwaly.macierzNaturalnegoDur;
if(matrix.length!==42||new Set(matrix.map(q=>q.stopienPoczatkowy+':'+q.numer)).size!==42)ce.push('Incomplete diatonic matrix');
for(const q of matrix){const i=q.stopienPoczatkowy-1,j=i+q.numer-1,semi=major[j%7]+12*Math.floor(j/7)-major[i],delta=semi-scaleBase[q.numer-1];const quality=[4,5].includes(q.numer)?({0:'czysta',1:'zwiększona','-1':'zmniejszona'})[delta]:({0:'wielka','-1':'mała'})[delta];if(semi!==q.poltony||quality!==q.jakosc||q.stopienKoncowy!==j%7+1||q.przeniesienieOktawowe!==Math.floor(j/7))ce.push('Invalid diatonic interval');}
if(ce.length){console.error(ce.join('\n'));process.exitCode=1;}else console.log('Compendium links and 42 diatonic relations checked; drafts remain blocked.');

const st=read('kompendium/wesolowski-skale-i-tonacje.json');
const se=[];
if(st.jezyk!=='pl-PL'||st.dopuszczoneDoPublikacji!==false||st.tonacje.length!==15||st.trojdzwięki.length!==210||st.enharmoniaGam.length!==26)se.push('Invalid scale metadata');
for(const g of st.gamy){const d=g.poltonyOdDolnejToniki;if(!validRefs(g.odwolania)||d.length!==g.dzwieki.length||![8,13].includes(d.length)||Math.abs(d.at(-1)-d[0])!==12||d.slice(1).some((x,i)=>g.kierunek==='w-gore'?x<=d[i]:x>=d[i])||(d.length===13&&d.slice(1).some((x,i)=>Math.abs(x-d[i])!==1)))se.push('Invalid scale '+g.tonacja+' '+g.odmiana);}
if(new Set(st.gamy.map(g=>[g.tonacja,g.odmiana,g.kierunek].join(':'))).size!==st.gamy.length)se.push('Duplicate scale');
for(const q of st.trojdzwięki){const p=q.odleglosciOdPrymy;const jakosc=({'4,3':'durowy','3,4':'molowy','3,3':'zmniejszony','4,4':'zwiększony'})[[p[1],p[2]-p[1]].join(',')];if(!validRefs(q.odwolania)||jakosc!==q.jakosc||q.skladniki.length!==3)se.push('Invalid triad');}
if(se.length){console.error(se.join('\n'));process.exitCode=1;}else console.log('Scale and chord data structure checked; music review still required.');

const nr=szczegoly.notacjaIRytm, ne=[];
if(nr.dopuszczoneDoPublikacji!==false||nr.klucze.length!==9||nr.pozycje.length!==153||nr.kropki.length!==28||!validRefs(nr.odwolania))ne.push('Invalid notation metadata');
const lit=['c','d','e','f','g','a','h'];
for(const c of nr.klucze){for(let p=-4;p<=12;p++){const q=nr.pozycje.filter(x=>x.klucz===c.id&&x.pozycja===p), v=c.anchor+p-2*(c.linia-1);if(q.length!==1||q[0].litera!==lit[(v%7+7)%7]||q[0].oktawa!==Math.floor(v/7))ne.push('Invalid staff position');}}
for(const r of nr.proporcjeNiemiarowe)if(r.mnoznikCzasu[0]*r.liczbaNut!==r.mnoznikCzasu[1]*r.zastepuje||!validRefs(r.odwolania))ne.push('Invalid tuplet ratio');
for(const g of nr.siatkiRytmiczne){const [a,b]=g.liczebnosci;if(g.koniec!==g.siatka||g.poczatkiA.length!==a||g.poczatkiB.length!==b||g.poczatkiA.some((x,i)=>!Number.isInteger(x)||x!==i*g.siatka/a)||g.poczatkiB.some((x,i)=>!Number.isInteger(x)||x!==i*g.siatka/b))ne.push('Invalid rhythm grid');}
if(ne.length){console.error(ne.join('\n'));process.exitCode=1;}else console.log('Notation and rhythm derived data checked; rendering and audio untested.');

const ae=szczegoly.akustykaIElementy, aeErrors=[];
if(ae.dopuszczoneDoPublikacji!==false||!validRefs(ae.odwolania)||ae.szeregHarmoniczny.length!==16||ae.oktawyA.length!==8||ae.zespoly.length!==8)aeErrors.push('Invalid acoustic metadata');
for(const [i,q] of ae.szeregHarmoniczny.entries())if(q.numerSkladowej!==i+1||q.czestotliwoscPrzy440Hz!==440*(i+1)||!validRefs(q.odwolania))aeErrors.push('Invalid harmonic');
for(const [i,q] of ae.oktawyA.entries())if(q.czestotliwoscAHz!==440*2**(i-4)||!validRefs(q.odwolania))aeErrors.push('Invalid octave');
if(aeErrors.length){console.error(aeErrors.join('\n'));process.exitCode=1;}else console.log('Acoustic model arithmetic checked.');

const wa=read('kompendium/wesolowski-pokrycie.json'), waErr=[];
if(wa.paragrafy.length!==58||wa.strony.length!==179||wa.dopuszczoneDoPublikacji!==false)waErr.push('Nieprawidłowe metadane audytu');
for(const [i,q] of wa.paragrafy.entries())if(q.paragraf!==i+1||q.hasla.some(id=>!hasloIds.has(id)))waErr.push('Nieprawidłowe pokrycie paragrafu '+q.paragraf);
const chrom=szczegoly.interwaly.chromatyczne, ib=[0,2,4,5,7,9,11,12];
if(chrom.length!==31||new Set(chrom.map(q=>q.nrTabeliAutora)).size!==31)waErr.push('Brak pozycji tabeli chromatycznej');
for(const q of chrom){const diff=q.poltony-ib[q.numer-1], qual=[1,4,5,8].includes(q.numer)?({0:'czysta',1:'zwiększona',2:'podwójnie zwiększona','-1':'zmniejszona','-2':'podwójnie zmniejszona'})[diff]:({0:'wielka','-1':'mała',1:'zwiększona',2:'podwójnie zwiększona','-2':'zmniejszona','-3':'podwójnie zmniejszona'})[diff];if(qual!==q.jakosc||!validRefs(q.odwolania))waErr.push('Rozbieżność interwału '+q.nrTabeliAutora);}
const pitch=new Map(), chromNatural=[0,2,4,5,7,9,11], pc=n=>(n%12+12)%12;
for(const [i,q] of szczegoly.chromatyka.nazwy.entries())for(const [name,delta] of [[q.naturalna,0],[q.obnizenie,-1],[q.podwojneObnizenie,-2],[q.podwyzszenie,1],[q.podwojnePodwyzszenie,2]])pitch.set(name,chromNatural[i]+delta);
for(const g of st.gamy){const root=pitch.get(g.tonacja.split('-')[0].toLowerCase());if(root===undefined||g.dzwieki.some((n,i)=>!pitch.has(n)||pc(pitch.get(n)-root)!==pc(g.poltonyOdDolnejToniki[i])))waErr.push('Niezgodność nazw gamy '+g.tonacja);}
for(const q of st.trojdzwięki){const root=pitch.get(q.skladniki[0]);if(root===undefined||q.skladniki.some((n,i)=>!pitch.has(n)||pc(pitch.get(n)-root)!==pc(q.odleglosciOdPrymy[i])))waErr.push('Niezgodność nazw trójdźwięku '+q.tonacja);}
if(waErr.length){console.error(waErr.join('\n'));process.exitCode=1;}else console.log('Sprawdzono mapę 58 paragrafów, 31 interwałów chromatycznych i zgodność nazw z wysokościami gam oraz akordów.');

const rm=st.rozwiazaniaCharakterystyczneMoll, pm=st.modelePentatonikiPoltonowej, re=[];
if(rm.modele.length!==8||rm.przypadki.length!==120||pm.length!==2||rm.dopuszczoneDoPublikacji!==false)re.push('Niepełny zbiór modeli');
for(const q of pm)if(q.poltony.length!==5||q.odstepy.some((x,i)=>q.poltony[i+1]-q.poltony[i]!==x)||q.poltony.at(-1)+q.odstepDoOktawy!==12||!validRefs(q.odwolania))re.push('Błędny model pentatoniki');
for(const q of rm.przypadki){const r=rm.modele.find(x=>x.id===q.model);if(!r||!validRefs(q.odwolania)||q.dopuszczoneDoPublikacji!==false){re.push('Błędne odwołanie do modelu');continue;}const g=st.gamy.find(x=>x.tonacja===q.tonacja&&x.odmiana==='harmoniczna'&&x.kierunek==='w-gore');if(!g){re.push('Brak gamy');continue;}for(const [arr,ind] of [[q.wejscie,r.wejscie],[q.wyjscie,r.wyjscie]])for(const [i,n] of arr.entries()){const j=ind[i];if(n.stopien!==j%7+1||n.przeniesienieOktawowe!==Math.floor(j/7)||n.nazwa!==g.dzwieki[j%7]||n.poltonyOdToniki!==g.poltonyOdDolnejToniki[j%7]+12*Math.floor(j/7))re.push('Błędna nuta rozwiązania');}const mov=q.wyjscie.map((x,i)=>x.poltonyOdToniki-q.wejscie[i].poltonyOdToniki);if(q.wejscie[1].poltonyOdToniki-q.wejscie[0].poltonyOdToniki!==r.interwalWejsciowy.poltony||q.wyjscie[1].poltonyOdToniki-q.wyjscie[0].poltonyOdToniki!==r.interwalWyjsciowy.poltony||(r.ruch==='boczny'?(!mov.includes(0)||mov.every(x=>x===0)):mov[0]*mov[1]>=0))re.push('Błędny interwał lub ruch głosów');}
if(re.length){console.error(re.join('\n'));process.exitCode=1;}else console.log('Sprawdzono 120 modeli rozwiązań i dwa wzorce pentatoniki; nie testowano silnika nutowego.');
