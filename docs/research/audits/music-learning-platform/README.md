# Analiza platformy do nauki muzyki

Audyt publicznej polskiej wersji z 25 listopada 2026 r. Materiał porównawczy do projektowania Frogophony. Badana platforma łączy katalog ćwiczeń, samodzielne instrumenty, narzędzia muzyczne, słownik oraz funkcje konta i klas.

## Zakres i dowody

- Mapa obejmowała 2490 odnalezionych adresów. Zbadano HTML 265 stron, w tym wszystkich 201 cykli wskazanych przez osiem kategorii. Z cykli wyodrębniono odnośniki do 1122 pojedynczych zadań.
- Katalog słownika zawierał 1085 haseł. Implementację sprawdzono na trzech hasłach z każdej kategorii. Mapa ogólna zawierała 52 polskie adresy.
- Zebrano 62 publiczne skrypty własne z 60 różnymi sumami SHA-256. Przegląd objął HTML, deklaracje skryptów, ręczną inspekcję kodu i obserwację Chromium. REA sparsował 24 skrypty odnotowane przy uruchamianiu ćwiczeń. Dla głównego pakietu pianina REA osiągnął limit analizy aliasów. Mechanizmy pianina potwierdzono ręcznie w opublikowanym kodzie.
- W Chromium rozpoczęto po jednym ćwiczeniu z każdej kategorii. Sprawdzono także widoki pianina, syntezatora, metronomu, tunera i przykładowego hasła dźwięku. Zapisy postępu i funkcje użytkowników zalogowanych opisano na podstawie publicznej pomocy oraz zachowania anonimowej sesji. Implementacja serwera, baza danych i szczegóły utrwalania wyników pozostają nieustalone.

## Wspólny szablon i funkcje serwerowe

Serwer dostarcza nawigację, treści oraz formularze w HTML. Strony korzystają ze wspólnych zasobów Joomla, jQuery 3.6.0 i skryptu szablonu. Moduły interaktywne są dołączane zależnie od podstrony. W HTML znajdują się osobne odnośniki językowe oraz osadzenie Google Analytics. W sesji anonimowej na niektórych narzędziach zaobserwowano też żądania reklamowe.

Menu obejmuje ćwiczenia, instrumenty, narzędzia, słownik, szkoły i informacje o serwisie. Pomoc, misja, prasa, warunki i polityka prywatności są dostarczane we wspólnym szablonie. Kontakt ma formularz obsługiwany przez serwer. Logowanie i rejestracja działają przez formularze wysyłane do serwera. Oba zaobserwowane wejścia do widoku klas przekierowywały anonimową sesję do logowania.

## Ćwiczenia

| Kategoria | Cykle | Próbka uruchomiona w przeglądarce |
| --- | ---: | --- |
| Nuty | 19 | Dźwięki naturalne na pianinie |
| Rytmy | 60 | Czytanie rytmu |
| Interwały | 28 | Rozpoznawanie kierunku ze słuchu |
| Akordy | 30 | Notacja akordów |
| Gamy i skale | 28 | Czytanie gam na pianinie |
| Tonacje | 6 | Rozpoznawanie znaków przykluczowych |
| Instrumenty | 21 | Rozpoznawanie na podstawie zdjęć |
| Gatunki | 9 | Rozpoznawanie gatunków ze słuchu |

Wszystkie strony cykli miały ten sam zestaw skryptów startowych, w tym wspólny moduł ćwiczeń, Howler 2.0.9 i moduł rankingu. Widok kategorii grupuje cykle według tematu. Widok cyklu pokazuje zadania z przyciskami rozpoczęcia. Start otwiera stronę pojedynczego zadania, która pobiera dane JSON przez XHR z modułu PHP właściwego dla typu zadania. Wspólna logika klienta odczytuje i przekazuje odpowiedź do warstwy tłumaczeń. W zależności od ćwiczenia przeglądarka dołącza skrypty klawiatury, ilustracji nutowych i rytmicznych, odtwarzania, przycisków odpowiedzi, paska postępu i podpowiedzi.

Próbki nut są pobierane jako MP3. W ćwiczeniach rytmicznych zaobserwowano osobne próbki metronomu i dźwięku rytmicznego. Publiczna pomoc wymienia skróty do sprawdzania odpowiedzi, przechodzenia dalej, odtwarzania i zatrzymywania dźwięku oraz wprowadzania znaków w edytorze. Zapis postępów wymaga konta.

## Instrumenty

| Moduł | Obserwacja |
| --- | --- |
| Pianino | Próbki MP3 są przypisane do zakresu MIDI 21–108. Brakujące próbki są dogrywane, a trwające pobrania współdzielone. Klawiatura komputerowa i ekranowa obsługują granie wielu nut. |
| Syntezator | Pakiet zawiera oscylatory i konfigurację przebiegów. Interfejs ma ustawienia, presety oraz nagrywanie i eksport MP3. Polski interfejs wczytuje osobny plik tłumaczeń JSON. |
| Gitara, bas i ukulele | Trzy osobne pakiety o zbliżonej budowie. Każdy ma skrypt aplikacji, osobny pakiet zależności i polskie tłumaczenie. W kodzie występuje Howler. |
| Skrzypce | Osobny pakiet korzysta z Web Audio i próbek MP3. W kodzie znajduje się eksport nagrania do MP3. |
| Perkusja | Własna aplikacja i zestaw tłumaczeń. Pakiet zawiera Howler, Web Audio i odniesienia do próbek MP3. |
| Automat perkusyjny | Sekwencer krokowy z głowicą odtwarzania. Wykorzystuje Backbone, Handlebars, Lodash, Web Audio i próbki. Udostępniony wzór jest odczytywany m.in. z fragmentu adresu. |
| Dzwonki i ksylofon | Dwie strony korzystają z tego samego pakietu. Kod wspólny konfiguruje zakres instrumentu, ładuje próbki oraz obsługuje lokalny eksport nagrania. |

