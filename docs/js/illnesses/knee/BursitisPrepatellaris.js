import Illness from "../Illness.js";
import RegularSymptom from "../RegularSymptom.js";

export default new Illness({
    id: "bursitis-prepatellaris",
    name: "Bursitis Prepatellaris",
    images: [
        "./images/knee/bursitis-prepatellaris.jpg",
    ],
    pathophysiology: `
- Ontsteking van de prepatellare slijmbeurs
- Bursitis prepatellaris (acuut of chronisch) is meestal het gevolg van stoten of veel knielen, zoals dat voorkomt bij bepaalde beroepen (stratenmakers, stoffeerders) of sporten (judo, worstelen).
`,
    timeCourse: `Vaak vrij abrupt na een periode van lange druk op de bursa (bijvoorbeeld veel op de knieën zitten).`,
    symptoms: [
new RegularSymptom('Pijn is vooral aanwezig bij (mechanische) <strong>druk op de bursa</strong>, dus ook bij flexie van de knie.'),
new RegularSymptom('De acute vorm wordt gekenmerkt door een ontsteking, die meestal aseptisch is. Van een chronische vorm is sprake als de zwelling na een aantal weken nog aanwezig is of frequent recidiveert.'),
    ],
    diagnostics: `
- Inspectie: Vaak een duidelijke zwelling waarneembaar anterieur van de patella.
- Inspectie: Bij een fluctuerende, prepatellair gelokaliseerde zwelling, al dan niet rood of pijnlijk. 
- Indien dit gepaard gaat met koorts, uitbreidende roodheid, zwelling en pijn is er een vermoeden van een bacteriële infectie.
    `,
    treatment: `
- Bewegen binnen pijngrens, de bursa moet rust krijgen om te kunnen herstellen
- Huisarts kan de bursa leegzuigen of verwijderen
    `,
    references: `
Belo, J.N., Bierma-Zeinstra, S.M.A., Kuijpers, T., Opstelten, W., Van den Donk, M.,Weisscher, P.J., & Wildervanck-Dekker, C.M.J. (2020). <em>NHG-Standaard Niet-traumatische knieklachten (M107)</em>. Nederlands Huisartsen Genootschap.
Cook, J., Rodas, G., McCall, A., Pruna, R., Kennedy, R., & Til, L. (2021). <em>Tendon injuries in football players: fc barcelona 2021 tendon guide</em>. FC Barcelona.
Van Melick, N. (2022). Patellofemorale pijn bij de adolescente sporter; Deel 1: Diagnosticeren door in de beweegketen te redeneren. <em>Sportgericht 76</em>(4).
    `
});
