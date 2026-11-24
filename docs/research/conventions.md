# Konwencje terminologiczne i konflikty źródeł — runda 5
Katalog rozstrzygnięć do zastosowania w zadaniach. Nie jest zatwierdzonym podręcznikiem.

| Konflikt | Rozstrzygnięcie | Dowód |
|---|---|---|
| ZPE-CLEF, opis alternatywny nazywa klucz wiolinowy sopranowym | Używać wyłącznie określenia wiolinowy G na drugiej linii, nie kopiować alternatywnego opisu | CLEF-G |
| ZPE-TRI: dominanta zawsze durowa i zawsze prowadzi do toniki | Rozróżnić konstrukcję akordu V w odmianach moll i funkcję; kontrprzykład kadencji zwodniczej | MINOR-V, CAD-NONI |
| ZPE-METER a angielski podręcznik | Polska klasyfikacja grup metrycznych i angielska klasyfikacja podziału pulsu to osobne wymiary; 4/4 może mieć różne etykiety w tych systemach | METER-PL, METER-EN |
| H/B a angielski B/Bb | Wewnętrzna pisownia niezależna od prezentacji polskiej | PL-HB |
| Polski moll dorycki a Dorian mode | Nie stosować tego samego ID skali; kierunek w dół odmiany polskiej wymaga jeszcze źródła | MINOR-PL-DOR |
| Tryton | Nie wymuszać rozróżnienia kwarty zwiększonej i kwinty zmniejszonej na samym izolowanym audio | TRITONE-AUDIO |

## Reguły implementacji
- Przechowywać conventionId w zadaniach o metrum, funkcjach, solmizacji, skalach i nazwach dźwięków.
- Metrum modelować jako podpis, grupy akcentów, jednostkę pulsu, podział pulsu; nie jako pojedyncze pole simple/compound. Konwencję wyświetlać przy pytaniach, które od niej zależą. Nie wnioskować o metrum jedynie z długości taktu.
- Przy dominantach rozróżniać stopień skali, jakość i funkcję; zadania o rozwiązaniu muszą zawierać kontekst.
- ZPE jest źródłem konkretnych fragmentów, nie automatycznym autorytetem dla całej strony. Wcześniejszy konflikt KV26/KV265 pozostaje w sources.json.
- Wszystkie nowe twierdzenia mają status source-checked, nie releaseApproved. Nie dodawać ich do publicznej lekcji przed recenzją i testem.

## Kontrola w Wesołowskim (1986)
§44 s.134 potwierdza polskie odpowiedniki relative/parallel (PL-KEY-REL, PL-KEY-SAME). Przedmowa s.8 i §15 wskazują, że podział taktów jest konwencją notacyjną, nie jedyną możliwą klasyfikacją. §18 s.59–63: dopuszcza synkopę w trójdzielności między słabymi częściami; nie stosować wyłącznie warunku przekroczenia mocnej części. §38 s.109–110 potwierdza polski minor dorycki i melodyczny, nie daje jeszcze jednoznacznego polecenia ćwiczenia doryckiej w dół.
