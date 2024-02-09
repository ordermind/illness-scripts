import Illness from "../Illness.js";

export default new Illness({
    id: "ild",
    name: "Interstitiële longziekten (ILD)",
    images: [
        "./images/breathing/ild.jpg",
    ],
    pathophysiology: `
#### Definitie

Interstitiële longziekten (ILD) is een verzamelnaam voor honderden verschillende longziekten die ontstekingen en/of het ontstaan van littekenweefsel (fibrosering) in de longen veroorzaken. De consequentie is <strong>diffusiestoornissen</strong>. Dit komt deels door het littekenweefsel zelf dat de gaswisseling belemmert, en deels doordat de compliantie afneemt waardoor de beschikbare oppervlakte voor gaswisseling afneemt.

De vaakst voorkomende ILD-ziekten zijn sarcoïdose en idiopathische pulmonale fibrose (IPF).

#### Interne risicofactoren

15-25% van de ILD-patiënten hebben een onderliggende auto-immuunziekte, met name dermatomyositis (DM) / polymyositis (PM), systemische sclerose (SSc), reumatoïde artritis (RA), morbus Sjögren (SS), systemische lupus erythematodes (SLE), of mixed connective tissue disease (MCTD).

#### Complicaties

- Longfibrose
- Respiratoire insufficiëntie
- Opportunistische infecties
- Pulmonale hypertensie
- Pneumothorax
    `,
    epidemiology: `
- Leeftijd: > 50 jaar
- Komt 2x zo vaak voor bij vrouwen als bij mannen
    `,
    timeCourse: `
Progressief beloop.
    `,
    diagnostics: `
#### Anamnese

- Respiratoire klachten op voorgrond
- Luchtwegrestrictie
- Systeemziekten
- Familie-anamnese
- (Beroeps)expositie
- Medicatie
- Uitlokkende factoren

#### Lichamelijk onderzoek

- Auscultatie: Inspiratoire crepitaties
- Respiratoire insufficiëntie
    - Ademhalingsfrequentie
    - Hulpademhalingspieren
- Aanwijzingen systeemziekten

#### Aanvullend onderzoek

- Histologie
- Longfunctie
- Röntgenonderzoek
- Arteriële bloedgasanalyse
- Bloedonderzoek
- Bronchoalveolaire lavage
    `,
    references: `
Voortman, M. (2018). Interstitiële longaandoeningen bij auto-immuunaandoeningen. <em>IDL Care Today, 11</em>(2). ILD Care Foundation. Geraadpleegd op 9 februari 2024, van https://www.ildcare.nl/wp-content/uploads/2018/10/683911_NM1_ildCARE_22SP_artVoortman.pdf
    `,
});