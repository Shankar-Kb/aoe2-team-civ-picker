let allCivs = ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Teutons", "Turks", "Vikings", "Aztecs", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Hindustanis", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Cumans", "Lithuanians", "Tatars"];
let dlcCivs = ["Burgundians", "Sicilians", "Bohemians", "Poles", "Bengalis", "Dravidians", "Gurjaras"];
let greatCivs = ["Britons", "Byzantines", "Celts", "Franks", "Goths", "Mongols", "Persians", "Teutons", "Huns", "Spanish", "Magyars", "Cumans", "Lithuanians"];
let restCivs = ["Chinese", "Japanese", "Saracens", "Turks", "Vikings", "Aztecs", "Koreans", "Mayans", "Incas", "Hindustanis", "Italians", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Tatars"];
let allCivsWithDlc = [...allCivs, ...dlcCivs];
let greatCivsWithDlc = [...greatCivs, "Burgundians", "Bohemians", "Poles"];
let restCivsWithDlc = [...restCivs, "Sicilians"];
let dlcOwners = [];
let playerColors = ["Blue", "Crimson", "Lime", "Yellow", "Cyan", "Fuchsia", "Grey", "Orange"];

let allCivsToDisplay = [...allCivs, ...dlcCivs];
let waterCivs = ["Berbers", "Britons", "Byzantines", "Chinese", "Goths", "Italians", "Japanese", "Koreans", "Malay", "Mayans", "Mongols", "Portuguese", "Saracens", "Spanish", "Teutons", "Turks", "Vikings", "Huns", "Hindustanis", "Vietnamese"];
let waterCivsWithDlc = ["Sicilians", "Bengalis", "Dravidians", "Gurjaras"];

let allMaps = ["Acropolis", "Amazon_Tunnel", "Arabia", "Arena", "Atacama", "Baltic", "Black_Forest", "Bog_Islands", "Coastal", "Continental", "Crater_Lake", "Enemy_Islands", "Four_Lakes", "Front_Line", "Ghost_Lake", "Gold_Rush", "Golden_Pit", "Golden_Swamp", "Greenland", "Hideout", "Hill_Fort", "Highland", "Islands", "Lombardia", "Meadow", "Mediterranean", "MegaRandom", "Mountain_Range", "Open_Plains", "Ring_of_Water", "Runestones", "Sandbank", "Scandinavia", "Socotra", "Team_Islands", "The_Eye"];
let landMaps = ["Acropolis", "Amazon_Tunnel", "Arabia", "Arena", "Atacama", "Black_Forest", "Front_Line", "Ghost_Lake", "Gold_Rush", "Golden_Pit", "Hideout", "Hill_Fort", "Lombardia", "Meadow", "Open_Plains", "Runestones", "Socotra"];
let hybridMaps = ["Coastal", "Continental", "Four_Lakes", "Golden_Swamp", "Highland", "Mediterranean", "Mountain_Range", "Ring_of_Water", "Sandbank", "Scandinavia"];
let waterMaps = ["Baltic", "Bog_Islands", "Crater_Lake", "Enemy_Islands", "Greenland", "Islands", "Team_Islands", "The_Eye"];
let activeMaps = ["Acropolis", "Arabia", "Arena", "Coastal", "Front_Line", "Ghost_Lake", "Golden_Swamp", "Hideout", "Islands", "MegaRandom", "Open_Plains", "Scandinavia", "Socotra", "Team_Islands"];
let removedMaps = ["Acclivity(LND)", "African_Clearing(LND)", "Alpine_Lakes(LND)", "Archipelago(WTR)", "Bogland(HYB)", "Budapest(LND)", "Cenotes(SPL)", "City_of_Lakes(HYB)", "Coastal_Forest(HYB)", "Crater(LND)", "Crossroads(HYB)", "Eruption(LND)", "Fortress(SPL)", "Frigid_Lake(HYB)", "Hamburger(HYB)", "Kilimanjaro(LND)", "Land_Nomad(LND)", "Lowland(LND)", "Mangrove_Jungle(WTR)", "Marketplace(LND)", "Michi(SPL)", "Migration(WTR)", "Mongolia(LND)", "Mountain_Pass(LND)", "Mountain_Ridge(LND)", "Nile_Delta(WTR)", "Nomad(HYB)", "Northern_Isles(WTR)", "Oasis(LND)", "Pacific_Islands(WTR)", "Ravines(LND)", "Ring_Fortress(LND)", "Rivers(HYB)", "Salt_Marsh(WTR)", "Seize_the_Mountain(WTR)", "Serengeti(LND)", "Snake_Forest(LND)", "Steppe(LND)", "Team_Moats(HYB)", "Valley(LND)", "Volcanic_Island(HYB)", "Water_Nomad(WTR)", "Wolf_Hill(LND)", "Yucatán(LND)", "Border_Stones(LND)", "Canyons(HYB)", "Enemy_Archipelago(WTR)", "Far_Out(LND)", "Holy_Line(HYB)", "Inner_Circle(LND)", "Journey_South(HYB)", "Jungle_Islands(WTR)", "Jungle_Lanes(LND)", "Motherland(WTR)", "Snakepit(HYB)", "Sprawling_Streams(HYB)", "Swirling_River(HYB)", "Twin_Forests(HYB)", "Yin_Yang(HYB)"];

let brokenLinkMaps = ["Acropolis", "Fortress", "Hill_Fort", "Yucatán"];
let liquipediaLinkMaps = ["Acclivity", "African_Clearing", "Amazon_Tunnel", "Atacama", "Coastal_Forest", "Crossroads", "Eruption", "Frigid_Lake", "Greenland", "Lowland", "Marketplace", "Meadow", "Michi", "Mountain_Range", "Northern_Isles", "Ring_Fortress", "Runestones", "Seize_the_Mountain", "Snake_Forest", "Sprawling_Streams", "Swirling_River", "Team_Moats", "Twin_Forests", "Volcanic_Island"];
let liquipediaMapLink = (mapName) => `https://liquipedia.net/ageofempires/${mapName}`;
let brokenMapLink = (mapName) => `https://ageofempires.fandom.com/wiki/${mapName}_(map)`;
let mapLink = (mapName) => `https://ageofempires.fandom.com/wiki/${mapName}`;

let brokenLinkCivs = ["Chinese", "Japanese", "Persians", "Aztecs", "Spanish", "Incas", "Portuguese"];
let defaultCivLink = (civName) => `https://ageofempires.fandom.com/wiki/${civName}`;
let brokenCivLink = (civName) => `https://ageofempires.fandom.com/wiki/${civName}_(Age_of_Empires_II)`;
let civTreeLink = (civName) => `https://aoe2techtree.net/#${civName}`;

let freeDlcEvent = false;
function handleFreeDlcEvent() {
    freeDlcEvent = document.getElementById("freeDlcEventCheckbox").checked;
    if (freeDlcEvent) {
        allCivs = allCivs.concat(dlcCivs);
        greatCivs = greatCivs.concat("Burgundians", "Bohemians", "Poles");
        restCivs = restCivs.concat("Sicilians");
        dlcCivs.splice(0, dlcCivs.length);
    }
    else if (!freeDlcEvent) location.reload();
}

let playerData = {};
let myInit = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    cache: 'default'
};
let playerDataRequest = new Request("./player-data.json", myInit);
async function getData() {
    if (Object.keys(playerData.length > 0))
        for (let key in playerData) delete playerData[key];

    let resp = await fetch(playerDataRequest);
    playerData = await resp.json();
    if (!freeDlcEvent) {
        for (let player in playerData) {
            if (playerData[player].dlc_civs.length > 0)
                dlcOwners.push(player);
        }
    }
}
getData();

