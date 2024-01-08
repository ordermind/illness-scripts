import Illness from "../Illness.js";

export default new Illness({
    id: "non_structural_scoliosis",
    name: "Niet-structurele Scoliose",
    images: [
        "./images/back/scoliosis.jpg",
    ],
    pathophysiology: `
- Zijdelinge kromming van de wervelkolom die komt door omstandigheden anders dan de groei van de wervels.

Oorzaken van niet-structurele scoliose:
- Beenlengteverschil:
<ul class="list-unstyled">
    <li>< 2 cm is normaal</li>
    <li>> 3 cm is waarneembaar</li>
    <li>< 5 cm niet-operatief op te vangen (langzamerhand een zooltje opbouwen zodat het niet in een keer teveel wordt)</li>
</ul>
- Fysiologisch normaal bij groeiend kind
- Houding
    `,
    epidemiology: `
Prevalentie: 2-4% (scoliose totaal)
    `,
    timeCourse: 'Klachten ontstaan geleidelijk',
    symptoms: `
- Zichtbare misvorming van de romp, wordt vaak door de ouders ontdekt
    `,
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
