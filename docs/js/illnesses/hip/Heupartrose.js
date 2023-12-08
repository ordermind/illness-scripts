import Illness from "../Illness.js";

export default new Illness({
    id: "hip-arthrosis",
    name: "Heupartrose",
    images: [
        "./images/hip/heupartrose.jpg",
    ],
    pathophysiology: `
Verslechting van de kwaliteit van het kraakbeen waardoor structurele veranderingen in het gewricht ontstaan, zoals:

- progressief verlies van kraakbeen
- sclerosering
- osteofytvorming (botuitgroeieing, meestal puntig)
- verandering in weke delen (kapsel, pezen, spieren)

Mogelijke oorzaken:

- Trauma of operatie
- Ontsteking (b.v. RA) of infectie
- Idiopathish

Risicofactoren:

- Hoge leeftijd (45 jaar of ouder)
- Vrouwelijk geslacht
- Genen
- Overgewicht
- Hormonale factoren
    `,
    epidemiology: `
<img src="./images/knee/Jaarprevalentie-artrose-in-huisartsenpraktijk-2021.png" />

- Artrose in het algemeen is de meest voorkomende musculoskeletale aandoening, en heupartrose is daar een vaak voorkomende variant van.
- Prevalentie in 2021: 2,78%
- Incidentie in 2021: 0,16%
- Leeftijd 45 jaar of ouder
- Vaker bij vrouwen dan bij mannen
    `,
    timeCourse: 'Klachten ontstaan meestal geleidelijk',
    symptoms: `
- Pijn bij beweging
- Beperkte flexie of extensie
    `,
    diagnostics: `
Criteria heupartrose (ACR):

Pijn in de heup in combinatie met de volgende kenmerken:
- endorotatie van de heup < 15°
- flexie van de heup ≤ 115°

<em>of</em>

Pijn in de heup in combinatie met de volgende kenmerken:
- leeftijd > 45 jaar
- ochtendstijfheid van de heup ≤ 60 minuten
- pijn bij endorotatie van de heup
- endorotatie van de heup ≥ 15°
    `,
    treatment: `
Indicatie voor fysiotherapie wanneer:
- De hulpvraag relevant is, dus er sprake is van artrosegerelateerde klachten
- Afwezigheid rode vlaggen

#### Vier indicaties van KNGF

<table class="table table-striped-columns">
    <tr>
        <th>Indicatie 1</th>
        <th>Indicatie 2</th>
        <th>Indicatie 3</th>
        <th>Indicatie 4</th>
    </tr>
    <tr>
        <td>
            <ul>
                <li>kortdurende voorlichting, advies en oefen- en beweeginstructie</li>
                <li>Patiënten bij wie toelichting voldoende is</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>voorlichting, advies en <strong>kortdurend</strong> begeleid oefenprogramma</li>
                <li>Patiënten voor wie een oefenprogramma opgesteld dient te worden</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>voorlichting, advies en <strong>langdurend</strong> begeleid oefenprogramma</li>
                <li>Patiënten met andere aandoeningen, zoals DM type II of COPD, waardoor het lastig wordt om een normaal oefenprogramma te volgen</li>
                <li>Patiënten met chronische pijnklachten en/of sterke bewegingsangst</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>voorlichting, pre- en/of postoperatieve oefentherapie vóór of ná een gewrichtsvervangende operatie van de heup en/of knie</li>
                <li>Patiënten die een gewrichtsvervangende operatie gaan hebben of hebben gehad</li>
            </ul>
        </td>
    </tr>
</table>

Start met één tot twee keer per week begeleide oefentherapie, aangevuld met zelfstandig uitgevoerde oefeningen en bouw gedurende de behandelperiode de begeleiding af.

Bij overgewicht / obesitas dient advies over gewichtsreductie gegeven te worden.

#### Oefenprogramma

<table class="table table-striped-columns">
    <tr>
        <th>Aerobe training</th>
        <th>Krachttraining / functionele oefeningen</th>
    </tr>
    <tr>
        <td>
            <ul>
                <li>Minimaal 5 keer per week</li>
                <li>> 60% van maximale hartfrequentie (Borg-score 14-17) of 40-60% van de maximale hartfrequentie (Borg-score 12-13) voor mensen die niet gewend zijn aan aerobe training</li>
                <li>Matig intensief (4 - 6,5 MET). Voorbeelden:
                    <ul>
                        <li>Wandelen op gemiddeld tempo (5 kilometer per uur) = 4 MET</li>
                        <li>Fietsen op gemiddeld tempo (16 kilometer per uur) = 6,5 MET</li>
                        <li>Huishoudelijke klusjes (denk aan stofzuigen, ramen zemen etc.) = 4 MET</li>
                        <li>Traplopen = 6 MET</li>
                    </ul>
                </li>
                <li>Bij aerobe training, kies voor activiteiten met relatief lage gewrichtsbelasting, zoals lopen, fietsen, zwemmen, roeien en crosstrainer</li>
            </ul>
        </td>
        <td>
            <ul>
                <li>Minimaal 2 keer per week</li>
                <li>60-80% van 1RM (Borg-score 14-17) of 50-60% van 1RM (Borg-score 12-13) voor mensen die niet gewend zijn aan krachttraining</li>
                <li>2-4 sets, 8-15 hh / set</li>
                <li>30-60 sec rust tussen de sets</li>
                <li>Bij krachttraining, kies voor oefeningen primair gericht op de grote spiergroepen rondom het knie- en heupgewricht (met name knie-extensoren, heupabductoren en knieflexoren).</li>
                <li>Laat deze oefeningen uitvoeren voor beide benen (zowel voor unilaterale als bilaterale artrose).</li>
                <li>Oefeningen met grote mechanische kniebelasting (bijv. het legextension apparaat) worden bij voorkeur vermeden bij knieartrose en na een gewrichtsvervangende operatie van de knie.</li>
                <li>Bij functionele training, kies voor (onderdelen van) activiteiten die in het dagelijks leven van de patiënt als belemmerend worden ervaren (bijv. lopen, traplopen, gaan zitten en opstaan uit een stoel).</li>
            </ul>
        </td>
    </tr>
</table>

Zorg voor een geleidelijke opbouw in intensiteit gedurende het programma en volg hierin de volgende trainingsprincipes:

<table class="table table-striped">
    <tr>
        <td>
            Laat de training voorafgaan door een warming-up en eindigen met een coolingdown.
        </td>
    </tr>
    <tr>
        <td>
            Bepaal de startintensiteit van de krachttraining en monitor de intensiteit gedurende de behandeling met behulp van de 1RM-submaximaaltest.
        </td>
    </tr>
    <tr>
        <td>
            Bepaal de startintensiteit van de aerobe training en monitor de intensiteit gedurende de behandeling met behulp van hartfrequentie en/of BORG-score.
        </td>
    </tr>
    <tr>
        <td>
            Bouw de intensiteit van de training geleidelijk (d.w.z. 1 keer per week) op tot het maximale niveau dat mogelijk is voor de patiënt.
        </td>
    </tr>
    <tr>
        <td>
            Verlaag de intensiteit van de volgende training, indien pijnklachten in het gewricht toenemen na de training en langer dan 2 uur aanhouden.
        </td>
    </tr>
    <tr>
        <td>
            Start met een korte periode van 10 minuten (of minder indien nodig) bij aerobe oefeningen, bij patiënten die ongetraind zijn en/of beperkt zijn door gewrichtspijn en -mobiliteit.
        </td>
    </tr>
    <tr>
        <td>
            Bied alternatieve oefeningen aan, waarbij dezelfde spiergroepen en energiesystemen worden gebruikt, indien de oefening leidt tot toename in gewrichtspijn.
        </td>
    </tr>
    <tr>
        <td>
            Maak bij het aanpassen van de trainingsintensiteit gebruik van variatie in sets en herhalingen (bij kracht), intensiteit, duur van de sessie of oefening, soort oefening en rustpauzes en bepaal de aanpassing in samenspraak met de patiënt.
        </td>
    </tr>
</table>

#### Tijdsduur

- Streef naar een behandelperiode tussen <strong>8-12</strong> weken, aangevuld met een of enkele follow-upsessies na afronding van deze behandelperiode (bijv. 3 en 6 maanden na afloop van de behandelperiode), om therapietrouw te stimuleren.
- Stimuleer de patiënt om na de behandelperiode zelfstandig te blijven oefenen.
    `,
    references: `
Kampshoff, C.S., Peter, W.F.H., Van Doormaal, M.C.M., Knoop, J., Meerhoff, G.A., & Vliet Vlieland, T.P.M. (2018). <em>KNGF-richtlijn Artrose heup-knie</em>. Het Koninklijk Nederlands Genootschap voor Fysiotherapie. Geraadpleegd op 7 december 2023, van https://www.kngf.nl/kennisplatform/richtlijnen/artrose-heup-knie

Vanhommerig, J.W., Poos, M.J.J.C., Gommer, A.M., Hendriks, C., & Giesbers, H. (z.d.). <em>Artrose | Leeftijd en geslacht</em>. VZinfo. Rijksinstituut voor Volksgezondheid en Milieu. Geraadpleegd op 7 december 2023, van https://www.vzinfo.nl/artrose/leeftijd-en-geslacht
    `
});
