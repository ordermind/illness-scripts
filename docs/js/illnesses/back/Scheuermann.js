import Illness from "../Illness.js";

export default new Illness({
    id: "scheuermann",
    name: "Ziekte van Scheuermann",
    images: [
        "./images/back/scheuermann.jpg",
    ],
    pathophysiology: `
Ziekte waarbij de voorkant van de wervels minder groeien dan de achterkant, waardoor een hyperkyfose ontstaat.
De oorzaak is onbekend.
    `,
    epidemiology: `
- Prevalentie: 0,2%-3%
- Komt evenvaak voor bij jongens als bij meisjes
- Eind kindertijd / begin adolescentie
- 1/3 heeft ook een scoliose
    `,
    timeCourse: 'Klachten ontstaan geleidelijk',
    symptoms: `
- Hyperkyfose
    `,
    diagnostics: `
- Versterkte thoracale kyfose ( = de bolle kromming van de wervelkolom in het borstgedeelte en sacrum)  > 45 graden
- Vaak compensatoire lumbale en cervicale lordose ( = de holle kromming van de wervelkolom in de cervicale en lumbale gedeelten)
- Bij extensie van de wervelkolom bewegen de wervels niet mee
    `,
    treatment: `
#### Fysiotherapie (bij milde vorm en in vroeg stadium)

- Rekken van de spieren die gespannen zijn / verkort worden door de compensatoire hyperlordose:
    - m. erector spinae
    - m. quadratus lumborum
    - m. iliopsoas
- Versterken van de spieren die verzwakt zijn / op rek komen door de hyperlordose:
    - buikspieren (m. rectus abdominis, m. obliquus externus abdominis, m. obliquus internus abdominis)
    - hamstrings
    - m. gluteus maximus
- De fysiotherapeutische behandeling heeft geen effect op het verloop, maar wel op verminderen pijnklachten (16%-32%)

#### Brace

- Positieve voorspellers:
    - Flexibele kyfose
    - Kyfose < 65 graden
    - Brace zorgt voor afname kyfose van > 15 graden
    - Kind nog minstens één jaar doorgroeien
- Zestien tot 23 uur per dag dragen, 18 maanden lang. Daarna langzaam afbouwen.

#### Operatie

- Kyfose van > 70 graden, welke niet gecorrigeerd kan worden door een brace
- Pijnklachten bij activiteiten, ondanks gebruik van medicatie, langer dan 6 maanden
- Grote zorgen van de patiënt over fysieke verschijning
    `,
});
