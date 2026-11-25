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

## Runda 4 — weryfikacja u źródła (po 908c8a6)
- Przełamano limit tekstu PDF przez odczyt obrazów oficjalnych stron 199–215, 217–221, 223–226. Zidentyfikowano dziewięć tabel przedmiotowych i 73 autorskich grup kompetencji ze stronami. Nie jest to atomizacja każdego podpunktu i nie pokrywa wszystkich profili szkoły.
- Poprawiono umiejscowienie formy sonatowej (już I stopień), uwzględniono wymagania rytmiki, folklor, życie muzyczne, edycję nut, polirytmię, polimetrię, materiał dźwiękowy, akustykę, muzykę etniczną i rozrywkową, fonografię i prawo autorskie. Rozróżniono dyktanda 1–2 głosowe w podstawie II od wybranych egzaminów akademickich.
- Dodano ADM-26-LAW i źródła katalogowe, ponownie potwierdzono wybrane definicje OMT i MusicXML. Rejestr: 111 rekordów, nie tyle pełnych publikacji. Lista verified-claims: 11 twierdzeń ze ścisłym zakresem, żadne nie zatwierdzone do publikacji przez pedagoga.
- AGENTS.md, polityka źródłowa, manifest i checker metadanych. W narzędziu wykonano tę samą funkcję walidującą na danych oraz 3 kontrolne błędne manifesty; wszystkie odrzucone. Nie uruchomiono jeszcze pliku przez Node ani workflow po commicie; nie oznaczać tego jako test muzyczny. W repo nie ma zatwierdzonych lekcji w manifestie; istniejące demo pozostaje demonstracją.
- Ograniczenia: nie odczytano wszystkich stron i specjalności, nie zamknięto literatury muzycznej i wszystkich planów ramowych, nie powtórzono odczytu wszystkich 98 wcześniejszych rekordów; wybrane OMT 403, wybrane załączniki szkolne timeout, pełne podręczniki i recenzent nadal brak. Bez zmian runtime. Nie potwierdzać pełnego pokrycia lub dokładnego czasu pracy.

