function massageText(text) {
    return text.trim();
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
        content += `<p>${massageText(illness.description)}</p>`
    }

    if(illness.pathophysiology) {
        content += `
<h3 class="display-3 fs-4">Pathofysiologie</h3>
<p>${massageText(illness.pathophysiology)}</p>
`;
    }

    if(illness.epidemiology) {
        content += `
<h3 class="display-3 fs-4">Epidemiologie</h3>
<p>${massageText(illness.epidemiology)}</p>
`; 
    }

    if(illness.timeCourse) {
        content += `
<h3 class="display-3 fs-4">Verloop</h3>
<p>${massageText(illness.timeCourse)}</p>
`; 
    }

    if(illness.symptoms) {
        content += `
<h3 class="display-3 fs-4">Symptomen</h3>
<p>${massageText(illness.symptoms)}</p>
`;
    }

    if(illness.diagnostics) {
        content += `
<h3 class="display-3 fs-4">Diagnostiek</h3>
<p>${massageText(illness.diagnostics)}</p>
`; 
    }

    if(illness.treatment) {
        content += `
<h3 class="display-3 fs-4">Behandeling</h3>
<p>${massageText(illness.treatment)}</p>
`; 
    }

    if(illness.references) {
        content += `
<h3 class="display-3 fs-4">Bronnen</h3>
<p>${massageText(illness.references)}</p>
`; 
    }

    return content;
}