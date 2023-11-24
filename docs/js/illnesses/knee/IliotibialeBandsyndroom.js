import Illness from "../Illness.js";
import RegularSymptom from "../RegularSymptom.js";

export default new Illness({
    id: "itbs",
    name: "Iliotibiale Bandsyndroom (ITBS)",
    images: [
        "./images/knee/itbs.jpg",
    ],
    description: "Ook bekend als tractus iliotibialis frictie syndroom, of \"Runner's knee\" (lopersknie)",
    pathophysiology: `
- De tractus iliotibialis is een verdikt deel van de fascia lata en loopt van de crista iliaca anterior superior naar de laterale tibiacondyl. Door <strong>overmatig buigen en strekken</strong> van de knie ontstaat ter hoogte van de laterale femurcondyl irritatie van het tractusweefsel of van de onderliggende bursa
- Er bestaat geen consensus in de literatuur over de definitie van ITBS. ITBS is een overbelastingsblessure gekenmerkt door pijn ter hoogte van de laterale femurepicondyl.
- Bij ITBS lijkt er een inflammatoir proces aanwezig in het weefsel onder de ITB. Waarschijnlijk betreft dit vetweefsel maar gezien de verschillende bevindingen is het niet uitgesloten dat er ook een wisselende anatomie is tussen individuen.
    `,
    symptoms: [
new RegularSymptom('Pijn ter hoogte van de laterale femurcondyl tijdens of na het sporten. Er is sprake van pijn welke meestal optreedt tijdens <strong>hardlopen</strong> of <strong>fietsen</strong>, vaak <strong>na een voorspelbare afstand</strong>, en welke in de beginfase doorgaans snel verdwijnt in rust.'),
    ],
    diagnostics: `
- Er wordt drukpijn gevonden ter hoogte van de laterale femurepicondyl
- Verder bestaat er geen verdenking op andere intra-articulaire kniepathologie
- Test van Noble (palpatie bij 30 graden knieflexie)
    `,
    treatment: `
- Geleidelijk belastbaarheid weer opbouwen
    `,
    references: `
Belo, J.N., Bierma-Zeinstra, S.M.A., Kuijpers, T., Opstelten, W., Van den Donk, M.,Weisscher, P.J., & Wildervanck-Dekker, C.M.J. (2020). <em>NHG-Standaard Niet-traumatische knieklachten (M107)</em>. Nederlands Huisartsen Genootschap.
Van Berkel, S. (2010). <em>Mono-disciplinaire richtlijn Patellofemoraal pijnsyndroom</em>. Vereniging voor Sportgeneeskunde.
    `
});
