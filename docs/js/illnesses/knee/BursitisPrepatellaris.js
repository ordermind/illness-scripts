import Illness from "../Illness.js";
import RegularSymptom from "../RegularSymptom.js";

export default new Illness({
    id: "bursitis-prepatellaris",
    name: "Bursitis Prepatellaris",
    pathophysiology: `Ontsteking van de prepatellare slijmbeurs.`,
    timeCourse: `Vaak vrij abrupt na een periode van lange druk op de bursa (bijvoorbeeld veel op de knieën zitten).`,
    symptoms: [
new RegularSymptom('Pijn is vooral aanwezig bij (mechanische) <strong>druk op de bursa</strong>, dus ook bij flexie van de knie.'),
    ],
    diagnostics: `
- Inspectie: Vaak een duidelijke zwelling waarneembaar anterieur van de patella.
- Inspectie: Bij een fluctuerende, prepatellair gelokaliseerde zwelling, al dan niet rood of pijnlijk. 
- Indien dit gepaard gaat met koorts, uitbreidende roodheid, zwelling en pijn is er een vermoeden van een bacteriële infectie.
    `,
    treatment: `
- Bewegen binnen pijngrens, de bursa moet rust krijgen om te kunnen herstellen
- Huisarts kan de bursa leegzuigen of verwijderen
    `
});
