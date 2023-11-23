const mapSynonyms = [
    ['zwelling', 'verdikking', 'ontsteking'],
    ['lokaliseerbaar', 'lokaliseerbare'],
];

export default function getAllSynonymsForTerm(term) {
    if(term === "") {
        return new Set();
    }

    const currentSynonyms = new Set([term]);
    let synonymsCount = 0;

    while(currentSynonyms.size > synonymsCount) {
        synonymsCount = currentSynonyms.size;

        for(const set of mapSynonyms) {
            for(const synonym of currentSynonyms) {
                if(set.includes(synonym.toLowerCase())) {
                    for(const item of set) {
                        currentSynonyms.add(item)
                    }
                }
            }
        }
    }

    return currentSynonyms;
}