import Illness from "../Illness.js";
import RegularSymptom from "../RegularSymptom.js";

export default new Illness({
    id: "referred-pain",
    name: "Referred pain",
    pathophysiology: `
- Pijn veroorzaakt door aandoening buiten de knie, bijvoorbeeld de heup
    `,
    epidemiology: `
- Komt niet vaak voor
    `,
    timeCourse: 'Klachten ontstaan geleidelijk',
    diagnostics: `
- Inspectie: afwijkingen bij bewegingsonderzoek van de heupafwijkingen bij bewegingsonderzoek van de heup
    `,
    treatment: `De oorzaak van de referred pain moet aangepakt worden.`,
    references: `
Belo, J.N., Bierma-Zeinstra, S.M.A., Kuijpers, T., Opstelten, W., Van den Donk, M.,Weisscher, P.J., & Wildervanck-Dekker, C.M.J. (2020). <em>NHG-Standaard Niet-traumatische knieklachten (M107)</em>. Nederlands Huisartsen Genootschap.
Cook, J., Rodas, G., McCall, A., Pruna, R., Kennedy, R., & Til, L. (2021). <em>Tendon injuries in football players: fc barcelona 2021 tendon guide</em>. FC Barcelona.
    `
});
