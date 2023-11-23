import Illness from "../Illness.js";
import RegularSymptom from "../RegularSymptom.js";

export default new Illness({
    id: "osteochondritis-dissecans",
    name: "Osteochondritis dissecans (OD)",
    pathophysiology: `
- Bij osteochondritis dissecans sterft het kraakbeen en het ondergelegen stuk bot af waardoor er een losliggend ‘eilandje’ ontstaat. Dit wordt ook wel een OD haard genoemd. Het kleine, losgelaten stukje bot en kraakbeen kan los in het gewricht gaan liggen. Dit belemmert de beweging van het gewricht en veroorzaakt pijn. Het losliggende stuk kraakbeen veroorzaakt soms ook een ontstekingsreactie.
    `,
    timeCourse: 'Ontstaat vermoedelijk na herhaalde (micro)traumata bij actieve sportbeoefening.',
    symptoms: [
new RegularSymptom('Pijn optreedt bij <strong>belastende activiteiten</strong> als <strong>traplopen of sporten</strong>. Er kunnen ook wisselend slotklachten aanwezig zijn als het stukje bot loslaat.'),
    ],
    diagnostics: `
- Inspectie: Zwelling na belasting.
- Röntgenfoto
- Soms volgt een MRI-scan van het gewricht om te bepalen in welk stadium de aandoening zich bevindt en hoe groot het (losgeraakte) stuk kraakbeen is.
    `,
    treatment: `
- Indien de patiënt nog in de groei zit en de groeischijven nog niet gesloten zijn, bestaat er een grote kans dat er <strong>spontane genezing</strong> optreedt. Er mag meestal <strong>belast worden op geleide van de klachten</strong>. Er zal op verschillende momenten met een röntgenfoto gecontroleerd worden of er veranderingen optreden. Alleen bij volledige loslating van het boteilandje met het hierop vastzittende kraakbeen, bestaat er een reden een operatieve ingreep te verrichten. Er wordt dan een kijkoperatie uitgevoerd. Het botfragment wordt vastgemaakt waarbij een klein schroefje kan worden gebruikt, die onder het kraakbeenoppervlak komt te liggen.
    `
});