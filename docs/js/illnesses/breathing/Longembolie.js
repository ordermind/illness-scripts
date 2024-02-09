import Illness from "../Illness.js";

export default new Illness({
    id: "pulmonary_embolism",
    name: "Longembolie",
    images: [
        "./images/breathing/pulmonary-embolism.webp",
    ],
    pathophysiology: `
#### Definitie

Longembolie is een (gedeeltelijke) afsluiting van een longslagader door een embolus, waardoor een deel van de long niet of slechts gedeeltelijk van bloed wordt voorzien.

Vaak komt dit vanwege een veneuze trombo-embolie (VTE) b.v. in het been, die loskomt en uiteindelijk bij de longen terecht komt. De longembolie zelf valt dus ook onder de categorie VTE omdat het precies hetzelfde ziektebeeld is.

De drie belangrijkste factoren die bijdragen aan de ontwikkeling van een (diep) veneuze trombose zijn de <strong>Trias van Virchow</strong>:

- Hemodynamische veranderingen - Verandering in de bloedstroom
- Vasculair endotheel letsel - Beschadiging van de vaatwand
- Hypercoagulabiliteit - Verandering in de bloedsamenstelling

#### Risicofactoren

De risicofactoren zijn dezelfde als bij andere cardiovasculaire aandoeningen:
- Roken
- Alcohol
- Diabetes mellitus
- Reumatoïde artritis
- Hoge bloeddruk
- Hoog cholesterol
- Overgewicht
- Stress
- Erftelijkheid
- Inactiviteit
- Leeftijd
- Mannelijk geslacht

#### Complicaties

- Hemodynamische effecten: vanwege de grotere weerstand in de kleine bloedsomloop kan je in schok komen omdat het hart die weerstand niet aan kan.
    `,
    diagnostics: `
#### Anamnese

Vraag naar:

- kortademigheid
- pijn op de borst of pijn vastzittend aan de ademhaling
- hoesten
- hemoptoë (bloed ophoesten)
- collaps(neiging)

#### Lichamelijk onderzoek

- vitale functies: bloeddruk, zuurstofsaturatie, pols- en ademhalingsfrequentie, en op indicatie temperatuur. Let op: een goede zuurstofsaturatie sluit een longembolie niet uit.
- auscultatie: crepitaties, verminderd ademgeruis. Let op: bij auscultatie meestal geen afwijkingen.
- inspectie en palpatie van beide benen
    `,
    references: `
Geersing, G.J., Kessel, L.S., Poldervaart, J.M., Sival, P.P.E., Smits, P.L.M., Thissen, L.G.P., Van den Donk, M., Van Nieuwenhuijze, F.M., Van Osselen, E.C.M., Wichers, I.M. (2023). <em>NHG-Standaard Diepveneuze trombose en longembolie (M86)</em>. Nederlands Huisartsen Genootschap. Geraadpleegd op 9 februari 2024, van https://richtlijnen.nhg.org/files/pdf/35_Diepveneuze%20trombose%20en%20longembolie_november-2023.pdf
    `,
});