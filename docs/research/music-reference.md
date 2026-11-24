# Kompendium reguł muzycznych — materiał autorski do weryfikacji
Nie jest podręcznikiem w całości; reguły robocze dla autorów lekcji i implementacji. Źródła bazowe: LAW-23, OP-I6, OP-II, OP-HARM, OMT, bibliografie BOOK-GOSTYN i BOOK-26. Przed wydaniem konkretnej lekcji wymagany lokalizator rozdziału/strony i recenzent. OMT stosuje inną terminologię od polskiej, więc polskie nazwy i funkcje mają osobne reguły.

## 1. Wysokość i nazewnictwo
- Wewnętrzne A–G, pole alter w półtonach i octave (naukowa numeracja); nie przechowywać polskiego B jako wewnętrznego B naturalnego. Polski H = B natural, B = B-flat; Fis = F sharp, Ges = G-flat; Es, As; podwójne krzyżyki i bemole w osobnych polach.
- c1 = C4 = MIDI 60; a1 = A4 = MIDI 69. Dla 12-TET f = Aref * 2^((midi-69)/12). Aref=440 Hz tylko domyślnie; 442 Hz i stroje historyczne odrębnie. Centy = 1200 log2(f_measured/f_target). Interwał muzyczny zależy także od pisowni i kontekstu. A4 w nazwie angielskiej nie oznacza oktawy czterokreślnej.
- Enharmonia w 12-TET: C–Dis i C–Es są odpowiednio sekundą zwiększoną i tercją małą, po 3 półtony. Nie da się ich odróżnić na podstawie izolowanego odsłuchu fortepianu. Nie generować obu jako konkurencyjnych opcji bez kontekstu. To samo dla kwarty zwiększonej/kwinty zmniejszonej, Cis/Des itd.
- Przy transpozycji rozróżniać zapis i dźwięk rzeczywisty: trąbka B (B-flat), zapisane C4 brzmi B-flat3. F na rogu: zapisane C4 brzmi F3 w zwykłej konwencji. Nie zakładać, że każdy instrument danego typu ma identyczny strój.
- Klucz G: G4 na drugiej linii, F basowy: F3 na czwartej, C altowy: C4 na trzeciej, tenorowy C4 na czwartej. Liczyć linie od dołu. Przenośnik oktawowy rozdziela notację i rzeczywiste brzmienie.
- Znaki przykluczowe i znaki chromatyczne w obrębie taktu wymagają kontekstu oktawy, pięciolinii, głosów i wiązań. W przypadku złożonego wielogłosu stosować zadeklarowaną konwencję edytorską i ostrzegawcze znaki, nie uproszczoną globalną mapę.

## 2. Interwały
Numer diatoniczny = liczba stopni literowych włącznie. Pryma, kwarta, kwinta, oktawa należą do rodziny czystych; sekundy, tercje, seksty i septymy do wielkich/małych. Zwiększanie/zmniejszanie zależy od rodziny; interwał mały minus półton staje się zmniejszony. W kierunku opadającym nie mylić kolejności nut z rosnącą odległością; w zadaniu o kierunek zachować znak. Przewroty prostych: suma liczb 9, czysty ↔ czysty, wielki ↔ mały, zwiększony ↔ zmniejszony; zakres i sposób odwracania określić dla interwałów złożonych. Charakterystyczne interwały i rozwiązania w tonacji, nie mechaniczne przestawianie półtonów.
 
