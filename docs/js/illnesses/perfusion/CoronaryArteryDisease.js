import Illness from "../Illness.js";

export default new Illness({
    id: "coronary_artery_disease",
    name: "Coronairlijden",
    images: [
        "./images/perfusion/angina_pectoris.jpeg",
    ],
    pathophysiology: `
<h4>Angina Pectoris</h4>

De pijn bij angina pectoris wordt veroorzaakt door het (relatieve) zuurstofgebrek in een gedeelte van de hartspier door een arteriosclerotische vernauwing in de betrokken kransslagader.

<img src="./images/perfusion/coronary_artery_disease_pathophysiology.jpg" />

- Stabiele angina pectoris: alleen atherosclerotische plaque
- Instabiele angina pectoris: Tijdelijke verergering van gedeeltelijke blokkades in kransslagaders zonder blijvende schade. Niet-afsluitende trombus
- Acuut myocardinfarct: Volledige blokkade met blijvende schade. Afsluitende trombus

<h4>Acuut coronair syndroom</h4>

- Instabiele angina pectoris
- Myocardinfarct
    - Non-ST-elevated myocard infarct (non-STEMI)
    - ST-elevated myocard infarct (STEMI)
    `,
    symptoms: `
<h4>Stabiele Angina Pectoris</h4>

- Retrosternale beklemmende pijn
- Uitlokkende factoren: inspanning, emoties, warmte/kou
- Klachten verdwijnen in rust of bij gebruik van nitraten

<h4>Acuut coronair syndroom</h4>

- Retrosternale beklemmende pijn, heviger dan bij stabiele AP
- Klachten verdwijnen niet in rust
- Vegetatieve verschijnselen (misselijkheid, braken, zweten, grauwe kleur, doodsangst)
- Dyspneu
- Voorgeschiedenis

<h4>Symptomen van een hartinfarct bij vrouwen</h4>
<img src="./images/perfusion/heart_infarct_symptoms_women.jpg" />
    `,
    diagnostics: `

<h4>NYHA classificatie van Angina Pectoris</h4>

I. Geen klachten of bij extreme inspanning

II. Klachten bij flinke inspanning

III. Klachten bij normale dagelijkse activiteiten

IV. Klachten bij geringe inspanning of in rust

Classe I-III vallen onder <strong>stabiele angina pectoris</strong>. Classe IV valt onder <strong>instabiele angina pectoris</strong>.

<table class="table">
    <tr>
        <th></th>
        <th>Klachten in rust?</th>
        <th>ECG-afwijkingen in rust?</th>
        <th>Biomarkers?</th>
    </tr>
    <tr>
        <th>Stabiele AP</th>
        <td>Nee</td>
        <td>
            <p>Nee</p>
            <img src="./images/perfusion/ecg_normal.jpg" />
        </td>
        <td>Nee</td>
    </tr>
    <tr>
        <th>Instabiele AP</th>
        <td>Ja</td>
        <td>
            <p>Ja (repolarisatiestoornis)</p>
            <img src="./images/perfusion/ecg_iap.jpg" />
        </td>
        <td>Nee</td>
    </tr>
    <tr>
        <th>STEMI</th>
        <td>Ja (hevig)</td>
        <td>
            <p>Ja (elevatie van het ST-segment)</p>
            <img src="./images/perfusion/ecg_stemi.jpg" />
        </td>
        <td>Ja</td>
    </tr>
    <tr>
        <th>NSTEMI</th>
        <td>Ja (hevig)</td>
        <td>
            <p>Ja (overige afwijkingen)</p>
            <img src="./images/perfusion/ecg_nstemi.jpg" />
        </td>
        <td>Ja</td>
    </tr>
</table>
Biomarkers = stofjes die vrijkomen op het moment dat weefsel afsterft

<h4>Anamnese</h4>
<h5>LOFTIG</h5>

- Wat is de zorgvraag?
- Wat is de aanvang, de duur en het beloop van de klachten?
- Wat waren de functiestoornissen (aard en ernst) vóór het ontstaan van het cardiale incident of de verslechtering van het chronisch hartfalen?
- Wat zijn de huidige stoornissen in functies die de patiënt als gevolg van het coronairlijden of het chronisch hartfalen ervaart?

<h5>PSK</h5>

- Wanneer nemen de klachten toe en wanneer nemen ze af? Als u de drie belangrijkste activiteiten moet uitkiezen die hierdoor belemmerd worden, welke activiteiten zijn dat?
- Waarom lukt deze activiteit niet? / Hoe zou u de pijn omschrijven?
- Hoe erg is de klacht op een schaal van 0-10?
- Wat doet u om uw klacht te verminderen? In welke mate lukt dat?

- Wat waren de beperkingen in activiteit (aard en ernst vóór het ontstaan van het cardiale incident of de verslechtering van het chronisch hartfalen?
- Wat was het activiteitenniveau van de patiënt vóór het ontstaan van de hartziekte?
- Wat is het beweeggedrag (heden, verleden en toekomst)?
- Wat zijn de huidige beperkingen in activiteit die de patiënt als gevolg van het coronairlijden of het chronisch hartfalen ervaart?
- Zijn er problemen op het gebied van seksualiteit?

- Waarom zijn die activiteiten belangrijk voor u?
- Wat waren de beperkingen in participatie (aard en ernst vóór het ontstaan van het cardiale incident of de verslechtering van het chronisch hartfalen?
- Was de patiënt betrokken in het arbeidsproces voor het ontstaan van de hartziekte?
- Wat zijn de huidige participatieproblemen die de patiënt als gevolg van het coronairlijden of chronisch hartfalen ervaart?

<h5>Hulpvraag concretiseren</h5>

- Wat is uw verwachting van mij, wat hoopt u door de fysiotherapie te bereiken? Hoe belangrijk is het voor u om dit te bereiken?

<h5>Externe factoren</h5>

- Welke eisen stelde de omgeving aan de patiënt vóór het ontstaan van de hartziekte?
- Welke fysieke belasting vergt het werk van de patiënt (indien van toepassing)?
- Zijn er externe drempels of barrières voor het ontwikkelen/onderhouden/hervatten van een actieve leefstijl?

<h5>Persoonlijke factoren</h5>

Preoperatief is het belangrijk om het risico op PPC (postoperatieve pulmonale complicaties) te screenen.
<table class="table">
    <tr>
        <th>Parameter</th>
        <th>Score</th>
    </tr>
    <tr>
        <td>Leeftijd > 70 jaar</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Productief hoesten</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Diabetes Mellitus</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Roken</td>
        <td>1</td>
    </tr>
    <tr>
        <td>COPD: FEV1 < 75% van voorspeld of medicatiebehoeftig BMI > 27</td>
        <td>1</td>
    </tr>
    <tr>
        <td>Longfunctie: FEV1 < 80% van voorspeld en FEV1/FVC < 70% van voorspeld</td>
        <td>2</td>
    </tr>
    <tr>
        <td colspan="2">
            <p>Interpretatie:</p>
            <p>Score <= 1: Laag risico op PPC</p>
            <p>Score >= 2: Hoog risico op PPC</p>
        </td>
    </tr>
</table>

Overige vragen:

- Wat is de prognose en wat zijn de (cardiovasculaire) risicofactoren (bijv. inactieve leefstijl, roken, stress, inslaap- of doorslaapproblemen)?
- Is er comorbiditeit aanwezig (zoals diabetes mellitus, perifeer arterieel vaatlijden, chronic obstructive pulmonary disease (COPD))?
- Wat is de leefsituatie van de patiënt (burgerlijke staat/sociale steun)?
- Wat is de sociale status (dagelijkse bezigheden, rol in gezin)?
- Zijn er problemen te verwachten met werkhervatting? Zie tevens de screeningsvragen in de 'Multidisciplinaire richtlijn Hartrevalidatie'.
- Hoe toegankelijk is het hartrevalidatieprogramma voor de patiënt?
- Wat is de informatiebehoefte van de patiënt?
- Welke eisen stelde de patiënt aan zichzelf vóór het ontstaan van de hartziekte?
- Hoe ervaart de patiënt de hartziekte?
- Probeer een indruk te krijgen van de sociaal-economische status van de patiënt. Vraag naar het opleidingsniveau en het beroepsniveau.
- Probeer een indruk te krijgen van de gezondheidsvaardigheden van de patiënt.
- Probeer een indruk te krijgen van de cognitieve status van de patiënt.
- Wat zijn de gevolgen van de aandoening op het psychosociaal functioneren (bijv. surmenage, (bewegings)angst, paniekstoornis, stress, depressie)?
- Wat zijn de illness beliefs van de patiënt? (Wat mankeer ik? Hoe komt het? Persoonlijke gevolgen? Welke invloed kan ik zelf uitoefenen?)
- Zijn er drempels of barrières voor het ontwikkelen/onderhouden/hervatten van een actieve leefstijl (bijvoorbeeld psychosociale factoren)?
- Wat is de motivatie van de patiënt voor het volgen van het beweegprogramma; voor het ontwikkelen/onderhouden/hervatten van een actieve leefstijl?
- Probeer een indruk te krijgen van de digitale vaardigheden van de patiënt, bijvoorbeeld aan de hand van een  QuickScan (Pharos. Landelijk expertisecentrum sociaaleconomische en etnische gezondheidsverschillen).
- Waaruit bestaat de huidige behandeling: medicijngebruik (type en dosering)/nevenbehandeling en in welke mate is die behandeling van invloed op het beweegprogramma?

<h4>Lichamelijk onderzoek</h4>

- Maximaal inspanningsvermogen (moet onder supervisie van een arts uitgevoerd worden)
- Subjectief inspanningsvermogen - <a target="_blank" href="https://meetinstrumentenzorg.nl/instrumenten/metabolic-equivalent-of-task/">MET</a>
- Fysieke capaciteit - <a target="_blank" href="https://meetinstrumentenzorg.nl/instrumenten/6-minute-walk-test-zes-minuten-wandeltest/">6MWT</a>, <a target="_blank" href="https://meetinstrumentenzorg.nl/instrumenten/steep-ramp-test/">SRT</a>
- Spierkracht - <a target="_blank" href="https://meetinstrumentenzorg.nl/instrumenten/one-repetition-maximum-herhalings-maximum/">1RM</a>
- Ademspierfunctie - <a target="_blank" href="https://meetinstrumentenzorg.nl/instrumenten/maximale-inspiratoire-monddrukmeting/">MIP</a>
- Subjectief ervaren belasting - <a target="_blank" href="https://meetinstrumentenzorg.nl/instrumenten/borg-rating-of-perceived-exertion-scale/">Borg RPE</a>
- Kortademigheid - <a target="_blank" href="https://meetinstrumentenzorg.nl/instrumenten/modified-medical-research-council-dyspnoe-vragenlijst/">mMRC dyspnoe</a>
- Angina Pectoris - <a target="_blank" href="https://meetinstrumentenzorg.nl/instrumenten/angina-pectoris-schaal-canadian-cardiovascular-society-angina-classification/">AP schaal / CCSA</a>
- Bloeddruk
- Zuurstofsaturatie en hartfrequentie
- Fysieke activiteit - <a target="_blank" href="https://meetinstrumentenzorg.nl/instrumenten/short-questionnaire-to-assess-health-enhancing-physical-activity/">SQUASH</a>
- Angst - Cardiac Anxiety Questionnaire (CAQ), <a target="_blank" href="https://meetinstrumentenzorg.nl/instrumenten/tampa-schaal-voor-kinesiofobie-hart/">TSK-NL-Hart</a>
    `,
    treatment: `
<strong>N.B. Als klachten optreden tijdens oefeningen moet je meteen stoppen. Als een CAD-patiënt pijn op de borst krijgt die niet verdwijnt, moet je 112 bellen.</strong>

#### Contra-indicaties voor hartrevalidatie:

- ernstige cardiale ischemie tijdens inspanning (ST-daling van ≥ 2 mm)
- sterk ontregelde diabetes mellitus type 2 (in overleg met behandelend internist)
- koorts
- acute systeemziekten
- een recente longembolie (< 3 maanden geleden) die hemodynamisch zwaar belastend is
- tromboflebitis
- ernstige anemie
- acute pericarditis of myocarditis
- hemodynamisch ernstige aortastenose of mitralisklepstenose
- hartklepinsufficiëntie die een indicatie vormt voor chirurgie
- boezemfibrilleren met een hoge kamerrespons in rust (> 100 slagen/min)
- ernstige cognitieve stoornissen (geheugen, aandacht en concentratie)
- niet innemen van de voorgeschreven medicatie zoals bètablokkers.

#### Behandeling bij coronairlijden

##### Preoperatieve fysiotherapie, inclusief 'inspiratory muscle training' (IMT)

Preoperatieve fysiotherapie inclusief IMT wordt aanbevolen voor patiënten die een coronary-artery bypass graft (CABG) en/of klepoperatie ondergaan en een hoog risico hebben op het ontwikkelen van een postoperatieve pulmonale complicatie (PPC).

IMT wordt uitgevoerd met behulp van een inspiratory threshold device. De werkgroep adviseert IMT ten minste 2 weken, bij voorkeur 4 weken, preoperatief te starten met een frequentie van 7 dagen per week gedurende 20 minuten op een intensiteit van 30% van Pimax. De weerstand wordt wekelijks aangepast conform de borgscore (0-10). Bij een borgscore (0-10) < 5 wordt de weerstand met 5% verhoogd. De behandeling is voorts gericht op <strong>hoest-, huf- en ademhalingstechnieken</strong>, ter bevordering van de evacuatie van sputum en
stimulering van optimale ventilatie en het onderhouden c.q. verbeteren van de fysieke fitheid (in overleg met de behandelend
cardioloog).

##### Mobilisatiefase bij coronairlijden

De werkgroep adviseert in de mobilisatiefase snel te starten met actieve functionele oefeningen, zoals ADL-gerelateerde oefeningen, lopen en traplopen. Het doel is om de patiënt te begeleiden tot het optimaal haalbare fysieke (ADL) functioneren (≥ 3-4 MET's).

##### Aerobe training bij coronairlijden

Aerobe training wordt aanbevolen voor patiënten met coronairlijden. De te hanteren trainingsprincipes zijn afhankelijk van de fysiotherapeutische doelen en de belastbaarheid van de patiënt. Voor het verbeteren van het inspanningsvermogen kan aerobe (interval)training in de loop van een aantal sessies gradueel worden opgebouwd van 50-80% van de VO2max, 20-30 minuten per sessie, ≥ 2-3 keer per week. Hoog-intensieve intervaltraining lijkt effectiever dan matig-intensieve duurtraining. Bij hoog-intensieve intervaltraining kan bijvoorbeeld gebruik gemaakt worden van 4 blokken van 4 minuten elk, waarin wordt getraind met een intensiteit van 80-90% van de VO2peak , met actief herstel gedurende 3 minuten waarin wordt getraind op 40-50% van de VO2peak . Bij laag-belastbare patiënten is intervaltraining geïndiceerd; als de patiënt voldoende belastbaar is, is zowel duurtraining als intervaltraining mogelijk. Een opbouwtijd van 2 weken waarin wordt getraind op 40-50% van de VO2max wordt aanbevolen.

##### Submaximale krachttraining bij coronairlijden

Submaximale krachttraining wordt aanbevolen als aanvulling op aerobe training bij patiënten met coronairlijden, in het bijzonder bij patiënten die door een gebrek aan spierkracht en krachtuithoudingsvermogen inspanningsgerelateerde beperkingen ondervinden in ADL, sociale participatie en werkhervatting. Voor het verbeteren van de spierkracht worden 8-10 oefeningen van grote spiergroepen aanbevolen met een frequentie van 2-3 keer per week (afhankelijk van de doelen) tegen een externe weerstand die gradueel van 50% naar 70-80% van het 1RM kan worden opgebouwd. Een opbouwtijd van 2 weken op 30-40% van het 1RM geniet de voorkeur.

##### Ontspanningstherapie als onderdeel van hartrevalidatie bij coronairlijden

Ontspanningstherapie wordt aanbevolen voor patiënten met coronairlijden. Gedurende een ontspanningsprogramma wordt aandacht besteed aan cognitieve thema's, zoals respect voor rust, balans tussen belasting en rust, invloed van mentale factoren op fysiek functioneren en de differentiatie tussen cardiale factoren in relatie tot stress, woede, depressie en tijdsdruk. De patiënt maakt in 2 sessies kennis met het ontspanningsprogramma. Indien de patiënt er baat bij heeft, wordt het programma vervolgd met 4-6 sessies van 1-1,5 uur per sessie.

#### Behandeling bij chronisch hartfalen

##### Aerobe (interval)training bij chronisch hartfalen

Aerobe (interval)training wordt aanbevolen bij patiënten met chronisch hartfalen NYHA-klasse II-III. Naarmate de belastbaarheid toeneemt, kan het trainingsaccent verschuiven van intervaltraining naar duurtraining. Voor intensieve intervaltraining kunnen intervalblokken worden gehanteerd van 4 keer 4 minuten op 80-90% van de VO2peak, met actief herstel gedurende 3 minuten op 40-50% van de VO 2peak (gemeten bij de maximale of symptoomgelimiteerde inspanningstest met gasanalyse). Een globale opbouw voor duurtraining zou kunnen zijn van 50-80% van de VO2max (of eventueel hartslagreserve of VO 2max-reserve). Een opbouwtijd van 2 weken waarin wordt getraind op een intensiteit van 40-50% van de VO2max geniet de voorkeur. Een frequentie van 2-3 keer per week wordt aanbevolen. Patiënten met een VO2max > 10,5 ml/kg/min, maar < 17,5 ml/kg/min (3-5 MET’s/40-80 W) lijken het meest gebaat bij 1 à 2 trainingssessies per dag gedurende 15 minuten, waarbij het accent ligt op aerobe intervaltraining. Patiënten met een VO2max > 17,5ml/kg/min (≥5 MET's/≥80 W) kunnen volstaan met 2-3 trainingssessies per week, gedurende 20-30 minuten per duurtrainingssessie.

##### Krachttraining bij chronisch hartfalen

Training van het krachtuithoudingsvermogen kan worden overwogen ter voorbereiding op of als aanvulling op aerobe (interval)training bij patiënten met stabiel chronisch hartfalen. Hiervan profiteren in het bijzonder patiënten die krachtgerelateerde inspanningsbeperkingen ondervinden tijdens ADL-activiteiten en sociale participatie. De krachttraining wordt gestart met een 'pretraining' van 2 weken, met 2-3 series van 10 herhalingen (tegen een lage weerstand van, geschat, < 30% van het 1RM). Na deze pretraining wordt op basis van het RM de trainingsweerstand bij krachttraining geschat. Het wordt aanbevolen om op basis van de bepaling van het 10RM de maximale kracht te schatten. Voor het verbeteren van de spierkracht kan de externe weerstand gradueel worden opgebouwd van 40% naar 65% van het 1RM. Training van de grote spiergroepen wordt aanbevolen in 2-3 series van 10-15 herhalingen, in een frequentie van 2-3 keer per week.

##### Inspiratory muscle training (IMT) bij chronisch hartfalen

IMT kan worden opgenomen als onderdeel van het trainingsprogramma, als aanvulling op aerobe (interval)training bij chronisch hartfalenpatiënten in de NYHA-klasse II-III met een Pimax < 70%voorspeld en/of een ventilatoire beperking (die blijkt uit de maximale of symptoomgelimiteerde inspanningstest met gasanalyse). De werkgroep adviseert IMT met behulp van een threshold device tegen een weerstand van 25-45% van de Pimax gedurende 15-20 minuten, op 3-4 dagen per week, bij voorkeur gedurende 8-12 weken achtereen. Zelfstandige onderhoudstraining wordt aanbevolen na het beëindigen van de hartrevalidatie.

##### Ontspanningstherapie bij chronisch hartfalen

Het aanbieden van een ontspanningsprogramma als aanvulling op een trainingsprogramma kan in overweging worden genomen. De hartfalenpatiënt maakt in 2 sessies kennis met het ontspanningsprogramma. Indien de patiënt er baat bij heeft, wordt het programma vervolgd, 6-8 keer met een duur van 1-1,5 uur per sessie. Het mentaal ontspannen en aanleren om langzamer te ademen lijkt een belangrijk doel van het ontspanningsprogramma. Daarnaast kan aandacht worden besteed aan cognitieve thema's, zoals respect voor rust, balans tussen belasting en rust, invloed van mentale factoren op fysiek functioneren en de differentiatie tussen cardiale factoren in relatie tot stress, woede, depressie en tijdsdruk.

##### Continuering van de fysieke leefstijl bij chronisch hartfalen

De fysiotherapeut dient bij voorkeur gedurende, maar zeker aan het eind van de revalidatieperiode de hartfalenpatiënt actief door te verwijzen naar een fase-III-activiteit. Hartfalenpatiënten die hoog-intensieve onderhoudstraining (≥ 60% VO2max) dienen te volgen, worden doorverwezen naar een fysiotherapiepraktijk of een bij De Hart&Vaatgroep aangesloten vereniging of instituut, waar professionele begeleiding aanwezig is (van een fysiotherapeut die de cursus 'Hartfalen voor de eerstelijns fysiotherapeut' heeft gevolgd, die is geaccrediteerd door het KNGF. De voorkeur gaat uit naar een setting die participeert in een lokaal netwerk (korte lijnen en frequent overleg) met het ziekenhuis/revalidatiecentrum waar de hartrevalidatie plaatsvond. Licht- tot matig-intensieve onderhoudstraining (< 60% van de VO2max) kan eventueel ook zelfstandig plaatsvinden, of bij een bij De Hart&Vaatgroep aangesloten vereniging of instituut (mits begeleid/aangestuurd vanuit een in de tweede lijn werkzame fysiotherapeut/cardioloog). Als wordt verwacht wordt dat de hartfalenpatiënt (die het advies krijgt om licht- tot matig-intensieve onderhoudstraining te volgen) snel zal vervallen in een inactieve leefstijl, wordt een trainingsprogramma aanbevolen in de eerstelijns fysiotherapiepraktijk, onder professionele begeleiding. Het monitoren van een actieve leefstijl wordt bij alle hartfalenpatiënten aanbevolen (bij voorkeur 6 en 12 maanden na het beëindigen van de hartrevalidatie).
    `,
    references: `
Conijn et al. (2024). <em>Hartrevalidatie bij coronairlijden en chronisch hartfalen (2024) [richtlijn]</em>. Koninklijk Nederlands Genootschap voor Fysiotherapie. Geraadpleegd op 15 april 2024, van https://www.kngf.nl/kennisplatform/richtlijnen/hartrevalidatie-2024
    `
});
