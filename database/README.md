# Frogophony — baza wiedzy

Kanoniczna baza źródłowa poza pakietem strony. Twierdzenia sprawdzone ze źródłem nie są automatycznie dopuszczone do publikacji; wymagają niezależnej recenzji i testów silników.

| Plik | Przeznaczenie |
| --- | --- |
| [sources.json](sources.json) | Rejestr źródeł |
| [verified-claims.json](verified-claims.json) | Twierdzenia, lokalizatory, zakres i wyjątki |
| [official-curriculum.json](official-curriculum.json) | Wymagania programowe |
| [coverage-map.json](coverage-map.json) | Powiązanie twierdzeń z wymaganiami |
| [golden-cases.json](golden-cases.json) | Przypadki wzorcowe, nie wykonane testy silnika |
| [lesson-manifest.json](lesson-manifest.json) | Rejestr projektów lekcji |
| [reading-ledger.json](reading-ledger.json) | Postęp odczytu, luki i miejsce wznowienia |
| [knowledge-index.json](knowledge-index.json) | Indeks pochodny |
| [datasets/](datasets/) | Projekty schematów ćwiczeń i dane dziedzinowe |
| [kompendium/hasla.json](kompendium/hasla.json) | Rozbudowane polskie hasła, przykłady i odsyłacze |

Język merytoryczny: polski (pl-PL). Zachować techniczne identyfikatory i nazwy oryginalne. Hasła kompendium są autorskimi opracowaniami, nie kopiami podręczników. Każde hasło wskazuje twierdzenia i konkretne strony. Brak źródła blokuje treść; nie uzupełniać z pamięci modelu.

Przeczytaj [politykę źródłową](../docs/research/source-policy.md) i [politykę jakości](../docs/research/quality-policy.md). Notatki referencyjne są w [docs/research](../docs/research/README.md), historia korekt w [docs/archive/audits](../docs/archive/audits/). Uruchom `npm run check:research` i `npm run check:structure`. Prywatne skany pozostają poza Git.
