import { readFileSync } from 'node:fs';
const read = name => JSON.parse(readFileSync(new URL('../docs/research/'+name, import.meta.url),'utf8'));
function validate(s,c,k,g,m){
 const errs=[];const by=(items,key,label)=>{const result=new Map();for(const item of items){if(!item[key]||result.has(item[key]))errs.push(label+" duplicate/missing "+item[key]);result.set(item[key],item);}return result;};
 const src=by(s.sources,"id","source"), req=by(c.subjects.flatMap(x=>x.requirements),"id","requirement"), claim=by(k.claims,"id","claim"), fixtures=by(g.cases,"id","fixture");by(m.lessons,"id","lesson");
 for(const r of req.values()){if(!src.has(r.sourceId)||r.sourceStatus!=="page-reviewed"||!Array.isArray(r.pages)||r.pages.length!==2||!r.pages.every(Number.isInteger)||r.pages[0]>r.pages[1])errs.push("bad requirement "+r.id);}
 for(const q of claim.values()){if(!q.statement||!q.scope||!q.checkedAt||q.status!=="source-checked"||!q.sourceRefs?.length)errs.push("bad claim "+q.id);for(const ref of q.sourceRefs??[]){const z=src.get(ref.sourceId);if(!z||!ref.locator||ref.access!=="direct-read"||!["verified-page","verified-partial"].includes(z.status))errs.push("unsupported claim "+q.id);}for(const id of q.fixtures??[])if(!fixtures.has(id))errs.push("unknown fixture "+id);if(q.releaseApproved&&!q.teacherReview)errs.push("unreviewed approval "+q.id);}
 for(const l of m.lessons){if(!["draft","approved"].includes(l.status))errs.push("bad lesson status "+l.id);for(const id of l.curriculumIds??[])if(!req.has(id))errs.push("unknown requirement "+id);for(const id of l.claimIds??[])if(!claim.has(id))errs.push("unknown claim "+id);if(l.status==="approved"){if(!l.curriculumIds?.length||!l.claimIds?.length||!l.evidenceNotes||!l.musicReview||!l.pedagogyReview||!l.engineTest)errs.push("missing release evidence "+l.id);for(const id of l.claimIds??[])if(!claim.get(id)?.releaseApproved)errs.push("claim not approved "+id);}}
 return errs;
}
const s=read('sources.json'),c=read('official-curriculum.json'),k=read('verified-claims.json'),g=read('golden-cases.json'),m=read('lesson-manifest.json');
const errors=validate(s,c,k,g,m);
const testManifest={...m,lessons:[{id:'invalid',status:'approved',claimIds:['MISSING'],curriculumIds:[]}]};
if (!validate(s,c,k,g,testManifest).length) errors.push('negative test did not fail');
if (errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log('Research metadata OK; no musical correctness or publication claim implied.');
