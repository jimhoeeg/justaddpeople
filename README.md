# Salonbyggeren

Interaktiv prototype af et salon-konfiguratormodul til **Just Add People** (justaddpeople.dk),
udarbejdet som konceptoplæg.

## Hvad det er

Et guidet forløb, hvor en eksisterende salonejer former sin salon, får aktiveret sit behov
gennem faglige indsigter undervejs — og til sidst får en samlet pakke, en pris og en rapport.

Rækkefølgen er bevidst: **ingen kroner vises, før salonen står rigtigt.**

1. **Din salon i dag** — pladser og inventarets alder
2. **Hverdagen** — hvad presser (ryg, kø, farveresultat, kemi, støj, slid, tom plads)
3. **Ambition** — kapacitet, arbejdsmiljø, oplevelse eller nyt indtægtsben
4. **Byg salonen** — pladser, kvalitetsniveau og stilretning
5. **Faglige indsigter** — kort genereret ud fra svarene, hver med et tilvalg der kan slås til/fra
6. **Pakke og pris** — stykliste, vejledende pris vs. "din pris", leasing og business case
7. **Kontaktoplysninger** — lead-formularen ligger *efter* prisen
8. **Rapport** — hele oplægget samlet, til download eller print

## Kør den

Åbn `salonbyggeren.html` i en browser. Ingen build, ingen afhængigheder ud over
Google Fonts.

## Vigtigt om data

Alle produktnavne og priser er **eksempeldata** i Just Add People's prislejer — ikke
et udtræk fra deres katalog. Leasing er regnet som annuitet med 100 kr. i restværdi
over 12-48 måneder; business casen bygger på 22 åbningsdage om måneden og de
antagelser, brugeren selv kan skrue på. Alt er vejledende, ikke et tilbud.

Lead-formularen gemmer og sender ingenting — oplysningerne bruges kun til at sætte
navn på rapporten lokalt i browseren.

## Publiceret som Artifact

Filen er skrevet uden `<!doctype>`/`<html>`/`<head>`/`<body>`, så den både kan åbnes
direkte som lokal fil og publiceres som Artifact. Ved publicering er `downloads`-
capability slået til, så "Hent rapporten" leverer en rigtig fil; uden den falder
knappen tilbage på en almindelig blob-download, og "Print eller gem som PDF" virker
altid.
