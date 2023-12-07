import Illness from "../Illness.js";

export default new Illness({
    id: "osgood-schlatter",
    name: "Ziekte van Osgood-Schlatter",
    images: [
        "./images/knee/osgood-schlatter.jpg",
    ],
    pathophysiology: `
- Irritatie van de groeiplaat ter hoogte van het scheenbeen, vlak onder de knieschijf. De irritatie ontstaat vanwege <strong>overbelasting</strong>.
- Verhoogt het risico op een latere tendinopathie van het lig. patellae
    `,
    epidemiology: `
- Komt vaak voor bij adolescenten, vooral jeugdige sporters in een groeispurt.
- Klachten ontstaan tussen 10-15 jaar; vaker bij jongens dan bij meisjes
    `,
    timeCourse: 'Klachten ontstaan geleidelijk',
    symptoms: `
- Pijn tijdens <strong>peesbelastende (sport)activiteiten</strong>, zoals aanzetten, afremmen, springen.
- Pijn bij tuberositas tibiae
    `,
    diagnostics: `
- Palpatie: Met één vinger lokaliseerbare pijn. 
- (druk)pijnlijke zwelling ter hoogte van tuberositas tibiae, veelal unilateraal.
- Röntgenfoto
    `,
    treatment: `
- Het syndroom van Osgood-Schlatter gaat in ruim 90% van de gevallen vanzelf over na de groeispurt. Maar dit duurt lang, soms een aantal maanden tot meer dan een jaar.
- Behandeling lijkt op de behandeling van tendinopathie, met focus op het handhaven van de belasting en het opbouwen van kracht en effect door oefentherapie.
    `,
    references: `
Belo, J.N., Bierma-Zeinstra, S.M.A., Kuijpers, T., Opstelten, W., Van den Donk, M.,Weisscher, P.J., & Wildervanck-Dekker, C.M.J. (2020). <em>NHG-Standaard Niet-traumatische knieklachten (M107)</em>. Nederlands Huisartsen Genootschap.

Cook, J., Rodas, G., McCall, A., Pruna, R., Kennedy, R., & Til, L. (2021). <em>Tendon injuries in football players: fc barcelona 2021 tendon guide</em>. FC Barcelona.

Van Melick, N. (2022). Patellofemorale pijn bij de adolescente sporter; Deel 1: Diagnosticeren door in de beweegketen te redeneren. <em>Sportgericht 76</em>(4).
    `
});
