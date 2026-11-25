# Drobner — instrumentoznawstwo i akustyka, PWM 1986
DROB-1986-UPLOAD. 259 stron rzeczywistego PDF, podgląd Files ograniczony do 150. Plik kończy się na druk. 258, brak bibliografii i indeksu; nie potwierdzono wkładki skal. Skan, bez kopiowania do repo. Przedmowa z 1959. Lektura częściowa, szczegółowe zakresy w sources.json.
## Reguły do modelu (propozycja)
- Oddzielić notowaną wysokość, brzmiącą wysokość i częstotliwość; profil strojenia zawiera częstotliwość odniesienia i sposób przeliczenia. W 12-TET f=fref*2^(n/12), a odchyłka w centach = 1200*log2(f/fref) dla porównywanych częstotliwości. Wyprowadzenie matematyczne z DROB-CENT/ET. A4=440 Hz domyślnie, nie jako jedyny możliwy strój. Czysta kwinta 3:2 to ok. 701,955 centów, temperowana 700. Nie wymuszać idealnego stroju naturalnego na śpiewie bez kontekstu.
- DROB-MISSING: najwyższy pik widma nie musi być częstotliwością podstawową; testować estymator na harmonicznych i nieharmonicznych, ciszy oraz szumie. Nie zakładać rozpoznawania polifonii przez monofoniczny detektor. Próg pewności i tolerancję kalibrować empirycznie, nie brać z książki.
- DROB-TEMPO: przechowywać jednostkę BPM i dokładne proporcje czasu; osobno czasy zapisane, rzeczywiste wykonanie, release i artykulację.
- DROB-TAXONOMY/KEYBOARD: odrębne pola źródło drgań, metoda wzbudzenia, sposób sterowania, rodzina orkiestrowa, odmiana instrumentu i profil klasyfikacji. Nie ujednolicać bezrefleksyjnie taksonomii Drobnera i Wójcik.
- DROB-TRUMPET/PICCOLO: testować kierunek transpozycji zarówno przy zapisie, jak przy odsłuchu. Polski H/B to nie angielski H/B. Nie przypisywać jednego zakresu wszystkim odmianom ani umiejętnościom.
## Ograniczenia i punkty wymagające kontroli nowszej literatury
- s.19–20 wzór Dopplera używa prędkości względnej; nie wdrażać jako ogólnego dokładnego wzoru dla ruchu źródła i odbiorcy w ośrodku. s.18 opis fali stojącej jest uproszczony; nie przenosić bez sprawdzenia warunków amplitudy i częstotliwości.
- s.20 tabela ppp–fff ma wartości orientacyjne, nie jest normą SPL ani głośności odsłuchu. Nie wyznaczać na tej podstawie poziomu audio lub ekspozycji użytkownika. dBFS w cyfrowym sygnale nie jest pomiarem dB SPL bez kalibracji.
- s.27–28 dawne twierdzenia o częstości i wyłącznie wrodzonej naturze słuchu absolutnego, s.30–31 teoria konsonansu oraz wyjaśnienie brakującej podstawowej nie stanowią aktualnej wiedzy bez osobnej weryfikacji.
- s.108 twierdzenia o Bachu i historycznym upowszechnieniu 12-TET wymagają nowszych źródeł. s.165 twierdzenia o praktyce orkiestr, zapisie znaków przykluczowych, zakresach i dostępności dźwięków trąbki nie są uniwersalne.
- s.32–38 podział czterogrupowy jest systematyką autora. Współczesna organologia, elektronika, instrumenty pozaeuropejskie i techniki rozszerzone wymagają dodatkowych źródeł.
- 11 nowych przypadków AC01–AC11 to oczekiwane wyniki matematyczne/modelowe, nie uruchomione testy audio ani oceny muzyka. Nie kopiować przykładów z książki.
