import Illness from "../Illness.js";

export default new Illness({
    id: "sarcopenia",
    name: "Sarcopenie",
    images: [
        "./images/misc/sarcopenia.jpg",
    ],
    pathophysiology: `
Sarcopenie is een progressieve spierziekte (spierfalen). De EWGSOP2 criteria voor sacropenie zijn als volgt:
- Lage spierkracht
- Lage kwantiteit of kwaliteit van de spier
- Lage fysieke capaciteit

#### Mogelijke oorzaken

- Gerelateerd aan leeftijd
- Maar ook: Activiteit-, voeding- en ziekte gerelateerd
    - Neuromusculaire factoren
    - Systemische en cellulaire factoren, o.a. hormonen, inflammatoire factoren
    - Leefstijl en andere factoren, o.a. gebrek aan fysieke activiteit, voedingsintake, gebrek aan vit. D

#### Mogelijke gevolgen

- Mobiliteitsstoornissen, valrisico, hoger risico op fracturen
- Beperking bij ADL
- Hoger risico op morbiditeit (HVZ, ademhalingsziekten, cognitieve beperkingen)
- Lagere kwaliteit van leven, afhankelijkheid, behoefte aan langdurige zorg
- Hogere mortaliteit
    `,
    epidemiology: `
Sarcopenie wordt vaak geassocieerd met ouderen, maar begint al vroeger in het leven.

Prevalentie: globaal 5% voor de EWGSOP2 definitie
    `,
    timeCourse: `
Sacropenie ontstaat geleidelijk.
    `,
    symptoms: `
- vallen
- gevoel van fysieke zwakte
- langzaam lopen
- moeite met het opstaan vanuit een stoel
- afvallen
    `,
    diagnostics: `
<table class="table">
    <tr>
        <td>
            <h4>Screening</h4>
            <ul>
                <li><a target="_blank" href="https://meetinstrumentenzorg.nl/instrumenten/strength-assistance-with-walking-rise-from-a-chair-climb-stairs-and-falls/">SARC-F vragenlijst</a></li>
            </ul>
            <h4>Spierkracht</h4>
            <ul>
                <li><a target="_blank" href="https://meetinstrumentenzorg.nl/instrumenten/handknijpkrachtmeter-hand-held-dynamometer/">HHD-test</a> om de knijpkracht te meten</li>
                <li><a target="_blank" href="https://meetinstrumentenzorg.nl/instrumenten/timed-chair-stand-test/">Five Times Sit to Stand Test</a></li>
            </ul>
            <h4>Spiermassa / spierkwaliteit</h4>
            <ul>
                <li>ASMM (appendicular skeletal muscle mass) d.m.v. DXA (dual-energy x-ray absorptiometry)</li>
                <li>Doorsnede dijspier d.m.v. CT (computed tomography) of MRI</li>
                <li>SMM of ASMM in het hele lichaam d.m.v. MRI</li>
                <li>Doorsnede dijspier d.m.v. CT (computed tomography) of MRI</li>
                <li>Doorsnede lumbale spier d.m.v. CT of MRI</li>
                <li>Spierkwaliteit bepalen d.m.v. spierbiopsie, CT, MR of MRS (magnetic resonance spectroscopy)</li>
            </ul>
            <h4>Fysieke capaciteit</h4>
            <ul>
                <li><a target="_blank" href="https://www.nihtoolbox.org/test/4-meter-walk-gait-speed-test/">NIH Toolbox 4 Meter Walk Gait Speed Test</a></li>
                <li><a target="_blank" href="https://meetinstrumentenzorg.nl/instrumenten/short-physical-performance-battery/">SPPB</a></li>
                <li><a target="_blank" href="https://meetinstrumentenzorg.nl/instrumenten/timed-up-go-test-2/">TUG test</a></li>
                <li><a target="_blank" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2939839/">400-meter walk test (400MWT)</a></li>
            </ul>
        </td>
        <td>
            <img src="./images/misc/sarcopenie-diagnostiek.jpg" />
        </td>
    </tr>
</table>
    `,
    treatment: `
- optimaliseren van het innemen van eiwitten
- extra vitamine D
- fysieke training
    `,
    references: `
Cruz-Jentoft, A. J., Bahat, G., Bauer, J., Boirie, Y., Bruyère, O., Cederholm, T., Cooper, C., Landi, F., Rolland, Y., Sayer, A. A., Schneider, S. M., Sieber, C. C., Topinkova, E., Vandewoude, M., Visser, M., Zamboni, M., & Writing Group for the European Working Group on Sarcopenia in Older People 2 (EWGSOP2), and the Extended Group for EWGSOP2 (2019). Sarcopenia: revised European consensus on definition and diagnosis. <em>Age and ageing, 48</em>(1), 16-31. https://doi.org/10.1093/ageing/afy169

Yuan, S., & Larsson, S. C. (2023). Epidemiology of sarcopenia: Prevalence, risk factors, and consequences. <em>Metabolism: clinical and experimental, 144</em>, 155533. https://doi.org/10.1016/j.metabol.2023.155533
    `
});