function shuffleArray(array) {

    //Fisher–Yates Shuffle
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    //Old Version - array.sort(() => Math.random() - 0.5);
}

function createHtmlElement(element, className = '', id = '') {
    let elem = document.createElement(element);
    elem.setAttribute('class', className);
    elem.setAttribute('id', id);
    return elem;
}

function deleteArrayElement(array, elementName) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === elementName) {
            array.splice(i, 1);
        }
    }
    return array;
}

function getRandomCiv(civPool, allCivsArr, greatCivsArr, restCivsArr, allCivsWithDlcArr, greatCivsWithDlcArr, restCivsWithDlcArr, playerName) {
    let playerNameLowerCase = playerName.toLowerCase();
    switch (civPool) {

        case "ALL": return allCivsArr[Math.floor(Math.random() * allCivsArr.length)];

        case "GREAT": return greatCivsArr[Math.floor(Math.random() * greatCivsArr.length)];

        case "REST": return restCivsArr[Math.floor(Math.random() * restCivsArr.length)];

        case "ALL-DLC": {
            let allCivsWithOwndedDlc = allCivs.concat(playerData[playerNameLowerCase].dlc_civs);
            let filteredAllDlcCivs = allCivsWithDlcArr.filter(elem => allCivsWithOwndedDlc.includes(elem));
            return filteredAllDlcCivs[Math.floor(Math.random() * filteredAllDlcCivs.length)];
        }

        case "GREAT-DLC": {
            let greatCivsWithOwndedDlc = greatCivs.concat(playerData[playerNameLowerCase].dlc_civs);
            let filteredGreatDlcCivs = greatCivsWithDlcArr.filter(elem => greatCivsWithOwndedDlc.includes(elem));
            return filteredGreatDlcCivs[Math.floor(Math.random() * filteredGreatDlcCivs.length)];
        }

        case "REST-DLC": {
            let restCivsWithOwndedDlc = restCivs.concat(playerData[playerNameLowerCase].dlc_civs);
            let filteredRestDlcCivs = restCivsWithDlcArr.filter(elem => restCivsWithOwndedDlc.includes(elem));
            return filteredRestDlcCivs[Math.floor(Math.random() * filteredRestDlcCivs.length)];
        }
    }
}

function checkDlcOwner(playerNameArg, dlcOwnersArr) {

    return dlcOwnersArr.includes(playerNameArg.toLowerCase());
}

function swapPlayers(playerNamesArr, swapDepthArg,  swapModeArg) {

    if (swapDepthArg === 0) return playerNamesArr;

    else if (swapDepthArg > 0) {
        let teamOnePlayers = playerNamesArr.slice(0, playerNamesArr.length / 2);
        let teamTwoPlayers = playerNamesArr.slice(playerNamesArr.length / 2, playerNamesArr.length);

        if (swapModeArg === "FULL") {
            let newPlayersArr = [...playerNamesArr];
            if (swapDepthArg >= playerNamesArr.length / 2) {
                return shuffleArray(newPlayersArr);
            }
            else {
                let teamOneShuffle = teamOnePlayers.splice(-swapDepthArg, swapDepthArg);
                let teamTwoShuffle = teamTwoPlayers.splice(-swapDepthArg, swapDepthArg);
                let shuffleTeams = teamOneShuffle.concat(teamTwoShuffle);
                shuffleTeams = shuffleArray(shuffleTeams);
                teamOnePlayers = teamOnePlayers.concat(shuffleTeams.slice(0, Math.ceil(shuffleTeams.length / 2)));
                teamTwoPlayers = teamTwoPlayers.concat(shuffleTeams.slice(Math.ceil(shuffleTeams.length / 2, shuffleTeams.length - 1)));
                return teamOnePlayers.concat(teamTwoPlayers);
            }
        }
        else if (swapModeArg === "PAIR") {
            // for (let n = 0; n < swapDepthArg; n++) { // Top to Bottom Swap
            for (let n = (playerNamesArr.length / 2) - 1; n > (playerNamesArr.length / 2) - 1 - swapDepthArg; n--) {

                if (Math.floor((Math.random() * 100) + 1) % 2 !== 0) {

                    [teamTwoPlayers[n], teamOnePlayers[n]] = [teamOnePlayers[n], teamTwoPlayers[n]];
                }
            }
        }
    }
    return teamOnePlayers.concat(teamTwoPlayers);
}

