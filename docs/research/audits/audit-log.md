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

## Wesołowski — dostarczony PDF, kontrola źródła (2026-11-25)
Sprawdzono plik i wybrane fragmenty/obrazy. Dodano 20 twierdzeń oraz 21 odwołań do wcześniejszych twierdzeń. Poprawiono PL-KEY-SAME: autor używa także jednoimienna w przedmowie. Rozróżniono chromatyzację regularną i nieregularną, rytmiczne ratio, kontekst artykulacji i założenia akustyczne. Nie przeanalizowano wszystkich stron, przykładów ani wyjątków; bez recenzji i zmian runtime. Nie kopiowano publikacji. 

## Wójcik — pierwsza lektura Nauki o muzyce (2026-11-25)
Sprawdzono 104-stronicowy PDF, kartę tytułową, spis, tekst i wybrane obrazy. Dodano 28 twierdzeń z książki, dwa twierdzenia korygujące (Mozarteum i PW), sześć dodatkowych odwołań do wcześniejszych twierdzeń. Uwaga na klasyfikacje szkolne i historyczne uogólnienia. Nie odczytano całej książki, nie analizowano kompletnych przykładów muzycznych; bez recenzji pedagogicznej i zmian runtime. Nie kopiowano PDF.

## Dzielska–Kaszycki — przegląd metodyki (2026-11-25)
Potwierdzono 92 strony i brak warstwy tekstowej, kolofon w powiększeniu. Odczytano wybrane obrazy wszystkich trzech działów oraz spis. Dodano 24 twierdzenia dotyczące metodyki i powiązania, nie transkrypcje ćwiczeń. Zidentyfikowano lokalną konwencję znaków chromatycznych s.60, odrębne zadania pamięciowe, niejednoznaczność akordów s.82–83 i ograniczenia automatycznej oceny. Nie zweryfikowano wszystkich nut, nie testowano silników ani skuteczności dydaktycznej; bez zmian runtime.

## Wójcik ABC — pierwsza lektura (2026-11-25)
Zweryfikowano 96 stron PDF bez tekstu, odczytano obrazy wybranych stron, w tym formy wokalne i cykliczne. Dodano 30 twierdzeń oraz 13 powiązań źródłowych. Dwa podręczniki autorki i Chomiński nie są niezależnymi tradycjami. Nie ustalono roku/ISBN z powodu brakujących kart, nie przeanalizowano każdego przykładu, bez recenzji ani zmian runtime. Wpisy nie oznaczają pełnego pokrycia kompetencji.

## Nauka harmonii Wesołowskiego — pierwsza lektura (2026-11-25)
Potwierdzono metadane i 104 strony skanu; odczytano spis, przedmowę i wybrane rozkładówki 24,28,42,62,68–69. Dodano 13 twierdzeń i 5 powiązań do wcześniejszych. Udokumentowano wyjątki rozwiązania D7, odrębność zdwojenia orkiestrowego, nutę stałą, historyczne cyfrowanie i klasyfikację modulacji. Bez pełnej lektury, recenzji i testów muzycznych; bez zmian runtime.

## Drobner — pierwsza lektura (2026-11-25)
Potwierdzono rzeczywiste 259 stron w pliku i rozbieżność z podglądem ograniczonym do 150. Odczyt wybranych stron obrazowych, w tym trąbki poza limitem podglądu. Dodano 26 twierdzeń, 3 potwierdzenia i 11 oczekiwanych przypadków. Zapisano ograniczenia historyczne i fizyczne, w szczególności dB a dynamika, klasyfikacja instrumentów, strojenie i transpozycja. Brak pełnej lektury, recenzji, testów audio i zmian runtime. Nie publikowano skanu.

## Archiwum i rejestr lektury
Dziewięć oryginałów przeniesiono do folderu biblioteki użytkownika, nie do publicznego repo. Przygotowano rejestr pełnych partii, indeks wiedzy i politykę prywatnego archiwum. Dalszy odczyt Wesołowskiego s.85–91,112–118,122–125; 11 nowych twierdzeń. Żadnej książki nie oznaczono jako całkowicie przeczytanej. Prywatne archiwum zewnętrzne nie jest jeszcze gotowe. Bez zmian runtime.

