export default class Symptom {
    #content;

    constructor(content = '') {
        this.#content = content;
    }

    get content() {
        return this.#content;
    }
}
