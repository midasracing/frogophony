# Kontrakt semantyczny notacji i wykonania
Uzupełnia engine-audit.md. Źródła XML-NOT, XML-MIDI, XML-DURATION, XML-TIED, XML-ACC, XML-TRANS, XML-TUPLET, TONE-ACCURATE, TONE-PERF, MDN-AUDIO. Status: specyfikacja, nie zaimplementowany edytor.

## Rozdzielone warstwy
1. Written pitch: step, alter (także wartość ułamkowa dla mikrotonów, poza MVP), octave. Displayed accidental: glyph, cautionary/editorial, parentheses, visibility. Fis w G-dur nadal ma alter=1, nawet bez znaku przy nucie.
2. Sounding pitch: transpozycja z określoną zmianą chromatyczną i diatoniczną; przenośniki oktawowe jawnie interpretowane. Nie zakładać, że każda transpozycja jest tylko przesunięciem liczby MIDI.
3. Notated duration: type, dots, tuplet ratio, tuplet grouping. Intended duration w MusicXML: divisions; w wewnętrznym modelu wymierny onset i span. Performed duration: artykulacja, tempo, swing, interpretacja. Import musi zachować rozbieżności, nie automatycznie nadpisywać typu nuty.
4. Tie (wykonanie) i tied (zapis) osobno; slur artykulacyjny nie może scalać ataków. Let-ring jako dodatkowa semantyka. Tuplety: time-modification oraz notacja tuplet, w tym zagnieżdżenia. Grace notes nie są automatycznie zwykłą nutą z zerową długością do oceny rytmicznej.
5. Wielogłos: chord nie przesuwa pozycji, backup/forward przemieszczają kursor. Dla wewnętrznego modelu normalizować do onset per voice. Wykrywać niespójne długości głosów i jawne wyjątki. Notacja cross-staff nie zmienia tożsamości głosu.
6. Odczyt znaków przykluczowych, metrum i klucza w czasie; zmiana w środku taktu może mieć sens. Czasy repetycji i volt nie mogą nadpisywać pierwotnej partytury. Osobna rozwinięta timeline z limitem powtórzeń.
7. Import MusicXML zachowuje oryginał i warningi nieobsługiwanych struktur. Nie deklarować pełnego round-trip, gdy utracono np. ornament, beam, transpozycję, harmonię lub kierunki tekstowe. Walidacja XSD to tylko kontrola struktury.

## Kryteria oceniania
- notacja: dokładny zapis, pisownia, oktawa, klucz, rytm, głos;
- słuch: klasy brzmieniowe zgodne z celem, bez nierozróżnialnych dystraktorów;
- rytm: onset i względny czas, plus grupowanie metryczne, jeśli cel tego wymaga;
- wykonanie: wykrywalna intonacja, rytm, długość, tolerancja i niepewność;
- analiza i harmonia: kontekst, reguły stylu, rubryka i recenzja, alternatywne poprawne interpretacje.

## Zdarzenia audio
Jedno odtwarzanie → ID sesji, identyfikatory nut, lista zdarzeń w czasie audio. Anulowanie usuwa zdarzenia i wycisza aktywne głosy. W callbacku Tone przekazywany argument time jest czasem planowanym; nie używać czasu wykonania funkcji JS. Wizualny kursor synchronizować do zegara audio, nie odwrotnie. Dispose węzłów, brak równoległych kontekstów, gest do resume. Testy iOS rzeczywiste, nie tylko WebKit desktop.

## Minimalny pionowy wycinek
Najpierw interwały i trójdźwięki w kluczach G/F; zapis, odczyt, playback równoczesny i melodyczny, przełączanie przewrotu, polska pisownia, zapis do XML, odczyt niezależny. Następnie 3/4, 6/8, przedtakt, triola, związane nuty przez kreskę taktową. Dopiero po testach wielogłos, SATB i pełne dyktanda. Używać prawdziwego renderera, nie ręcznie rysowanych elips jako produkcyjnych nut.