## Porządkowanie projektu i archiwum zewnętrzne
Przeniesiono kopie dziewięciu książek do nieudostępnionego folderu Google Drive; Sikorski w czterech częściach. Zweryfikowano listę i uprawnienia folderu, nie pełną zgodność bajtową każdego pliku. Oddzielono kod interfejsu, demonstracyjne dane, odtwarzacz, logikę postępów i maskotkę. Nie dodawano treści kursu w tym etapie.

## Porządkowanie dokumentacji
Przeniesiono trzy raporty audytowe do audits/. Dane kanoniczne, identyfikatory twierdzeń, źródła, kolejka lektury i przypadki wzorcowe zachowują dotychczasowe ścieżki i zawartość. Historyczne zapisy nie są treścią kursu. Nie usuwano dowodów ani nie zmieniano statusów zatwierdzenia.

## Lektura ciągła Wesołowskiego 1–40
Odczyt z prywatnego Dysku Google, kolejno s.1–40, tekst i dostępne obrazy. Dodano 26 twierdzeń oraz 10 własnych przypadków wzorcowych. S.32 przykład 21:4 ma niekonsekwentne punkty siatki; poprawny model zerowy to 0,4,...,80 i 0,21,42,63 na 84 częściach. Nie uogólniono historycznego opisu praktyki barokowej, akustyki ani zasad składu nutowego. Odczyt Drive raportuje 178 stron zamiast 179 oryginału, wymaga uzgodnienia; brak części obrazów, nie zamknięto pełnej lektury. Kolejna partia 41–50. Przypadki nie są testami silnika.

## Lektura ciągła Wesołowskiego 41–60
Kontynuacja bez pomijania rozdziałów. 10 twierdzeń i 4 przypadki wzorcowe; reguły grupowania szkolnego odróżniono od pisowni plastycznej i zapisu wokalnego. Zapisano odrębność czasu i hierarchii akcentów. Obrazy przejrzano, nie przeprowadzono pełnego rozwiązania wszystkich zadań. Następne strony 61–70. Nie zmieniono statusów wydawniczych.

## Lektura ciągła Wesołowskiego 61–80
15 twierdzeń i 4 przypadki wzorcowe. Rozróżniono akcent rytmiczny i metryczny, różne profile grupowania, tempo i metrum, konwencje polimetrii, rubato i dynamikę. Nie powielono historycznych uogólnień o średniowieczu i historii dyrygowania ani niespójnego opisu podziału ruchu na 12 w s.79. Kolejna partia 81–90. Nie rozwiązano jeszcze wszystkich zadań nutowych.

## Lektura ciągła Wesołowskiego 81–178
55 twierdzeń, 12 przypadków wzorcowych. Przeszedł cały zakres rozdziałów dostępny w ekstrakcji Drive, indeks tylko jako pomoc. Wykryte problemy: s.89 przypis niespójny z tabelą tercji, s.85 niespójny przykład literowy, s.133 stosunek kwintowy sześciu wspólnych stopni ograniczyć do naturalnych skal, s.169 nie przyjmować fortepianu jako standardowej obsady kwintetu dętego; historyczne uogólnienia o skalach, ornamentach i harmonii wymagają dalszych źródeł. Nie przepisywano ćwiczeń ani repertuaru. Nie twierdzić, że wykonano pełny audyt wszystkich ilustracji, przykładów, zadań lub dziewięciu książek. Rozbieżność 178/179 pozostaje. Przypadki WR19–30 są wartościami oczekiwanymi, nie dowodem wykonania testów silnika.

## Dzielska i Kaszycki — ciągła lektura 1–92
Przejrzano wszystkie obrazy stron dostępnych w pliku. Dodano 34 twierdzeń i 15 roboczych schematów generatorów. Zapisano różnice konwencji notacyjnych, wieloznaczność rozpoznawania gam/akordów, osobne strumienie rytmiczne, izolowanie bodźców, pamięć i improwizację. Nie skopiowano przykładów. Nie rozwiązano każdego ćwiczenia nuta po nucie; nie nadano statusu pełnego audytu ani zgody wydawniczej. Schematy nie są jeszcze implementacją.

