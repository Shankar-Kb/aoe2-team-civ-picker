//let allCivs = ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Teutons", "Turks", "Vikings", "Aztecs", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Cumans", "Lithuanians", "Tatars"];
let allCivs = ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Teutons", "Turks", "Vikings", "Aztecs", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Cumans", "Lithuanians", "Tatars", "Burgundians", "Sicilians"];
//let dlcCivs = ["Burgundians", "Sicilians"];
let dlcCivs = [];
//let greatCivs = ["Britons", "Byzantines", "Celts", "Franks", "Goths", "Mongols", "Persians", "Teutons", "Huns", "Spanish", "Magyars", "Cumans", "Lithuanians"];
let greatCivs = ["Britons", "Byzantines", "Celts", "Franks", "Goths", "Mongols", "Persians", "Teutons", "Huns", "Spanish", "Magyars", "Cumans", "Lithuanians", "Burgundians"];
//let restCivs = ["Chinese", "Japanese", "Saracens", "Turks", "Vikings", "Aztecs", "Koreans", "Mayans", "Incas", "Indians", "Italians", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Tatars"];
let restCivs = ["Chinese", "Japanese", "Saracens", "Turks", "Vikings", "Aztecs", "Koreans", "Mayans", "Incas", "Indians", "Italians", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Tatars", "Sicilians"];
//let greatCivsWithDlc = [...greatCivs, "Burgundians"];
let greatCivsWithDlc = [...greatCivs];
//let restCivsWithDlc = [...restCivs, "Sicilians"];
let restCivsWithDlc = [...restCivs];
//let dlcOwners = ["Maniac", "Lezionare"];
let dlcOwners = [];

let playerColors = ["Blue", "Crimson", "Chartreuse", "Yellow", "Cyan", "DarkViolet", "Grey", "Orange"];
let brokenLinkCivs = ["Chinese", "Japanese", "Persians", "Aztecs", "Spanish", "Incas", "Indians", "Portuguese"];
let normalCivLink = "https://ageofempires.fandom.com/wiki/CivName";
let newCivLink = "https://ageofempires.fandom.com/wiki/CivName_(Age_of_Empires_II)";
let civTreeLink = "https://aoe2techtree.net/#CivName";

function shuffleArray(array) {

    //Fisher–Yates Shuffle
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    //Old Version - array.sort(() => Math.random() - 0.5);
  }

function getRandomCiv(civPool, allCivsArr, greatCivsArr, restCivsArr, allCivsWithDlcArr, greatCivsWithDlcArr, restCivsWithDlcArr){
    
    switch(civPool){

        case "All": return allCivsArr[Math.floor(Math.random()*allCivsArr.length)];

        case "Great": return greatCivsArr[Math.floor(Math.random()*greatCivsArr.length)];

        case "Rest": return restCivsArr[Math.floor(Math.random()*restCivsArr.length)];

        case "All-DLC": return allCivsWithDlcArr[Math.floor(Math.random()*allCivsWithDlcArr.length)];

        case "Great-DLC": return greatCivsWithDlcArr[Math.floor(Math.random()*greatCivsWithDlcArr.length)];

        case "Rest-DLC": return restCivsWithDlcArr[Math.floor(Math.random()*restCivsWithDlcArr.length)];

    }
}

function checkDlcOwner(playerNameArg, dlcOwnersArr){

    for(let i=0; i<dlcOwnersArr.length; i++){
        
        if(playerNameArg.toUpperCase() === dlcOwnersArr[i].toUpperCase()) return true;
    }
    return false;
}

function swapPlayers(playerNamesArr, swapDepthArg){
     
    let teamOnePlayers = playerNamesArr.slice(0, playerNamesArr.length/2);
    let teamTwoPlayers = playerNamesArr.slice(playerNamesArr.length/2, playerNamesArr.length);

    if(swapDepthArg === 0) return playerNamesArr;

    else if(swapDepthArg > 0){
        for(let n=0; n<swapDepthArg; n++){

            if(Math.floor((Math.random() * 100) + 1) % 2 !== 0){
                
                [teamTwoPlayers[n], teamOnePlayers[n]] = [teamOnePlayers[n], teamTwoPlayers[n]];
            }
        }
        
    }
    return teamOnePlayers.concat(teamTwoPlayers);
}

function displayGeneratedTeams(teamOnePlayersArr, teamTwoPlayersArr, teamOneCivsArr, teamTwoCivsArr, brokenLinkCivsArr, teamOneColorsArr = false, teamTwoColorsArr = false){

    function createHtmlElement(element,  className='', id=''){
        let elem = document.createElement(element);
        elem.setAttribute('class', className);
        elem.setAttribute('id', id);
        return elem;
    }

    let brokenLinkCivs = brokenLinkCivsArr;

    let displayBox = document.getElementById('displayBox');
    let matchBox = createHtmlElement('div', 'match-box');
    displayBox.appendChild(matchBox);

    //console.log(teamOnePlayersArr, teamOneCivsArr, teamOneColorsArr, teamTwoPlayersArr, teamTwoCivsArr, teamTwoColorsArr);
    
    let teamOneBox = createHtmlElement('div', 'team-one-box');
    let versusBox = createHtmlElement('div', 'versus-box');
    let teamTwoBox = createHtmlElement('div', 'team-two-box');
    matchBox.append(teamOneBox, versusBox, teamTwoBox);

    versusBox.innerHTML = `<img src="assets/img/fancy-crossed-swords.png" alt="Versus Icon" class="versus-icon-box">`;
    
    for(let a=0; a<teamOnePlayersArr.length; a++){
        
        //Team One Players
        let teamOnePlayerBox = createHtmlElement('div', 'player-box');
        teamOneBox.appendChild(teamOnePlayerBox);

        let teamOneCivIcon = createHtmlElement('a', 'civ-icon-box');
        teamOneCivIcon.href = `https://aoe2techtree.net/#${teamOneCivsArr[a]}`;
        teamOneCivIcon.innerHTML = `<img src="assets/img/icons/${teamOneCivsArr[a]}.png" alt="${teamOneCivsArr[a]}" class="civ-icon">`;
        teamOneCivIcon.target = "_blank";

        let teamOnePlayerTextBox = createHtmlElement('div', 'player-text-box');
        let randomNumberOne = Math.floor(Math.random()*(10000-1+1)+1);
        let teamOnePlayerName  = createHtmlElement('div', 'player-name-box', teamOnePlayersArr[a]+randomNumberOne);
        teamOnePlayerName.innerHTML = `${teamOnePlayersArr[a]}`
        
        let teamOneCivName = createHtmlElement('a', 'civ-name-box');
        if(brokenLinkCivs.includes(teamOneCivsArr[a])) teamOneCivName.href = `https://ageofempires.fandom.com/wiki/${teamOneCivsArr[a]}_(Age_of_Empires_II)`;
        else teamOneCivName.href = `https://ageofempires.fandom.com/wiki/${teamOneCivsArr[a]}`;
        teamOneCivName.target = "_blank";
        teamOneCivName.innerHTML = `${teamOneCivsArr[a]}`
        
        teamOnePlayerBox.append(teamOneCivIcon, teamOnePlayerTextBox);
        teamOnePlayerTextBox.append(teamOnePlayerName, teamOneCivName);


        //Team Two Players
        let teamTwoPlayerBox = createHtmlElement('div', 'player-box');
        teamTwoBox.appendChild(teamTwoPlayerBox);

        let teamTwoCivIcon = createHtmlElement('a', 'civ-icon-box');
        teamTwoCivIcon.href = `https://aoe2techtree.net/#${teamTwoCivsArr[a]}`;
        teamTwoCivIcon.innerHTML = `<img src="assets/img/icons/${teamTwoCivsArr[a]}.png" alt="${teamTwoCivsArr[a]}" class="civ-icon">`;
        teamTwoCivIcon.target = "_blank";

        let teamTwoPlayerTextBox = createHtmlElement('div', 'player-text-box');
        let randomNumberTwo = Math.floor(Math.random()*(10000-1+1)+1+1);
        let teamTwoPlayerName  = createHtmlElement('div', 'player-name-box', teamTwoPlayersArr[a]+randomNumberTwo);
        teamTwoPlayerName.innerHTML = `${teamTwoPlayersArr[a]}`;
        
        let teamTwoCivName = createHtmlElement('a', 'civ-name-box');
        if(brokenLinkCivs.includes(teamTwoCivsArr[a])) teamTwoCivName.href = `https://ageofempires.fandom.com/wiki/${teamTwoCivsArr[a]}_(Age_of_Empires_II)`;
        else teamTwoCivName.href = `https://ageofempires.fandom.com/wiki/${teamTwoCivsArr[a]}`;
        teamTwoCivName.target = "_blank";
        teamTwoCivName.innerHTML = `${teamTwoCivsArr[a]}`;

        teamTwoPlayerBox.append(teamTwoCivIcon, teamTwoPlayerTextBox);
        teamTwoPlayerTextBox.append(teamTwoPlayerName, teamTwoCivName);

        if(teamOneColorsArr.length > 0 && teamTwoColorsArr.length > 0){
            
            document.getElementById(teamOnePlayersArr[a]+randomNumberOne).style.color = teamOneColorsArr[a];
            document.getElementById(teamTwoPlayersArr[a]+randomNumberTwo).style.color = teamTwoColorsArr[a];
        }
    }
    let civNamesArrSound = document.getElementsByClassName("civ-name-box");
    for (let element of civNamesArrSound) {
        if (element.getAttribute('listener') !== 'true'){
            element.setAttribute('listener', 'true');
            element.addEventListener('click', function(event){
                playAudio("Open_Civ");
            });
        }
    }
    let civIconArrSound = document.getElementsByClassName("civ-icon-box");
    for (let element of civIconArrSound) {
        if (element.getAttribute('listener') !== 'true'){
            element.setAttribute('listener', 'true');
            element.addEventListener('click', function(event){
                playAudio("Open_Civ");
            });
        }
    }
}

function assignCivsToPlayers(playerNamesArr, playerCivsArr, playerColorsArr, applyPlayerColorArg){
    
    let teamOnePlayers = playerNamesArr.slice(0, playerNamesArr.length/2);
    let teamTwoPlayers = playerNamesArr.slice(playerNamesArr.length/2, playerNamesArr.length)
    let teamOneCivs = playerCivsArr.slice(0, playerCivsArr.length/2);
    let teamTwoCivs = playerCivsArr.slice(playerCivsArr.length/2, playerCivsArr.length);

    if(applyPlayerColorArg){

      playerColorsArr = shuffleArray(playerColorsArr);
      let teamOneColors = playerColorsArr.slice(0, playerCivsArr.length/2);
      //teamOneColors = shuffleArray(teamOneColors);
      let teamTwoColors = playerColorsArr.slice(playerCivsArr.length/2, playerCivsArr.length);
      //teamTwoColors = shuffleArray(teamTwoColors);

      displayGeneratedTeams(teamOnePlayers, teamTwoPlayers, teamOneCivs, teamTwoCivs, brokenLinkCivs, teamOneColors, teamTwoColors);
    }
    else if(!applyPlayerColorArg){

        displayGeneratedTeams(teamOnePlayers, teamTwoPlayers, brokenLinkCivs, teamOneCivs, teamTwoCivs);
    }
}

function generateTeamCivs(playerCount, applyPlayerColor, applyCivBalance, swapPlayerDepth, allCivsArr, dlcCivsArr, greatCivsArr, restCivsArr, greatCivsWithDlcArr, restCivsWithDlcArr, dlcOwnersArr, ...playerNamesArgs){
     
    let usedCivs = [];
    let teamOneGreatCivs = 0;
    let playerCivs = [];
    let playerNames = playerNamesArgs;

    let allCivs = [...allCivsArr];
    let dlcCivs = [...dlcCivsArr];
    let greatCivs = [...greatCivsArr];
    let restCivs = [...restCivsArr];
    let dlcOwners = [...dlcOwnersArr];

    let allCivsWithDlc = [...allCivs, ...dlcCivs];
    let greatCivsWithDlc = greatCivsWithDlcArr;
    let restCivsWithDlc = restCivsWithDlcArr;

    allCivs = shuffleArray(allCivs);
    greatCivs = shuffleArray(greatCivs);
    restCivs = shuffleArray(restCivs);
    allCivsWithDlc = shuffleArray(allCivsWithDlc);
    greatCivsWithDlc = shuffleArray(greatCivsWithDlc);
    restCivsWithDlc = shuffleArray(restCivsWithDlc);
    
    playerNames = swapPlayers(playerNames, swapPlayerDepth);
    
    if(applyCivBalance){

      //Team 1 Logic
      for(let i=0; i<playerCount/2; i++){
          
          if(teamOneGreatCivs >= (playerCount/2)-2) playerCivs[i] = getRandomCiv("Rest", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
          else {
            if(checkDlcOwner(playerNames[i], dlcOwners) === true) playerCivs[i] = getRandomCiv("All-DLC", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
            else playerCivs[i] = getRandomCiv("All", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
          }
  
          if(usedCivs.includes(playerCivs[i])) i--;
          else {
             usedCivs.push(playerCivs[i]);
             if(greatCivs.includes(playerCivs[i])) teamOneGreatCivs++;     
          }
      }
  
      function buildBalancedTeamTwo(greatCivCountArg, playerCountArg, usedCivsArr, playerCivsArr, allCivsArr, greatCivsArr, restCivsArr, allCivsWithDlcArr, greatCivsWithDlcArr, restCivsWithDlcArr){
          
          let [playerCivs, usedCivs] = [playerCivsArr, usedCivsArr];

          let [allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc] = [allCivsArr, greatCivsArr, restCivsArr, allCivsWithDlcArr, greatCivsWithDlcArr, restCivsWithDlcArr];

          if(greatCivCountArg === 0) {

              for(let j=playerCountArg/2; j<playerCountArg; j++) {
                  
                  if(checkDlcOwner(playerNames[j], dlcOwners)) playerCivs[j] = getRandomCiv("Rest-DLC", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
                   else playerCivs[j] = getRandomCiv("Rest", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
                  if(usedCivs.includes(playerCivs[j])) j--;
                   else usedCivs.push(playerCivs[j]);
              }
          }
          else if(greatCivCountArg > 0){
              
              //Shuffling Team Two Players
              let teamTwoPlayers = [];
              teamTwoPlayers = playerNames.splice(playerNames.length/2);
              teamTwoPlayers = shuffleArray(teamTwoPlayers);
              playerNames = playerNames.concat(teamTwoPlayers);

              for(let k=playerCountArg/2; k<playerCountArg; k++){

                  if(checkDlcOwner(playerNames[k], dlcOwners)) playerCivs[k] = getRandomCiv("Great-DLC", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
                   else playerCivs[k] = getRandomCiv("Great", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
                  if(usedCivs.includes(playerCivs[k])) k--;
                   else usedCivs.push(playerCivs[k]);
              }
  
              for(let l=(playerCountArg/2)+greatCivCountArg; l<playerCountArg; l++){

                  if(checkDlcOwner(playerNames[l], dlcOwners)) playerCivs[l] = getRandomCiv("Rest-DLC", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
                   else playerCivs[l] = getRandomCiv("Rest", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
                  if(usedCivs.includes(playerCivs[l])) l--;
                   else usedCivs.push(playerCivs[l]);
              }
          }
          return [playerCivs, usedCivs];
      }
      [playerCivs, usedCivs] = buildBalancedTeamTwo(teamOneGreatCivs, playerCount, usedCivs, playerCivs, allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
    }

    else if(!applyCivBalance){
        for(let m=0; m<playerCount; m++){

            if(checkDlcOwner(playerNames[m], dlcOwners)) playerCivs[m] = getRandomCiv("All-DLC", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);
            else playerCivs[m] = getRandomCiv("All", allCivs, greatCivs, restCivs, allCivsWithDlc, greatCivsWithDlc, restCivsWithDlc);

            if(usedCivs.includes(playerCivs[m])) m--;
             else usedCivs.push(playerCivs[m]);
        }
    }
    assignCivsToPlayers(playerNames, playerCivs, playerColors, applyPlayerColor);
}


function getInputsFromUser(){
        
        let teamOneNames = document.getElementById('teamOneNames').value.trim();
        let teamTwoNames = document.getElementById('teamTwoNames').value.trim();
        
        if(teamOneNames.includes(',') && teamTwoNames.includes(',')){
            teamOneNames = teamOneNames.split(',');
            teamTwoNames = teamTwoNames.split(',');
        }
        else if(teamOneNames.includes(' ') && teamTwoNames.includes(' ')){
            teamOneNames = teamOneNames.split(' ');
            teamTwoNames = teamTwoNames.split(' ');
        }
        else return;
        let playerNames = teamOneNames.concat(teamTwoNames);
        
        playerNames = playerNames.map(elem => elem.trim());
        playerNames = playerNames.map(elem => {    
            let stringArr = elem.split("");
            stringArr[0] = stringArr[0].toUpperCase();
            return stringArr.join("");
        });
        
        let playerCount = playerNames.length;
        let swapDepthInput = document.querySelectorAll('input[name="swapDepthLevel"]');
        let selectedSwapDepth = "";
        for (const elem of swapDepthInput) {
            if (elem.checked) {
                selectedSwapDepth = +elem.value;
                break;
            }
        }

        let teamColorsInput = document.getElementById('playerColors');
        let selectedTeamColors = teamColorsInput.checked;

        let civBalanceInput = document.getElementById('civBalance');
        let selectedCivBalance = civBalanceInput.checked;
        
        if(selectedSwapDepth !== 0 && selectedSwapDepth > playerNames.length/2) selectedSwapDepth = playerNames.length/2;
        if(playerNames.length > 8) playerNames.length = 8;

        //console.log(playerCount, selectedTeamColors, selectedCivBalance, selectedSwapDepth, playerNames);
        generateTeamCivs(playerCount, selectedTeamColors, selectedCivBalance, selectedSwapDepth, allCivs, dlcCivs, greatCivs, restCivs, greatCivsWithDlc, restCivsWithDlc, dlcOwners, ...playerNames);
}

function clearGeneratedTeams(){
    console.clear();
    document.getElementById('displayBox').innerHTML = '';
}

function playAudio(fileName){
    let audioObject = new Audio(`assets/sound/${fileName}.wav`);
    audioObject.setAttribute("type", "audio/wav");
    audioObject.setAttribute("autoplay", "false");
    audioObject.setAttribute("preload", "auto");
    audioObject.play();
}

function deleteArrayElement(array, elementName){

    for( let i = 0; i < array.length; i++){                     
        if (array[i] === elementName) {
            array.splice(i, 1);
        }
    }
    return array;
}

function addGreatCiv(civName){
    
    if(dlcCivs.includes(civName)) {
        greatCivsWithDlc.push(civName);
        restCivsWithDlc = deleteArrayElement(restCivsWithDlc, civName);
    }
    else {
        greatCivs.push(civName);
        restCivs = deleteArrayElement(restCivs, civName);
    }
    displayAllCivs(allCivs, dlcCivs, brokenLinkCivs);
}

function removeGreatCiv(civName){

    if(dlcCivs.includes(civName)) {
        restCivsWithDlc.push(civName);
        greatCivsWithDlc = deleteArrayElement(greatCivsWithDlc, civName);
    }
    else {
        restCivs.push(civName);
        greatCivs = deleteArrayElement(greatCivs, civName);
    }
    displayAllCivs(allCivs, dlcCivs, brokenLinkCivs);
}

function displayAllCivs(allCivsArr, dlcCivsArr, brokenLinkCivsArr){
   
    function createHtmlElement(element,  className='', id=''){
        let elem = document.createElement(element);
        elem.setAttribute('class', className);
        elem.setAttribute('id', id);
        return elem;
    }
    
    let allCivs = [...allCivsArr, ...dlcCivsArr];
    allCivs = allCivs.sort();
    let brokenLinkCivs = brokenLinkCivsArr;

    let halfPoint = Math.ceil(allCivs.length / 2);
    let firstHalfCivs = allCivs.splice(0, halfPoint);
    let secondHalfCivs = allCivs.splice(-halfPoint);

    let leftBox = document.getElementById("leftBox");
    let rightBox = document.getElementById("rightBox");

    leftBox.innerHTML = '';
    rightBox.innerHTML = '';

    function displayCivilization(civilizationArr, containerName, greatCivsArr, restCivsArr, greatCivsWithDlcArr, restCivsWithDlcArr){
    
    let greatCivs = greatCivsArr;
    let restCivs = restCivsArr;
    let greatCivsWithDlc = greatCivsWithDlcArr;
    let restCivsWithDlc = restCivsWithDlcArr;

    for(let z=0; z<civilizationArr.length; z++){

        let civBox = createHtmlElement('div', 'civilization-box');
        containerName.appendChild(civBox);

        let civIcon = createHtmlElement('a', 'civilization-icon-box');
        civIcon.href = `https://aoe2techtree.net/#${civilizationArr[z]}`;
        civIcon.innerHTML = `<img src="assets/img/icons/${civilizationArr[z]}.png" alt="${civilizationArr[z]}" class="civilization-icon">`;
        civIcon.target = "_blank";
        
        let civName = createHtmlElement('a', 'civilization-name-box');
        if(brokenLinkCivs.includes(civilizationArr[z])) civName.href = `https://ageofempires.fandom.com/wiki/${civilizationArr[z]}_(Age_of_Empires_II)`;
        else civName.href = `https://ageofempires.fandom.com/wiki/${civilizationArr[z]}`;
        civName.target = "_blank";
        civName.innerHTML = `${civilizationArr[z]}`

        let civOperator = createHtmlElement('div', 'civilization-button-box');
        

        if(dlcCivs.includes(civilizationArr[z])){
            
            if(greatCivsWithDlc.includes(civilizationArr[z])) {
                civOperator.innerHTML = `<img src="assets/img/minus-icon-outline.png" alt="Minus Icon" class="minus-icon">`;
                civOperator.addEventListener('click', function(event){
                    removeGreatCiv(civilizationArr[z]);
                    });
            }
            else if(restCivsWithDlc.includes(civilizationArr[z])){ 
                civOperator.innerHTML = `<img src="assets/img/plus-icon-outline.png" alt="Plus Icon" class="plus-icon">`;
                civOperator.addEventListener('click', function(event){
                    addGreatCiv(civilizationArr[z]);
                    });
            }
        }
        else{

            if(greatCivs.includes(civilizationArr[z])) {
                civOperator.innerHTML = `<img src="assets/img/minus-icon-outline.png" alt="Minus Icon" class="minus-icon">`;
                civOperator.addEventListener('click', function(event){
                    removeGreatCiv(civilizationArr[z]);
                    });
            }
            else if(restCivs.includes(civilizationArr[z])){ 
                civOperator.innerHTML = `<img src="assets/img/plus-icon-outline.png" alt="Plus Icon" class="plus-icon">`;
                civOperator.addEventListener('click', function(event){
                    addGreatCiv(civilizationArr[z]);
                    });
            }
        }
        civBox.append(civIcon, civName, civOperator);
        }
    }
    displayCivilization(firstHalfCivs, leftBox, greatCivs, restCivs, greatCivsWithDlc, restCivsWithDlc);
    displayCivilization(secondHalfCivs, rightBox, greatCivs, restCivs, greatCivsWithDlc, restCivsWithDlc);
}

document.getElementById("clearButton").addEventListener('click', function(event){
    playAudio("Clear_Teams");
    });

document.getElementById("generateButton").addEventListener('click', function(event){
    playAudio("Generate_Teams");
    });

document.body.addEventListener('keypress', function(event){
    if(window.event.keyCode === 13) {
        playAudio("Generate_Teams");
        getInputsFromUser();
      }
    });

displayAllCivs(allCivs, dlcCivs, brokenLinkCivs);