# Audyt silników i strategia walidacji
Data 2026-11-24. Na podstawie README i dokumentacji publicznej (sources.json); nie wykonano jeszcze benchmarków runtime ani pomiarów. Nie instalować wszystkiego na raz.

| Narzędzie | Decyzja | Dlaczego / ograniczenie |
|---|---|---|
| VexFlow | główny kandydat do krótkich ćwiczeń | renderer MIT, własny edytor, mapowanie kliknięć na pozycje nuty i undo/redo |
| OSMD | czytnik dłuższej partytury | BSD-3-Clause, MusicXML i VexFlow; nie niezależna walidacja VexFlow, nie pełny edytor |
| Verovio | niezależny renderer referencyjny | MEI, import MusicXML i możliwe straty; LGPL i obowiązki dystrybucji WASM, najpierw CI |
| LilyPond | referencja składu w CI | zestaw regresji MusicXML v2.26; porównać semantykę i rytm, nie identyczność pikseli |
| Tone.js | kandydat zegara i samplera | Sampler transponuje próbki; WebAudio nie gwarantuje braku latencji, sample trzeba stroić i testować |
| smplr | alternatywa samplera | porównać pamięć, atak, release, voice stealing, licencje banków |
| Tonal | adapter teorii | nie oracle funkcji ani harmonii SATB; test polskiej pisowni i aliasów |
| Pitchy | monofoniczny pitch | Hz i clarity, nie zwalidowane prawdopodobieństwo; nie rozpoznaje rytmu/polifonii samodzielnie |
| Basic Pitch TS | R&D, poza krytyczną ścieżką | Apache-2.0; audio-to-MIDI nie jest notacją ani bezbłędnym ocenianiem |
| music21 | niezależny checker symboliczny w CI | BSD-3-Clause, korpus osobno, nie wszystkie reguły polskiej szkoły; nie automatyczny sędzia artystyczny |
| SMuFL/Bravura | font i słownik symboli | OFL 1.1; nie reguły składu |
| MusicXML 4.0 | format wymiany | raport grupy społeczności W3C, nie formalna Recommendation; XSD nie gwarantuje poprawności muzycznej |

## Minimalny model domeny
Score: parts, staves, measures, voices, events. Pitch: step, alter, octave (written), optional soundingPitch/transpose; zachować identyfikator nuty. Event: note/chord/rest, onset i duration jako zredukowane ułamki, writtenDuration/dots/tuplet, staff/voice, tie IDs, articulations, ornament, grace. Measure: meter, additive groups, actualLength, pickup, key, clef, accidentals. Tempo: beatUnit, bpm, change/ramp. Repeat graph i wykonana timeline oddzielnie. Score → layout i Score → playbackPlan jako niezależne transformacje z identyfikatorami zdarzeń; wynik → model odpowiedzi → grader. Zachować oryginalny import obok znormalizowanego modelu, ostrzegać o utraconej semantyce. XSD oraz round-trip porównują treść, nie formatowanie XML. MIDI nie jest kanonicznym zapisem.

## Audio
- Kandydat główny Salamander Grand Piano (Alexander Holm, CC BY 3.0; weryfikacja konkretnego wariantu i atrybucji), alternatywnie VCSL (repo deklaruje CC0, kontrola plików). Osobno licencje instrumentów i konwersji. Bez pobierania niezweryfikowanych próbek z przypadkowych CDN.
- Jeden kontekst audio, odblokowanie po geście, obsługa resume/suspend, przerwanie przy zmianie lekcji, wspólny zegar z metronomem. Rozdzielić odtwarzanie akordu równocześnie i arpeggio. Kontrolować fazę ataku, clipping, dynamikę, obwiednie, wyciszenie. Nie sterować czasem muzycznym setTimeout.
- Kalibracja próbek: zmierzyć fundamentalną częstotliwość w stabilnym oknie, błędy w centach, ataki i różnice głośności między klawiszami, dokumentować temperament. Test offline renderu i rzeczywistych wyjść. Próg dopuszczenia (propozycja, nie zmierzono): błąd stabilnego tonu do 5 centów dla ćwiczeń 12-TET, cyfrowe rozpoczęcie równoczesnych nut w obrębie 1 bloku renderingu, nieprzesterowanie przy maksymalnej obsługiwanej polifonii. Latencja sprzętowa osobno.
- W dyktandach wielogłosowych niezależne głosy i możliwość ćwiczenia pojedynczego. Ustawienia rejestru, tempa, trybu liczenia, powtórzeń. Nie używać losowych zmian barwy maskujących nuty.

## Mikrofon
HTTPS i zgoda, brak obowiązkowego przesyłania, audio lokalne, jawne zakończenie strumienia. F0 i clarity, RMS/cisza, segmentacja onsetów, mediana stabilnych próbek, histereza, kalibracja latencji. Testy dla zakresu głosu i różnych mikrofonów, tła, wibrata, oktawowych błędów, szumu, ciszy, oddechu i odsłuchu przez głośnik. Brak sygnału ≠ błąd ucznia. Nie podawać procentu trafności bez pomiarów; nie obiecywać polifonicznego gradingu. Web MIDI opcjonalny i zależny od urządzenia; touch i klawiatura jako alternatywy.

## Praktyczny benchmark przed decyzją
1. Pin konkretnej wersji, lockfile i reproducible build; sprawdzić licencję release oraz transitive dependencies i banki.
2. 15 oryginalnych fixture notacji z golden-cases + wybrane przypadki LilyPond po sprawdzeniu licencji; render w VexFlow, OSMD i niezależnie Verovio/LilyPond. Zgłaszać nieobsługiwane elementy zamiast cichej utraty.
3. Sprawdzić MusicXML XSD, konwersję i round-trip: enharmonia, znaki, głosy, repetycje, takty, tuplety, transpozycja. music21 jako drugi checker, testy property-based z deterministycznym seed.
4. Tone.Sampler vs smplr: pierwszy dźwięk, czas i pamięć pobrania, polifonia 4/16/32, przerwania, tempo, replay, offline, iOS Safari i Android Chrome, mały ekran. Raport surowych pomiarów i wersji.
5. Pilot Pitchy: syntetyczne tony, licencjonowane głosy i dobrowolne nagrania, recenzja nauczyciela; confusion matrix osobno na rejestry i szum, odsetek abstencji, false pass/false fail. Bez obietnic do czasu wyników.
6. Zabezpieczyć parser XML przed DTD/XXE, limit wielkości/dekompresji MXL, SVG bez aktywnych skryptów; testy dostępności i focus. Nie pobierać z nieznanych URL podczas lekcji.