### Runda 4 — kontrola twierdzeń
- Dodano 7 twierdzeń o gamach molowych, MusicXML i identyfikacji dzieła Mozarta. 18 source-checked, 113 rekordów źródeł. Checker wymaga direct-read; nie weryfikuje prawdziwości deklaracji.
- Wykryto błąd KV26 w ZPE-MOLL; katalog Henle HN 165 potwierdza KV 265 (300e). Nie rozszerzać potwierdzenia odmiany doryckiej na kierunek w dół bez źródła.
- Workflow Research provenance commita f081510: success (https://github.com/midasracing/frogphony/actions/runs/45501012975), Pages także success. To walidacja metadanych i build, nie test muzyczny.

## Runda 5 — rozwój rejestru twierdzeń po 9b2f378
- Bezpośrednio odczytano wskazane fragmenty pięciu polskich materiałów ZPE i pięciu sekcji podręcznika University of Puget Sound. OMT2-METER ponownie 403, użyto alternatywy UPS-METER. Wykryto niepoprawny opis dominanty i klucza w ZPE, oraz rozbieżność konwencji metrycznych. Zob. conventions.md.
- Dodano 10 rekordów źródeł, 17 twierdzeń i 9 przypadków oczekiwanych (nie testów runtime). Sprawdzono unikalność ID i istnienie powiązań claim–source–fixture. Nie odczytano ponownie wszystkich historycznych źródeł ani brakujących podręczników. Nie przeprowadzono recenzji pedagogicznej.

### Runda 5 — kontrola luk i metadanych
- 26 z 73 grup ma częściowe wsparcie, 47 nie ma powiązań. Żadna nie jest kompletna. H09/H10 uzupełniono o postać zasadniczą.
- Zablokowano zatwierdzenia bez rzeczywistego rejestru recenzji; sprawdzono zakresy stron, lokalizatory, odwołania i kompletność mapy. Funkcję walidującą uruchomiono na danych i 7 negatywnych przypadkach, wszystkie negatywne odrzucone. To test metadanych, nie silnika muzycznego. Bez zmian runtime. Wynik Actions tego commita do potwierdzenia.

## Polska biblioteka referencyjna — kontynuacja rundy 5
Dodano 19 rekordów, w tym Kawiorski (leksykon 2026 i dwa słowniki), PWN, PWM, polskie bibliografie i metodykę CEA. Potwierdzono ograniczony dostęp do trzech publikacji Kawiorskiego bezpośrednio w rekordach UJK; bez lektury treści. CEA udostępnia dwa publiczne PDF-y 114 i 184 strony; odczytano wybrane fragmenty pierwszego i spis drugiego, screenshot drugiego timeout. Muzykoteka 502, PWM 403, portal NIMiT timeout — statusy fragmentaryczne, nie certyfikować haseł. Nie kopiowano publikacji do repo. Dodano politykę pierwszeństwa polskich źródeł i indeks biblioteki. Nie dodano nowych twierdzeń muzycznych ani zmian runtime.

## Kontynuacja — audyt dostępności polskich kompendiów
Ponownie otwarto obydwa PDF CEA; odczytano wskazane w reading-queue.md fragmenty tekstu i obrazy stron 39, 98, 131, obraz s.30 timeout. Potwierdzono Jacek Targosz (PWM i bibliografie akademickie), poprawiono błędne imię w polskiej bibliotece. ABC UW udostępnia rekord i spis treści Gwizdalanki cz.2, nie uzyskano pełnej treści. Ponownie sprawdzono rekordy UJK, dostęp do słowników ograniczony. Zapisano kolejkę legalnych egzemplarzy od użytkownika. Nie odczytano wszystkich wcześniejszych źródeł ani całych PDF; nie dodawano twierdzeń do verified-claims bez odrębnego audytu. Bez zmian runtime.

## Wesołowski — link użytkownika
Odczytano fragmenty warstwy tekstowej WES-1986-TEXT. Dodano osiem twierdzeń i cztery potwierdzenia istniejących; uzupełniono powiązania. Utrzymano blokadę wydawniczą, nie testowano silników. Nie pobrano kopii książki ani nie zweryfikowano nut w obrazie. Pozostałe strony oczekują lektury.

## Wesołowski — drugi link użytkownika
WES-1986-ALT: odczyt wybranych fragmentów HTML s.70–75 i 133–137. Dodano pięć twierdzeń, poprawiono przypisanie terminologii równoimienne, uzupełniono mapę. To druga kopia tego samego wydania, nie niezależny dowód; brak odczytu grafiki i pełnego PDF, nie kopiowano książki. Bez zmian runtime.

## Sikorski — link użytkownika
SIK-HAR-SCRIBD: sprawdzono dostępność strony; 499 stron według metadanych, brak treści książki. Nie dodano twierdzeń merytorycznych i nie oznaczono publikacji jako przeczytanej. Wpisano brakujący egzemplarz do kolejki lektury. Bez zmian runtime.

## Sikorski — alternatywny link
Bezpośrednie otwarcie SIK-HAR-ILIDE zakończyło się błędem dostępu. Zapisano ograniczenie, bez dodawania twierdzeń i bez zmian runtime.

## Sikorski — pierwsza lektura dostarczonego PDF (2026-11-25)
Plik otwarto programowo (499 stron) oraz sprawdzono obrazy pierwszych rozdziałów, granicę tomów i wybrane dalsze strony. Wykryto duplikat 9–10 i zniekształcenie renderowania dalszych stron; ekstrakcja osadzonych JPEG pozwala czytać tekst. Dodano 13 twierdzeń z precyzyjnymi lokalizatorami i 3 dodatkowe potwierdzenia istniejących. W szczególności odróżniono pozycję, postać, układ, ruchy i ograniczenia ścisłego łączenia akordów od swobodnego. Część II tylko identyfikacja i przegląd struktury, nie przeczytana. Bez kopii podręcznika, bez zmian runtime ani zatwierdzenia pedagogicznego.

## Targosz — pierwsza lektura i porównanie (2026-11-25)
Otrzymano 387-stronicowy PDF wyd. II, PWM 2004. Odczytano wskazane fragmenty, porównano z Sikorskim i dodano 23 nowych twierdzeń oraz 7 dodatkowych odwołań. Zapisano różnice metodyczne w harmony-profiles.md. Nie ukończono lektury ani nie przeprowadzono recenzji lub testów silników. Nie kopiowano PDF. Zakres pokrycia jest częściowy; nie zwiększać statusów releaseApproved.

## Chomiński i Wilkowska-Chomińska — pierwsza lektura tomu I (2026-11-25)
Sprawdzono plik (573 strony), metadane wydania z kart tytułowych, spis i wybrane fragmenty teorii i form. Dodano 14 ograniczonych do źródła twierdzeń oraz powiązania z kompetencjami. Numerację drukowaną odróżniono od PDF. Rozróżniono formę, gatunek, technikę i strukturę; zaznaczono, że okres, fuga i rondo nie redukują się do pojedynczego schematu. Nie analizowano nut ani całego tomu; bez recenzji pedagogicznej, bez zmian runtime, bez publikowania książki.
