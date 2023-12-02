import Illness from "../Illness.js";

export default new Illness({
    id: "sinding-larsen-johansson",
    name: "Syndroom van Sinding-Larsen-Johansson",
    images: [
        "./images/knee/sinding-larsen-johansson.jpg",
    ],
    pathophysiology: `
- Irritatie van de groeiplaat ter hoogte van de onderzijde van de knieschijf (patella), waar de patellapees aanhecht op de knieschijf
    `,
    epidemiology: `
- Jeugdige sporters in de groei
- Komt niet vaak voor
    `,
    timeCourse: 'Klachten ontstaan geleidelijk',
    symptoms: `
- Pijn tijdens <strong>peesbelastende (sport)activiteiten</strong>, zoals aanzetten, afremmen, springen.
- Pijn bij onderkant van de patella
    `,
    diagnostics: `
- Palpatie: Met één vinger lokaliseerbare pijn.
    `,
    treatment: `
- De klachten gaan meestal vanzelf over, maar dit duurt lang (enkele maanden tot anderhalf jaar)
- Actief blijven binnen pijngrens.
    `,
    references: `
Malliaras, P., Cook, J., Purdam, C., & Rio, E. (2015). Patellar Tendinopathy: Clinical Diagnosis, Load Management, and Advice for Challenging Case Presentations. <em>Journal of Orthopaedic & Sports Physical Therapy, 45</em>(11).

Van Melick, N. (2022). Patellofemorale pijn bij de adolescente sporter; Deel 1: Diagnosticeren door in de beweegketen te redeneren. <em>Sportgericht 76</em>(4).
    `
});