async function getPlayerRating(playerName) {

    let leaderBoardId = 0;
    let steamId = playerData[playerName.toLowerCase()].id;
    if (steamId !== null && steamId !== undefined) {
        const response = await fetch(`https://aoe2.net/api/player/ratinghistory?game=aoe2de&leaderboard_id=${leaderBoardId}&steam_id=${steamId}&count=1`)
            .then(resp => resp.json())
            .catch(err => console.log(err));
        if (response.length > 0) return `[${response[0].rating}]`;
        else return "[N/A]";
    }
    else {
        return "[N/A]";
    }
}

async function displayGeneratedTeams(teamOnePlayersArr, teamTwoPlayersArr, teamOneCivsArr, teamTwoCivsArr, brokenLinkCivsArr, brokenLinkMapsArr, mapNamesArr, applyRandomMapArg, displayPlayerRatingArg, teamOneColorsArr = false, teamTwoColorsArr = false) {

    let ShouldDisplayRating = displayPlayerRatingArg;
    let shouldGenerateMap = applyRandomMapArg;
    let brokenLinkCivs = brokenLinkCivsArr;

    let displayBox = document.getElementById('displayBox');
    let matchBox = createHtmlElement('div', 'match-box');
    displayBox.appendChild(matchBox);

    //console.log(teamOnePlayersArr, teamOneCivsArr, teamOneColorsArr, teamTwoPlayersArr, teamTwoCivsArr, teamTwoColorsArr);

    let teamOneBox = createHtmlElement('div', 'team-one-box', 'teamOneBox');
    let versusBox = createHtmlElement('div', 'versus-box', 'versusBox');
    let teamTwoBox;
    if (!ShouldDisplayRating) teamTwoBox = createHtmlElement('div', 'team-two-box', 'teamTwoBox');
    else teamTwoBox = createHtmlElement('div', 'team-two-box team-two-box-display-rating', 'teamTwoBox');

    matchBox.append(teamOneBox, versusBox, teamTwoBox);

    if (mapNamesArr.length === 0) shouldGenerateMap = false;

    if (shouldGenerateMap) {

        mapName = mapNamesArr[Math.floor(Math.random() * mapNamesArr.length)];

        let mapLinkBox = createHtmlElement('a', 'map-link-box');
        versusBox.appendChild(mapLinkBox);

        if (brokenLinkMapsArr.includes(mapName)) mapLinkBox.href = `https://ageofempires.fandom.com/wiki/${mapName}_(map)`;
        else mapLinkBox.href = `https://ageofempires.fandom.com/wiki/${mapName}`;
        mapLinkBox.target = "_blank";

        let mapIcon = createHtmlElement('img', 'map-icon-box');
        mapIcon.src = `assets/img/maps/${mapName}.png`;
        mapIcon.alt = mapName;
        mapLinkBox.appendChild(mapIcon);
    }
    else versusBox.innerHTML = `<img src="assets/img/fancy-crossed-swords.png" alt="Versus Icon" class="versus-icon-box">`;

    async function displayPlayer(teamBox, civName, playerName, playerColor, displayRating){

        let playerOuterBox = createHtmlElement('div', 'player-box');
        teamBox.appendChild(playerOuterBox);

        let civIconBox = createHtmlElement('a', 'civ-icon-box');
        civIconBox.href = `https://aoe2techtree.net/#${civName}`;
        civIconBox.innerHTML = `<img src="assets/img/icons/${civName}.png" alt="${civName}" class="civ-icon">`;
        civIconBox.target = "_blank";

        let playerRating = "";
        if (displayRating) playerRating = await getPlayerRating(playerName);

        let playerTextBox = createHtmlElement('div', 'player-text-box');
        let randomNumber = Math.floor(Math.random() * (10000 - 1 + 1) + 1);
        let playerNameBox = createHtmlElement('div', 'player-name-box', playerName + randomNumber);
        playerNameBox.innerHTML = `${playerName} ${playerRating}`;

        let civNameBox = createHtmlElement('a', 'civ-name-box');
        if (brokenLinkCivs.includes(civName)) civNameBox.href = `https://ageofempires.fandom.com/wiki/${civName}_(Age_of_Empires_II)`;
        else civNameBox.href = `https://ageofempires.fandom.com/wiki/${civName}`;
        civNameBox.target = "_blank";
        civNameBox.innerHTML = `${civName}`;

        playerOuterBox.append(civIconBox, playerTextBox);
        playerTextBox.append(playerNameBox, civNameBox);

        if (playerColor) document.getElementById(playerName + randomNumber).style.color = playerColor;
    }
    
    for (let a = 0; a < teamOnePlayersArr.length; a++) {
        
        await displayPlayer(teamOneBox, teamOneCivsArr[a], teamOnePlayersArr[a], teamOneColorsArr[a], ShouldDisplayRating);
        await displayPlayer(teamTwoBox, teamTwoCivsArr[a], teamTwoPlayersArr[a], teamTwoColorsArr[a], ShouldDisplayRating);
    }

    let civNamesArrSound = document.getElementsByClassName("civ-name-box");
    for (let element of civNamesArrSound) {
        if (element.getAttribute('listener') !== 'true') {
            element.setAttribute('listener', 'true');
            element.addEventListener('click', function () {
                playAudio("Open_Civ");
            });
        }
    }
    let civIconArrSound = document.getElementsByClassName("civ-icon-box");
    for (let element of civIconArrSound) {
        if (element.getAttribute('listener') !== 'true') {
            element.setAttribute('listener', 'true');
            element.addEventListener('click', function () {
                playAudio("Open_Civ");
            });
        }
    }
    document.getElementById('clearButton').disabled = false;
    document.getElementById('generateButton').disabled = false;
}

