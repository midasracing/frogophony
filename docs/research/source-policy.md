# Polityka źródłowa — zakaz wymyślania materiału
Obowiązuje od rundy 4. Bazą odniesienia jest repozytorium, nie pamięć modelu ani liczba zebranych linków. Nowy zewnętrzny materiał najpierw przechodzi weryfikację i zapis do bazy. Brak źródła oznacza brak publikacji zagadnienia.

## Rozróżnienie rekordów
- sources.json — katalog odnośników, nie lista automatycznie prawdziwych twierdzeń. Status verified-partial może oznaczać tylko fragment; nie daje prawa do użycia całego dokumentu.
- official-curriculum.json — zakres nauczania przypisany do drukowanej strony urzędowego dokumentu. Nie stanowi dowodu, że dana definicja lub odpowiedź jest poprawna.
- verified-claims.json — jawna lista konkretnych twierdzeń wraz z lokalizatorem, kontekstem i przypadkami wzorcowymi. Status source-checked nie oznacza teacher-reviewed. Gdy nie ma twierdzenia na liście, jest ono zablokowane do czasu odczytania źródła i dopisania.
- pozostałe pliki — notatki, hipotezy, kandydatury, plany i historia audytu. Przy sprzeczności nowsza udokumentowana korekta ma pierwszeństwo; nie usuwać historii.

## Obowiązkowy cykl
1. Ustal cel i zakres (SM/OSM, typ zajęć, specjalność, rocznik). Sprawdź oficjalny dokument i konkretne lokalizatory. Dla egzaminów nie przenoś wymagań między instytucjami.
2. Każdą definicję, objaśnienie, odpowiedź i regułę generatora przypisz do claimId. Użyj dostępnego tekstu naukowego, uznanego podręcznika lub standardu technicznego; katalog biblioteczny potwierdza wyłącznie dane bibliograficzne. Nie wymyślaj stron, tytułów, autorów ani rzekomych recenzji.
3. Przy polskiej nomenklaturze sprawdź polskie źródło. Angielski podręcznik może weryfikować strukturę, ale nie automatycznie polskie terminy. Kontrowersje i zależności od stylu oznaczaj; nie wybieraj arbitralnie jednego wariantu. 
4. Utwórz własne przykłady, zweryfikuj je niezależnie (liczbowo i symbolicznie); porównaj odsłuch i zapis. Prawa do tekstu, edycji, nagrania i sampli osobno.
5. Niezależny recenzent muzyczny i pedagogiczny zatwierdza treść, testy silników potwierdzają działanie. Dopiero wówczas można ustawić releaseApproved i publikować. Nie deklarować zewnętrznej recenzji bez jej rzeczywistego przeprowadzenia.

## Manifest przyszłych lekcji
docs/research/lesson-manifest.json zawiera tablicę lessons. Dla każdej: id, status (draft/approved), curriculumIds, claimIds, evidenceNotes; dla approved dodatkowo musicReview, pedagogyReview i engineTest z identyfikatorem rzeczywistego raportu. Każde pytanie i reguła generatora musi mieć własne mapowanie claimIds, gdy zostanie wdrożony format pytań. Obecna demonstracja nie jest objęta manifestem, nie jest zatwierdzonym kursem. Przy wdrożeniu pełnej ścieżki gate ma obejmować rzeczywiste pliki lesson i wszystkie pytania, a nie wyłącznie zadeklarowane rekordy.

## Granice
Automatyczny checker wykrywa brak lub niepoprawne odwołania, nie rozpoznaje fałszywego twierdzenia, nie zastępuje pedagoga i nie sprawdza poprawności audio. Nie istnieje kompletna baza całej muzyki; budujemy kontrolowalny, rozszerzalny zakres projektu od szkoły do rekrutacji akademickiej.

## Konflikty i bezpośredni dostęp
Każdy sourceRef sprawdzonego twierdzenia wymaga `access: direct-read`: odczytu konkretnego fragmentu, nie samego wyniku wyszukiwania. Rozbieżności zapisywać w rejestrze, nie akceptować ani odrzucać automatycznie całego źródła. ZPE-MOLL, ćwiczenie 4 podaje KV26 dla wariacji Mozarta; HENLE-MOZART-K265, HN 165 potwierdza KV 265 (300e). ZPE weryfikuje wybrane reguły gam, nie wszystkie dane repertuarowe. Dla terminologii zależnej od konwencji wymagać zakresu i odpowiedniego źródła.

## Blokada zatwierdzania — runda 5
Do czasu rejestru rzeczywistych recenzji i kontroli runtime checker odrzuca każde releaseApproved=true oraz każdą lekcję inną niż draft. Poprzednio dowolny niepusty tekst mógł imitować recenzję. Mapa coverage-map.json nie oznacza pełnego pokrycia. Nie omijać blokady; zastąpić ją weryfikowalnymi raportami i połączeniem z publikacją treści.