## 3. Tonalność, skale, akordy
- Dur naturalny: 2 2 1 2 2 2 1. Moll naturalny: 2 1 2 2 1 2 2. Moll harmoniczny: 2 1 2 2 1 3 1. Moll dorycki w polskiej klasycznej nomenklaturze (podwyższone VI i VII względem naturalnego): 2 1 2 2 2 2 1; moll melodyczny w klasycznej konwencji ma w górę te same stopnie, w dół naturalne. Nazewnictwo sprawdzić w konkretnym podręczniku; modus dorycki (podwyższony VI, naturalny VII) jest odrębny. Jazzowy melodic minor to kolejna konwencja. Dur harmoniczny obniża VI.
- W gamie heptatonicznej diatonicznej siedem różnych liter; nie generować jej przez dowolne wybieranie najprostszej nazwy dla każdego MIDI. Znaki przykluczowe nie zastępują znaków odmian harmonicznych.
- Tonacje równoległe: te same znaki przykluczowe, różne toniki (C-dur/a-moll); równoimienne: wspólna tonika (C-dur/c-moll); kwintowe: toniki oddalone o kwintę, w tym samym trybie zwykle różnica jednego znaku. Angielskie relative/parallel mapować ostrożnie.
- Trójdźwięki (od prymy): dur [0,4,7], moll [0,3,7], zmniejszony [0,3,6], zwiększony [0,4,8]. Odległości nie zastępują pisowni tercjowej. Przewroty zależą od najniższego dźwięku, nie kolejności listy. Akord zwiększony i zmniejszony septymowy mają symetrie, więc bez kontekstu mogą mieć niejednoznaczną prymę/postać.
- Dominanta septymowa = funkcja, a nie dowolna struktura [0,4,7,10]. W C-dur G–H–D–F: H zwykle prowadzi do C, F do E; reguły rozwiązań zależą od stylu, położenia, prowadzenia głosów i dalszego ciągu. W a-moll E–Gis–H–D, Gis→A, D→C. Oznaczenia 7, 6/5, 4/3, 2 (lub 4/2 w przyjętej konwencji) zależne od basu. Nie mieszać symboli funkcji i cyfr stopni bez objaśnienia.
- Triada T/S/D w dur naturalnym oraz harmonicznym moll; w moll jako konwencję polskich ćwiczeń określić, czy T/S oznaczać małymi literami. Kadencje: autentyczna, plagalna, półkadencja, zwodnicza; nazewnictwo polskie zależne od podręcznika. Do rozpoznania potrzebny kontekst tonalny i zakończenie frazy.
- Harmonia SATB: rozdzielić zakresy głosów, odległości, krzyżowanie, dublowanie, ruch i dysonanse. Kwinty/oktawy równoległe nie są uniwersalnie zakazane w całej muzyce; ograniczenia dotyczą stylu ćwiczenia. Nie każda bezpośrednia kwinta jest zabroniona. Rozróżniać antyrównoległość, kwinty nierówne, ruch ukryty, głosy skrajne, rozwiązania nieregularne, licencje kompozytorskie. Nie zatwierdzać ćwiczeń otwartych wyłącznie jedną listą MIDI.
- Dźwięki obce: przejściowe, pomocnicze, opóźnienia, wyprzedzenia, appoggiatury, nuty pedałowe — identyfikacja zależy od czasu, metrum, harmonii i ruchu. Modulacja wymaga kontekstu potwierdzającego nową tonację; wychylenie nie jest automatycznie modulacją.
- Kontrapunkt: odmienne reguły dla ścisłego gatunkowego, tonalnego i stylów historycznych; nie stosować jednej gramatyki do każdego materiału.

## 4. Rytm, metrum i zapis
- Model czasu wymierny, np. ćwierćnuta=1; 3/4 i 6/8 mają równy czas przy identycznej jednostce ósemkowej, inną organizację metryczną (3 grupy po 2 vs 2 po 3). BPM musi mieć jawny beatUnit; ćwierćnuta i ćwierćnuta z kropką to różne jednostki.
- Kropka wydłuża o połowę podstawy, druga o ćwierć, itd. Triola 3:2 oznacza trzy wartości w czasie dwóch tej samej wartości. Nie każda grupa trzech nut to triola. Tuplety, zagnieżdżenia i wiązania przechowywać semantycznie, nie zaokrąglać do float ticków.
- Łuk przedłużający łączy czas nut tej samej wysokości, bez powtórnego ataku; legato dotyczy artykulacji. Dwie osobne nuty tej samej wysokości nie są automatycznie wiązaniem.
- Rytm zapisany i wykonany to osobne reprezentacje: swing, rubato, staccato, fermata, ornament, tempo i ekspresja. Nie zmieniać notowanej wartości podczas interpretacji.
- Przedtakt, takty nieregularne, zmiany metrum, repetycje, volta, D.C./D.S./Coda, taktowa pauza, niezależne głosy. Suma wartości w każdym głosie taktu musi pasować do jego ramy, z jawnymi wyjątkami (przedtakt, kadencja bez metrum itp.). Nuty w akordzie nie sumują się szeregowo.
- Synkopa zakłóca oczekiwany rozkład akcentów metrycznych, np. przez przedłużenie dźwięku z pozycji słabej na mocną; nie każda kropka ani każda nuta na słabej części jest synkopą. Uczyć grupowania według pulsu i metrum, nie wyłącznie matematycznej sumy.

## 5. Percepcja i solfeż
- Rozpoznawanie absolutne, relatywne i funkcyjne to odrębne cele. Nie wymagać słuchu absolutnego w zadaniu względnym bez punktu odniesienia.
- Rozdzielić interwały melodyczne w obu kierunkach i harmoniczne, rejestr, tempo, barwy, głośność. Oceniać, czy odpowiedź nie wynika z artefaktu generatora lub znanego dźwięku startowego.
- Dyktanda: pełny zapis, luki, korekta, pamięć; początkowa tonika lub dźwięk, tempo, metrum i plan odsłuchów zgodnie z celem. W trybie treningu dostępne odcinki i podpowiedzi; w egzaminie jawne limity.
- W śpiewie ustalić rejestr, tonikę, tolerancję, tryb śpiewu relatywnego lub absolutnego. Nie karać za oktawę jeśli zadanie dopuszcza transpozycję; nie akceptować jej w zadaniu dokładnej oktawy. Oddzielać pitch, onset, długość, kontur, rytm, intonację. Wibrato i oddech nie są automatycznie błędem. Gdy sygnał nieczytelny, zwrócić brak pomiaru i umożliwić samokontrolę.
- Dwugłos: głos + klawiatura, dwa rytmy lub śpiew z akompaniamentem. Jednokanałowy pitch detector nie ocenia wiarygodnie obu głosów; użyć MIDI/drugiego kontrolera lub recenzji pedagoga. Nie wymagać sprzętu niedostępnego w iOS.

