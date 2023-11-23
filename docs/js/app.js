import CategoryRepository from "./illnesses/CategoryRepository.js";
import IllnessRepository from "./illnesses/IllnessRepository.js";
import themeIllnessContent from "./illnesses/Theme.js";

const categoryRepository = new CategoryRepository();
const illnessRepository = new IllnessRepository();

let currentSearchResults = {};

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
    const element = document.createElement("div");
    element.innerHTML = themeIllnessContent(result.illness);
    wrapper.appendChild(element);
}

function createCategoryRadioButtons() {
    const categorySelect = document.getElementById('select-categories');

    categoryRepository.categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category.id;
        option.innerHTML = category.label;
        categorySelect.appendChild(option);
    });
}

function clearSearchForm(e) {
    e.target.submit();
}

function submitSearchForm(e) {
    if (e.preventDefault) e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    currentSearchResults = illnessRepository.search(formData.category, formData);

    clearSearchResults();
    clearIllnessInfo();

    const searchResultsWrapper = document.getElementById('search-result');
    Object.entries(currentSearchResults).forEach(([index, resultItem]) => {
        const illness = resultItem.illness;
        const element = document.createElement("li");
        element.classList.add('result-item', 'relevance-' + resultItem.relevance, 'list-group-item');
        element.setAttribute('data-illness-id', illness.id);
        element.innerHTML = illness.name;
        element.addEventListener('click', onSearchResultClick);
        searchResultsWrapper.appendChild(element);
    });

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

createCategoryRadioButtons();
addSubmitHandler();
addClearHandler();
document.getElementById('submit-filters').click();
