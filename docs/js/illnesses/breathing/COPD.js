import Illness from "../Illness.js";

export default new Illness({
    id: "copd",
    name: "Chronic obstructive pulmonary disease (COPD)",
    images: [
        "./images/breathing/copd.jpg",
    ],
    pathophysiology: `
#### Definitie

Chronische Obstructieve Longziekte (COPD) is een heterogene longaandoening die wordt gekenmerkt door chronische respiratoire symptomen (kortademigheid, hoest, sputumproductie en/of longaanval) als gevolg van afwijkingen aan de luchtwegen (bronchitis, bronchiolitis) en/of longblaasjes (emfyseem), wat leidt tot aanhoudende, vaak progressieve luchtstroombeperking.

COPD ontstaat als gevolg van interacties tussen genen en omgeving gedurende het leven van het individu, die de longen kunnen beschadigen en/of hun normale ontwikkelings- en verouderingsprocessen kunnen veranderen.

#### Externe risicofactoren

- inademen van tabaksrook - of zelf roken of meeroken
- inademen van rook door het verbranden van b.v. hout, mest, of kool
- inademen van organische en anorganische stofdeeltjes, chemische stoffen en dampen
- luchtvervuiling

#### Interne risicofactoren

- Astma
- Mutaties in het SERPINA1-gen die leiden tot het erfelijk tekort aan α-1 antitrypsine (AATD).

#### Comorbiditeiten

- diabetes mellitus
- HVZ (20% van de patiënten met COPD heeft ook hartfalen)

#### Complicaties

- Longaanval (Exacerbatie)
- Respiratoire insufficiëntie
- Pulmonale hypertensie
- Pneumothorax
    `,
    epidemiology: `
- Prevalentie: 2% (Nederland)
- Leeftijd: > 40 jaar, vooral bij rokers
- Bij mensen < 40 jaar komt COPD voornamelijk voor als gevolg van alfa-1-antitrypsinedeficiëntie, (hard)drugsverslaving of al dan niet beroepsmatige blootstelling aan stof, rook, gassen of dampen.
    `,
    timeCourse: `
Progressief beloop
    `,
    symptoms: `
- kortademigheid
- hoesten
- beperkingen bij lichamelijke activiteit
- longaanval

De ernst van de luchtwegobstructie correleert slechts beperkt met de klachten die patiënten ervaren. De fysiologische stoornis, uitgedrukt als de mate van luchtwegobstructie en de klachten, beperkingen en kwaliteit van leven vormen samen de ziektelast.
    `,
    diagnostics: `
In de juiste klinische context bevestigt de aanwezigheid van niet-volledig omkeerbare luchtwegbeperking (d.w.z., FEV1/FVC < 0,7 na bronchodilatatie) gemeten met spirometrie de diagnose van COPD.

Sommige individuen kunnen respiratoire symptomen en/of structurele longlaesies hebben (bijv. emfyseem) en/of fysiologische afwijkingen (waaronder een laag-normaal FEV1, gasophoping, hyperinflatie, verminderde longdiffusiecapaciteit en/of snelle FEV1-afname) zonder luchtwegobstructie (FEV1/FVC ≥ 0,7 na bronchodilatatie). Deze personen worden aangeduid als 'Pre-COPD'. De term 'PRISm' (Preserved Ratio Impaired Spirometry) is voorgesteld om degenen met een normale verhouding maar abnormale spirometrie te identificeren. Personen met Pre-COPD of PRISm lopen het risico om in de loop van de tijd luchtwegobstructie te ontwikkelen, maar niet allemaal doen dat.

#### Differentiaaldiagnostiek

<table class="table table-striped-columns">
    <tr>
        <th>Diagnose</th>
        <th>Kenmerken</th>
    </tr>
    <tr>
        <td>COPD</td>
        <td>
            <ul>
                <li>Progressief beloop</li>
                <li>Geschiedenis van tabakroken of andere risicofactoren</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Astma</td>
        <td>
            <ul>
                <li>Variabele luchtwegbeperking</li>
                <li>Symptomen variëren wild van dag tot dag</li>
                <li>Verergering van symptomen 's nachts / 's ochtends vroeg</li>
                <li>Allergie, rhinitis en/of eczeem zijn ook aanwezig</li>
                <li>Komt vaak voor bij kinderen</li>
                <li>Familiegeschiedenis van astma</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Hartfalen</td>
        <td>
            <ul>
                <li>Borstfoto toont een verwijde hart, longoedeem</li>
                <li>Longfunctietests geven aan dat er sprake is van volumerestrictie, niet van luchtwegobstructie</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Bronchiëctasieën</td>
        <td>
            <ul>
                <li>Grote hoeveelheden etterig sputum</li>
                <li>Vaak geassocieerd met bacteriële infectie</li>
                <li>Borstfoto / HRCT toont bronchiale verwijding</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Tuberculosis</td>
        <td>
            <ul>
                <li>Begin op alle leeftijden</li>
                <li>Borstfoto toont longinfiltratie</li>
                <li>Microbiologische bevestiging</li>
                <li>Hoge lokale prevalentie van tuberculose</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Bronchiolitis obliterans</td>
        <td>
            <ul>
                <li>Kan voorkomen bij kinderen</li>
                <li>Waargenomen na long- of beenmergtransplantatie</li>
                <li>HRCT bij uitademing toont hypodense gebieden</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Diffuse panbronchiolitis</td>
        <td>
            <ul>
                <li>Voornamelijk waargenomen bij patiënten van Aziatische afkomst</li>
                <li>Meeste patiënten zijn mannelijk en niet-rokers</li>
                <li>Bijna allemaal hebben chronische sinusitis</li>
                <li>Borstfoto en HRCT tonen verspreide kleine centrilobulaire nodulaire opaciteiten en hyperinflatie</li>
            </ul>
        </td>
    </tr>
</table>

#### Anamnese

Vraag naar:

- kortademigheid, al of niet in combinatie met piepen, frequentie, duur (incidenteel, regelmatig, dagelijks, 's nachts)
- hoesten: productieve (ochtend)hoest, chronisch hoesten; problemen met ophoesten van slijm, hemoptoë
- roken: huidig en voormalig rookgedrag, op welke leeftijd begonnen, aantal jaren gerookt en gemiddeld aantal sigaretten per dag, meeroken
- drugsgebruik, vooral bij inhalatie, gebruik van een waterpijp
- arbeidsomstandigheden en vrijetijdsbesteding waarin blootstelling aan stof, gassen, dampen of rook optreedt (open haardvuur, schilder, chauffeur, kapper, bakker, omgeving met veel fijnstof van bijvoorbeeld steen, metaal, graan)
- invloed van de klachten op het functioneren: sociale contacten, hobby's, sport, werk, verzuim en arbeidsongeschiktheid, moeheid
- voorkomen van COPD en alfa1-antitrypsinedeficiëntie in de familie
- ongewenst gewichtsverlies of verlies van spierkracht, verminderd vermogen tot lichamelijke inspanning
- angst voor kortademigheid, depressieve klachten, sociale situatie

#### Lichamelijk onderzoek

##### Inspectie in rust

- lichaamshouding
- tekenen van kortademigheid en/of vermoeidheid
- cyanose (blauwe verkleuring van b.v. vingertoppen, tong of neuspunt)
- spieratrofie
- hypertonie van (hulp)ademhalingsspieren en/of perifeer oedeem
- inspectie van de vorm van de borstkas (statische hyperinflatie, deformiteiten)

##### Functionele inspectie

- verkrijgen van een klinische indruk tijdens (functionele) bewegingen (lichaamshouding, balans, kortademigheid en/of vermoeidheid, gebruik van loophulpmiddel)
- inspectie van de manier van ademhalen (ademfrequentie, adembewegingspatroon, paradoxale thoracoabdominale beweging in rust en tijdens inspanning, activiteit en hypertonie van (hulp)ademhalingsspieren - is de "pump handle" zichtbaar aanwezig ook in rust? Is er sprake van het teken van Hoover waardoor de onderste ribben naar binnen bewegen tijdens inademing?
- inspectie van de manier van hoesten en huffen ter bevordering van mucusklaring

##### Basisonderzoek

- fysieke capaciteit (6MWT en/of SWT, CWRT)
- mate van fysieke activiteit (activiteitenmeteraanbev)
- zuurstofsaturatie in rust en tijdens inspanning en (indien van toepassing) met en zonder medische zuurstof (saturatiemeteraanbev)
- perifere spierkracht (HHD en/of 1RM)
- ademspierfunctie (MIP)
- balans/valrisico (TUG)
- symptoomlast (CCQ, CAT)

##### Spirometrie

Spirometrie is een longtest die gebruikt kan worden zowel als een diagnostisch criterium voor COPD als om de ernst van de COPD te bepalen.

<table class="table table-striped-columns">
    <tr>
        <th>Voorbereiding</th>
        <td>
            <ul>
                <li>Spirometers zouden een afdruk moeten produceren of een digitaal display moeten hebben van de expiratoire curve om detectie van technische fouten mogelijk te maken, of ze zouden automatisch moeten waarschuwen voor een onbevredigende test en de reden ervoor</li>
                <li>De toezichthouder van de test heeft training nodig in optimale techniek en kwaliteitsprestaties</li>
                <li>Een maximale inspanning van de patiënt bij het uitvoeren van de test is vereist om onderschatting van waarden te voorkomen en daardoor fouten in de diagnose en behandeling</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th>Uitvoering</th>
        <td>
            <ul>
                <li>Spirometrie moet worden uitgevoerd volgens nationale en/of internationale aanbevelingen</li>
                <li>De traces van het expiratoire volume/tijd moeten glad zijn en vrij van onregelmatigheden</li>
                <li>De pauze tussen inspiratie en expiratie moet < één seconde zijn</li>
                <li>De opname moet lang genoeg doorgaan totdat een volumeplateau is bereikt, wat meer dan 15 seconden kan duren bij ernstige ziekte</li>
                <li>Zowel FVC als FEV1 moeten de grootste waarde zijn die wordt verkregen uit een van de drie technisch bevredigende curven, en de FVC- en FEV1-waarden in deze drie curven mogen niet meer dan 5% of 150 ml verschillen, afhankelijk van wat groter is</li>
                <li>De FEV1/FVC-verhouding moet worden genomen vanuit de technisch acceptabele curve met de grootste som van FVC en FEV1</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th>Bronchodilatie</th>
        <td>
            <ul>
                <li>Mogelijke doseringsprotocollen zijn 400 mcg kortwerkende bèta2-agonist, 160 mcg kortwerkende anticholinergicum, of beide gecombineerd; de FEV1 moet worden gemeten 10-15 minuten nadat een kortwerkende bèta2-agonist is toegediend, of 30-45 minuten nadat een kortwerkende anticholinergicum is toegediend, of een combinatie van beide klassen medicijnen</li>
                <li>Patiënten die al een behandeling met bronchodilatoren ondergaan en voor wie spirometrie wordt aangevraagd voor monitoring, hoeven hun reguliere behandeling niet te stoppen voor de spirometrie</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th>Evaluatie</th>
        <td>
            <ul>
                <li>Spirometriemetingen worden geëvalueerd door de resultaten te vergelijken met passende referentiewaarden op basis van leeftijd, lengte, geslacht en etniciteit</li>
                <li>De aanwezigheid van een postbronchodilator FEV1/FVC < 0,7 bevestigt de aanwezigheid van niet-volledig omkeerbare luchtwegobstructie</li>
            </ul>
        </td>
    </tr>
</table>

###### Interpretatie

Bij een FEV1/FVC-verhouding < 0,7 wordt de beoordeling van de ernst van de luchtwegbeperking bij COPD (let op: dit kan verschillen van de ernst van de ziekte) gebaseerd op de post-bronchodilatorwaarde van FEV1 (% referentie).
<table class="table">
    <tr>
        <th>GOLD 1</th>
        <td>Mild</td>
        <td>FEV1 ≥ 80% voorspeld</td>
    </tr>
    <tr>
        <th>GOLD 2</th>
        <td>Matig</td>
        <td>50% ≤ FEV1 < 80% voorspeld</td>
 </td>
    </tr>
    <tr>
        <th>GOLD 3</th>
        <td>Ernstig</td>
        <td>30% ≤ FEV1 < 50% voorspeld</td>
    </tr>
    <tr>
        <th>GOLD 4</th>
        <td>Zeer ernstig</td>
        <td>FEV1 < 30% voorspeld</td>
    </tr>
</table>

#### Patientprofielen

<img src="./images/breathing/copd-patientprofielen.jpg" class="center margin-bottom" />
    `,
    treatment: `
Biedt zorg aan die passend is bij het profiel van de patiënt:

- Profiel 1: Geen therapie, adviseer deelname aan reguliere beweeg- en/of sportactiviteiten,
overweeg overleg met huisarts over verwijzing voor een gecombineerde leefstijlinterventie
(GLI).
- Profiel 2: Geen (of zeer beperkt) therapie, adviseer deelname aan reguliere beweeg- en/of
sportactiviteiten, overweeg overleg met huisarts over verwijzing voor een GLI.
- Profiel 3: Eerstelijns therapie primair gericht op het optimaliseren van fysieke activiteit en
daarna overgang naar reguliere beweeg- en/of sportactiviteiten of opvolging in de vorm van
onderhoudsbehandeling.
- Profiel 4: Eerstelijns therapie primair gericht op het bevorderen van fysieke capaciteit en
daarna overgang naar reguliere beweeg- en/of sportactiviteiten of opvolging in de vorm van
onderhoudsbehandeling.
- Profiel 5: Eerstelijns therapie primair gericht op het bevorderen van fysieke capaciteit, opti-
maliseren van fysieke activiteit en daarna overgang naar reguliere beweeg- en/of sportacti-
viteiten of opvolging in de vorm van onderhoudsbehandeling.
- Profiel 6: Tweede- of derdelijns interdisciplinaire longrevalidatie, gevolgd door onderhouds-
behandeling in de eerstelijnszorg.

#### Voorlichting en educatie

- Ziektespecifieke informatie
- Adviseer om te stoppen met roken
- Zelfmanagement en eigen regie
- Energiemanagement en aanpassingen van dagelijkse activiteiten
- Gebruik van (loop)hulpmiddelen
- Gebruik van sociale voorzieningen en lotgenotencontact

#### Optimaliseren van fysieke activiteit

##### Duur- / intervaltraining

Overweeg intervaltraining in te zetten indien:

- uit de maximale inspanningstest (CPET) blijkt dat de patiënt ventilatoir gelimiteerd is en/of een inspannings-geïnduceerde transcutaan gemeten zuurstofdesaturatie heeft en daarnaast de inspanning < 10 minuten volhoudt tijdens een uithoudingsfietstest op 75% van de maximale fietsbelasting, en/of
- verhoging van de tijdsduur en/of intensiteit bij duurtraining niet (meer) haalbaar is.

Overweeg in alle andere gevallen <strong>duurtraining</strong>.

Overweeg de duur-/intervaltraining deels of volledig te vervangen door spierkrachttraining
indien duur-/intervaltraining (nagenoeg) onmogelijk wordt vanwege bijvoorbeeld een te lage
spierfunctie en/of ernstige kortademigheid.

<table class="table">
    <tr>
        <th>Frequentie</th>
        <td>
            <ul>
                <li>gedurende initiële behandelperiode 3-4 dagen per week ter bevordering van fysieke capaciteit</li>
                <li>daarna 1-2 dagen per week ter behoud van fysieke capaciteit</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th>Intensiteit</th>
        <td>
            <ul>
                <li>duurtraining: 60-80% van de maximale belasting</li>
                <li>intervaltraining: 85-100% van de maximale belasting</li>
                <li>opbouw intensiteit mede op geleide van symptomen (Borgscore 4-6 op een schaal van 0-10 punten)</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th>Type training</th>
        <td>afhankelijk van doelstelling van de patiënt, maar bij voorkeur loopband of stationaire fiets</td>
    </tr>
    <tr>
        <th>Tijdsduur</th>
        <td>
            <ul>
                <li>duurtraining: ten minste 10 minuten aaneengesloten inspanningsblok</li>
                <li>intervaltraining: 30-60 seconden met 1-2 minuten pauze tussen de inspanningsblokjes</li>
                <li>totale duur van de trainingssessie: 20-60 minuten</li>
            </ul>
        </td>
    </tr>
</table>

##### Spierkrachttraining

<table class="table">
    <tr>
        <th>Frequentie</th>
        <td>2-3 dagen per week, zowel ter bevordering als behoud van de spierkracht</td>
    </tr>
    <tr>
        <th>Intensiteit</th>
        <td>60-80% van 1RM</td>
    </tr>
    <tr>
        <th>Type training</th>
        <td>
            <ul>
                <li>afhankelijk van de doelstelling van de patiënt, maar bij voorkeur grote spiergroepen van zowel onderste als bovenste extremiteit</li>
                <li>oefeningen met apparatuur en/of functionele oefeningen</li>
            </ul>
        </td>
    </tr>
    <tr>
        <th>Tijdsduur</th>
        <td>per oefening 2-5 sets van 8-15 herhalingen met ten minste 2 minuten rust na elke set</td>
    </tr>
</table>
    `,
    references: `
Bischoff, E., Bouma, M., Broekhuizen, L., Donkers, J., Hallensleben, C., De Jong, J., Snoeck-Stroband, J., In 't Veen, J.C., Van Vugt, S., & Wagenaar, M. (2022). <em>NHG-Standaard COPD (M26)</em>. Nederlands Huisartsen Genootschap. Geraadpleegd op 2 februari 2024, van https://richtlijnen.nhg.org/files/pdf/102_COPD_december-2022.pdf

Vogelmeier C., Agusti, A., Anzueto, A., Barnes, P., Bourbeau, J., Criner, G., Halpin, D., Han, M., Martinez, F., Montes de Oca, M., Papi, A., Pavord, I., Roche, N., Sin, D., Singh, D., Stockley, R., Victorina Lopez Varela, M., & Wedzicha, J. (2023). <em>Global Strategy For The Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease</em>. Global Initiative for Chronic Obstructive Lung Disease. Geraadpleegd op 2 februari 2024, van https://goldcopd.org/wp-content/uploads/2023/03/GOLD-2023-ver-1.3-17Feb2023_WMV.pdf

Vreeken, H.L., Beekman, E., Van Doormaal, M.C.M., Post, M.H.T., Meerhoff, G.A., & Spruit, M.A. (2020). <em>KNGF-richtlijn COPD</em>. Het Koninklijk Nederlands Genootschap voor Fysiotherapie. Geraadpleegd op 2 februari 2024, van https://www.kngf.nl/kennisplatform/richtlijnen/copd
    `,
});