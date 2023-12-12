import markdownParser from "../../js/markdown-parser.js";

/**
 * Renders markdown text.
 */
function massageText(text) {
    return markdownParser.parse(text.trim());
}

function themeTableOfContents(illness) {
    let content = '<li><a href="#">(naar boven)</a></li>';

    if(illness.pathophysiology) {
        content += '<li><a href="#pathophysiology">Pathofysiologie</a></li>';
    }

    if(illness.epidemiology) {
        content += '<li><a href="#epidemiology">Epidemiologie</a></li>';
    }

    if(illness.timeCourse) {
        content += '<li><a href="#time-course">Verloop</a></li>';
    }

    if(illness.symptoms) {
        content += '<li><a href="#symptoms">Symptomen</a></li>';
    }

    if(illness.diagnostics) {
        content += '<li><a href="#diagnostics">Diagnostiek</a></li>';
    }

    if(illness.treatment) {
        content += '<li><a href="#treatment">Behandeling</a></li>';
    }

    if(illness.references) {
        content += '<li><a href="#references">Bronnen</a></li>';
    }

    return `
<div class="block-toc">
    <p class="fs-6 mb-0 position-relative">Inhoudsopgave<span class="triggerArea trigger" data-bs-toggle="collapse" data-bs-target="#collapseToc"></span></p>
    <div id="collapseToc" class="collapse">
        <ul class="list-unstyled pt-2 mb-0">
            ${content}
        </ul>
    </div>
</div>
`
}

export default function themeIllnessContent(illness) {
    let content = themeTableOfContents(illness);

    if(illness.images.length) {
        content += `<div class="mb-3 text-center">`;
        for(const src of illness.images) {
            content += `<img src="${src}" />`;
        }
        content += `</div>`;
    }
    content += `<h2 class="display-2 fs-5 mb-3 fw-bold text-uppercase">${illness.name}</h2>`;
    if(illness.description) {
        content += `${massageText(illness.description)}`
    }

    if(illness.pathophysiology) {
        content += `
<h3 id="pathophysiology" class="display-3 fs-4 bg-light text-dark p-2">Pathofysiologie</h3>
${massageText(illness.pathophysiology)}
`;
    }

    if(illness.epidemiology) {
        content += `
<h3 id="epidemiology" class="display-3 fs-4 bg-light text-dark p-2">Epidemiologie</h3>
${massageText(illness.epidemiology)}
`; 
    }

    if(illness.timeCourse) {
        content += `
<h3 id="time-course" class="display-3 fs-4 bg-light text-dark p-2">Verloop</h3>
${massageText(illness.timeCourse)}
`; 
    }

    if(illness.symptoms) {
        content += `
<h3 id="symptoms" class="display-3 fs-4 bg-light text-dark p-2">Symptomen</h3>
${massageText(illness.symptoms)}
`;
    }

    if(illness.diagnostics) {
        content += `
<h3 id="diagnostics" class="display-3 fs-4 bg-light text-dark p-2">Diagnostiek</h3>
${massageText(illness.diagnostics)}
`; 
    }

    if(illness.treatment) {
        content += `
<h3 id="treatment" class="display-3 fs-4 bg-light text-dark p-2">Behandeling</h3>
${massageText(illness.treatment)}
`; 
    }

    if(illness.references) {
        content += `
<h3 id="references" class="display-3 fs-4 bg-light text-dark p-2">Bronnen</h3>
${massageText(illness.references)}
`; 
    }

    return content;
}