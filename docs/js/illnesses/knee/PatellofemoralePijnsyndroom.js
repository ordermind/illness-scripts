import Illness from "../Illness.js";
import RegularSymptom from "../RegularSymptom.js";

export default new Illness({
    id: "pfps",
    name: "Patellofemorale pijnsyndroom (PFPS)",
    pathophysiology: `
- Moeilijk te omschrijven diagnose, wordt gebruikt als geen andere duidelijke aandoening gevonden wordt
- De meeste experts denken dat de mechanisme van schade bij PFPS komt door een verkeerde loop van de patella. Bij een normale knie zou de patella tussen de twee condylen van het femur moeten lopen, in de trochlea. Bij individuen met PFPS loopt de patella vaak niet door de trochlea maar gaat tijdens flexie een andere kant op, meestal dan over de laterale condyl van het femur. Dit leidt tot een verhoogde druk en wrijving aan de <strong>binnenkant van de patella</strong>. Op termijn kan de verhoogde frictie en druk tot verzachting en schade van het kraakbeen bij de binnenkant van de patella leiden. In de verlenging kan dit de permanente aandoening Chondromalacia Patellae (CP) veroorzaken.
    `,
    epidemiology: `
- Jeugdige sporters in de groei
- Komt niet vaak voor
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

    `,
    treatment: `
Volgorde:
1. Educatie van de patiënt en eventueel de ouders/verzorgers en trainer/coach - bewegen binnen pijngrens, pijnuitlokkende activiteiten vermijden
2. Tapen
3. Arthrogene en/of myofasciale mobilisaties bij ROM-beperkingen
4. Oefentherapie, waaronder krachttraining en neuromusculaire training van quadriceps en heupen
    `
});
