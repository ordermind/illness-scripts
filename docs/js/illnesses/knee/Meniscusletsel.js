import Illness from "../Illness.js";

export default new Illness({
    id: "meniscus-injury",
    name: "Meniscusletsel",
    images: [
        "./images/knee/meniscusletsel.jpg",
    ],
    pathophysiology: `
- Meniscusletsel is de verzamelnaam voor een aantal verschillende complicaties aan de meniscus. Hieronder vallen bijvoorbeeld een meniscusscheur en een meniscectomie (het verwijderen van een deel van de meniscus).
- Klachten ontstaan na knietrauma in het verleden
    `,
    symptoms: `
- Stekende pijn in de knie bij belasting
- Recidiverende hydrops ( = zwelling vanwege vocht)
- Mogelijk slotverschijnselen
- Mogelijk instabiliteit van de knie
    `,
    diagnostics: `
- Inspectie: meestal zwelling op de plaats van de letsel
- Als zowel de Thessaly test en McMurray test negatief zijn, dan is het onwaarschijnlijk dat er sprake is van meniscusletsel.
- Verdere voorzichtigheid met het toepassen van meniscustesten is op zijn plaats indien er ook een voorste kruisband ruptuur aanwezig is. Hierdoor neemt de betrouwbaarheid van de meniscustesten verder af.
- Röntgenfoto
- MRI
    `,
    treatment: `
- Geleidelijk belastbaarheid weer opbouwen, net als bij ruptuur van ligamenten
- Vaak is er geen operatie nodig en zal de meniscus zelf genezen of zullen de klachten na een trauma vanzelf afnemen.
- Operatie
    `,
    references: `
Belo, J.N., Bierma-Zeinstra, S.M.A., Kuijpers, T., Opstelten, W., Van den Donk, M.,Weisscher, P.J., & Wildervanck-Dekker, C.M.J. (2020). <em>NHG-Standaard Niet-traumatische knieklachten (M107)</em>. Nederlands Huisartsen Genootschap.
    `
});