## 6. Historia, formy i literatura
- Rozróżniać gatunek (np. koncert), formę (np. forma sonatowa) i fakturę (np. homofonia). Sonata jako gatunek nie zawsze ma jedną formę, forma sonatowa nie tylko w sonatach. Fuga nie ma zawsze identycznej liczby głosów, ekspozycja i epizody są analizowane w konkretnym utworze.
- Oznaczenie AB/ABA jest hipotezą analizy konkretnego fragmentu; litery nie zastąpią uzasadnienia tematycznego, tonalnego i formalnego. W większych formach uwzględnić motywy, frazy, kadencje, segmentację, wersje i wydania.
- Epoki jako konwencje historiograficzne, nakładające się chronologicznie. Nie klasyfikować twórcy wyłącznie datą urodzenia. Wprowadzać style, instytucje, źródła, praktykę wykonawczą, kompozytorów i kompozytorki, muzykę polską i regionalną, instrumentarium historyczne, muzykę poza klasycznym kanonem jako oznaczone rozszerzenie.
- Przykłady nutowe i odsłuch: metadane dzieła, część, takty, edycja, wykonawca, nagranie, licencje. Nie zakładać wolności nagrania na podstawie daty śmierci kompozytora.
- Wiedzę rozszerzać przez aktywne porównanie wykonania z partyturą, wskazanie instrumentu/tematu, uzasadnienie formy i krótką wypowiedź. Ocena otwarta: rubryka plus nauczyciel/samoocena.

## Doprecyzowanie terminologii
ZPE-MOLL potwierdza polską szkolną konwencję: moll dorycka ma podwyższone stopnie VI i VII względem naturalnej, a moll melodyczna w górę odpowiada doryckiej, w dół naturalnej. Modus dorycki ma inną strukturę (VI podwyższony, VII naturalny względem moll naturalnej). CZ-26 rozróżnia cztery odmiany w wymaganiach rekrutacyjnych. W kodzie używać jednoznacznych identyfikatorów, nie samego słowa `dorian`.

## Runda 3 — reguły i rozróżnienia
- Pozycja akordu (w szkolnej harmonii: składnik w sopranie) to nie jego postać/przewrót (składnik w basie), ani układ skupiony/rozległy. Rozpoznawanie jakości akordu nie jest równoważne rozpoznaniu pozycji i przewrotu. Oceniać każdy wymiar osobno. OP-HARM, SCHOOL-THEORY-2526.
- Bas cyfrowany opisuje interwały względem basu, a nie bezpośrednio funkcję; znak chromatyczny interpretować względem konwencji i tonacji. Trójdźwięk w pierwszym przewrocie ma cyfry 6/3 (często skrót 6), w drugim 6/4. Nie mylić oznaczenia S z dodaną sekstą w polskiej harmonii z samym sekstakordem. OMT2-FB, OP-HARM.
- Akord neapolitański: durowy trójdźwięk na obniżonym II stopniu, typowo pierwszy przewrót; w c-moll Des–F–As, bas F. W konkretnych stylach i podręcznikach interpretacja funkcyjna różni się; nie narzucać jednego symbolu. OMT2-NEAP.
- Akordy o tej samej klasie wysokości mogą mieć odmienne funkcje i pisownię. Przykład: As–C–Es–Fis w c-moll jako niemiecki akord seksty zwiększonej; As–C–Es–Ges jako septymowy na As. Pierwszy zwykle kieruje As i Fis do G, drugi wymaga innego kontekstu. OMT2-MOD. Nie utożsamiać bezpośrednio amerykańskich nazw z polskimi nazwami funkcyjnymi.
- Przy akordzie tristanowskim i złożonych akordach alterowanych ćwiczenia wymagają kontekstu i uzasadnienia, nie jednej uniwersalnej etykiety. Dominantę chopinowską, dysalterację i polski system funkcji pobocznych opracować z konkretnym polskim wydaniem przed zatwierdzeniem; obecnie to cele, nie zweryfikowane definicje podręcznikowe.
- Fraza, zdanie, okres, ang. sentence i period nie mają gwarantowanej relacji 1:1 pomiędzy szkołami analizy. Nie wymuszać szablonu 4+4 ani jednej interpretacji formy. OMT2-PHRASE, OMT2-FORM, OMT2-SONATA.
- Klasa wysokości (mod 12) traci oktawę oraz pisownię; służy do wybranych zadań, nie przechowywania nut. OMT2-PITCH, OMT2-INT.
- Odróżnić widoczny znak od rzeczywistego alter i notowaną wartość od wykonawczej długości; zob. notation-contract.md.

## Runda 5 — uzupełnienie
Zob. conventions.md i twierdzenia METER-PL, METER-EN, MINOR-V, CAD-NONI, PL-HB, CLEF-G. Polski i angielski podział metrum nie są izomorficzne; modelować hierarchię akcentów niezależnie od podziału pulsu. Nie używać absolutnych reguł dominanty z ZPE-TRI. ZPE-CLEF zawiera błędny opis alternatywny klucza. Stosować wyłącznie konkretne twierdzenia źródłowe.
