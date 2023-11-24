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
        content += `<p>${illness.description.split("\n").join("</p><p>")}</p>`
    }

    if(illness.pathophysiology) {
        content += `
<h3 class="display-3 fs-4">Pathofysiologie</h3>
<p>${illness.pathophysiology.split("\n").join("</p><p>")}</p>
`;
    }

    if(illness.epidemiology) {
        content += `
<h3 class="display-3 fs-4">Epidemiologie</h3>
<p>${illness.epidemiology.split("\n").join("</p><p>")}</p>
`; 
    }

    if(illness.timeCourse) {
        content += `
<h3 class="display-3 fs-4">Verloop</h3>
<p>${illness.timeCourse.split("\n").join("</p><p>")}</p>
`; 
    }

    if(illness.hasSymptoms()) {
        content += `<h3 class="display-3 fs-4">Symptomen</h3>`;

        if(illness.symptoms.regular.length) {
            illness.symptoms.regular.forEach(item => content += `<p>- ${item.content}</p>`);
        }

        if(illness.symptoms.key.length) {
            content += '<h4 class="display-4 fs-5">Sleutelsymptomen</h4>' + illness.symptoms.key.map(item => `<p>- ${item.content}</p>`);
        }

        if(illness.symptoms.reject.length) {
            content += '<h4 class="display-4 fs-5">Uitsluitende symptomen</h4>' + illness.symptoms.reject.map(item => `<p>- ${item.content}</p>`);
        }
    }

    if(illness.diagnostics) {
        content += `
<h3 class="display-3 fs-4">Diagnostiek</h3>
<p>${illness.diagnostics.split("\n").join("</p><p>")}</p>
`; 
    }

    if(illness.treatment) {
        content += `
<h3 class="display-3 fs-4">Behandeling</h3>
<p>${illness.treatment.split("\n").join("</p><p>")}</p>
`; 
    }

    if(illness.references) {
        content += `
<h3 class="display-3 fs-4">Bronnen</h3>
<p>${illness.references.split("\n").join("</p><p>")}</p>
`; 
    }

    return content;
}