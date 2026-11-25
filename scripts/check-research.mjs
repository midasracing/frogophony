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
