import { marked } from "../../js/marked.esm.min.js";

/**
 * Renders markdown text.
 */
function massageText(text) {
    return marked.parse(text.trim());
}

export default function themeIllnessContent(illness) {
    let content = '';

    if(illness.images.length) {
        content += `<div class="mb-3 text-center">`;
        for(const src of illness.images) {
            content += `<img src="${src}" />`;
        }
        content += `</div>`;
    }
    content += `<h2 class="display-2 fs-3 mb-3">${illness.name}</h2>`;
    if(illness.description) {
        content += `${massageText(illness.description)}`
    }

    if(illness.pathophysiology) {
        content += `
<h3 class="display-3 fs-4">Pathofysiologie</h3>
${massageText(illness.pathophysiology)}
`;
    }

    if(illness.epidemiology) {
        content += `
<h3 class="display-3 fs-4">Epidemiologie</h3>
${massageText(illness.epidemiology)}
`; 
    }

    if(illness.timeCourse) {
        content += `
<h3 class="display-3 fs-4">Verloop</h3>
${massageText(illness.timeCourse)}
`; 
    }

    if(illness.symptoms) {
        content += `
<h3 class="display-3 fs-4">Symptomen</h3>
${massageText(illness.symptoms)}
`;
    }

    if(illness.diagnostics) {
        content += `
<h3 class="display-3 fs-4">Diagnostiek</h3>
${massageText(illness.diagnostics)}
`; 
    }

    if(illness.treatment) {
        content += `
<h3 class="display-3 fs-4">Behandeling</h3>
${massageText(illness.treatment)}
`; 
    }

    if(illness.references) {
        content += `
<h3 class="display-3 fs-4">Bronnen</h3>
${massageText(illness.references)}
`; 
    }

    return content;
}