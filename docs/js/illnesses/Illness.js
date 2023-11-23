import KeySymptom from "./KeySymptom.js";
import RegularSymptom from "./RegularSymptom.js";
import RejectingSymptom from "./RejectingSymptom.js";

export default class Illness {
    #id;
    #name;
    #description;
    #pathophysiology;
    #epidemiology;
    #timeCourse;
    #symptoms;
    #diagnostics;
    #treatment;
    #references;

    constructor({
        id,
        name,
        description = '',
        epidemiology = '',
        pathophysiology = '',
        timeCourse = '',
        symptoms = [],
        diagnostics = '',
        treatment = '',
        references = '',
    }) {
        this.#id = id;
        this.#name = name;
        this.#description = description;
        this.#epidemiology = epidemiology;
        this.#pathophysiology = pathophysiology;
        this.#timeCourse = timeCourse;
        this.#symptoms = {
            regular: symptoms.filter(symptom => symptom instanceof RegularSymptom),
            key: symptoms.filter(symptom => symptom instanceof KeySymptom),
            reject: symptoms.filter(symptom => symptom instanceof RejectingSymptom)
        };
        this.#diagnostics = diagnostics;
        this.#treatment = treatment;
        this.#references = references;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    get description() {
        return this.#description;
    }

    get epidemiology() {
        return this.#epidemiology;
    }

    get pathophysiology() {
        return this.#pathophysiology;
    }

    get timeCourse() {
        return this.#timeCourse;
    }

    get symptoms() {
        return this.#symptoms;
    }

    get diagnostics() {
        return this.#diagnostics;
    }

    get treatment() {
        return this.#treatment;
    }

    get references() {
        return this.#references;
    }

    #hasSymptom(symptoms, searchTerms) {
        for (const symptom of symptoms) {
            for (const term of searchTerms) {
                if(symptom.content.toUpperCase().indexOf(term.toUpperCase()) > -1) {
                    return true;
                }
            }
        }

        return false;
    }

    getSymptomRelevance(searchTerms) {
        // If there are rejecting symptoms present, return 0
        if(this.#hasSymptom(this.#symptoms.reject, searchTerms)) {
            return 0;
        }

        // If there are key symptoms present, return 2
        if(this.#hasSymptom(this.#symptoms.key, searchTerms)) {
            return 2;
        }

        // If there are other matching symptoms present, return 1
        if(this.#hasSymptom(this.#symptoms.regular, searchTerms)) {
            return 1;
        }

        return 0;
    }

    hasSymptoms() {
        return this.symptoms.regular.length || this.symptoms.key.length || this.symptoms.reject.length;
    }
}
