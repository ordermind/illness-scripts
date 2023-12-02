import SearchResultItem from "./SearchResultItem.js";
import getAllSynonymsForTerm from "./Synonyms.js";
import illnesses from "./illness-list.js";

export default class IllnessRepository {
    get illnesses() {
        return illnesses;
    }

    #evaluateSingleFilter(illnessFieldValue, filterTerms) {
        if(!filterTerms.size) {
            return true;
        }

        // strip html tags and cast to uppercase
        const fieldUC = illnessFieldValue.replace(/(<([^>]+)>)/gi, "").toUpperCase();

        for(const term of filterTerms) {
            if(fieldUC.indexOf(term.toUpperCase()) > -1) {
                return true;
            }
        }

        return false;
    }

    #searchInCategory(category,
    {
        name = new Set(), 
        pathophysiology = new Set(), 
        epidemiology = new Set(), 
        timeCourse = new Set(), 
        symptoms = new Set(), 
        diagnostics = new Set(), 
        treatment = new Set()
    },
    ) {
        const searchResult = this.illnesses[category].map(illness => {
            let relevance = 1;

            if(
                this.#evaluateSingleFilter(illness.name, name)
                && this.#evaluateSingleFilter(illness.pathophysiology, pathophysiology)
                && this.#evaluateSingleFilter(illness.epidemiology, epidemiology)
                && this.#evaluateSingleFilter(illness.timeCourse, timeCourse)
                && this.#evaluateSingleFilter(illness.symptoms, symptoms)
                && this.#evaluateSingleFilter(illness.diagnostics, diagnostics)
                && this.#evaluateSingleFilter(illness.treatment, treatment)
            ) {
                return new SearchResultItem(illness.id, illness, relevance);
            }

            return null;
        }).filter(resultItem => resultItem !== null);

        // Convert the array to an object keyed by illness id
        return searchResult.reduce((obj, item) => {
            return {
            ...obj,
            [item.illnessId]: item,
            };
        }, {});
    }

    #addSynonymsToFilters(filters) {
        for (const [key, value] of Object.entries(filters)) {
            filters[key] = getAllSynonymsForTerm(value);
        }

        return filters;
    }

    search(categoryFilter, filters) {
        const filtersWithSynonyms = this.#addSynonymsToFilters(filters);

        if(categoryFilter) {
            return this.#searchInCategory(categoryFilter, filtersWithSynonyms);
        }

        let allSearchResults = {};
        for(const category of Object.keys(this.illnesses)) {
            allSearchResults = {...allSearchResults, ...this.#searchInCategory(category, filtersWithSynonyms)};
        }

        return allSearchResults;
    }
}