function assignCivsToPlayers(playerNamesArr, playerCivsArr, playerColorsArr, mapNamesArr, brokenLinkCivsArr, brokenLinkMapsArr, applyRandomMapArg, displayPlayerRatingArg, applyPlayerColorArg, applyTeamPosArg) {

    let teamOnePlayers = playerNamesArr.slice(0, playerNamesArr.length / 2);
    let teamTwoPlayers = playerNamesArr.slice(playerNamesArr.length / 2, playerNamesArr.length)
    let teamOneCivs = playerCivsArr.slice(0, playerCivsArr.length / 2);
    let teamTwoCivs = playerCivsArr.slice(playerCivsArr.length / 2, playerCivsArr.length);

    if (applyPlayerColorArg) {

        let teamOneColors, teamTwoColors = [];
        let playerColorsNew = [...playerColorsArr];

        if (applyTeamPosArg) {
            playerColorsNew = playerColorsNew.slice(0, playerNamesArr.length);
            teamOneColors = playerColorsNew.filter((elem, index) => index%2 !== 0);
            teamOneColors = shuffleArray(teamOneColors);
            teamTwoColors = playerColorsNew.filter((elem, index) => index%2 === 0);
            teamTwoColors = shuffleArray(teamTwoColors);
        }
        else {
            playerColorsNew = shuffleArray(playerColorsNew);
            teamOneColors = playerColorsNew.slice(0, playerCivsArr.length / 2);
            teamTwoColors = playerColorsNew.slice(playerCivsArr.length / 2, playerCivsArr.length);
        }
        displayGeneratedTeams(teamOnePlayers, teamTwoPlayers, teamOneCivs, teamTwoCivs, brokenLinkCivsArr, brokenLinkMapsArr, mapNamesArr, applyRandomMapArg, displayPlayerRatingArg, teamOneColors, teamTwoColors);
    }
    else if (!applyPlayerColorArg) {

        displayGeneratedTeams(teamOnePlayers, teamTwoPlayers, teamOneCivs, teamTwoCivs, brokenLinkCivsArr, brokenLinkMapsArr, mapNamesArr, applyRandomMapArg, displayPlayerRatingArg);
    }
}

function generateTeamCivsMain(playerCount, applyRandomMap, applyPlayerRating, applyPlayerColor, applyTeamPos, applyCivBalance, swapPlayerDepth, swapPlayerMode, allCivsArr, greatCivsArr, restCivsArr, allCivsWithDlcArr, greatCivsWithDlcArr, restCivsWithDlcArr, brokenLinkCivsArr, brokenLinkMapsArr, dlcOwnersArr, mapPoolArr, ...playerNamesArgs) {

    let usedCivs = [];
    let greatCivCount = 0;
    let playerCivs = [];
    let playerNames = playerNamesArgs;

    //Copy By Value
    // let allCivs = [...allCivsArr];
    // let greatCivs = [...greatCivsArr];
    // let restCivs = [...restCivsArr];
    // let allCivsWithDlc = [...allCivsWithDlcArr];
    // let greatCivsWithDlc = [...greatCivsWithDlcArr];
    // let restCivsWithDlc = [...restCivsWithDlcArr];

    //Copy By Reference
    let allCivs = allCivsArr;
    let greatCivs = greatCivsArr;
    let restCivs = restCivsArr;
    let allCivsWithDlc = allCivsWithDlcArr;
    let greatCivsWithDlc = greatCivsWithDlcArr;
    let restCivsWithDlc = restCivsWithDlcArr;

    let dlcOwners = [...dlcOwnersArr];
    let mapNames = [...mapPoolArr];

    allCivs = shuffleArray(allCivs);
    greatCivs = shuffleArray(greatCivs);
    restCivs = shuffleArray(restCivs);
    allCivsWithDlc = shuffleArray(allCivsWithDlc);
    greatCivsWithDlc = shuffleArray(greatCivsWithDlc);
    restCivsWithDlc = shuffleArray(restCivsWithDlc);
    mapNames = shuffleArray(mapNames);

    playerNames = swapPlayers(playerNames, swapPlayerDepth, swapPlayerMode);

    if (applyCivBalance === true && playerCount > greatCivs.length && playerCount > greatCivsWithDlc.length && greatCivs.length >= 2 && greatCivsWithDlc.length >= 2) applyCivBalance = false;

    if (applyCivBalance) {

        //Team 1 Logic
        let halfOfTeam;
        if (playerCount === 2) halfOfTeam = playerCount / 2;
        else if (playerCount === 4) halfOfTeam = (playerCount / 2) - 1;
        else halfOfTeam = (playerCount / 2) - 2;

        for (let i = 0; i < playerCount / 2; i++) {

            if (greatCivCount >= halfOfTeam) playerCivs[i] = getRandomCiv("REST", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, playerNames[i]);
            else {
                if (checkDlcOwner(playerNames[i], dlcOwners) === true) playerCivs[i] = getRandomCiv("ALL-DLC", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, playerNames[i]);
                else {
                    playerCivs[i] = getRandomCiv("ALL", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, playerNames[i]);
                }
            }
            if (usedCivs.includes(playerCivs[i])) i--;
            else {
                usedCivs.push(playerCivs[i]);
                if (greatCivsWithDlc.includes(playerCivs[i])) greatCivCount++;
            }
        }

        //Team 2 Logic
        let civOrder = [];
        for (let j = 0; j < playerCount / 2; j++) {

            while (greatCivCount > 0) {
                civOrder.push("GREAT");
                greatCivCount--;
                j++;
            }
            if (playerCount > 2 || civOrder.length === 0) civOrder.push("REST");
        }
        civOrder = shuffleArray(civOrder);

        for (let k = 0; k < civOrder.length; k++) {

            let currentIndex = k + playerCount / 2;
            if (civOrder[k] === "GREAT") {
                if (checkDlcOwner(playerNames[currentIndex], dlcOwners)) playerCivs[currentIndex] = getRandomCiv("GREAT-DLC", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, playerNames[currentIndex]);
                else playerCivs[currentIndex] = getRandomCiv("GREAT", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, playerNames[currentIndex]);
                if (usedCivs.includes(playerCivs[currentIndex])) k--;
                else usedCivs.push(playerCivs[currentIndex]);
            }
            else {
                if (checkDlcOwner(playerNames[currentIndex], dlcOwners)) playerCivs[currentIndex] = getRandomCiv("REST-DLC", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, playerNames[currentIndex]);
                else playerCivs[currentIndex] = getRandomCiv("REST", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, playerNames[currentIndex]);
                if (usedCivs.includes(playerCivs[currentIndex])) k--;
                else usedCivs.push(playerCivs[currentIndex]);
            }
        }
    }

    else if (!applyCivBalance) {
        for (let m = 0; m < playerCount; m++) {

            if (checkDlcOwner(playerNames[m], dlcOwners)) playerCivs[m] = getRandomCiv("ALL-DLC", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, playerNames[m]);
            else playerCivs[m] = getRandomCiv("ALL", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, playerNames[m]);

            if (usedCivs.includes(playerCivs[m])) m--;
            else usedCivs.push(playerCivs[m]);
        }
    }
    assignCivsToPlayers(playerNames, playerCivs, playerColors, mapNames, brokenLinkCivsArr, brokenLinkMapsArr, applyRandomMap, applyPlayerRating, applyPlayerColor, applyTeamPos);
}


