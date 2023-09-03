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

function playAudio(fileName) {
    let audioObject = new Audio(`assets/sound/${fileName}.wav`);
    audioObject.setAttribute("type", "audio/wav");
    audioObject.setAttribute("autoplay", "false");
    audioObject.setAttribute("preload", "auto");
    audioObject.play();
}

function checkDlcOwner(playerNameArg, dlcOwnersArr) {

    return dlcOwnersArr.includes(playerNameArg.toLowerCase());
}

function getRandomCiv(civPool, allCivsArr, greatCivsArr, restCivsArr, allCivsWithDlcArr, greatCivsWithDlcArr, restCivsWithDlcArr, playerName, playerData) {
    let playerNameLowerCase = playerName.toLowerCase();
    switch (civPool) {

        case "ALL": return allCivsArr[Math.floor(Math.random() * allCivsArr.length)];

        case "GREAT": return greatCivsArr[Math.floor(Math.random() * greatCivsArr.length)];

        case "REST": return restCivsArr[Math.floor(Math.random() * restCivsArr.length)];

        case "ALL-DLC": {
            let allCivsWithOwndedDlc = allCivsArr.concat(playerData[playerNameLowerCase].dlc_civs);
            let filteredAllDlcCivs = allCivsWithDlcArr.filter(elem => allCivsWithOwndedDlc.includes(elem));
            return filteredAllDlcCivs[Math.floor(Math.random() * filteredAllDlcCivs.length)];
        }

        case "GREAT-DLC": {
            let greatCivsWithOwndedDlc = greatCivsArr.concat(playerData[playerNameLowerCase].dlc_civs);
            let filteredGreatDlcCivs = greatCivsWithDlcArr.filter(elem => greatCivsWithOwndedDlc.includes(elem));
            return filteredGreatDlcCivs[Math.floor(Math.random() * filteredGreatDlcCivs.length)];
        }

        case "REST-DLC": {
            let restCivsWithOwndedDlc = restCivsArr.concat(playerData[playerNameLowerCase].dlc_civs);
            let filteredRestDlcCivs = restCivsWithDlcArr.filter(elem => restCivsWithOwndedDlc.includes(elem));
            return filteredRestDlcCivs[Math.floor(Math.random() * filteredRestDlcCivs.length)];
        }
    }
}

function swapPlayers(playerNamesArr, swapDepthArg, swapModeArg) {

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

async function getPlayerRating(playerName, playerData) {

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

export  { 
    shuffleArray, 
    createHtmlElement, 
    deleteArrayElement, 
    playAudio, 
    checkDlcOwner,
    getRandomCiv,
    swapPlayers,
    getPlayerRating,
};