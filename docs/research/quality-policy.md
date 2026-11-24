# Standard wydawniczy Frogophony
## Statusy i źródła
draft → source-reviewed → music-reviewed → pedagogy-reviewed → engine-tested → approved. Wydanie publiczne wyłącznie approved lub wyraźnie oznaczone preview, bez deklaracji pokrycia programu. Każde wymaganie ma ID, schoolType, cycle, specialty, sourceId, section, efekty i status pokrycia: planned/implemented/tested/teacher-reviewed. Lekcja: learningObjective, prerequisites, mode, seed/version, examples, score, playbackPlan, expectedAnswer, equivalencePolicy, explanation, sourceRefs, rights, reviewer, reviewedAt. Nie utożsamiać linku do książki ze znajomością jej zawartości; cytować wydanie i stronę dopiero po lekturze.
## Ocena
Oddzielać rozpoznanie, konstrukcję, wykonanie i transfer umiejętności. Podpowiedź w treningu, nie w ocenie egzaminacyjnej. Ocena pitch-class, dokładnej wysokości, pisowni, funkcji, rytmu, formy i interpretacji to różne polityki. W razie wieloznaczności kontekst, kilka dopuszczalnych odpowiedzi lub wyłączenie zadania. Dla dyktand porównanie głosów i onsetów, częściowy wynik z osobnych wymiarów, nie tylko liczba nut. W harmonizacji rubryka i wiele realizacji; człowiek rozstrzyga interpretacyjne wyjątki. Retencję sprawdzać na nowych przykładach po czasie, nie po jednej odpowiedzi. Dostosować rozkład powtórek, a metrykę mastery opisać jako heurystykę, nie ocenę szkolną.
## Metodyka
Krótka teoria → przykład wzrokowo-słuchowy → ćwiczenie prowadzone → samodzielny zapis/wykonanie → informacja zwrotna → powtórka i transfer. Rozwijać słuch funkcyjny obok izolowanych struktur. Dobór trudności: ambitus, liczba znaków, chromatyka, długość, tempo, rytm, faktura, kontekst, liczba odsłuchów. Losować tylko w zadeklarowanym zakresie. Diagnoza pozwala pomijać opanowane obszary.
## Dostępność
Klawiatura, focus, kontrast, reduced motion, wyłączana Kumka; opisy partytur bez ujawniania odpowiedzi w ćwiczeniach słuchowych; alternatywna forma treningu jawnie oznaczona, nie deklarować równoważności oceny słuchu dla ćwiczeń wzrokowych. Regulacja głośności i łatwe zatrzymanie dźwięku, bez niespodziewanego autoplay. Głos nie jest zapisywany ani przesyłany domyślnie.
## Prawa
MIT kodu nie obejmuje automatycznie treści, maskotki, fontów, sampli ani nagrań. Każdy asset: origin URL, author, version/hash, license, attribution, changes, scope. OMT CC BY-SA 4.0: pochodne treści z atrybucją i kompatybilną licencją, oddzielnie od kodu. LenMus GPL-3.0: referencja funkcjonalna, nie kopiować kodu do MIT bez analizy obowiązków. Materiały komercyjnych szkół i aplikacji: własne przykłady, nie import baz pytań bez licencji. Kompozycja, wydanie i wykonanie mają różne prawa. Żadnych nagrań lub nut bez potwierdzonego statusu.
## Bramki CI
- walidacja schematu danych, źródła i prerequisites, brak cykli w grafie;
- unikalne ID, deterministyczne generatory, brak niejednoznacznych dystraktorów;
- golden cases + niezależne sprawdzanie, testy importu/eksportu, testy UI;
- benchmark audio i mikrofonu, recenzja notacji i pedagogiczna;
- przegląd licencji, test deployment na GitHub Pages oraz iOS Safari;
- nie zgłaszać wykonania testów, jeśli powstały tylko specyfikacje testowe.