function getInputsFromUser() {

    let teamOneNames = document.getElementById('teamOneNames').value.trim();
    let teamTwoNames = document.getElementById('teamTwoNames').value.trim();

    if (teamOneNames.includes(',') && teamTwoNames.includes(',')) {
        teamOneNames = teamOneNames.split(',').map(elem => elem.trim());
        teamTwoNames = teamTwoNames.split(',').map(elem => elem.trim());
    }
    else if (teamOneNames.includes(' ') && teamTwoNames.includes(' ')) {
        teamOneNames = teamOneNames.split(' ');
        teamTwoNames = teamTwoNames.split(' ');
    }
    else if (typeof (teamOneNames) === "string" && typeof (teamTwoNames) === "string" && teamOneNames.length < 16 && teamTwoNames.length < 16) {
        teamOneNames = teamOneNames.split();
        teamTwoNames = teamTwoNames.split();
    }
    else return;

    if (teamOneNames.length !== teamTwoNames.length) {
        alert("Both teams must have an equal number of players!");
        return;
    }
    if (teamOneNames.includes("") && teamOneNames.includes("")) {
        alert("Enter player names!")
        return;
    }

    let playerNames = teamOneNames.concat(teamTwoNames);
    let playerCount = playerNames.length;

    playerNames = playerNames.map(elem => elem.trim());

    let swapDepthInput = document.querySelectorAll('input[name="swapDepthLevel"]');
    let selectedSwapDepth = "";
    for (const elem of swapDepthInput) {
        if (elem.checked) {
            selectedSwapDepth = +elem.value;
            break;
        }
    }

    let swapModeInput = document.querySelectorAll('input[name="swapMode"]');
    let selectedSwapMode = "";
    for (const elem of swapModeInput) {
        if (elem.checked) {
            selectedSwapMode = elem.value;
            break;
        }
    }

    let civBalanceInput = document.getElementById('civBalance');
    let selectedCivBalance = civBalanceInput.checked;

    let teamColorsInput = document.getElementById('playerColors');
    let selectedTeamColors = teamColorsInput.checked;

    let teamPositionInput = document.getElementById('teamPosition');
    let selectedTeamPos = teamPositionInput.checked;

    let generateMapInput = document.getElementById('randomMap');
    let shouldGenerateMap = generateMapInput.checked;

    let playerRatingInput = document.getElementById('playerRating');
    let displayPlayerRating = playerRatingInput.checked;

    if (selectedSwapDepth !== 0 && selectedSwapDepth > playerNames.length / 2) selectedSwapDepth = playerNames.length / 2;
    if (playerNames.length > 8) playerNames.length = 8;

    document.getElementById('clearButton').disabled = true;
    document.getElementById('generateButton').disabled = true;

    //console.log(playerCount, selectedTeamColors, selectedCivBalance, selectedSwapDepth, playerNames);
    generateTeamCivsMain(playerCount, shouldGenerateMap, displayPlayerRating, selectedTeamColors, selectedTeamPos, selectedCivBalance, selectedSwapDepth, selectedSwapMode, allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, brokenLinkCivs, brokenLinkMaps, dlcOwners, activeMaps, ...playerNames);
}

function addDlcOwners() {

    if (freeDlcEvent) return;
    let dlcPlayerNames = document.getElementById("dlcOwnerNames").value.trim();
    if (dlcPlayerNames.includes(',')) {
        dlcPlayerNames = dlcPlayerNames.split(',').map(elem => elem.trim());
    }
    else if (dlcPlayerNames.includes(' ')) {
        dlcPlayerNames = dlcPlayerNames.split(' ');
    }
    else if (typeof (dlcPlayerNames) === "string" && dlcPlayerNames.length < 16) {
        dlcPlayerNames = dlcPlayerNames.split();
    }
    else return;
    let selectedDlcPacks = document.querySelectorAll('input[name="dlcCivPacksCheckbox"]');
    let selectedDlcArr = [];
    for (const elem of selectedDlcPacks) {
        if (elem.checked) {
            selectedDlcArr = selectedDlcArr.concat(...elem.value.split(' '));
        }
    }
    dlcPlayerNames.forEach(elem => {
        let elemLowerCase = elem.toLowerCase();
        if (dlcOwners.includes(elemLowerCase) === false) {
            dlcOwners.push(elemLowerCase);
            playerData[elemLowerCase] = [...selectedDlcArr];
        }
    })
}

function clearGeneratedTeams() {
    console.clear();
    document.getElementById('displayBox').innerHTML = '';
}

function playAudio(fileName) {
    let audioObject = new Audio(`assets/sound/${fileName}.wav`);
    audioObject.setAttribute("type", "audio/wav");
    audioObject.setAttribute("autoplay", "false");
    audioObject.setAttribute("preload", "auto");
    audioObject.play();
}

