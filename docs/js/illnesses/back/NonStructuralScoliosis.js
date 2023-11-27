import Illness from "../Illness.js";
import RegularSymptom from "../RegularSymptom.js";

export default new Illness({
    id: "non_structural_scoliosis",
    name: "Non-structurele Scoliose",
    images: [
        "./images/back/scoliosis.jpg",
    ],
    pathophysiology: `
- Zijdelinge kromming van de wervelkolom die komt door omstandigheden anders dan de groei van de wervels.

Oorzaken van non-structurele scoliose:
- Beenlengteverschil
    < 2 cm is normaal
    > 3 cm is waarneembaar
    < 5 cm niet-operatief op te vangen (langzamerhand een zooltje opbouwen zodat het niet in een keer teveel wordt)
- Fysiologisch normaal bij groeiend kind
- Houding
    `,
    epidemiology: `
Prevalentie: 2-4% (scoliose totaal)
    `,
    timeCourse: 'Klachten ontstaan geleidelijk',
    symptoms: [
new RegularSymptom('Zichtbare misvorming van de romp, wordt vaak door de ouders ontdekt'),
    ],
    diagnostics: `
- Verdwijnt bij voorover bukken, geen rotatie en structurele afwijkingen
- Cobbse hoek < 10 graden
    `,
    treatment: `
- Spiertraining
- Houding verbeteren
    `,
    references: `
Verhaar, J. A. N., & Mourik, J. B. A. van (Eds.). (2019). <em>Leerboek orthopedie</em> (Vierde, herziene druk). Bohn Stafleu van Loghum.
    `
});
