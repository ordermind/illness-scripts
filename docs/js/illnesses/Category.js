export default class Category {
    #id;
    #label;
    #images;

    constructor({id, label, images = []}) {
        this.#id = id;
        this.#label = label;
        this.#images = images;
    }

    get id() {
        return this.#id;
    }

    get label() {
        return this.#label;
    }

    get images() {
        return this.#images;
    }
}