//Local Variable(greatCivs, restCivs, greatCivsWithDlc, restCivsWithDlc) & Function(displayAllCivs) Dependant Function
function modifyAllCiv(civName, modifyType) {

    switch (modifyType) {

        case "ADD_GREAT":
            //console.log(`ADD_GREAT is triggered for ${civName}`);
            if (dlcCivs.includes(civName)) {
                greatCivsWithDlc.push(civName);
                restCivsWithDlc = deleteArrayElement(restCivsWithDlc, civName);

                if(!allCivs.includes(civName) && !allCivsWithDlc.includes(civName)){
                    allCivs.push(civName);
                    allCivsWithDlc.push(civName);
                }
            }
            else {
                greatCivs.push(civName);
                restCivs = deleteArrayElement(restCivs, civName);
                greatCivsWithDlc.push(civName);
                restCivsWithDlc = deleteArrayElement(restCivsWithDlc, civName);

                if(!allCivs.includes(civName)){
                    allCivs.push(civName);
                }
            }
            //console.log(greatCivs, restCivs, greatCivsWithDlc, restCivsWithDlc);
            displayAllCivs(allCivsToDisplay, brokenLinkCivs, allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, "GREAT_CIVS");
            break;

        case "REMOVE_GREAT":
            //console.log(`REMOVE_GREAT is triggered for ${civName}`);
            if (dlcCivs.includes(civName)) {
                restCivsWithDlc.push(civName);
                greatCivsWithDlc = deleteArrayElement(greatCivsWithDlc, civName);
            }
            else {
                restCivs.push(civName);
                greatCivs = deleteArrayElement(greatCivs, civName);
                restCivsWithDlc.push(civName);
                greatCivsWithDlc = deleteArrayElement(greatCivsWithDlc, civName);
            }
            //console.log(greatCivs, restCivs, greatCivsWithDlc, restCivsWithDlc);
            displayAllCivs(allCivsToDisplay, brokenLinkCivs, allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, "GREAT_CIVS");
            break;
                    
        case "ADD_ALL":
            //console.log(`ADD_ALL is triggered for ${civName}`);
            if (dlcCivs.includes(civName)){
                allCivsWithDlc.push(civName);
                if(!restCivsWithDlc.includes(civName)) restCivsWithDlc.push(civName);

            } 
            else {
                allCivs.push(civName);
                allCivsWithDlc.push(civName);
                if(!restCivs.includes(civName)) restCivs.push(civName);
            }
            //console.log(allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
            displayAllCivs(allCivsToDisplay, brokenLinkCivs, allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, "ALL_CIVS");
            break;

        case "REMOVE_ALL":
            //console.log(`REMOVE_ALL is triggered for ${civName}`);
            if(dlcCivs.includes(civName)){
                allCivsWithDlc = deleteArrayElement(allCivsWithDlc, civName);
                if(greatCivsWithDlc.includes(civName)) greatCivsWithDlc = deleteArrayElement(greatCivsWithDlc, civName);
                else if(restCivs.includes(civName)) restCivsWithDlc = deleteArrayElement(restCivsWithDlc, civName);
            } 
            else {
                allCivs = deleteArrayElement(allCivs, civName);
                allCivsWithDlc = deleteArrayElement(allCivsWithDlc, civName);
                if(greatCivs.includes(civName)) greatCivs = deleteArrayElement(greatCivs, civName);
                else if(restCivs.includes(civName)) restCivs = deleteArrayElement(restCivs, civName);

                if(greatCivsWithDlc.includes(civName)) greatCivsWithDlc = deleteArrayElement(greatCivsWithDlc, civName);
                else if(restCivs.includes(civName)) restCivsWithDlc = deleteArrayElement(restCivsWithDlc, civName);
            }
            //console.log(allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
            displayAllCivs(allCivsToDisplay, brokenLinkCivs, allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, "ALL_CIVS");
            break;
    }
}

