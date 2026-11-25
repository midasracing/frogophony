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