## Targosz — lektura ciągła s.1–83
34 nowych twierdzeń i 7 oryginalnych przypadków wzorcowych. Wprowadzenie oraz triada w postaci zasadniczej, metodyka harmonizacji, warianty połączeń, niepełność, odmiany skal. Oddzielono reguły pierwszego etapu (np. D–S) od późniejszych dopuszczeń (molowa D–S), zależności funkcyjne od akordów oraz sztywne ograniczenia szkolne od preferencji i praktyki repertuarowej. Dostępne obrazy s.23–26 i 34–80; nie rozwiązano wszystkich zadań ani nie sprawdzono każdej nuty. Dalsza lektura od s.84. Nie nadano zgody wydawniczej. Przypadki wzorcowe nie są wykonanymi testami silnika.

## Targosz — lektura ciągła rozdziału III, s. 84–121
24 nowe twierdzenia, 4 autorskie przypadki wzorcowe. Rozróżniono metrykę względną, opóźnienia przygotowane i nieprzygotowane, pośrednie rozwiązania, wyjątki dla D 6–5/4–3, dźwięki zamienne i oderwane oraz figurację. Przejrzano obrazy wszystkich stron rozdziału, bez deklarowania pełnego rozwiązania zadań. Nadal brak zatwierdzenia nauczycielskiego i testów silnika.

## Targosz — lektura ciągła rozdziału IV, s. 122–146
20 nowych twierdzeń i 5 autorskich przypadków wzorcowych: pierwszy i drugi przewrót, odstępy, podwojenia, prowadzenie basu, ukryte kwinty i oktawy, rola metrum i nuty pedałowej oraz interpretacyjna wieloznaczność struktur 6/4. Przejrzano tekst i obrazy wszystkich stron, bez deklarowania rozwiązania wszystkich zadań. Wzorce nie stanowią wykonanych testów silnika.

## Targosz — lektura ciągła s. 147–170 (część rozdziału V)
14 twierdzeń i 4 autorskie przypadki wzorcowe. D7 pełna, niepełna, bez prymy, przewroty i ścisłe rozwiązania, swobodne rozwiązanie septymy, subdominanta z sekstą i jej wieloznaczność. Obrazy tylko s. 147–150, dalsze przykłady nutowe wymagają kontroli. Na s. 155–157 odczyt tekstu jest niejednoznaczny w zakresie położenia tercji i septymy; nie przyjęto automatycznej reguły. Wzorce nie są wynikami testów.

### Kontrola oryginału Targosza s. 155–157
Na s. 156 akapit przed przykładem 184 podaje tercję pod septymą, lecz ramka na tej samej stronie i s. 155 podają septymę pod tercją. Przykłady 183–184 potwierdzają tę drugą wersję. To sprzeczność w druku, nie artefakt OCR. Zachowano oba odczyty w uwagach, przyjęto roboczo regułę ramkową i wydzielono wyjątek przykładu 185; bez zatwierdzenia wydawniczego.

## Targosz — ciągła lektura 171–200
28 nowych twierdzeń i 11 autorskich przypadków oczekiwanych. Rozróżniono D9 z prymą i bez prymy, warunki położenia nony, różne prowadzenie kwinty, interpretację II i VI stopnia, akord neapolitański i rozwiązanie zwodnicze. Nie przenosimy bezkrytycznie ograniczeń szkolnego profilu na inne style. Hipotezy historycznej genezy akordu neapolitańskiego z przypisu s.194 nie uznajemy za potwierdzony fakt. Reguły s.193 ograniczono kontekstem i wyjątkami s.192. Sprawdzono tekst i render każdej strony w zakresie, nie przeprowadzono pełnej transkrypcji ani rozwiązania zadań. Kontrola odwołań i statusów przed zapisem; testy silnika i recenzja niezależna nadal niewykonane.

## Targosz — ciągła lektura 201–220
20 twierdzeń, 8 przypadków oczekiwanych. Oddzielono funkcjonalne i strukturalne prymy, III stopień w odmianach moll, dominantę pozorną od rzeczywistej oraz zmianę funkcji przy powtórzeniu materiału. Nie zastosowano bezwarunkowego skrótu dydaktycznego s.218 (każdy inny przypadek VI jako dominanta pozorna), bo s.195–201 podaje inne funkcje VI. S.208 zawiera sformułowanie o VI w funkcji dominantowej, choć przykłady rozpatrują funkcje zastępcze i dalszy rozdział dopiero wprowadza użycie samodzielne; nie przeniesiono tego zdania jako ogólnej reguły. Brak analizy wszystkich nut i niezależnej recenzji; brak wykonanych testów silnika.

