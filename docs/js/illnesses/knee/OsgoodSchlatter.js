import Illness from "../Illness.js";
import RegularSymptom from "../RegularSymptom.js";

export default new Illness({
    id: "osgood-schlatter",
    name: "Ziekte van Osgood-Schlatter",
    pathophysiology: `
- Irritatie van de groeiplaat ter hoogte van het scheenbeen, vlak onder de knieschijf. De irritatie ontstaat vanwege overbelasting.
    `,
    epidemiology: `
- Komt vaak voor bij adolescenten, vooral jeugdige sporters in de groei.
- Klachten ontstaan tussen 10-15 jaar; vaker bij jongens dan bij meisjes
    `,
    timeCourse: 'Klachten ontstaan geleidelijk',
    symptoms: [
new RegularSymptom('Pijn tijdens <strong>peesbelastende (sport)activiteiten</strong>, zoals aanzetten, afremmen, springen.'),
new RegularSymptom('Pijn bij tuberositas tibiae')
    ],
    diagnostics: `
- Palpatie: Met één vinger lokaliseerbare pijn. 
- (druk)pijnlijke zwelling ter hoogte van tuberositas tibiae, veelal unilateraal.
- Röntgenfoto
    `,
    treatment: `
- Het syndroom van Osgood-Schlatter gaat in ruim 90% van de gevallen vanzelf over. Maar dit duurt lang, soms een aantal maanden tot meer dan een jaar.
- Actief blijven binnen pijngrens.
    `
});
