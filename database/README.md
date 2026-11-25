# Frogophony — database

Single canonical evidence store, outside the website bundle. Source-checked claims are scoped; all release approvals remain blocked pending independent review and engine tests.

| File | Role |
| --- | --- |
| [sources.json](sources.json) | Source registry |
| [verified-claims.json](verified-claims.json) | Claims, locators, scope and exceptions |
| [official-curriculum.json](official-curriculum.json) | Official curriculum requirements |
| [coverage-map.json](coverage-map.json) | Claim-to-competency mapping |
| [golden-cases.json](golden-cases.json) | Expected cases, not executed engine tests |
| [lesson-manifest.json](lesson-manifest.json) | Draft course registry |
| [reading-ledger.json](reading-ledger.json) | Reading progress, gaps and resumption point |
| [knowledge-index.json](knowledge-index.json) | Derived reverse index |
| [datasets/](datasets/) | Draft exercise blueprints and domain data |

Read the [source policy](../docs/research/source-policy.md) and [quality policy](../docs/research/quality-policy.md). Reference notes are in [docs/research](../docs/research/README.md); historic reports and the correction log are in [docs/archive/audits](../docs/archive/audits/). Run `npm run check:research` and `npm run check:structure`. Private scans stay outside Git. Never generate educational content from unsupported model recollection.
