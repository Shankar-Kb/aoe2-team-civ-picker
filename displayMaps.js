import {
    createHtmlElement,
    deleteArrayElement,
} from './utils.js';

function modifymapPoolToggle(allMapsArr, activeMapsArr, brokenLinkMapsArr, landMapsArr, hybridMapsArr, waterMapsArr, actionType) {

    if(!document.getElementById('modifyMapPool').checked) document.getElementById('modifyMapPool').checked = true;

    switch (actionType) {

        case "DISABLE_ALL":
            activeMapsArr.splice(0, activeMapsArr.length);
            displayAllMaps(allMapsArr, activeMapsArr, brokenLinkMapsArr);
            break;

        case "ENABLE_ALL":
            activeMapsArr.splice(0, activeMapsArr.length);
            activeMapsArr = [...allMapsArr];
            displayAllMaps(allMapsArr, activeMapsArr, brokenLinkMapsArr);
            break;

        case "LAND_MAPS":
            activeMapsArr.splice(0, activeMapsArr.length);
            activeMapsArr = [...landMapsArr];
            displayAllMaps(allMapsArr, activeMapsArr, brokenLinkMapsArr);
            break;

        case "HYBRID_MAPS":
            activeMapsArr.splice(0, activeMapsArr.length);
            activeMapsArr = [...hybridMapsArr];
            displayAllMaps(allMapsArr, activeMapsArr, brokenLinkMapsArr);
            break;

        case "WATER_MAPS":
            activeMapsArr.splice(0, activeMapsArr.length);
            activeMapsArr = [...waterMapsArr];
            displayAllMaps(allMapsArr, activeMapsArr, brokenLinkMapsArr);
            break;
    }
    refreshMapCount(activeMapsArr);
}

function goToTop(){
    document.getElementById('goTopButton').style.display = 'none';
    document.getElementById('goBottomButton').style.display = 'block';
    document.body.scrollIntoView(true);
}

function goToBottom(){
    document.getElementById('goBottomButton').style.display = 'none';
    document.getElementById('goTopButton').style.display = 'block';
    document.body.scrollIntoView(false);
}

function handleMapSearch(allMapsArr, activeMapsArr, brokenLinkMapsArr, searchValue) {
    if (!searchValue) displayAllMaps(allMapsArr, activeMapsArr, brokenLinkMapsArr);
    searchValue = searchValue.trim();
    let modifiedSearchValue = searchValue.replace(' ', '_');
    let filteredAllMaps = allMaps.filter(elem => {
        return elem.toLowerCase().startsWith(modifiedSearchValue.toLowerCase());
    });
    displayAllMaps(filteredAllMaps, activeMapsArr, brokenLinkMapsArr);
}

function handleFilterSelectedMaps(allMapsArr, activeMapsArr, brokenLinkMapsArr, shouldFilterMapsArg) {

    document.getElementById("modifyMapPool").checked = false;
    if (shouldFilterMapsArg) {
        let filteredAllMaps = [...activeMapsArr];
        displayAllMaps(filteredAllMaps, activeMapsArr, brokenLinkMapsArr);
    }
    else {
        displayAllMaps(allMapsArr, activeMapsArr, brokenLinkMapsArr);
    }
    shouldFilterMapsArg = !shouldFilterMapsArg;
}

function refreshMapCount(activeMapsArr) {
    document.getElementById('selectedMapCount').innerHTML = `${activeMapsArr.length} Selected`;
}

function modifyMapPool(mapNamesArr, mapName) {

    if (mapNamesArr.includes(mapName) === false) mapNamesArr.push(mapName);
    else mapNamesArr = deleteArrayElement(mapNamesArr, mapName);
    refreshMapCount(mapNamesArr);
}

function displayAllMaps(allMapsArr, activeMapsArr, brokenLinkMapsArr) {

    let allMapsInnerBox = document.getElementById("allMapsInnerBox");
    allMapsInnerBox.innerHTML = '';

    let modifyMapInput = document.getElementById('modifyMapPool');
    let modifyMapInputValue = modifyMapInput.checked;
    allMapsArr = allMapsArr.sort();

    for (let z = 0; z < allMapsArr.length; z++) {

        let mapBox = createHtmlElement('div', 'map-box');
        allMapsInnerBox.appendChild(mapBox);

        let mapLinkBox = createHtmlElement('a', 'map-link-box');

        if (brokenLinkMapsArr.includes(allMapsArr[z])) mapLinkBox.href = `https://ageofempires.fandom.com/wiki/${allMapsArr[z]}_(map)`;
        else mapLinkBox.href = `https://ageofempires.fandom.com/wiki/${allMapsArr[z]}`;
        mapLinkBox.target = "_blank";

        let mapIcon = createHtmlElement('img', 'map-icon-bottom');
        mapIcon.src = `assets/img/maps/${allMapsArr[z]}.png`;
        mapIcon.alt = allMapsArr[z];
        mapLinkBox.appendChild(mapIcon);

        let mapToggleBox = createHtmlElement('div', 'form-switch map-toggle-box');
        let mapToggleInput = createHtmlElement('input', 'form-check-input form-check-input-map');
        mapToggleInput.type = "checkbox";

        if (activeMapsArr.includes(allMapsArr[z]) === true) mapToggleInput.checked = true;
        else mapToggleInput.checked = false;

        mapToggleInput.addEventListener("change", function () {
            modifyMapPool(activeMapsArr, allMapsArr[z]);
        });
        mapToggleBox.appendChild(mapToggleInput);

        mapBox.append(mapLinkBox, mapToggleBox);
        if (!modifyMapInputValue) mapToggleBox.style.display = "none";
    }
};

export {
    modifymapPoolToggle,
    goToTop,
    goToBottom,
    handleMapSearch,
    handleFilterSelectedMaps,
    modifyMapPool,
    displayAllMaps,
    refreshMapCount,
};