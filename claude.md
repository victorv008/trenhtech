# Project Constitution — Trenh Tech AB

## 1. North Star
Pixel-perfekt landing page för Trenh Tech AB (IT-konsultbolag, Varberg).
Exakt kopia av Figma-designen i `Landing page/Frame 76.png`.

## 2. Architectural Invariants
- **Tech Stack:** Angular 19+ med TypeScript och SCSS
- **Content Source:** All text från `gemini.md` JSON-schema → `content.json`
- **Fonts:** Helvetica (body/logo) + Almarena (titlar)
- **Colors:** #DFE9ED, #A0B4BC, #65828D, #233A4A, #1F2429
- **No APIs:** Ren statisk sida, inga backend-anrop

## 3. Behavioral Rules
- Designen är lag — pixelperfekt matchning med Figma
- gemini.md är Source of Truth för all textdata
- Inga ändringar i content utan att uppdatera gemini.md först
- Platshållarbilder används tills riktiga foton levereras

## 4. File References
- `gemini.md` — Data schema (The Law)
- `task_plan.md` — Phases & checklists
- `findings.md` — Research & constraints
- `progress.md` — Work log
- `Design/extracted/` — Alla design-assets från Figma
- `Landing page/Frame 76.png` — Referensbild (facit)
