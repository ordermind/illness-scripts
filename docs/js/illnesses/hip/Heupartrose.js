import Illness from "../Illness.js";

export default new Illness({
    id: "hip-arthrosis",
    name: "Heupartrose",
    images: [
        "./images/hip/heupartrose.jpg",
    ],
    pathophysiology: `
Verslechting van de kwaliteit van het kraakbeen waardoor structurele veranderingen in het gewricht ontstaan, zoals:

- progressief verlies van kraakbeen
- sclerosering
- osteofytvorming (botuitgroeieing, meestal puntig)
- verandering in weke delen (kapsel, pezen, spieren)

Mogelijke oorzaken:

- Trauma of operatie
- Ontsteking (b.v. RA) of infectie
- Idiopathish

Risicofactoren:

- Hoge leeftijd (45 jaar of ouder)
- Vrouwelijk geslacht
- Genen
- Overgewicht
- Hormonale factoren
    `,
    epidemiology: `
<img src="./images/knee/Jaarprevalentie-artrose-in-huisartsenpraktijk-2021.png" />

- Artrose in het algemeen is de meest voorkomende musculoskeletale aandoening, en heupartrose is daar een vaak voorkomende variant van.
- Prevalentie in 2021: 2,78%
- Incidentie in 2021: 0,16%
- Leeftijd 45 jaar of ouder
- Vaker bij vrouwen dan bij mannen
    `,
    timeCourse: 'Klachten ontstaan meestal geleidelijk',
    symptoms: `
- Pijn bij beweging
- Beperkte flexie of extensie
    `,
    diagnostics: `
Criteria heupartrose (ACR):

Pijn in de heup in combinatie met de volgende kenmerken:
- endorotatie van de heup < 15°
- flexie van de heup ≤ 115°

<em>of</em>

Pijn in de heup in combinatie met de volgende kenmerken:
- leeftijd > 45 jaar
- ochtendstijfheid van de heup ≤ 60 minuten
- pijn bij endorotatie van de heup
- endorotatie van de heup ≥ 15°
    `,
    treatment: `
Indicatie voor fysiotherapie wanneer:
- De hulpvraag relevant is, dus er sprake is van artrosegerelateerde klachten
- Afwezigheid rode vlaggen

<h4 class="list-title">Vier indicaties van KNGF</h4>

- Indicatie 1: kortdurende voorlichting, advies en oefen- en beweeginstructie
- Indicatie 2: voorlichting, advies en <strong>kortdurend</strong> begeleid oefenprogramma
    - Patiënten die niet meteen zelfstandig een oefenprogramma kunnen uitvoeren
- Indicatie 3: voorlichting, advies en <strong>langdurend</strong> begeleid oefenprogramma
    - Patiënten met andere aandoeningen, zoals DM type II of COPD, waardoor het lastig wordt om een normaal oefenprogramma te volgen
    - Patiënten met chronische pijnklachten
- Indicatie 4: voorlichting, pre- en/of postoperatieve oefentherapie vóór of ná een gewrichtsvervangende operatie van de heup en/of knie

<h4 class="list-title">Behandeling</h4>

- 30 min dagelijks matig intensief bewegen (4 - 6,5 MET). Voorbeelden:
    - Wandelen op gemiddeld tempo (5 kilometer per uur) = 4 MET
    - Fietsen op gemiddeld tempo (16 kilometer per uur) = 6,5 MET
    - Huishoudelijke klusjes (denk aan stofzuigen, ramen zemen etc.) = 4 MET
    - Traplopen = 6 MET.

- Gewichtsreductie bij overgewicht of obesitas
    `,
    references: `
Kampshoff, C.S., Peter, W.F.H., Van Doormaal, M.C.M., Knoop, J., Meerhoff, G.A., & Vliet Vlieland, T.P.M. (2018). <em>KNGF-richtlijn Artrose heup-knie</em>. Het Koninklijk Nederlands Genootschap voor Fysiotherapie. Geraadpleegd op 7 december 2023, van https://www.kngf.nl/kennisplatform/richtlijnen/artrose-heup-knie

Vanhommerig, J.W., Poos, M.J.J.C., Gommer, A.M., Hendriks, C., & Giesbers, H. (z.d.). <em>Artrose | Leeftijd en geslacht</em>. VZinfo. Rijksinstituut voor Volksgezondheid en Milieu. Geraadpleegd op 7 december 2023, van https://www.vzinfo.nl/artrose/leeftijd-en-geslacht
    `
});
