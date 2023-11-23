import Illness from "../Illness.js";
import RegularSymptom from "../RegularSymptom.js";

export default new Illness({
    id: "infrapatellar-fat-pad-syndrome",
    name: "Fat Pad Syndrome",
    pathophysiology: `Impingement van het vetlichaam van Hoffa door (hyper)extensie.`,
    epidemiology: `Komt vaker voor bij adolescenten.`,
    timeCourse: 'Klachten ontstaan soms geleidelijk, soms na een trauma.',
    symptoms: [
new RegularSymptom('Pijn is vooral aanwezig bij activiteiten in extensie.'),
    ],
    diagnostics: `
- Palpatie: drukpijn en zwelling van het vetlichaam van Hoffa.
- Hoffa test (niet gevalideerd)
    `,
});
