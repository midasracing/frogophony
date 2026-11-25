# Architecture

The runtime is deliberately separate from research and source archives.

- `src/App.tsx`: composition only.
- `src/app/`: global application styles.
- `src/components/layout/`: shared navigation and shell.
- `src/components/mascot/`: Rive runtime integration.
- `src/features/`: learning, lesson flow, progress and settings. `useDemoSession` is temporary demo orchestration.
- `src/content/demo/`: existing example questions, explicitly not approved course data.
- `src/music/`: browser audio adapter; future independent symbolic score, audio and grading engines.
- `docs/research/`: canonical provenance JSON and research notes; not runtime content. Historical audit reports are isolated in `docs/research/audits/`. The evidence files retain stable paths.
- `design/`: editable mascot production history, outside the app bundle.
- `scripts/`: checks and future data build tools.

Dependencies flow from App to feature/UI and from lesson logic to content, progress and music. Runtime music must not depend on UI. Keep existing storage key and Pages base path. Source PDFs stay in private Google Drive, never in `public/` or Git. Do not import research directly into runtime; future release pipeline must select approved claims and lessons.

## Checks

`npm run check:structure` checks local imports and the boundary between runtime, research and private PDFs; `npm run check:research` checks provenance metadata. Neither is a musical or browser test.
