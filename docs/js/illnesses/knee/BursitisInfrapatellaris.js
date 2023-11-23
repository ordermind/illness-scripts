import Illness from "../Illness.js";
import RegularSymptom from "../RegularSymptom.js";

export default new Illness({
    id: "bursitis-infrapatellaris",
    name: "Bursitis Infrapatellaris",
    pathophysiology: `
- Irritatie van de infrapatellare bursa die vaak gepaard gaat met jumper's knee (tendinopathie van het lig. patellae)
    `,
    symptoms: [
new RegularSymptom('Infrapatellare bursitis dichtbij de insertie van het lig. patellae kan op patellatendinopathie lijken. Echter is de pijn die hierdoor ontstaat meestal meer gevarieerd qua soort en locatie vergeleken met de tendinopathie.'),
    ],
    diagnostics: `
- Inspectie: Vaak een duidelijke zwelling waarneembaar bij de bursa
- Inspectie: Bij een fluctuerende, prepatellair gelokaliseerde zwelling, al dan niet rood of pijnlijk.
- Indien dit gepaard gaat met koorts, uitbreidende roodheid, zwelling en pijn is er een vermoeden van een bacteriële infectie.
    `,
    treatment: `
- Bewegen binnen pijngrens, de bursa moet rust krijgen om te kunnen herstellen
- Huisarts kan de bursa leegzuigen of verwijderen
    `
});
