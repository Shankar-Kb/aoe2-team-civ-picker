let allCivs = ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Teutons", "Turks", "Vikings", "Aztecs", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Cumans", "Lithuanians", "Tatars"];
let dlcCivs = ["Burgundians", "Sicilians"];
let greatCivs = ["Britons", "Byzantines", "Celts", "Franks", "Goths", "Mongols", "Persians", "Teutons", "Huns", "Spanish", "Magyars", "Cumans", "Lithuanians"];
let restCivs = ["Chinese", "Japanese", "Saracens", "Vikings", "Aztecs", "Koreans", "Mayans", "Incas", "Indians", "Italians", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Malay", "Vietnamese", "Bulgarians", "Tatars"];
let playerColors = ["Blue", "Crimson", "Chartreuse", "Yellow", "Cyan", "DarkViolet", "Grey", "Orange"];
let dlcOwners = ["Maniac", "Lezionare"];
let brokenLinkCivs = ["Chinese", "Japanese", "Persians", "Aztecs", "Spanish", "Incas", "Indians", "Portuguese"];
let normalCivLink = "https://ageofempires.fandom.com/wiki/CivName";
let newCivLink = "https://ageofempires.fandom.com/wiki/CivName_(Age_of_Empires_II)";
let civTreeLink = "https://aoe2techtree.net/#CivName";

function getRandomCiv(civPool, allCivsArr, dlcCivsArr, greatCivsArr, restCivsArr){
    
    switch(civPool){

        case "All": return allCivsArr[Math.floor(Math.random()*allCivsArr.length)];

        case "Great": return greatCivsArr[Math.floor(Math.random()*greatCivsArr.length)];

        case "Rest": return restCivsArr[Math.floor(Math.random()*restCivsArr.length)];

        case "All-DLC": 
            let allCivsWithDlc = allCivsArr.concat(dlcCivsArr);
            return allCivsWithDlc[Math.floor(Math.random()*allCivsWithDlc.length)];

        case "Great-DLC":
            let greatCivsWithDlc = greatCivsArr.concat(dlcCivsArr);
            return greatCivsWithDlc[Math.floor(Math.random()*greatCivsWithDlc.length)];

        case "Rest-DLC":
            let restCivsWithDlc = restCivsArr.concat(dlcCivsArr);
            return restCivsWithDlc[Math.floor(Math.random()*restCivsWithDlc.length)];

    }
}

function swapPlayers(playerNamesArr, playerCivsArr, swapDepthArg){
     
    let teamOnePlayers = playerNamesArr.slice(0, playerNamesArr.length/2);
    let teamTwoPlayers = playerNamesArr.slice(playerNamesArr.length/2, playerNamesArr.length);

    let teamOneCivs = playerCivsArr.slice(0, playerCivsArr.length/2);
    let teamTwoCivs = playerCivsArr.slice(playerCivsArr.length/2, playerCivsArr.length)

    if(swapDepthArg === 0) return [playerNamesArr, playerCivsArr];

    else if(swapDepthArg > 0){
        for(let n=0; n<swapDepthArg; n++){

            if(Math.floor((Math.random() * 100) + 1) % 2 !== 0){
                
                [teamTwoPlayers[n], teamOnePlayers[n]] = [teamOnePlayers[n], teamTwoPlayers[n]];
                [teamTwoCivs[n], teamOneCivs[n]] = [teamOneCivs[n], teamTwoCivs[n]];
            }
        }
        
    }
    return [teamOnePlayers.concat(teamTwoPlayers), teamOneCivs.concat(teamTwoCivs)];
}

function swapPlayerColors(playerColorsArr){

    return playerColorsArr.sort(() => Math.random() - 0.5);
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
        let randomNumberOne = Math.floor(Math.random()*(1000-1+1)+1);
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
        let randomNumberTwo = Math.floor(Math.random()*(1000-1+1)+1+1);
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

      playerColorsArr = swapPlayerColors(playerColorsArr);
      let teamOneColors = playerColorsArr.slice(0, playerCivsArr.length/2).sort(() => Math.random() - 0.5);
      let teamTwoColors = playerColorsArr.slice(playerCivsArr.length/2, playerCivsArr.length).sort(() => Math.random() - 0.5);

      displayGeneratedTeams(teamOnePlayers, teamTwoPlayers, teamOneCivs, teamTwoCivs, brokenLinkCivs, teamOneColors, teamTwoColors);
    }
    else if(!applyPlayerColorArg){

        displayGeneratedTeams(teamOnePlayers, teamTwoPlayers, brokenLinkCivs, teamOneCivs, teamTwoCivs);
    }
}

