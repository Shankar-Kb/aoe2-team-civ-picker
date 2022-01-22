let allCivs = ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Teutons", "Turks", "Vikings", "Aztecs", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Cumans", "Lithuanians", "Tatars"];
//let allCivs = ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Teutons", "Turks", "Vikings", "Aztecs", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Cumans", "Lithuanians", "Tatars", "Burgundians", "Sicilians", "Bohemians", "Poles"];
let dlcCivs = ["Burgundians", "Sicilians", "Bohemians", "Poles"];
//let dlcCivs = [];
let allCivsWithDlc = [...allCivs, ...dlcCivs];
//let allCivsWithDlc = [...allCivs];
let greatCivs = ["Britons", "Byzantines", "Celts", "Franks", "Goths", "Mongols", "Persians", "Teutons", "Huns", "Spanish", "Magyars", "Cumans", "Lithuanians"];
//let greatCivs = ["Britons", "Byzantines", "Celts", "Franks", "Goths", "Mongols", "Persians", "Teutons", "Huns", "Spanish", "Magyars", "Cumans", "Lithuanians", "Burgundians", "Bohemians", "Poles"];
let restCivs = ["Chinese", "Japanese", "Saracens", "Turks", "Vikings", "Aztecs", "Koreans", "Mayans", "Incas", "Indians", "Italians", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Tatars"];
//let restCivs = ["Chinese", "Japanese", "Saracens", "Turks", "Vikings", "Aztecs", "Koreans", "Mayans", "Incas", "Indians", "Italians", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Tatars", "Sicilians"];
let greatCivsWithDlc = [...greatCivs, "Burgundians", "Bohemians", "Poles"];
//let greatCivsWithDlc = [...greatCivs];
let restCivsWithDlc = [...restCivs, "Sicilians"];
//let restCivsWithDlc = [...restCivs];
let dlcOwners = ["Maniac", "Lezionare", "Firehawk", "Kronos", "Protox"];
//let dlcOwners = [];

let allCivsToDisplay = [...allCivs, ...dlcCivs];

let allMaps = ["Acropolis", "Amazon_Tunnel", "Arabia", "Arena", "Atacama", "Baltic", "Black_Forest", "Bog_Islands", "Coastal", "Continental", "Crater_Lake", "Enemy_Islands", "Four_Lakes", "Front_Line", "Ghost_Lake", "Gold_Rush", "Golden_Pit", "Golden_Swamp", "Greenland", "Hideout", "Hill_Fort", "Highland", "Islands", "Lombardia", "Meadow", "Mediterranean", "MegaRandom", "Mountain_Range", "Open_Plains", "Ring_of_Water", "Runestones", "Sandbank", "Scandinavia", "Socotra", "Team_Islands", "The_Eye"];

let removedMaps = ["Acclivity(LND)", "African_Clearing(LND)", "Alpine_Lakes(LND)", "Archipelago(WTR)", "Bogland(HYB)", "Budapest(LND)", "Cenotes(SPL)", "City_of_Lakes(HYB)", "Coastal_Forest(HYB)", "Crater(LND)", "Crossroads(HYB)", "Eruption(LND)", "Fortress(SPL)", "Frigid_Lake(HYB)", "Hamburger(HYB)", "Kilimanjaro(LND)", "Land_Nomad(LND)", "Lowland(LND)", "Mangrove_Jungle(WTR)", "Marketplace(LND)", "Michi(LND)", "Migration(WTR)", "Mongolia(LND)", "Mountain_Pass(LND)", "Mountain_Ridge(LND)", "Nile_Delta(WTR)", "Nomad(HYB)", "Northern_Isles(WTR)", "Oasis(LND)", "Pacific_Islands(WTR)", "Ravines(LND)", "Ring_Fortress(LND)", "Rivers(HYB)", "Salt_Marsh(WTR)", "Seize_the_Mountain(WTR)", "Serengeti(LND)", "Snake_Forest(LND)", "Steppe(LND)", "Team_Moats(HYB)", "Valley(LND)", "Volcanic_Island(HYB)", "Water_Nomad(WTR)", "Wolf_Hill(LND)", "Yucatan(LND)", "Border_Stones(LND)", "Canyons(HYB)", "Enemy_Archipelago(WTR)", "Far_Out(LND)", "Holy_Line(HYB)", "Inner_Circle(LND)", "Journey_South(HYB)", "Jungle_Islands(WTR)", "Jungle_Lanes(LND)", "Motherland(WTR)", "Snakepit(HYB)", "Sprawling_Streams(HYB)", "Swirling_River(HYB)", "Twin_Forests(HYB)", "Yin_Yang(HYB)"];

let landMaps = ["Acropolis", "Amazon_Tunnel", "Arabia", "Arena", "Atacama", "Black_Forest", "Front_Line", "Ghost_Lake", "Gold_Rush", "Golden_Pit", "Hideout", "Hill_Fort", "Lombardia", "Meadow", "Open_Plains", "Runestones", "Socotra"];
let hybridMaps = ["Coastal", "Continental", "Four_Lakes", "Golden_Swamp", "Highland", "Mediterranean", "Mountain_Range", "Ring_of_Water", "Sandbank", "Scandinavia"];
let waterMaps = ["Baltic", "Bog_Islands", "Crater_Lake", "Enemy_Islands", "Greenland", "Islands", "Team_Islands", "The_Eye"];
let activeMaps = ["Acropolis", "Arabia", "Arena", "Coastal", "Front_Line", "Ghost_Lake", "Golden_Swamp", "Hideout", "Islands", "MegaRandom", "Open_Plains", "Scandinavia", "Socotra", "Team_Islands"];
let brokenLinkMaps = ["Acropolis", "Fortress", "Hill_Fort"];
let newMapLink = "https://ageofempires.fandom.com/wiki/MapName_(map)"
let mapLink = "https://ageofempires.fandom.com/wiki/MapName";

let brokenLinkCivs = ["Chinese", "Japanese", "Persians", "Aztecs", "Spanish", "Incas", "Indians", "Portuguese"];
let normalCivLink = "https://ageofempires.fandom.com/wiki/CivName";
let newCivLink = "https://ageofempires.fandom.com/wiki/CivName_(Age_of_Empires_II)";
let civTreeLink = "https://aoe2techtree.net/#CivName";
let playerColors = ["Blue", "Crimson", "Lime", "Yellow", "Cyan", "Fuchsia", "Grey", "Orange"];

let playerSteamIds = new Map();
playerSteamIds.set("protox", "76561198044613146");
playerSteamIds.set("firehawk", "76561198207690565");
playerSteamIds.set("maniac", "76561198088035394");
playerSteamIds.set("hawk", "76561198087325373");
playerSteamIds.set("glitch", "76561198032506144");
playerSteamIds.set("kronos", "76561198159403850");
playerSteamIds.set("lezionare", "76561198115672759");
playerSteamIds.set("gunjack", "76561198308551669");
playerSteamIds.set("kuroko", "76561198057496453");
playerSteamIds.set("retempest", "76561198823747771");
playerSteamIds.set("farshan", "76561198131973106");
playerSteamIds.set("anti", "76561198267206225");
playerSteamIds.set("alpha", "76561198800446037");
playerSteamIds.set("peace", "76561198039366732");
playerSteamIds.set("zeltrax", "76561198065460225");
playerSteamIds.set("jasz", "76561198155121580");
playerSteamIds.set("avid", "76561198041682306");
playerSteamIds.set("srisan", "76561198030393767");


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

function getRandomCiv(civPool, allCivsArr, greatCivsArr, restCivsArr, allCivsWithDlcArr, greatCivsWithDlcArr, restCivsWithDlcArr) {

    switch (civPool) {

        case "ALL": return allCivsArr[Math.floor(Math.random() * allCivsArr.length)];

        case "GREAT": return greatCivsArr[Math.floor(Math.random() * greatCivsArr.length)];

        case "REST": return restCivsArr[Math.floor(Math.random() * restCivsArr.length)];

        case "ALL-DLC": return allCivsWithDlcArr[Math.floor(Math.random() * allCivsWithDlcArr.length)];

        case "GREAT-DLC": return greatCivsWithDlcArr[Math.floor(Math.random() * greatCivsWithDlcArr.length)];

        case "REST-DLC": return restCivsWithDlcArr[Math.floor(Math.random() * restCivsWithDlcArr.length)];

    }
}

function checkDlcOwner(playerNameArg, dlcOwnersArr) {

    for (let i = 0; i < dlcOwnersArr.length; i++) {

        if (playerNameArg.toUpperCase() === dlcOwnersArr[i].toUpperCase()) return true;
    }
    return false;
}

function swapPlayers(playerNamesArr, swapDepthArg) {

    let teamOnePlayers = playerNamesArr.slice(0, playerNamesArr.length / 2);
    let teamTwoPlayers = playerNamesArr.slice(playerNamesArr.length / 2, playerNamesArr.length);

    if (swapDepthArg === 0) return playerNamesArr;

    else if (swapDepthArg > 0) {
        // for (let n = 0; n < swapDepthArg; n++) { // Top to Bottom Swap
        for (let n = playerNamesArr.length/2 -1; n > playerNamesArr.length/2 -1 - swapDepthArg; n--) {
            
            if (Math.floor((Math.random() * 100) + 1) % 2 !== 0) {

                [teamTwoPlayers[n], teamOnePlayers[n]] = [teamOnePlayers[n], teamTwoPlayers[n]];
            }
        }
    }
    return teamOnePlayers.concat(teamTwoPlayers);
}

async function getPlayerRating(playerName) {

    let leaderBoardId = 0;
    let steamId = playerSteamIds.get(playerName.toLowerCase());
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

    for (let a = 0; a < teamOnePlayersArr.length; a++) {

        //Team One Players
        let teamOnePlayerBox = createHtmlElement('div', 'player-box');
        teamOneBox.appendChild(teamOnePlayerBox);

        let teamOneCivIcon = createHtmlElement('a', 'civ-icon-box');
        teamOneCivIcon.href = `https://aoe2techtree.net/#${teamOneCivsArr[a]}`;
        teamOneCivIcon.innerHTML = `<img src="assets/img/icons/${teamOneCivsArr[a]}.png" alt="${teamOneCivsArr[a]}" class="civ-icon">`;
        teamOneCivIcon.target = "_blank";

        let teamOnePlayerRating = "";
        if (ShouldDisplayRating) teamOnePlayerRating = await getPlayerRating(teamOnePlayersArr[a]);

        let teamOnePlayerTextBox = createHtmlElement('div', 'player-text-box');
        let randomNumberOne = Math.floor(Math.random() * (10000 - 1 + 1) + 1);
        let teamOnePlayerName = createHtmlElement('div', 'player-name-box', teamOnePlayersArr[a] + randomNumberOne);
        teamOnePlayerName.innerHTML = `${teamOnePlayersArr[a]} ${teamOnePlayerRating}`;

        let teamOneCivName = createHtmlElement('a', 'civ-name-box');
        if (brokenLinkCivs.includes(teamOneCivsArr[a])) teamOneCivName.href = `https://ageofempires.fandom.com/wiki/${teamOneCivsArr[a]}_(Age_of_Empires_II)`;
        else teamOneCivName.href = `https://ageofempires.fandom.com/wiki/${teamOneCivsArr[a]}`;
        teamOneCivName.target = "_blank";
        teamOneCivName.innerHTML = `${teamOneCivsArr[a]}`;

        teamOnePlayerBox.append(teamOneCivIcon, teamOnePlayerTextBox);
        teamOnePlayerTextBox.append(teamOnePlayerName, teamOneCivName);


        //Team Two Players
        let teamTwoPlayerBox = createHtmlElement('div', 'player-box');
        teamTwoBox.appendChild(teamTwoPlayerBox);

        let teamTwoCivIcon = createHtmlElement('a', 'civ-icon-box');
        teamTwoCivIcon.href = `https://aoe2techtree.net/#${teamTwoCivsArr[a]}`;
        teamTwoCivIcon.innerHTML = `<img src="assets/img/icons/${teamTwoCivsArr[a]}.png" alt="${teamTwoCivsArr[a]}" class="civ-icon">`;
        teamTwoCivIcon.target = "_blank";

        let teamTwoPlayerRating = "";
        if (ShouldDisplayRating) teamTwoPlayerRating = await getPlayerRating(teamTwoPlayersArr[a]);
        let teamTwoPlayerTextBox = createHtmlElement('div', 'player-text-box');
        let randomNumberTwo = Math.floor(Math.random() * (10000 - 1 + 1) + 1 + 1);
        let teamTwoPlayerName = createHtmlElement('div', 'player-name-box', teamTwoPlayersArr[a] + randomNumberTwo);
        teamTwoPlayerName.innerHTML = `${teamTwoPlayersArr[a]} ${teamTwoPlayerRating}`;

        let teamTwoCivName = createHtmlElement('a', 'civ-name-box');
        if (brokenLinkCivs.includes(teamTwoCivsArr[a])) teamTwoCivName.href = `https://ageofempires.fandom.com/wiki/${teamTwoCivsArr[a]}_(Age_of_Empires_II)`;
        else teamTwoCivName.href = `https://ageofempires.fandom.com/wiki/${teamTwoCivsArr[a]}`;
        teamTwoCivName.target = "_blank";
        teamTwoCivName.innerHTML = `${teamTwoCivsArr[a]}`;

        teamTwoPlayerBox.append(teamTwoCivIcon, teamTwoPlayerTextBox);
        teamTwoPlayerTextBox.append(teamTwoPlayerName, teamTwoCivName);

        if (teamOneColorsArr.length > 0 && teamTwoColorsArr.length > 0) {

            document.getElementById(teamOnePlayersArr[a] + randomNumberOne).style.color = teamOneColorsArr[a];
            document.getElementById(teamTwoPlayersArr[a] + randomNumberTwo).style.color = teamTwoColorsArr[a];
        }
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

function assignCivsToPlayers(playerNamesArr, playerCivsArr, playerColorsArr, mapNamesArr, brokenLinkCivsArr, brokenLinkMapsArr, applyRandomMapArg, displayPlayerRatingArg, applyPlayerColorArg) {

    let teamOnePlayers = playerNamesArr.slice(0, playerNamesArr.length / 2);
    let teamTwoPlayers = playerNamesArr.slice(playerNamesArr.length / 2, playerNamesArr.length)
    let teamOneCivs = playerCivsArr.slice(0, playerCivsArr.length / 2);
    let teamTwoCivs = playerCivsArr.slice(playerCivsArr.length / 2, playerCivsArr.length);

    if (applyPlayerColorArg) {

        playerColorsArr = shuffleArray(playerColorsArr);
        let teamOneColors = playerColorsArr.slice(0, playerCivsArr.length / 2);
        //teamOneColors = shuffleArray(teamOneColors);
        let teamTwoColors = playerColorsArr.slice(playerCivsArr.length / 2, playerCivsArr.length);
        //teamTwoColors = shuffleArray(teamTwoColors);

        displayGeneratedTeams(teamOnePlayers, teamTwoPlayers, teamOneCivs, teamTwoCivs, brokenLinkCivsArr, brokenLinkMapsArr, mapNamesArr, applyRandomMapArg, displayPlayerRatingArg, teamOneColors, teamTwoColors);
    }
    else if (!applyPlayerColorArg) {

        displayGeneratedTeams(teamOnePlayers, teamTwoPlayers, teamOneCivs, teamTwoCivs, brokenLinkCivsArr, brokenLinkMapsArr, mapNamesArr, applyRandomMapArg, displayPlayerRatingArg);
    }
}

function generateTeamCivs(playerCount, applyRandomMap, applyPlayerRating, applyPlayerColor, applyCivBalance, swapPlayerDepth, allCivsArr, greatCivsArr, restCivsArr, allCivsWithDlcArr, greatCivsWithDlcArr, restCivsWithDlcArr, brokenLinkCivsArr, brokenLinkMapsArr, dlcOwnersArr, mapPoolArr, ...playerNamesArgs) {

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

    playerNames = swapPlayers(playerNames, swapPlayerDepth);

    if (applyCivBalance === true && playerCount > greatCivs.length && playerCount > greatCivsWithDlc.length && greatCivs.length >= 2 && greatCivsWithDlc.length >= 2) applyCivBalance = false;

    if (applyCivBalance) {

        //Team 1 Logic
        let halfOfTeam;
        if (playerCount === 2) halfOfTeam = playerCount / 2;
        else if (playerCount === 4) halfOfTeam = (playerCount / 2) - 1;
        else halfOfTeam = (playerCount / 2) - 2;

        for (let i = 0; i < playerCount / 2; i++) {

            if (greatCivCount >= halfOfTeam) playerCivs[i] = getRandomCiv("REST", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
            else {
                if (checkDlcOwner(playerNames[i], dlcOwners) === true) playerCivs[i] = getRandomCiv("ALL-DLC", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
                else {
                    playerCivs[i] = getRandomCiv("ALL", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
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

            if (civOrder[k] === "GREAT") {
                if (checkDlcOwner(playerNames[k + playerCount / 2], dlcOwners)) playerCivs[k + playerCount / 2] = getRandomCiv("GREAT-DLC", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
                else playerCivs[k + playerCount / 2] = getRandomCiv("GREAT", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
                if (usedCivs.includes(playerCivs[k + playerCount / 2])) k--;
                else usedCivs.push(playerCivs[k + playerCount / 2]);
            }
            else {
                if (checkDlcOwner(playerNames[k + playerCount / 2], dlcOwners)) playerCivs[k + playerCount / 2] = getRandomCiv("REST-DLC", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
                else playerCivs[k + playerCount / 2] = getRandomCiv("REST", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
                if (usedCivs.includes(playerCivs[k + playerCount / 2])) k--;
                else usedCivs.push(playerCivs[k + playerCount / 2]);
            }
        }
    }

    else if (!applyCivBalance) {
        for (let m = 0; m < playerCount; m++) {

            if (checkDlcOwner(playerNames[m], dlcOwners)) playerCivs[m] = getRandomCiv("ALL-DLC", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
            else playerCivs[m] = getRandomCiv("ALL", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);

            if (usedCivs.includes(playerCivs[m])) m--;
            else usedCivs.push(playerCivs[m]);
        }
    }
    assignCivsToPlayers(playerNames, playerCivs, playerColors, mapNames, brokenLinkCivsArr, brokenLinkMapsArr, applyRandomMap, applyPlayerRating, applyPlayerColor);
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
    playerNames = playerNames.map(elem => {
        let stringArr = elem.split("");
        stringArr[0] = stringArr[0].toUpperCase();
        return stringArr.join("");
    });

    let swapDepthInput = document.querySelectorAll('input[name="swapDepthLevel"]');
    let selectedSwapDepth = "";
    for (const elem of swapDepthInput) {
        if (elem.checked) {
            selectedSwapDepth = +elem.value;
            break;
        }
    }

    let civBalanceInput = document.getElementById('civBalance');
    let selectedCivBalance = civBalanceInput.checked;

    let teamColorsInput = document.getElementById('playerColors');
    let selectedTeamColors = teamColorsInput.checked;

    let generateMapInput = document.getElementById('randomMap');
    let shouldGenerateMap = generateMapInput.checked;

    let playerRatingInput = document.getElementById('playerRating');
    let displayPlayerRating = playerRatingInput.checked;

    if (selectedSwapDepth !== 0 && selectedSwapDepth > playerNames.length / 2) selectedSwapDepth = playerNames.length / 2;
    if (playerNames.length > 8) playerNames.length = 8;

    document.getElementById('clearButton').disabled = true;
    document.getElementById('generateButton').disabled = true;

    //console.log(playerCount, selectedTeamColors, selectedCivBalance, selectedSwapDepth, playerNames);
    generateTeamCivs(playerCount, shouldGenerateMap, displayPlayerRating, selectedTeamColors, selectedCivBalance, selectedSwapDepth, allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc, brokenLinkCivs, brokenLinkMaps, dlcOwners, activeMaps, ...playerNames);
}

function addDlcOwners() {

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
    dlcPlayerNames.forEach(elem => {
        if (dlcOwners.includes(elem) === false) dlcOwners.push(elem);
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
                    console.log(`Adding ${civName} to allCivs: ${allCivs} and allCivsWithDlc`);
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

function modifyMapPool(mapNamesArr, mapName) {

    if (mapNamesArr.includes(mapName) === false) mapNamesArr.push(mapName);
    else mapNamesArr = deleteArrayElement(mapNamesArr, mapName);
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
}

function hideExtraMaps(){

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

function displayAllMaps(allMapsArr, activeMapsArr, brokenLinkMapsArr) {

    allMapsArr = allMapsArr.sort();

    let allMapsBox = document.getElementById('allMapsBox');
    allMapsBox.innerHTML = '';

    let buttonBox = createHtmlElement('div', 'input-group bottom-map-button-box');
    let disableAllButton = createHtmlElement('button', 'btn btn-outline-danger bottom-map-button');
    let enableAllButton = createHtmlElement('button', 'btn btn-outline-success bottom-map-button');
    let landMapsButton = createHtmlElement('button', 'btn btn-outline-warning bottom-map-button');
    let hybridMapsButton = createHtmlElement('button', 'btn btn-outline-secondary bottom-map-button');
    let waterMapsButton = createHtmlElement('button', 'btn btn-outline-primary bottom-map-button');
    let hideExtraButton = createHtmlElement('button', 'btn btn-outline-dark bottom-map-button');
    let showExtraButton = createHtmlElement('button', 'btn btn-outline-dark bottom-map-button');

    disableAllButton.innerHTML = 'Disable All';
    enableAllButton.innerHTML = 'Enable All';
    landMapsButton.innerHTML = 'Land';
    hybridMapsButton.innerHTML = 'Hybrid';
    waterMapsButton.innerHTML = 'Water';
    hideExtraButton.innerHTML = 'Hide Extra';
    showExtraButton.innerHTML = 'Show Extra';

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

    buttonBox.append(disableAllButton, hideExtraButton, landMapsButton, hybridMapsButton, waterMapsButton, showExtraButton, enableAllButton);
    allMapsBox.appendChild(buttonBox);

    let modifyMapInput = document.getElementById('modifyMapPool');
    let modifyMapInputValue = modifyMapInput.checked;


    for (let z = 0; z < allMapsArr.length; z++) {

        let mapBox = createHtmlElement('div', 'map-box');
        allMapsBox.appendChild(mapBox);

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

document.getElementById('modifyAllCivs').checked = false;
document.getElementById('modifyGreatCivs').checked = false;

displayAllCivs(allCivsToDisplay, brokenLinkCivs, allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
displayAllMaps(allMaps, activeMaps, brokenLinkMaps);