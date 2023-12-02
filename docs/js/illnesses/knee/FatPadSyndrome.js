import Illness from "../Illness.js";

export default new Illness({
    id: "infrapatellar-fat-pad-syndrome",
    name: "Fat Pad Syndrome",
    images: [
        "./images/knee/fat-pad-syndrome.jpg",
    ],
    pathophysiology: `Impingement van het vetlichaam van Hoffa door hyperextensie of herhaalde extensie.`,
    epidemiology: `Komt vaker voor bij adolescenten.`,
    timeCourse: 'Klachten ontstaan soms geleidelijk, soms na een trauma.',
    symptoms: `
- Pijn is vooral aanwezig bij activiteiten in extensie.
    `,
    diagnostics: `
- Palpatie: drukpijn en zwelling van het vetlichaam van Hoffa.
- Hoffa test (niet gevalideerd)
    `,
    references: `
Cook, J., Rodas, G., McCall, A., Pruna, R., Kennedy, R., & Til, L. (2021). <em>Tendon injuries in football players: fc barcelona 2021 tendon guide</em>. FC Barcelona.

Van Melick, N. (2022). Patellofemorale pijn bij de adolescente sporter; Deel 1: Diagnosticeren door in de beweegketen te redeneren. <em>Sportgericht 76</em>(4).

Malliaras, P., Cook, J., Purdam, C., & Rio, E. (2015). Patellar Tendinopathy: Clinical Diagnosis, Load Management, and Advice for Challenging Case Presentations. <em>Journal of Orthopaedic & Sports Physical Therapy, 45</em>(11).
    `
});