function displayAllCivs(allCivsToDisplayArr, brokenLinkCivsArr, allCivsArr, greatCivsArr, restCivsArr, allCivsWithDlcArr, greatCivsWithDlcArr, restCivsWithDlcArr, toggleType = "") {

    let allCivsToDisplay = [...allCivsToDisplayArr];
    allCivsToDisplay = allCivsToDisplay.sort();

    let brokenLinkCivs = brokenLinkCivsArr;
    let allCivs = allCivsArr;
    let greatCivs = greatCivsArr;
    let restCivs = restCivsArr;
    let allCivsWithDlc = allCivsWithDlcArr;
    let greatCivsWithDlc = greatCivsWithDlcArr;
    let restCivsWithDlc = restCivsWithDlcArr;

    // console.log("allCivs: ", allCivs);
    // console.log("greatCivs: ", greatCivs);
    // console.log("restCivs: ", restCivs);
    // console.log("allCivsWithDlc: ", allCivsWithDlc);
    // console.log("greatCivsWithDlc: ", greatCivsWithDlc);
    // console.log("restCivsWithDlc: ", restCivsWithDlc);

    let halfPoint = Math.ceil(allCivsToDisplay.length / 2);
    let firstHalfCivs = allCivsToDisplay.splice(0, halfPoint);
    let secondHalfCivs = allCivsToDisplay.splice(-halfPoint);

    let leftBox = document.getElementById("leftBox");
    let rightBox = document.getElementById("rightBox");

    leftBox.innerHTML = '';
    rightBox.innerHTML = '';

    function displayCivilization(civilizationArr, containerName, greatCivsArr, greatCivsWithDlcArr) {

        let greatCivs = greatCivsArr;
        let greatCivsWithDlc = greatCivsWithDlcArr;

        let toggleInput, selectedToggleValue;
        if (toggleType === "ALL_CIVS") {
            toggleInput = document.getElementById('modifyAllCivs');
            selectedToggleValue = toggleInput.checked;
            if (selectedToggleValue) document.getElementById('modifyGreatCivs').checked = false;
        }
        else if (toggleType === "GREAT_CIVS") {
            toggleInput = document.getElementById('modifyGreatCivs');
            selectedToggleValue = toggleInput.checked;
            if (selectedToggleValue) document.getElementById('modifyAllCivs').checked = false;
        }

        for (let z = 0; z < civilizationArr.length; z++) {

            let civBox = createHtmlElement('div', 'civilization-box');
            containerName.appendChild(civBox);

            let civIcon = createHtmlElement('a', 'civilization-icon-box');
            civIcon.href = `https://aoe2techtree.net/#${civilizationArr[z]}`;
            civIcon.innerHTML = `<img src="assets/img/icons/${civilizationArr[z]}.png" alt="${civilizationArr[z]}" class="civilization-icon">`;
            civIcon.target = "_blank";

            let civName = createHtmlElement('a', 'civilization-name-box');
            if (brokenLinkCivs.includes(civilizationArr[z])) civName.href = `https://ageofempires.fandom.com/wiki/${civilizationArr[z]}_(Age_of_Empires_II)`;
            else civName.href = `https://ageofempires.fandom.com/wiki/${civilizationArr[z]}`;
            civName.target = "_blank";
            civName.innerHTML = `${civilizationArr[z]}`

            let civOuterBox = createHtmlElement('div', 'civilization-outer-box');
            civOuterBox.append(civIcon, civName);

            let civToggle = createHtmlElement('div', 'form-switch form-switch-box');
            let civToggleInput = createHtmlElement('input', 'form-check-input form-check-input-civ');
            civToggleInput.type = "checkbox";
            civToggle.appendChild(civToggleInput);

            if (toggleType === "GREAT_CIVS") {

                if (dlcCivs.includes(civilizationArr[z])) {

                    if (greatCivsWithDlc.includes(civilizationArr[z])) {
                        civToggleInput.checked = true;
                        civToggleInput.addEventListener("change", function () {
                            modifyAllCiv(civilizationArr[z], "REMOVE_GREAT");
                        });
                    }
                    else {
                        civToggleInput.checked = false;
                        civToggleInput.addEventListener("change", function () {
                            modifyAllCiv(civilizationArr[z], "ADD_GREAT");
                        });
                    }
                }

                else {

                    if (greatCivs.includes(civilizationArr[z])) {
                        civToggleInput.checked = true;
                        civToggleInput.addEventListener("change", function () {
                            modifyAllCiv(civilizationArr[z], "REMOVE_GREAT");
                        });
                    }
                    else {
                        civToggleInput.checked = false;
                        civToggleInput.addEventListener("change", function () {
                            modifyAllCiv(civilizationArr[z], "ADD_GREAT");
                        });
                    }
                }
            }
            else if (toggleType === "ALL_CIVS") {

                if (dlcCivs.includes(civilizationArr[z])) {

                    if (allCivsWithDlc.includes(civilizationArr[z])) {
                        civToggleInput.checked = true;
                        civToggleInput.addEventListener("change", function () {
                            modifyAllCiv(civilizationArr[z], "REMOVE_ALL");
                        });
                    }
                    else {
                        civToggleInput.checked = false;
                        civToggleInput.addEventListener("change", function () {
                            modifyAllCiv(civilizationArr[z], "ADD_ALL");
                        });
                    }
                }

                else {
                    if (allCivs.includes(civilizationArr[z])) {
                        civToggleInput.checked = true;
                        civToggleInput.addEventListener("change", function () {
                            modifyAllCiv(civilizationArr[z], "REMOVE_ALL");
                        });
                    }
                    else {
                        civToggleInput.checked = false;
                        civToggleInput.addEventListener("change", function () {
                            modifyAllCiv(civilizationArr[z], "ADD_ALL");
                        });
                    }
                }
            }
            if (!selectedToggleValue) civToggle.style.display = "none";
            civBox.append(civOuterBox, civToggle);
        }
    }
    displayCivilization(firstHalfCivs, leftBox, greatCivs, greatCivsWithDlc);
    displayCivilization(secondHalfCivs, rightBox, greatCivs, greatCivsWithDlc);
}

//Local Variable(allCivs, dlcCivs, brokenLinkCivs) Dependant Function
function displayAllCivsWithToggle() {
    displayAllCivs(allCivsToDisplay, brokenLinkCivs, allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, "ALL_CIVS");
}

//Local Variable(allCivs, dlcCivs, brokenLinkCivs) Dependant Function
function displayGreatCivsWithToggle() {
    displayAllCivs(allCivsToDisplay, brokenLinkCivs, allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, "GREAT_CIVS");
}

//Local Variable(allMaps, activeMaps, brokenLinkMaps) Dependant Function
function displayAllMapsWithToggle() {
    displayAllMaps(allMaps, activeMaps, brokenLinkMaps);
}

function refreshMapCount() {
    document.getElementById('selectedMapCount').innerHTML = `${activeMaps.length} Selected`;
}

function modifyMapPool(mapNamesArr, mapName) {

    if (mapNamesArr.includes(mapName) === false) mapNamesArr.push(mapName);
    else mapNamesArr = deleteArrayElement(mapNamesArr, mapName);
    refreshMapCount();
}

//Variable(allMaps, activeMaps, brokenLinkMaps, landMaps, hybridMaps, waterMaps, removedMaps) Dependant Function
function modifymapPoolToggle(actionType) {

    if(!document.getElementById('modifyMapPool').checked) document.getElementById('modifyMapPool').checked = true;

    switch (actionType) {

        case "DISABLE_ALL":
            activeMaps.splice(0, activeMaps.length);
            displayAllMaps(allMaps, activeMaps, brokenLinkMaps);
            break;

        case "ENABLE_ALL":
            activeMaps.splice(0, activeMaps.length);
            activeMaps = [...allMaps];
            displayAllMaps(allMaps, activeMaps, brokenLinkMaps);
            break;

        case "LAND_MAPS":
            activeMaps.splice(0, activeMaps.length);
            activeMaps = [...landMaps];
            displayAllMaps(allMaps, activeMaps, brokenLinkMaps);
            break;

        case "HYBRID_MAPS":
            activeMaps.splice(0, activeMaps.length);
            activeMaps = [...hybridMaps];
            displayAllMaps(allMaps, activeMaps, brokenLinkMaps);
            break;

        case "WATER_MAPS":
            activeMaps.splice(0, activeMaps.length);
            activeMaps = [...waterMaps];
            displayAllMaps(allMaps, activeMaps, brokenLinkMaps);
            break;
    }
    refreshMapCount();
}

function hideExtraMaps(){

    document.getElementById('hideExtraButton').style.display = 'none';
    document.getElementById('showExtraButton').style.display = 'block';
    if(allMaps.length < removedMaps.length) return;
    let removedMapsNew = [...removedMaps];
    
    removedMapsNew = removedMapsNew.map(elem => elem = elem.slice(0, -5));
    allMaps = allMaps.filter(elem => !removedMapsNew.includes(elem));
    landMaps = landMaps.filter(elem => !removedMapsNew.includes(elem));
    hybridMaps = hybridMaps.filter(elem => !removedMapsNew.includes(elem));
    waterMaps = waterMaps.filter(elem => !removedMapsNew.includes(elem));
    
    displayAllMaps(allMaps, activeMaps, brokenLinkMaps);
}

