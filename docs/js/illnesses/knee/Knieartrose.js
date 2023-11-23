import Illness from "../Illness.js";
import RegularSymptom from "../RegularSymptom.js";

export default new Illness({
    id: "knee-arthrosis",
    name: "Knieartrose",
    pathophysiology: `
- Verslijting van het kniegewricht
    `,
    epidemiology: `
- Leeftijd 45 jaar of ouder
    `,
    timeCourse: 'Klachten ontstaan meestal geleidelijk',
    symptoms: [
new RegularSymptom('Pijn bij beweging'),
new RegularSymptom('Beperkte flexie of extensie')
    ],
    diagnostics: `
Criteria knieartrose (NICE-richtlijn Osteoarthritis):

- leeftijd 45 jaar of ouder
- aan activiteiten gerelateerde kniepijn
- geen of kortdurende ochtendstijfheid (< 30 minuten).

De diagnose wordt waarschijnlijker als ook volgende symptomen aanwezig zijn:

- opstartpijn en -stijfheid d.w.z. pijn en stijfheid na inactiviteit (bijvoorbeeld na slapen, lang zitten, etc.)
- verminderde flexie of extensie
- crepitaties (een krakend geluid bij het bewegen) bij bewegingsonderzoek
- gevoeligheid van de gewrichtsspleet
- benige verbreding van het kniegewricht
    `,
    treatment: `
- 30 min dagelijks matig intensief bewegen (4 - 6,5 MET).
  Voorbeelden:
    - Wandelen op gemiddeld tempo (5 kilometer per uur) = 4 MET
    - Fietsen op gemiddeld tempo (16 kilometer per uur) = 6,5 MET
    - Huishoudelijke klusjes (denk aan stofzuigen, ramen zemen etc.) = 4 MET
    - Traplopen = 6 MET.

- Gewichtsreductie bij overgewicht of obesitas
    `
});
