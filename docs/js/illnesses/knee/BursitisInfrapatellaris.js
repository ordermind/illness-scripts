import Illness from "../Illness.js";

export default new Illness({
    id: "bursitis-infrapatellaris",
    name: "Bursitis Infrapatellaris",
    images: [
        "./images/knee/bursitis-infrapatellaris.jpg",
    ],
    pathophysiology: `
- Irritatie van de infrapatellare bursa die vaak gepaard gaat met jumper's knee (tendinopathie van het lig. patellae)
    `,
    epidemiology: `Komt niet zo vaak voor`,
    symptoms: `
- Infrapatellare bursitis dichtbij de insertie van het lig. patellae kan op patellatendinopathie lijken. Echter is de pijn die hierdoor ontstaat meestal meer gevarieerd qua soort en locatie vergeleken met de tendinopathie.
    `,
    diagnostics: `
- Inspectie: Vaak een duidelijke zwelling waarneembaar bij de bursa
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

Malliaras, P., Cook, J., Purdam, C., & Rio, E. (2015). Patellar Tendinopathy: Clinical Diagnosis, Load Management, and Advice for Challenging Case Presentations. <em>Journal of Orthopaedic & Sports Physical Therapy, 45</em>(11).
    `
});
