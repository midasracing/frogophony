# Architecture

The runtime is separate from the knowledge database and private source scans.

- `src/App.tsx`: composition.
- `src/app/`: global styles.
- `src/components/`: shared layout and Rive mascot.
- `src/features/`: learning, lesson flow, progress and settings.
- `src/content/demo/`: unapproved prototype content.
- `src/music/`: demo audio adapter; future symbolic, playback and grading engines.
- `public/`: assets served by the app.
- `database/`: canonical source registry, claims, curriculum, fixtures, reading ledger and derived index.
- `docs/research/`: reference notes and policies.
- `docs/archive/audits/`: historical reports and continuing correction log.
- `design/`: editable vector and animation sources; non-runtime design references.
- `scripts/`: validation.

Dependencies flow from App to features/UI, and from lesson logic to content, progress and music. Music modules do not depend on UI. Preserve the existing local storage key and Pages configuration unless explicitly changing deployment. Never import unapproved research directly into runtime. The future release pipeline must select reviewed claims and lessons.

Private source PDFs stay outside Git and public assets. Run `npm run check:structure` and `npm run check:research`; neither is a musical or browser test.
