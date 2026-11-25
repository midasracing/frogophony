<p align="center">
  <img src="docs/kumka-readme.png" alt="Kumka" width="110" />&nbsp;&nbsp;<img src="docs/wordmark.svg" alt="frogophony" width="220" />
</p>

Frogophony is a Polish-language music learning project for ear training, music theory and general music knowledge. The long-term goal is a structured learning path from Polish music school to music academy entrance preparation.

[Open Frogophony](https://midasracing.github.io/frogophony/)

## Current demo

Three example lesson sets, practice mode, feedback, local XP and progress. No account is needed. Audio uses synthesized Web Audio tones; neither the demo content nor the music engine is an approved course.

Kumka, the pink toad mascot, uses [native Rive animation](design/kumka-animation/) with a static fallback.

## Development

Requires Node.js 22.13+ and npm.

```bash
git clone https://github.com/midasracing/frogophony.git
cd frogophony
npm install
npm run dev
```

```bash
npm run check:structure
npm run check:research
npm run build
npm run preview
```

React, TypeScript, Vite and Rive. Static deployment from main via GitHub Pages.

## Repository

| Directory | Purpose |
| --- | --- |
| [src/](src/) | Application and demo lessons |
| [public/](public/) | Runtime assets |
| [database/](database/) | Canonical knowledge, sources, curriculum and expected test cases |
| [docs/](docs/) | Architecture, reference notes, policies and archived reports |
| [design/](design/) | Editable mascot sources and design references |
| [scripts/](scripts/) | Validation tools |

See [architecture](docs/architecture.md), [database guide](database/README.md) and [source policy](docs/research/source-policy.md). Educational content must be traceable to source-checked claims. Private textbook PDFs are not committed. Metadata checks are not independent musical review or engine tests.

## Contributions and license

Read [CONTRIBUTING.md](CONTRIBUTING.md). Original application code is licensed under the [MIT License](LICENSE). Kumka artwork and derivative visual assets are excluded from the MIT grant; see [ASSETS.md](ASSETS.md). Third-party materials retain their own terms.
