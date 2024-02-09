import Illness from "../Illness.js";

export default new Illness({
    id: "asthma",
    name: "Astma",
    images: [
        "./images/breathing/asthma.jpg",
    ],
    pathophysiology: `
#### Definitie

Astma is een annvalsgewijs optredende, reversibele (afname van obstructie door inname van een luchtwegverwijder) bronchusobstructie op basis van een verhoogde gevoeligheid van de luchtwegen voor allergische (IgE-gemedieerde, bijvoorbeeld huisstofmijt, pollen, huisdieren) en/of niet-allergische prikkels (bijvoorbeeld koude of vochtige lucht, rook, stof, inspanning, emoties).

Bij astma verkrampen de gladde spieren rondom de luchtwegen, dus de luchtwegen worden daardoor van buitenaf belemmerd. Er wordt ook meer mucus geproduceerd, dat ook aan de luchtwegobstructie bijdraagt.

Elk jaar overlijden 500 kinderen in Nederland aan een astmaanval. Het is dus een serieuse ziekte.

#### Interne risicofactoren

- atopie (aangeboren aanleg voor astma, eczeem en allergie)
    `,
    epidemiology: `
- Prevalentie: 2,5% in de totale Nederlandse bevolking, 5% bij kinderen
- Leeftijd: eerste klachten meestal bij kinderen 4-7 jaar
    `,
    symptoms: `
- dyspneu
- piepende ademhaling
- hoesten

Symptomen hoeven niet alleen op te treden in verband met een directe prikkel. Bijvoorbeeld kun je 's ochtends klachten krijgen vanwege een prikkel en dan 8 uur later weer benauwd worden vanwege de prikkel 's ochtends. Dit wordt <strong>bifasisch beloop</strong> genoemd.
    `,
    diagnostics: `

<table class="table">
    <tr>
        <th>Volwassenen</th>
        <th>Kinderen</th>
    </tr>
    <tr>
        <td>

Doe onderzoek naar de diagnose astma bij een patiënt die - voor het eerst of na een lange periode zonder medicatie of controles - komt met dyspneuklachten, een piepende ademhaling of > 3 weken bestaande hoestklachten.

Overweeg astma ook bij minder specifieke klachten, zoals snelle vermoeidheid, kortademigheid bij inspanning of conditievermindering.

Stel de diagnose astma op grond van een kenmerkende anamnese in combinatie met spirometrische bevindingen.

Om de diagnose astma te kunnen stellen zijn vaak meerdere consulten nodig.
        </td>
        <td>

Overweeg astma bij kinderen met ≥ 1 van de volgende recidiverende klachten:

- piepende uitademing
- hoesten
- kortademigheid
- benauwdheid

Op jonge leeftijd staan vooral piepende uitademing en hoesten op de voorgrond. Op oudere leeftijd komt het klassieke aanvalsgewijze patroon van piepende uitademing en kortademigheid vaker voor.
        </td>
    </tr>
</table>

#### Differentiaaldiagnostiek

<table class="table table-striped-columns">
    <tr>
        <th></th>
        <th>Astma</th>
        <th>COPD</th>
    </tr>
    <tr>
        <th>Belangrijkste risicofactor</th>
        <td>Atopie</td>
        <td>Roken</td>
    </tr>
    <tr>
        <th>Luchtwegobstructie</th>
        <td>Wisselend, in de regel reversibel</td>
        <td>Per definitie deels irreversibel</td>
    </tr>
    <tr>
        <th>Pathofysiologie</th>
        <td>Chronische ontsteking in alle luchtwegen, meestal gevoelig voor corticosteroïden</td>
        <td>Chronische ontsteking met name in de kleine luchtwegen, relatief ongevoelig voor corticosteroïden</td>
    </tr>
    <tr>
        <th>Uitlokkende factor </th>
        <td>Allergische en niet-allergische prikkels</td>
        <td>-</td>
    </tr>
    <tr>
        <th>Leeftijd</th>
        <td>Alle leeftijden</td>
        <td>Meestal > 40 jaar</td>
    </tr>
    <tr>
        <th>Beloop</th>
        <td>Meestal gunstig met variërende klachten</td>
        <td>Overwegend chronisch, geleidelijk progressief</td>
    </tr>
    <tr>
        <th>Levensverwachting</th>
        <td>(Vrijwel) normaal bij optimale behandeling</td>
        <td>Verminderd, ook bij optimale behandeling</td>
    </tr>
    <tr>
        <th>Longfunctie (spirometrie)</th>
        <td>Meestal normaal of met reversibele obstructie</td>
        <td>Blijvend verminderd (irreversibele obstructie)</td>
    </tr>
</table>

#### Anamnese

<table class="table">
    <tr>
        <th>Volwassenen</th>
        <th>Kinderen</th>
    </tr>
    <tr>
        <td>

Vraag naar:

- kortademigheid, al dan niet in combinatie met piepen; frequentie, duur (incidenteel, aanvalsgewijs, regelmatig, dagelijks)
- nachtelijke klachten
- hoesten
- aanwijzingen voor allergische prikkels
- Zijn er dyspneuklachten na blootstelling aan een allergeen, zoals:
    - aanwijzingen voor een allergische rinitis; is de patiënt vaak 'verkouden'?
    - aanwijzingen voor eczeem
    - verergeren de klachten in een stoffige omgeving (huisstofmijt)?
    - klachten in voorjaar of zomer (pollen van bomen, grassen, onkruiden)
    - klachten bij contact met dieren (katten, honden, knaagdieren, paarden) of
    - klachten tijdens werk of hobby's (tuinder, graanverwerking, werk met dieren)
- aanwijzingen voor niet-allergische prikkels:
    - persisterende klachten na virale luchtweginfecties
    - verergering van klachten bij blootstelling aan koude lucht, mist, (tabaks)rook
    - fijnstof, baklucht, verflucht, parfumluchtjes (zie Werkgerelateerde klachten) na lichamelijke inspanning
    - aanwijzingen voor een verband met geneesmiddelen zoals acetylsalicylzuur, NSAID's, (niet-selectieve) orale bètablokkers, parasympathicomimetica en conserveermiddelen in inhalatiemedicatie
- roken:
    - huidig of voormalig rookgedrag
    - beginleeftijd en aantal jaren dat men gerookt heeft en het gemiddelde aantal sigaretten per dag uitgedrukt in aantal pakjaren (20 sigaretten per dag gedurende een jaar)
    - roken door anderen (gezinsleden, huisgenoten, vrienden, collega's)
- invloed op het dagelijks functioneren , thuis of elders (ziekteverzuim)
- preventieve maatregelen die de patiënt heeft getroffen en het effect daarvan
        </td>
        <td>

Vraag naar:

- luchtwegklachten: piepende uitademing, hoesten overdag of tijdens het slapen, kortademigheid of benauwdheid
- ernst, duur, frequentie en het patroon van de luchtwegklachten: incidenteel, aanvalsgewijs, regelmatig of dagelijks; klachtenvrije periodes; seizoensinvloed
- aanwijzingen voor allergische prikkels:
    - klachten passend bij allergische rinitis, zoals niezen, jeuk in neus of ogen, een loopneus of verstopte neus
    - eczeem
    - optreden of verergeren van klachten: in een stoffige omgeving (huisstofmijt), in voorjaar of zomer (pollen van bomen, grassen of kruiden) of bij contact met dieren (katten, honden, knaagdieren, paarden)
- aanwijzingen voor niet-allergische prikkels:
    - persisterende klachten tijdens of aansluitend aan virale luchtweginfecties
    - optreden of verergeren van klachten bij emoties, koude of vochtige lucht, mist, tabaksrook, fijnstof of luchtverontreiniging, vluchtige stoffen (zoals baklucht, verflucht en parfumlucht)
    - tijdens of na lichamelijke inspanning
- roken:
    - door ouders, verzorgers of anderen in de omgeving van het kind
    - door het kind zelf
- invloed van de klachten op het dagelijks functioneren: thuis, op school, tijdens het slapen, op sportactiviteiten, andere hobby's en buiten spelen
- familieanamnese: astma of atopische aandoeningen bij eerstegraads familieleden
- psychosociale omstandigheden, zoals gezins- en woonsituatie, schoolverzuim, pesten
        </td>
    </tr>
</table>

#### Lichamelijk onderzoek

<table class="table">
    <tr>
        <th>Volwassenen</th>
        <th>Kinderen</th>
    </tr>
    <tr>
        <td>

- bepaal de mate van dyspneu: let op ademhalingsfrequentie, gebruik van hulpademhalingsspieren en stand van de thorax (tripod-houding, intrekkingen)
- ausculteer de longen: let op de aanwezigheid van een verlengd expirium en/of expiratoir piepen
- bepaal de hartfrequentie
- overweeg bij aanwezige dyspneu saturatiebepaling
- let op verminderd bewustzijn
        </td>
        <td>

- Bepaal de mate van ziek zijn.
- Maak een inschatting van de ademarbeid: gebruik van hulpademhalingsspieren, neusvleugelen, intrekkingen sub- of intercostaal.
- Bij tekenen van dyspneu: tel de adem- en de hartfrequentie.
- Overweeg bij tekenen van dyspneu een saturatiemeting, indien deze beschikbaar is en de praktijk het toelaat. Een saturatiemeting bij jonge kinderen is soms lastiger door bijvoorbeeld beweging. De saturatie bij kinderen daalt pas laat, omdat zij grote ademarbeid kunnen leveren.
- Verlaagde saturatie bij kinderen is een zeer ernstig teken
- Ausculteer de longen, let op een verlengd expirium en expiratoir piepen.
- Onderzoek keel en oren bij klachten die wijzen op een bovensteluchtweginfectie.
- Onderzoek de huid bij anamnestische aanwijzingen voor constitutioneel eczeem.
        </td>
    </tr>
</table>

#### Aanvullend onderzoek

- Allergieonderzoek
- Spirometrie (als astma de enige aandoenig is, toont dit geen bijzonderheden omdat eerst bronchodilatoren toegediend worden)
    `,
    treatment: `
Aerobe training

Doelen:

- Vermindering symptomen
- Verminderen frequentie
- Voorkomen groei- en ontwikkelingsbeperking
    `,
    references: `
Ang, J., Moussa, R., Shaikh, S., & Mele, S. (2023). Effects of aerobic exercise on asthma control and quality of life in adults: a systematic review. <em>The Journal of asthma : official journal of the Association for the Care of Asthma, 60</em>(5), 845-855. https://doi.org/10.1080/02770903.2022.2103429

Bhogal-Statham, M.J., Bindels, P.J.E., Boelman, L., Boers, S.N., De Jong, J., Leendertse, A.J., Looijmans, I., Muris, J.W.M., Oud, M., Schouten, F., van de Griendt, E.J., van Ewijk, B. (2022). <em>NHG-Standaard Astma bij kinderen (M24)</em>. Geraadpleegd op 9 februari 2024, van https://richtlijnen.nhg.org/files/pdf/71_Astma%20bij%20kinderen_mei-2022.pdf

Bottema, J.W., Bouma, M., Broekhuizen, L., Chavannes, N.H., Frankemölle, L.A.M., Hallensleben, C., De Jong, J., Muris, J.W.M., Van Nederveen-Bendien, S.A., Van Vugt, S.F. (2022). <em>NHG-Standaard Astma bij volwassenen (M27)</em>. Geraadpleegd op 9 februari 2024, van https://richtlijnen.nhg.org/files/pdf/101_Astma%20bij%20volwassenen_december-2022.pdf

Weersink, E.J.M., Braunstahl, G.J., ten Brinke, A., van Veen, H.P.A.A., Conemans, L.H., Aardenburg-van Huisstede, A., Zielhuis, S.W., van Litsenburg, W., Hulzebos, H.J., Poulissen-Erinkveld, M.A.P., Frankemölle, L.A.M., & van der Roest, E.M. (2020). <em>Diagnostiek en behandeling van ernstig astma</em>. Richtlijnendatabase. Geraadpleegd op 9 februari 2024, van https://richtlijnendatabase.nl/richtlijn/diagnostiek_en_behandeling_van_ernstig_astma/aanvullende_behandelingen_bij_ernstig_astma/fysiotherapie_bij_ernstig_astma.html
    `,
});