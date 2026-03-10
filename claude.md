# Project Constitution (Trenh Tech AB)

## 1. Målsättning (North Star)
Att skapa en modern, professionell och stilren landningssida för det nystartade IT-konsultbolaget Trenh Tech AB. Sidan ska utstråla kompetens och modernitet, inspirerad av världens och Sveriges främsta techkonsultbolag.

## 2. Arkitektoniska Invarianter
- **Frontend-Techstack:** HTML, CSS (Vanilla eller CSS-variabler för temahantering), JavaScript (ES6+).
- **Hosting:** GitHub Pages eller lokal server för utveckling/granskning, i väntan på produktionsmiljö.
- **Responsivitet:** Mobile-first approach. Sidan måste se perfekt ut på alla skärmstorlekar.

## 3. Beteenderegler (Behavioral Rules)
- **Tonläge:** Professionellt, förtroendeingivande, innovativt och tydligt.
- **Designspråk:** Rent, "minimalistiskt men kraftfullt" (ample whitespace, tydlig typografi, subtila och moderna animationer).
- **Data-First:** Inga ändringar i logik görs innan `gemini.md` har uppdaterats vid behov.

## 4. Datakällor (Source of Truth)
- All statisk data (tjänster, företagsinfo) ligger i `gemini.md` och kommer att implementeras i sidans struktur (ev. via JSON/JS).

## 5. Leverans (Delivery Payload)
Ett fullt fungerande GitHub-repository med all kod, granskad via en lokal utvecklingsserver innan eventuell publicering.
