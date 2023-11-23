import Illness from "../Illness.js";
import RegularSymptom from "../RegularSymptom.js";

export default new Illness({
    id: "sinding-larsen-johansson",
    name: "Syndroom van Sinding-Larsen-Johansson",
    pathophysiology: `
- Irritatie van de groeiplaat ter hoogte van de onderzijde van de knieschijf (patella), waar de patellapees aanhecht op de knieschijf
    `,
    epidemiology: `
- Jeugdige sporters in de groei
- Komt niet vaak voor
    `,
    timeCourse: 'Klachten ontstaan geleidelijk',
    symptoms: [
new RegularSymptom('Pijn tijdens <strong>peesbelastende (sport)activiteiten</strong>, zoals aanzetten, afremmen, springen.'),
new RegularSymptom('Pijn bij onderkant van de patella')
    ],
    diagnostics: `
- Palpatie: Met één vinger lokaliseerbare pijn.
    `,
    treatment: `
- De klachten gaan meestal vanzelf over, maar dit duurt lang (enkele maanden tot anderhalf jaar)
- Actief blijven binnen pijngrens.
    `
});
