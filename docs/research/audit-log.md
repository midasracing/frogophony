# Runda 2 — raport audytu
2026-11-24. Zakres: poprzedni blueprint, regulacje, szkoły, rekrutacja, bibliografie, silniki, licencje, reguły i testy. Nie jest to formalny audyt certyfikowany.

| ID | Ustalenie | Decyzja |
|---|---|---|
| A01 | Ramowy plan 2025 ma nowelizację 2026 | dodać PLAN-25/26, oddzielić plan i podstawę |
| A02 | 2025/852 wprowadza m.in. fortepianmistrzostwo | nie traktować jako globalnej zmiany teorii |
| A03 | SM/OSM i cykle różne | osobne profile, żadnego uniwersalnego rozkładu klas |
| A04 | I stopień już obejmuje D7, interwały charakterystyczne, moll dorycką, transpozycję, dwugłos | przenieść na I stopień, nie dopiero II; D7 przewroty jako rozszerzenie lub dalszy etap |
| A05 | Program powinien oddzielać przedmioty szkolne | UI trzy ścieżki, metadane siedmiu przedmiotów II st. |
| A06 | Kraków: strona tylko dla wymienionych specjalności | profil i rok, nie wspólny egzamin |
| A07 | Łódź teoria ma improwizację i harmonię fortepianową | dodać trening i ocenę przez nauczyciela |
| A08 | MusicXML nie jest formalną rekomendacją W3C | poprawne oznaczenie raportu community group |
| A09 | OSMD używa VexFlow | niezależna walidacja Verovio/LilyPond |
| A10 | VexFlow/OSMD to nie pełne edytory | kontroler edycji i testy semantyki |
| A11 | MIDI i półtony nie rozstrzygają enharmonii | zachować pitch spelling i kontekst, odrzucić niejednoznaczne pytania |
| A12 | Polski moll dorycki i modus dorycki różne | oddzielne profile skal, sprawdzić terminologię podręcznikową |
| A13 | Pitchy clarity nie jest skalibrowanym confidence | abstencja, kalibracja i testy |
| A14 | Licencja silnika nie obejmuje sampli | osobne asset manifesty, Salamander i VCSL jako kandydaci |
| A15 | Kompendium musi obejmować więcej niż quizy | ruch, improwizacja, dyktanda korekcyjne, pamięć, 2 plany, źródła, muzyka regionalna |
| A16 | Materiał nie ma recenzji pedagoga ani benchmarku | blokada zatwierdzenia, jawne statusy |
| A17 | Poprzedni rysunek w czacie nie był renderem z silnika | nie używać ręcznie rysowanych nut jako materiału produkcyjnego |
| A18 | CEA ma aktualne badania 2026/27 | dodać benchmark i odróżnić arkusze nadzoru od zadań |
 
## Luki do zamknięcia
Pełny urzędowy PDF: dostępna ekstrakcja kończy się na s. 200, dalsza część wymaga odczytu. Niektóre załączniki Opola przekroczyły timeout (status w sources.json). Brak pełnego mapowania II stopnia i pozostałych specjalności. Brak ponownej weryfikacji każdego starego URL, pełnych wydań podręczników, konkretnych stron i licencji materiałów; referencje historyczne oznaczone. Nie przeczytano wszystkich książek. Nie zweryfikowano na żywo działania silników, nie przeprowadzono recenzji pedagogicznej ani buildu aplikacji; fixtures to specyfikacje, nie wykonane testy. W tej rundzie nie zmieniano runtime ani wyglądu.

## Dogrywka kontrolna
Potwierdzono AMB-26, indeks uchwały UMFC-26-RES, ZPE-MOLL i CZ-26. Dodano dwa przypadki polskiej odmiany doryckiej. Sprawdzono parsowanie dwóch plików JSON, unikalność identyfikatorów oraz niezależnym prostym przeliczeniem 11 przypadków wysokości, interwałów i transpozycji (część wartości liczbowych, nie pełny grading ani test silnika). Pozostałe fixture to nadal oczekiwania do wykonania w CI.

## Runda 3 — kontynuacja 2405af6
- Ponownie zweryfikowano regulacje (w tym rozróżnienie tekstu głównego, załączników i przejścia między podstawami), OP-HARM i LUB-26; odróżniono OSM I (szerszy zakres) od SM I. Uzupełniono źródła szkolne i OMT2 z konkretnymi rozdziałami.
- Dodano advanced-curriculum.md (18 modułów harmonii, 10 modułów słuchu, teoria i profil jazzowy), notation-contract.md i repertoire-reference.md; doprecyzowano poprzednią bazę bez usuwania historii.
- Dodano 32 autorskie fixtures. JSON poprawne, ID unikalne. Niezależne proste obliczenia sprawdziły 47 z 64 przypadków (zakres: {"pitch":8,"interval":11,"scale":10,"chord":4,"rhythm":10,"transposition":4}). To kontrola oczekiwań liczbowych/symbolicznych, nie test bibliotek lub implementacji, ani potwierdzenie wszystkich pól. Pozostałe wymagają osobnych testów i recenzji.
- Nadal nie ma pełnego odczytu podstawy SM II. Próby PDF i obrazu stron kończyły się timeoutem, OP-SIGHT/THEORY/FORM ponownie niedostępne. Rozdziały OMT2 w większości sprawdzone fragmentarycznie; brak pełnego przeczytania polskich podręczników. Bez deklaracji pełnego pokrycia, bez zmian runtime. 

### Runda 3 — bibliografia i kontrola końcowa
Zweryfikowano wykazy szkolne oraz opisy wydawców Wesołowskiego, Sikorskiego i Wacholc. Skorygowano ryzyko przeniesienia błędnych inicjałów autorów z wykazów szkolnych; pełne teksty książek pozostają niedostępne w tej rundzie. Dodano bibliography-audit.md, zasoby NIFC oraz Arkana Melomana jako referencję polskojęzycznej metodyki historii. Wyszukiwanie PWM częściowo ograniczone robots.txt, stąd statusy fragmentaryczne. Nie oznaczano książek jako przeczytanych. Rejestr końcowy zawiera 98 rekordów źródłowych (w tym różne rozdziały i warianty dokumentów, nie 98 odrębnych podręczników).