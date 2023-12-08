import Illness from "../Illness.js";

export default new Illness({
    id: "tendinopathie-patella",
    name: "Tendinopathie patellapees",
    images: [
        "./images/knee/jumpers-knee.jpg",
    ],
    description: "Ook bekend als \"Jumper's knee\" (springersknie).",
    pathophysiology: `Tendinopathie van het lig. patellae.`,
    epidemiology: `
- Vaak gezien bij hardlopers
- Komt vaak voor bij adolescenten, met name als ze al Osgood-Schlatter hebben gehad.
    `,
    timeCourse: 'Meestal geleidelijk, soms acuut door een val.',
    symptoms: `
- Pijn is vooral aanwezig bij <strong>peesbelastende sportactiviteiten</strong>, zoals aanzetten, afremmen, springen.
- Pijn ter hoogte van de <strong>patellapees</strong>
- Pijn ontstaat direct bij belasting en verdwijnt meestal ook bijna direct als de belasting ophoudt
- De pijn kan soms verminderen door herhaalde belasting (de "warm-up fenomeen"), maar er is vaak pijn op de dag na plyometrische activiteiten
- Er is zelden pijn in rust

#### Stadia van pijn

- Stadium 1: pijn na het sporten (en ochtendstijfheid de dag erna)
- Stadium 2: pijn ook in het begin van het sporten
- Stadium 3: pijn tijdens het sporten
- Stadium 4: pijn ook tijdens ADL
    `,
    diagnostics: `
- Inspectie: Geen zwelling bij het kniegewricht
- Inspectie: Verdikte pees
- Palpatie: Met één vinger lokaliseerbare <strong>drukpijn</strong> op de <strong>patellapees</strong> ter hoogte van de onderrand van de patella of van de tuberositas tibiae.
- De klinische waarde van pijnprovocatie d.m.v. palpatie is beperkt omdat de pees ook bij andere aandoeningen gevoelig kan zijn, zoals bij PFPS.
- De hele kinetische keten moet bekeken worden om relevante zwakheden te identificeren bij heupen, knieën en enkelen.
- Vaak is <strong>zwakte</strong> van de <strong>quadriceps</strong> en <strong>kuit</strong> aanwezig, en de kracht van <strong>mm. glutei</strong> dient ook onderzocht te worden.
- Verminderde <strong>dorsaalflexie van de enkel</strong>, <strong>flexibiliteit van de hamstrings en quadriceps</strong>, en <strong>voetstand</strong> dienen onderzocht te worden aangezien bij sommigen daarvan een relatie met patellatendinopathie is gevonden
- De <strong>single leg decline squat</strong> creërt snel veel gelokaliseerde pijn tijdens de flexie. Dit kan gebruikt worden om de waarschijnlijkheid van de diagnose te verhogen en ook om de gevoeligheid van de pees te bepalen.
- <strong>Dose-dependent pain</strong> is een karakteristieke eigenschap. Dit betekent dat de pijn toeneemt naarmate de belasting toeneemt. Bijvoorbeeld zou de pijn moeten toenemen als je van een lichte naar een diepe squat gaat.
- Sporters met patellatendinopathie hebben de neiging om stijf te landen om de flexie te verminderen
- VISA-P vragenlijst om de ernst van de klachten te beoordelen en voortgang bij te houden
- Lengtetest
- Weerstandstest
    `,
    treatment: `
- De belasting dient door de hele keten verspreid te worden, en eventuele zwakke punten die overmatige belasting op de pees veroorzaken moeten gecorrigeerd worden
- Behandeling van de pees zelf bij tendinopathie: Isometrisch -> HSR -> Functional endurance -> Energy storage and release loads -> Return to training loads
    `,
    references: `
Cook, J., Rodas, G., McCall, A., Pruna, R., Kennedy, R., & Til, L. (2021). <em>Tendon injuries in football players: fc barcelona 2021 tendon guide</em>. FC Barcelona.

Malliaras, P., Cook, J., Purdam, C., & Rio, E. (2015). Patellar Tendinopathy: Clinical Diagnosis, Load Management, and Advice for Challenging Case Presentations. <em>Journal of Orthopaedic & Sports Physical Therapy, 45</em>(11).

Van Melick, N. (2022). Patellofemorale pijn bij de adolescente sporter; Deel 1: Diagnosticeren door in de beweegketen te redeneren. <em>Sportgericht 76</em>(4).
    `
});