function showExtraMaps(){

    document.getElementById('showExtraButton').style.display = 'none';
    document.getElementById('hideExtraButton').style.display = 'block';

    if(allMaps.length > removedMaps.length) return;
    
    removedMaps.forEach(elem => {
        let category = '';
        category = elem.slice(-5);
        elem = elem.slice(0, -5);
        switch (category) {
            case "(LND)": 
                landMaps.push(elem);
                break;
            case "(HYB)": 
                hybridMaps.push(elem);
                break;
            case "(WTR)": 
                waterMaps.push(elem);
                break;
        }
        allMaps.push(elem);
    })
    displayAllMaps(allMaps, activeMaps, brokenLinkMaps);
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

function buildMapButtons(){

    let allMapsBox = document.getElementById('allMapsBox');

    let buttonBox = createHtmlElement('div', 'input-group bottom-map-button-box');
    let disableAllButton = createHtmlElement('button', 'btn btn-outline-danger bottom-map-button', 'disableAllButton');
    let enableAllButton = createHtmlElement('button', 'btn btn-outline-success bottom-map-button', 'enableAllButton');
    let landMapsButton = createHtmlElement('button', 'btn btn-outline-warning bottom-map-button');
    let hybridMapsButton = createHtmlElement('button', 'btn btn-outline-secondary bottom-map-button');
    let waterMapsButton = createHtmlElement('button', 'btn btn-outline-primary bottom-map-button');
    let hideExtraButton = createHtmlElement('button', 'btn btn-outline-dark bottom-map-button', 'hideExtraButton');
    let showExtraButton = createHtmlElement('button', 'btn btn-outline-dark bottom-map-button', 'showExtraButton');
    let goTopButton = createHtmlElement('button', 'btn btn-outline-dark bottom-map-button', 'goTopButton');
    let goBottomButton = createHtmlElement('button', 'btn btn-outline-dark bottom-map-button', 'goBottomButton');

    disableAllButton.innerHTML = 'Disable All';
    enableAllButton.innerHTML = 'Enable All';
    landMapsButton.innerHTML = 'Land';
    hybridMapsButton.innerHTML = 'Hybrid';
    waterMapsButton.innerHTML = 'Water';
    hideExtraButton.innerHTML = 'Hide Extra';
    showExtraButton.innerHTML = 'Show Extra';
    goTopButton.innerHTML = 'Go Top';
    goBottomButton.innerHTML = 'Go Bottom';

    disableAllButton.addEventListener("click", function () {
        modifymapPoolToggle("DISABLE_ALL");
    });
    enableAllButton.addEventListener("click", function () {
        modifymapPoolToggle("ENABLE_ALL");
    });
    landMapsButton.addEventListener("click", function () {
        modifymapPoolToggle("LAND_MAPS");
    });
    hybridMapsButton.addEventListener("click", function () {
        modifymapPoolToggle("HYBRID_MAPS");
    });
    waterMapsButton.addEventListener("click", function () {
        modifymapPoolToggle("WATER_MAPS");
    });
    hideExtraButton.addEventListener("click", function () {
        hideExtraMaps();
    });
    showExtraButton.addEventListener("click", function () {
        showExtraMaps();
    });
    goTopButton.addEventListener("click", function () {
        goToTop();
    });
    goBottomButton.addEventListener("click", function () {
        goToBottom();
    });

    buttonBox.append(disableAllButton, hideExtraButton, showExtraButton, landMapsButton, hybridMapsButton, waterMapsButton, goTopButton, goBottomButton, enableAllButton);

    let searchBox = createHtmlElement('div', 'input-group bottom-map-search-box');
    let searchInput = createHtmlElement('input', 'search-bar', 'searchInput');
    let mapsCount = createHtmlElement('button', 'btn btn-outline-dark selected-count-button', 'selectedMapCount');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search by Map Name'
    mapsCount.innerHTML = `${activeMaps.length} Selected`;
    searchInput.addEventListener("input", function (e) {
        handleMapSearch(e.target.value);
    });

    searchBox.append(searchInput, mapsCount);
    allMapsBox.append(buttonBox, searchBox);

    let allMapsInnerBox = createHtmlElement('div', 'all-maps-inner-box', 'allMapsInnerBox');
    allMapsBox.appendChild(allMapsInnerBox);
}
buildMapButtons();

function handleMapSearch(searchValue) {
    if(!searchValue) displayAllMaps(allMaps, activeMaps, brokenLinkMaps);
    let filteredAllMaps = allMaps.filter(elem => {
        return elem.toLowerCase().includes(searchValue.toLowerCase());
    });
    displayAllMaps(filteredAllMaps, activeMaps, brokenLinkMaps);
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
}

document.getElementById("clearButton").addEventListener('click', function () {
    playAudio("Clear_Teams");
});

document.getElementById("generateButton").addEventListener('click', function () {
    playAudio("Generate_Teams");
});

document.body.addEventListener("keypress", function () {
    if (window.event.keyCode === 13) {
        playAudio("Generate_Teams");
        getInputsFromUser();
    }
});

window.onscroll = function() {
    
    if (window.scrollY === 0) {
        document.getElementById('goTopButton').style.display = 'none';
        document.getElementById('goBottomButton').style.display = 'block';
    }
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        document.getElementById('goTopButton').style.display = 'block';
        document.getElementById('goBottomButton').style.display = 'none';
    }
};

document.getElementById('modifyAllCivs').checked = false;
document.getElementById('modifyGreatCivs').checked = false;
document.getElementById("freeDlcEventCheckbox").checked = false;
document.getElementById('hideExtraButton').style.display = 'none';
document.getElementById('goTopButton').style.display = 'none';

displayAllCivs(allCivsToDisplay, brokenLinkCivs, allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
displayAllMaps(allMaps, activeMaps, brokenLinkMaps);