## Targosz — ciągła lektura 221–240
19 nowych twierdzeń i 7 autorskich przypadków oczekiwanych. Dodano elipsę, funkcję subdominanty pozornej, kadencję eolską, rozpoznanie podstawy przy dodawaniu składników, dwuznaczność funkcyjną i progresję tonalną. Nie potraktowano każdej diatonicznej relacji kwintowej jako czystej kwinty. Ograniczono ogólne twierdzenie s.239 o modulowaniu każdego członu do omawianego modelu; odrzucono automatyczne przypisywanie funkcji dźwiękom chromatycznym. Tekst i montaż renderów obejmują 20 stron. Tablice 228–230, szczegółowe nuty i wszystkie zadania nadal wymagają kontroli. Drive raportuje 382 strony wobec 387 oryginału; do uzgodnienia. Oczekiwane przykłady są autorskie i nie stanowią przeprowadzonych testów silnika. W trakcie pracy potwierdzono zmianę nazwy repozytorium na midasracing/frogophony przy zachowaniu ID i HEAD.

## Targosz — ciągła lektura 241–260
19 nowych twierdzeń, 10 autorskich przypadków oczekiwanych i roboczy zbiór wzorców basu cyfrowanego. Oddzielono interwały względem basu od członów akordu i analizy funkcyjnej, skróty historyczne od szkolnych, cyfry równoczesne od następujących po sobie oraz interwały złożone od prostych. Sprawdzono wzrokowo nietypowe cyfrowanie D9 na s.249–250. Strona 259 zawiera zadania nutowe pominięte w ekstrakcji tekstowej; obejrzano oryginał. Siedem przykładów nominalnych interwałów diatonicznych sprawdzono obliczeniem indeksów liter, nie testem silnika. Nie przekształcono uwagi s.256 o kwintach równoległych w ogólne zwolnienie z reguł. Zbiór jest niezatwierdzoną specyfikacją, nie parserem ani gotowym kursem. Wszystkie szczegółowe realizacje nutowe wymagają dalszej kontroli.

## Targosz — zakończenie pierwszej lektury (387 stron)
75 nowych twierdzeń, 15 autorskich przypadków wzorcowych, zakresy [[261,387]]. Zweryfikowano kompletność rejestru (387 różnych numerów). Odczyt dostępnego tekstu i przegląd obrazów 241–387 oryginału; przestawione pary 332–333, 346–347, 364–365 zapisano osobno. Nie pomylono ukończenia pierwszej lektury z pełną analizą przykładów. Oddzielono profil szkolny od repertuarowego, rzeczywistą alterację od pozornej, wychylenie od modulacji, pisownię od funkcji, symetrię klas wysokości od układu, interpretacje analityczne od ścisłych reguł. Wykryto niespójność opisu granic faz Preludium C-dur na s.371, nie przeniesiono numeracji do ćwiczeń. Historyczne twierdzenia i odczyty tabel wymagają kontroli. Zob. targosz-first-pass.json. Wszystkie nowe wpisy niezatwierdzone wydawniczo; przypadki nie są wykonanymi testami silnika.

Kontrola końcowa przypadków TN48–49: jawnie rozdzielono prymę funkcyjną przed alteracją od prymy odczytanej w alternatywnej strukturze; dla D-dur celem dominanty wtrąconej E7 z obniżoną kwintą jest akord A (D funkcyjna), nie wysokość D. Wynik oczekiwany, bez uruchomienia silnika.

## Sikorski — ciągła lektura PDF 1–100
47 twierdzeń i 13 autorskich przypadków oczekiwanych. Odczyt wszystkich kolejnych obrazów, w tym duplikatu druk. s.20 (PDF 9–10); zniekształcony rendering od 71 zastąpiono bezpośrednim odczytem JPEG. Zapisano warunki ścisłych i swobodnych połączeń, wyjątek oktawowego przeniesienia górnych głosów przy powtórzeniu, zasady przewrotów, kadencje, dominantę 6/4 i odmiany skal. Nie przyjęto wartościujących wyjaśnień konsonansu, historii skal ani interpretacji akustycznych jako niezależnie potwierdzonych faktów. Odręcznych dopisków nie traktowano jako autorskich odpowiedzi. Nie rozwiązywano wszystkich zadań, nie sprawdzano każdej nuty. Brak recenzji i testów silnika.