Pianino rozróżnia moment naciśnięcia i zwolnienia klawisza. Utrata fokusu lub zmiana widoczności zwalnia przytrzymane klawisze. Ustawienia pozwalają zmienić głośność, oktawę i oznaczenia klawiszy. Zaznaczone nuty można odtworzyć jako grupę i zapisać w adresie, który przy ponownym otwarciu odtwarza zaznaczenie.

Nagrywanie pianina przechwytuje wyjście własnego miksu Web Audio. Osobny worker koduje dwukanałowe MP3 z ustawieniem 256 kb/s. Przeglądarka tworzy lokalny Blob i adres potrzebny do odsłuchu lub pobrania. W kodzie widać też przetwarzanie ciszy przy granicach nagrania. Opis funkcji podaje limit pięciu minut.

## Narzędzia i słownik

| Moduł | Obserwacja |
| --- | --- |
| Tuner | Po rozpoczęciu strojenia może poprosić o dostęp do mikrofonu. Kod pobiera ramki z analizatora Web Audio i przekazuje do workera wraz z częstotliwością próbkowania. W sesji przeglądarkowej zaobserwowano pobranie workera i jego modułu WebAssembly. Algorytm i dokładność strojenia pozostają nieustalone. |
| Metronom | Dwie próbki kliknięcia, regulacja tempa przyciskami lub wystukiwaniem, osobny pakiet i tłumaczenie. |
| Odtwarzacz akordów i koło kwintowe | Każde narzędzie ładuje własny pakiet. W pakiecie koła wykryto Web Audio, Howler i obsługę stanu adresu. |
| Wyszukiwarki dźwięków, interwałów, akordów, gam i skal | Wspólny pakiet wykonawczy i osobne pliki tłumaczeń dla czterech wariantów. |
| Piosenki interwałów | Osobny skrypt i Howler, próbki odsłuchowe dla interwałów w obu kierunkach. |
| Papier nutowy i terminy muzyczne | Dostarczane jako treść HTML. Papier nutowy prowadzi do gotowych PDF-ów, m.in. w wersjach standardowej, fortepianowej, gitarowej, perkusyjnej i chóralnej. |
| Słownik | 588 haseł akordów, 462 gam i skal oraz 35 dźwięków. Hasła są dostarczane w HTML. Każda kategoria ma własny pakiet interaktywny, a formularz wyszukiwania przesyła zapytanie do serwera. W widoku dźwięku potwierdzono również pobranie polskich danych JSON i skryptu z listą haseł. |

## Konta, postępy i szkoły

Publiczna pomoc opisuje punkty za pierwsze i ponowne wykonanie, premię za pierwsze bezbłędne ukończenie, medal za ukończenie i gwiazdkę za komplet poprawnych odpowiedzi. Opisuje też tygodniową serię opartą na ukończeniu co najmniej pięciu ćwiczeń oraz mechanizm ochrony serii. Ranking jest tygodniowy, ma siedem poziomów i grupy do 20 osób. W trybie szkolnym ranking ogranicza się do klasy. Dokumentacja opisuje wgląd nauczyciela w postępy uczniów oraz możliwość wyłączenia rankingu zgodnie z ustawieniami konta lub klasy.

## Wnioski dla Frogophony

1. **Wspólne dane muzyczne dla kilku typów zadań.** Obecna sesja demonstracyjna odtwarza `q.notes` i ocenia indeks zaznaczonej odpowiedzi względem `q.correct`. Najmniejszy użyteczny krok to rozpoznanie interwału ze słuchu oraz odtworzenie go na klawiaturze na podstawie tych samych danych. Każdy wariant ma własną regułę oceny. W wariancie wykonawczym informacja zwrotna może wskazać konkretny dźwięk, który odbiegał od wzoru. [Sesja demo](../../../src/features/lesson/useDemoSession.ts) · [Kontrakt notacji](../notation-contract.md)
2. **Stopniowanie interakcji.** Kolejność odsłuch, odtworzenie i zapis pasuje do planowanego wycinka z interwałami i trójdźwiękami. Odsłuch i klawiatura pozwalają najpierw sprawdzić dane oraz ocenianie. Notacja stanowi osobne rozszerzenie z własnymi kryteriami pisowni i rytmu. Reakcje Kumki i dotychczasowy ekran informacji zwrotnej mogą obsłużyć oba pierwsze tryby. [Widok lekcji](../../../src/features/lesson/LessonDialog.tsx)
3. **Wspólny odtwarzacz i kontrola stanu.** Jeden moduł audio może odtwarzać wzór i reagować na wejście użytkownika. Warto uwzględnić polifonię, anulowanie poprzedniego odtwarzania oraz zwalnianie nut po utracie fokusu. Próbki instrumentów i nagrywanie można rozważyć niezależnie od pierwszego wycinka. [Architektura](../../architecture.md)
4. **Udostępnianie krótkiego ćwiczenia linkiem.** Niewielką sekwencję lub rytm można zapisać bez konta, z wersjonowanym formatem adresu. Ranking, klasy i synchronizacja postępu mają sens dopiero wtedy, gdy projekt potrzebuje współdzielonego stanu.
5. **Pochodzenie i jakość treści.** Dane z tej analizy opisują oprogramowanie i wzorce interakcji. Ćwiczenia Frogophony opracowuje się z własnych materiałów oraz twierdzeń sprawdzonych w źródłach, zgodnie z procesem projektu. [Polityka źródłowa](../source-policy.md)
