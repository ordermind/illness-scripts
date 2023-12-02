export default class Illness {
    #id;
    #name;
    #images;
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
        images = [],
        description = '',
        epidemiology = '',
        pathophysiology = '',
        timeCourse = '',
        symptoms = '',
        diagnostics = '',
        treatment = '',
        references = '',
    }) {
        this.#id = id;
        this.#name = name;
        this.#images = images;
        this.#description = description;
        this.#epidemiology = epidemiology;
        this.#pathophysiology = pathophysiology;
        this.#timeCourse = timeCourse;
        this.#symptoms = symptoms;
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

    get images() {
        return this.#images;
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
}
