import Illness from "../Illness.js";
import RegularSymptom from "../RegularSymptom.js";

export default new Illness({
    id: "structural_scoliosis",
    name: "Structurele Scoliose",
    images: [
        "./images/back/scoliosis.jpg",
    ],
    pathophysiology: `
Zijdelinge kromming van de wervelkolom die komt door een verkeerde groei van de wervelkolom. Er vindt ook rotatie plaats in de wervelkolom dus scoliose dient vanuit een 3D-perspectief bekeken te worden.

Oorzaken van structurele scoliose:
    - 80% idiopathisch
    - 10% congenitaal (aangeboren)
    - 10% overige oorzaken
    `,
    epidemiology: `
Prevalentie: 2-4% (scoliose totaal)
    `,
    timeCourse: 'Klachten ontstaan geleidelijk tijdens de groei',
    symptoms: [
new RegularSymptom('Zichtbare misvorming van de romp, wordt vaak door de ouders ontdekt'),
    ],
    diagnostics: `
- Bij voorover bukken niet-corrigerende gibbus of torsie
- Structurele verandering in wervels (röntgenfoto)
- Cobbse hoek > 10 graden
    `,
    treatment: `
- Behandeling moet pas worden ingesteld als progressie is aangetoond; een stabiele en cosmetisch acceptabele bocht hoeft niet te worden behandeld.

- Normale fysio- en oefentherapie is niet effectief om de cobbse hoek te verminderen, maar het kan wel goed zijn om advies over training van de spieren te geven om te voorkomen dat het nog erger wordt

- De Schroth-methode lijkt wel de cobbse hoek te kunnen verminderen maar die is ingewikkeld en vereist een aparte cursus

- Brace bij een bocht met een Cobbse hoek tussen 25-40 graden. Een brace heeft geen effect of veroorzaakt tenminste geen verbetering, maar dat kan ook met de lage therapietrouw te maken hebben aangezien zo'n brace idealiter bijna de hele tijd gedragen moet worden en dat is niet te doen

- Operatie is wel effectief, maar ook zeer ingrijpend en riskant
    `,
    references: `
Verhaar, J. A. N., & Mourik, J. B. A. van (Eds.). (2019). <em>Leerboek orthopedie</em> (Vierde, herziene druk). Bohn Stafleu van Loghum.
    `
});
