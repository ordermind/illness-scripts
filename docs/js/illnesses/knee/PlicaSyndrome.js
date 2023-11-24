import Illness from "../Illness.js";
import RegularSymptom from "../RegularSymptom.js";

export default new Illness({
    id: "plica-syndrome",
    name: "Plica Syndroom",
    images: [
        "./images/knee/plica.jpg",
    ],
    pathophysiology: `
- Irritatie van het synoviale membraan in de knie
    `,
    epidemiology: `
Klachten ontstaan soms na <strong>repeterende flexiebelasting</strong> van de knie, soms na een <strong>trauma</strong> of knieoperatie.
    `,
    timeCourse: 'Klachten ontstaan soms geleidelijk, soms acuut.',
    symptoms: [
new RegularSymptom('Pijn bij actieve eindextensie of flexiebelastende activiteiten.'),
new RegularSymptom('<strong>Popsensatie</strong> bij patellabelastende activiteiten'),
new RegularSymptom('De plica kan pijnlijk worden ook bij activiteiten die alleen een <strong>kleine flexie</strong> vereisen, zoals bij <strong>wandelen</strong>'),
new RegularSymptom('De symptomen lijken meer op een quadricepstendinopathie dan een patellatendinopathie vanwege de proximomediale lokatie van de pijn'),
    ],
    diagnostics: `
- Uitvragen: popsensatie (snapping sensation)
- Inspectie: <strong>Zwelling</strong> bij het kniegewricht
- Palpatie: Met één vinger lokaliseerbare pijn
- Hughston's plica-test
- Stottertest
    `,
    treatment: `
- Rust. Vaak geeft fietsen klachten. Vermijd dit tijdelijk als dit het geval is.
- NSAID's (ontstekingsremmers)
- brace / tape om pijn te verminderen
- rekken van de hamstrings / kuitspieren en bovenbeenspieren
- goed schoeisel / inlegzooltjes
- gewichtsverlies indien er sprake is van overgewicht
- gedoseerde oefentherapie
    `,
    references: `
Cook, J., Rodas, G., McCall, A., Pruna, R., Kennedy, R., & Til, L. (2021). <em>Tendon injuries in football players: fc barcelona 2021 tendon guide</em>. FC Barcelona.
Malliaras, P., Cook, J., Purdam, C., & Rio, E. (2015). Patellar Tendinopathy: Clinical Diagnosis, Load Management, and Advice for Challenging Case Presentations. <em>Journal of Orthopaedic & Sports Physical Therapy, 45</em>(11).
Van Melick, N. (2022). Patellofemorale pijn bij de adolescente sporter; Deel 1: Diagnosticeren door in de beweegketen te redeneren. <em>Sportgericht 76</em>(4).
    `
});