function generateTeamCivs(playerCount, applyPlayerColor, applyCivBalance, swapPlayerDepth, allCivsArr, dlcCivsArr, greatCivsArr, restCivsArr, dlcOwnersArr, ...playerNamesArgs){
     
    let usedCivs = [];
    let teamOneGreatCivs = 0;
    let playerCivs = [];
    let playerNames = playerNamesArgs;
    let swappedPlayerNames = [];

    let [allCivs, dlcCivs, greatCivs, restCivs, dlcOwners] = [allCivsArr, dlcCivsArr, greatCivsArr, restCivsArr, dlcOwnersArr];

    allCivs = allCivs.sort(() => Math.random() - 0.5);
    dlcCivs = dlcCivs.sort(() => Math.random() - 0.5);
    greatCivs = greatCivs.sort(() => Math.random() - 0.5);
    restCivs = restCivs.sort(() => Math.random() - 0.5);
    
    if(applyCivBalance){

      //Team 1 Logic
      for(let i=0; i<playerCount/2; i++){
          
          if(teamOneGreatCivs >= (playerCount/2)-2) playerCivs[i] = getRandomCiv("Rest", allCivs, dlcCivs, greatCivs, restCivs);
          else {
            if(dlcOwners.includes(playerNames[i])) playerCivs[i] = getRandomCiv("All-DLC", allCivs, dlcCivs, greatCivs, restCivs);
            else playerCivs[i] = getRandomCiv("All", allCivs, dlcCivs, greatCivs, restCivs);
          }
  
          if(usedCivs.includes(playerCivs[i])) i--;
          else {
             usedCivs.push(playerCivs[i]);
             if(greatCivs.includes(playerCivs[i])) teamOneGreatCivs++;     
          }
      }
  
      function buildBalancedTeamTwo(greatCivCountArg, playerCountArg, usedCivsArr, playerCivsArr, allCivsArr, dlcCivsArr, greatCivsArr, restCivsArr){
          
          let [playerCivs, usedCivs] = [playerCivsArr, usedCivsArr];
          let teamTwoCivs = [];

          let [allCivs, dlcCivs, greatCivs, restCivs] = [allCivsArr, dlcCivsArr, greatCivsArr, restCivsArr];

          if(greatCivCountArg === 0) {
              for(let j=playerCountArg/2; j<playerCountArg; j++) {
                  playerCivs[j] = getRandomCiv("Rest", allCivs, dlcCivs, greatCivs, restCivs);
                  if(usedCivs.includes(playerCivs[j])) j--;
                   else usedCivs.push(playerCivs[j]);
              }
          }
  
          else {
              for(let k=playerCountArg/2; k<playerCountArg; k++){
                  
                  if(dlcOwners.includes(playerNames[k])) playerCivs[k] = getRandomCiv("Great-DLC", allCivs, dlcCivs, greatCivs, restCivs);
                   else playerCivs[k] = getRandomCiv("Great", allCivs, dlcCivs, greatCivs, restCivs);
                  if(usedCivs.includes(playerCivs[k])) k--;
                   else usedCivs.push(playerCivs[k]);
              }
  
              for(let l=(playerCountArg/2)+greatCivCountArg; l<playerCountArg; l++){
                  playerCivs[l] = getRandomCiv("Rest", allCivs, dlcCivs, greatCivs, restCivs);
                  if(usedCivs.includes(playerCivs[l])) l--;
                   else usedCivs.push(playerCivs[l]);
              }
          }
          teamTwoCivs.sort(() => Math.random() - 0.5);
          return [playerCivs.concat(teamTwoCivs), usedCivs];
      }
      [playerCivs, usedCivs] = buildBalancedTeamTwo(teamOneGreatCivs, playerCount, usedCivs, playerCivs, allCivs, dlcCivs, greatCivs, restCivs);
    }

    else if(!applyCivBalance){
        for(let m=0; m<playerCount; m++){

            if(dlcOwners.includes(playerNames[m])) playerCivs[m] = getRandomCiv("All-DLC", allCivs, dlcCivs, greatCivs, restCivs);
            else playerCivs[m] = getRandomCiv("All", allCivs, dlcCivs, greatCivs, restCivs);

            if(usedCivs.includes(playerCivs[m])) m--;
             else usedCivs.push(playerCivs[m]);
        }
    }
    [swappedPlayerNames, playerCivs] = swapPlayers(playerNames, playerCivs, swapPlayerDepth);
    assignCivsToPlayers(swappedPlayerNames, playerCivs, playerColors, applyPlayerColor);
}


function getInputsFromUser(){

        let teamOneNames = document.getElementById('teamOneNames').value.split(" ");
        let teamTwoNames = document.getElementById('teamTwoNames').value.split(" ");
        
        let playerNames = teamOneNames.concat(teamTwoNames);
        
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
        
        if(selectedSwapDepth !== 0 || selectedSwapDepth > playerNames.length/2) selectedSwapDepth = playerNames.length/2;
        if(playerNames.length > 8) playerNames.length = 8;

        //console.log(playerCount, selectedTeamColors, selectedCivBalance, selectedSwapDepth, playerNames);
        generateTeamCivs(playerCount, selectedTeamColors, selectedCivBalance, selectedSwapDepth, allCivs, dlcCivs, greatCivs, restCivs, dlcOwners, ...playerNames);
}

function clearGeneratedTeams(){
    document.getElementById('displayBox').innerHTML = '';
}

function playAudio(fileName){
    let audioObject = new Audio(`assets/sound/${fileName}.wav`);
    audioObject.setAttribute("type", "audio/wav");
    audioObject.setAttribute("autoplay", "false");
    audioObject.setAttribute("preload", "auto");
    audioObject.play();
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

    function displayCivilization(civilizationArr, containerName){
    
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

        civBox.append(civIcon, civName);
        }
    }
    displayCivilization(firstHalfCivs, leftBox);
    displayCivilization(secondHalfCivs, rightBox);
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