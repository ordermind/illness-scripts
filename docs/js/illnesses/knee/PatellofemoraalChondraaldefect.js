import Illness from "../Illness.js";
import RegularSymptom from "../RegularSymptom.js";

export default new Illness({
    id: "patellofemoral-chondral-defect",
    name: "Patellofemoraal Chondraaldefect",
    pathophysiology: `
- Schade aan het kraakbeen binnen het kniegewricht
    `,
    timeCourse: 'Ontstaat meestal na een trauma.',
    symptoms: [
new RegularSymptom('Pijn in de knie, de hoek van flexie wanneer de pijn optreedt is afhankelijk van defect.'),
    ],
    diagnostics: `
- Inspectie: In de acute situatie zwelling van de knie.
- Kraakbeenschade is meestal goed te zien op een <strong>MRI</strong> scan. Scheurtjes, losliggende stukken, de plaats en de grootte van het defect zijn allemaal te zien op een MRI scan
    `,
    treatment: `
- Een kraakbeendefect is een vervelende aandoening, omdat het beschadigde kraakbeen niet meer vanzelf terug zal groeien. Oefentherapie voor het optrainen van de spieren rond de knie om de belasting op het gewricht te verminderen kan de pijn verlichten.
- Rust nemen en het ontwijken van intensieve activiteiten kunnen ook helpen in het herstel. Daarnaast hebben <strong>gewichtsvermindering</strong> en schokabsorberende <strong>inlegzooltjes</strong> soms ook een positief effect
- Er zijn enkele goede behandelmethoden die de kans op volledig herstel vergroten zoals de microfractuurbehandeling, een kraakbeentransplantatie of een gecombineerde bot- en kraakbeentransplantatie. Dit zijn behandelingen die zorgen voor groei van nieuw kraakbeenachtig weefsel, waardoor een defect zich zou kunnen opvullen en herstellen. Daarnaast kan er soms, wanneer het oude stukje bot met kraakbeen uit het defect nog heel is en zich in de knie bevindt, een refixatie worden uitgevoerd.
    `
});
