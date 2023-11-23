export default class SearchResultItem {
    #illnessId;
    #illness;
    #relevance;

    constructor(illnessId, illness, relevance = 1) {
        this.#illnessId = illnessId;
        this.#illness = illness;
        this.#relevance = relevance;
    }

    get illnessId() {
        return this.#illnessId;
    }

    get illness() {
        return this.#illness;
    }

    get relevance() {
        return this.#relevance;
    }
}