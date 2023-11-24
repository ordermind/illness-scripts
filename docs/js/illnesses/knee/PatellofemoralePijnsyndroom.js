import Illness from "../Illness.js";
import RegularSymptom from "../RegularSymptom.js";

export default new Illness({
    id: "pfps",
    name: "Patellofemorale pijnsyndroom (PFPS)",
    images: [
        "./images/knee/pfps.jpg",
    ],
    pathophysiology: `
- De meest gestelde diagnose bij anterieure kniepijn.
- Moeilijk te omschrijven diagnose, wordt gebruikt als geen andere duidelijke aandoening gevonden wordt
- De meeste experts denken dat de mechanisme van schade bij PFPS komt door een verkeerde loop van de patella. Bij een normale knie zou de patella tussen de twee condylen van het femur moeten lopen, in de trochlea. Bij individuen met PFPS loopt de patella vaak niet door de trochlea maar gaat tijdens flexie een andere kant op, meestal dan over de laterale condyl van het femur. Dit leidt tot een verhoogde druk en wrijving aan de <strong>binnenkant van de patella</strong>. Op termijn kan de verhoogde frictie en druk tot verzachting en schade van het kraakbeen bij de binnenkant van de patella leiden. In de verlenging kan dit de permanente aandoening Chondromalacia Patellae (CP) veroorzaken.
- Er zijn verschillende meningen over een eventuele relatie tussen PFPS op jonge leeftijd en patellofemorale artrose op latere leeftijd
    `,
    epidemiology: `
- De hoogste prevalentie wordt gezien bij sportieve adolescenten (10-18 jaar).
- De incidentie is 7% in de gemiddelde populatie, maar kan oplopen tot 40% in de actieve populatie.
    `,
    timeCourse: 'Klachten ontstaan geleidelijk',
    symptoms: [
new RegularSymptom('Pijn achter of rond de patella zonder aanwijzingen voor andere aandoeningen. De pijn verergert vaak bij <strong>lang zitten met gebogen knieën</strong>, hurken, knielen, traplopen of fietsen en vermindert bij rust en strekken van de knie.'),
new RegularSymptom('Pijn bij kracht zetten met gebogen knieën'),
new RegularSymptom('Bij sporters met PFPS is vaak toename van symptomen bij activiteiten die een <strong>lage peesbelasting</strong> veroorzaken, zoals wandelen of fietsen'),
new RegularSymptom('De <strong>pijn neemt af in extensie</strong>. Patiënten met PFPS staan graag met gestrekte knieën en lopen graag op schoenen met platte zolen.'),
new RegularSymptom('Soms zijn crepitaties, pseudoslotklachten of giving way aanwezig.'),
    ],
    diagnostics: `
- Inspectie in stand: Hoe is de stand van de voet? Hoe is de stand van het onderbeen ten opzichte van het bovenbeen?
- Inspectie met de patiënt in rugligging: Hoe is de stand van de patella? Hoe is de stand van de voorvoet?
- Inspectie knie: Meestal is er geen zwelling van de knie aanwezig; soms is er een minimale zwelling maar dan vooral diffuus rondom de patella
- Mobiliteit en neuromusculaire controle lumbale wervelkolom/bekken.
- Basisfunctie onderzoek van de knie: meestal zie je geen beperkingen in beweeglijkheid van het kniegewricht of het patellofemorale gewricht
- Basisfunctie onderzoek van de heup en enkel: veel voorkomende beperkingen in beweeglijkheid zijn een <strong>endorotatie</strong>- of <strong>extensie</strong>beperking van de heup en een <strong>dorsaalflexie</strong>beperking van de enkel. Neem ook altijd de belaste dorsaalflexie mobiliteit van de enkel (via de <strong>lunge-wall test</strong>) mee in je onderzoek.
- Myofasciale lengtetesten, zoals de Thomas test, de Ober test of een combinatie van testen waarbij je in de myofasciale keten onderzoekt.
- Palpatie in de myofasciale keten, voornamelijk om te bekijken of er myofasciale triggerpoints aanwezig zijn. Vaak zijn er actieve triggerpoints aanwezig in de <strong>mm. gluteï</strong> en <strong>quadriceps</strong>.
- Inspectie en palpatie van m. vastus medialis om eventuele atrofie te ontdekken
- Patellar Compression Test
- Patellar Apprehension Test
- Bewegingsbeperkingen die vaak voorkomen bij patiënten met PFPS zijn een verminderde rotatie in de thoracolumbale wervelkolom, een endorotatie- of extensiebeperking in de heup, een verminderde anterieure translatie van het proximale tibiofibulaire gewricht en een dorsaalflexiebeperking in de enkel
- Squat test waar je 1 squat lang aanhoudt (45 sec). Bij tendinopathie zal de pijn dan afnemen, bij PFPS niet.
- Step down test (op een stepup staan en het niet aangedane been naar beneden laten neerstappen, maar het gewicht op het aangedane gebogen been laten behouden)
- De <strong>single leg decline squat</strong> veroorzaakt minder pijn bij een diepe squat vergeleken met patellatendinopathie.
    `,
    treatment: `
Volgorde:
1. Educatie van de patiënt en eventueel de ouders/verzorgers en trainer/coach - bewegen binnen pijngrens, pijnuitlokkende activiteiten vermijden
2. Tapen
3. Arthrogene en/of myofasciale mobilisaties bij ROM-beperkingen
4. Oefentherapie, waaronder krachttraining en neuromusculaire training van quadriceps en heupen
    `,
    references: `
Belo, J.N., Bierma-Zeinstra, S.M.A., Kuijpers, T., Opstelten, W., Van den Donk, M.,Weisscher, P.J., & Wildervanck-Dekker, C.M.J. (2020). <em>NHG-Standaard Niet-traumatische knieklachten (M107)</em>. Nederlands Huisartsen Genootschap.
Cook, J., Rodas, G., McCall, A., Pruna, R., Kennedy, R., & Til, L. (2021). <em>Tendon injuries in football players: fc barcelona 2021 tendon guide</em>. FC Barcelona.
Malliaras, P., Cook, J., Purdam, C., & Rio, E. (2015). Patellar Tendinopathy: Clinical Diagnosis, Load Management, and Advice for Challenging Case Presentations. <em>Journal of Orthopaedic & Sports Physical Therapy, 45</em>(11).
Nuttall, C. & Winters, B.A. (2015). Understanding Anterior Knee Pain: Patellofemoral Pain Syndrome. <em>The Journal for Nurse Practitioners, 11</em>(10).
Van Berkel, S. (2010). <em>Mono-disciplinaire richtlijn Patellofemoraal pijnsyndroom</em>. Vereniging voor Sportgeneeskunde.
Van Melick, N. (2022). Patellofemorale pijn bij de adolescente sporter; Deel 1: Diagnosticeren door in de beweegketen te redeneren. <em>Sportgericht 76</em>(4).
Van Melick, N. (2022). Patellofemorale pijn bij de adolescente sporter; Deel 2: Bestaat er een one-size-fits-all behandeling? <em>Sportgericht 76</em>(5).
    `
});
