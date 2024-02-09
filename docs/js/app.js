import RegionRepository from "./illnesses/RegionRepository.js";
import IllnessRepository from "./illnesses/IllnessRepository.js";
import themeIllnessContent from "./illnesses/Theme.js";

const regionRepository = new RegionRepository();
const illnessRepository = new IllnessRepository();

let currentSearchResults = {};

function renderPage() {
    const html = `
<div class="row mb-3">
    <div class="col-lg-3">
        <h1 class="display-1 fs-2 mb-0">Illness Scripts</h1>
    </div>
    <div class="col-lg-9 text-end">
        <span class="fs-5 badge bg-light text-secondary fw-normal | trigger" data-bs-toggle="collapse" data-bs-target="#collapseFilters">Filters</span>
    </div>
</div>
<div class="row">
    <div class="col">
        <div class="collapse" id="collapseFilters">
            <div class="pb-3">
                <div class="card card-body">
                    <form id="form-search">
                        <div class="filter-element">
                            <select class="form-select" name="region" id="select-region">
                                <option value="">- Regio -</option>
                            </select>
                        </div><div class="filter-element">
                            <input type="text" class="form-control" name="name" placeholder="Naam"/>
                        </div><div class="filter-element">
                            <input type="text" class="form-control" name="pathophysiology" placeholder="Pathofysiologie" />
                        </div><div class="filter-element">
                            <input type="text" class="form-control" name="epidemiology" placeholder="Epidemiologie" />
                        </div><div class="filter-element">
                            <input type="text" class="form-control" name="timeCourse" placeholder="Verloop" />
                        </div><div class="filter-element">
                            <input type="text" class="form-control" name="symptoms" placeholder="Symptomen" />
                        </div><div class="filter-element">
                            <input type="text" class="form-control" name="diagnostics" placeholder="Diagnostiek" />
                        </div><div class="filter-element">
                            <input type="text" class="form-control" name="treatment" placeholder="Behandeling" />
                        </div>

                        <div class="mb-3 d-flex justify-content-between">
                            <input type="submit" class="btn btn-primary" id="submit-filters" value="Filteren" />
                            <input type="reset" class="btn btn-light" id="clear-filters" value="Wissen" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-3 p-2 bg-body-tertiary border text-center">
        <ul class="list-group" id="search-result"></ul>
    </div>
    <div class="col-lg-9 pt-2 bg-secondary text-light">
        <div id="illness-info" class="position-relative"></div>
    </div>
</div>
    `;

    document.getElementById("main").innerHTML = html;
}

function onSearchResultClick(e) {
    const illnessId = e.target.getAttribute('data-illness-id');
    displayIllnessInfoFromSearchResult(illnessId);
    setActiveSearchResultItem(e);
}

function clearIllnessInfo(noHelpText) {
    const wrapper = document.getElementById('illness-info');
    if(noHelpText) {
        wrapper.textContent = '';
    } else {
        wrapper.textContent = '<=== Selecteer een aandoening';
    }
}

function clearSearchResults() {
  const searchResultsWrapper = document.getElementById('search-result');
  while (searchResultsWrapper.firstChild) {
    searchResultsWrapper.lastChild.removeEventListener('click', onSearchResultClick);
    searchResultsWrapper.removeChild(searchResultsWrapper.lastChild);
  }
}

function setActiveSearchResultItem(e) {
    const searchResultsWrapper = document.getElementById('search-result');
    for(const element of searchResultsWrapper.children) {
        element.classList.remove('active');
    }

    e.target.classList.add('active');
}

function displayIllnessInfoFromSearchResult(illnessId) {
    const result = currentSearchResults[illnessId];

    clearIllnessInfo(true);

    const wrapper = document.getElementById('illness-info');
    wrapper.innerHTML = themeIllnessContent(result.illness);
}

function createRegionSelectOptions() {
    const regionSelect = document.getElementById('select-region');

    regionRepository.regions.forEach(region => {
        const option = document.createElement("option");
        option.value = region.id;
        option.innerHTML = region.label;
        regionSelect.appendChild(option);
    });
}

function clearSearchForm(e) {
    e.target.submit();
}

function submitSearchForm(e) {
    if (e.preventDefault) e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    currentSearchResults = illnessRepository.search(formData.region, formData);

    clearSearchResults();
    clearIllnessInfo();

    const searchResultsWrapper = document.getElementById('search-result');
    for(const resultItem of Object.values(currentSearchResults).sort((a, b) => a.illness.name < b.illness.name ? -1 : 1)) {
        const illness = resultItem.illness;
        const element = document.createElement("li");
        element.classList.add('result-item', 'relevance-' + resultItem.relevance, 'list-group-item');
        element.setAttribute('data-illness-id', illness.id);
        element.innerHTML = illness.name;
        element.addEventListener('click', onSearchResultClick);
        searchResultsWrapper.appendChild(element);
    }

    return false;
}

function addSubmitHandler() {
    const form = document.getElementById('form-search');
    if (form.attachEvent) {
        form.attachEvent("submit", submitSearchForm);
    } else {
        form.addEventListener("submit", submitSearchForm);
    }
}

function addClearHandler() {
    const form = document.getElementById('form-search');
    if (form.attachEvent) {
        form.attachEvent("reset", clearSearchForm);
    } else {
        form.addEventListener("reset", clearSearchForm);
    }
}

renderPage();
createRegionSelectOptions();
addSubmitHandler();
addClearHandler();
document.getElementById('submit-filters').click();
