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
    treatment: `De oorzaak van de referred pain moet aangepakt worden.`
});
