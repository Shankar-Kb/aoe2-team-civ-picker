let allCivs = ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Teutons", "Turks", "Vikings", "Aztecs", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Cumans", "Lithuanians", "Tartars"];
let dlcCivs = ["Burgundians", "Sicilians"];
let greatCivs = ["Britons", "Byzantines", "Celts", "Franks", "Goths", "Mongols", "Persians", "Teutons", "Huns", "Spanish", "Magyars", "Cumans", "Lithuanians"];
let restCivs = ["Chinese", "Japanese", "Saracens", "Vikings", "Aztecs", "Koreans", "Mayans", "Incas", "Indians", "Italians", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Malay", "Vietnamese", "Bulgarians", "Tartars"];
let playerColors = ["Blue", "Red", "Green", "Yellow", "Teal", "Purple", "Grey", "Orange"];
let dlcOwners = ["Maniac", "Lezionare"];

function getRandomCiv(civPool){
    
    switch(civPool){

        case "All": return allCivs[Math.floor(Math.random()*allCivs.length)];

        case "Great": return greatCivs[Math.floor(Math.random()*greatCivs.length)];

        case "Rest": return restCivs[Math.floor(Math.random()*restCivs.length)];

        case "All-DLC": 
            let allCivsWithDlc = allCivs.concat(dlcCivs);
            return allCivsWithDlc[Math.floor(Math.random()*allCivsWithDlc.length)];

        case "Great-DLC":
            let greatCivsWithDlc = greatCivs.concat(dlcCivs);
            return greatCivsWithDlc[Math.floor(Math.random()*greatCivsWithDlc.length)];

        case "Rest-DLC":
            let restCivsWithDlc = restCivs.concat(dlcCivs);
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

function displayGeneratedTeams(teamOnePlayersArr, teamTwoPlayersArr, teamOneCivsArr, teamTwoCivsArr, teamOneColorsArr = false, teamTwoColorsArr = false){

    function createHtmlElement(element,  className='', id=''){
        let elem = document.createElement(element);
        elem.setAttribute('class', className);
        elem.setAttribute('id', id);
        return elem;
    }

    let displayBox = document.getElementById('displayBox');
    let teamsBox = createHtmlElement('div', 'teams-box');
    displayBox.appendChild(teamsBox);

    if(teamOneColorsArr.length > 0 && teamTwoColorsArr.length > 0){
        console.log(teamOnePlayersArr, teamOneCivsArr, teamOneColorsArr, teamTwoPlayersArr, teamTwoCivsArr, teamTwoColorsArr);
        teamsBox.innerHTML=`${teamOnePlayersArr}`
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

      displayGeneratedTeams(teamOnePlayers, teamTwoPlayers, teamOneCivs, teamTwoCivs, teamOneColors, teamTwoColors);
    }
    else if(!applyPlayerColorArg){

        displayGeneratedTeams(teamOnePlayers, teamTwoPlayers, teamOneCivs, teamTwoCivs);
    }
}

function generateTeamCivs(playerCount, applyPlayerColor, applyCivBalance, swapPlayerDepth, ...playerNamesArgs){
     
    let usedCivs = [];
    let teamOneGreatCivs = 0;
    let playerCivs = [];
    let playerNames = playerNamesArgs;
    let swappedPlayerNames = [];
    
    if(applyCivBalance){

      //Team 1 Logic
      for(let i=0; i<playerCount/2; i++){
          
          if(teamOneGreatCivs >= (playerCount/2)-2) playerCivs[i] = getRandomCiv("Rest");
          else playerCivs[i] = getRandomCiv("All");
  
          if(usedCivs.includes(playerCivs[i])){
             i--;
          }
          else {
             usedCivs.push(playerCivs[i]);
             if(greatCivs.includes(playerCivs[i])) teamOneGreatCivs++;     
          }
      }
  
      function buildTeamTwo(greatCivCountArg, playerCountArg, usedCivsArr, playerCivsArr){
  
          //let normalCivCount = playerCount/2 - greatCivCount;
          let playerCivs = playerCivsArr;
          let teamTwoCivs = [];
          let usedCivs = usedCivsArr;
          if(greatCivCountArg === 0) {
              for(let j=playerCountArg/2; j<playerCountArg; j++) {
                  playerCivs[j] = getRandomCiv("Rest");
                  if(usedCivs.includes(playerCivs[j])) j--;
                   else usedCivs.push(playerCivs[j]);
              }
          }
  
          else {
              for(let k=playerCountArg/2; k<playerCountArg; k++){
                  playerCivs[k] = getRandomCiv("Great");
                  if(usedCivs.includes(playerCivs[k])) k--;
                   else usedCivs.push(playerCivs[k]);
              }
  
              for(let l=(playerCountArg/2)+greatCivCountArg; l<playerCountArg; l++){
                  playerCivs[l] = getRandomCiv("Rest");
                  if(usedCivs.includes(playerCivs[l])) l--;
                   else usedCivs.push(playerCivs[l]);
              }
          }
          teamTwoCivs.sort(() => Math.random() - 0.5);
          return [playerCivs.concat(teamTwoCivs), usedCivs];
      }
      [playerCivs, usedCivs] = buildTeamTwo(teamOneGreatCivs, playerCount, usedCivs, playerCivs);
    }

    else if(!applyCivBalance){
        for(let m=0; m<playerCount; m++){

            if(dlcOwners.includes(playerNames[m])) playerCivs[m] = getRandomCiv("All-DLC");
            else playerCivs[m] = getRandomCiv("All");

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
        
        let playerCountInput = document.querySelectorAll('input[name="playerCount"]');
        let selectedPlayerCount = "";
        for (const elem of playerCountInput) {
            if (elem.checked) {
                selectedPlayerCount = elem.value;
                break;
            }
        }
        let swapDepthInput = document.querySelectorAll('input[name="swapDepthLevel"]');
        let selectedSwapDepth = "";
        for (const elem of swapDepthInput) {
            if (elem.checked) {
                selectedSwapDepth = elem.value;
                break;
            }
        }

        let teamColorsInput = document.getElementById('teamColors');
        let selectedTeamColors = teamColorsInput.checked;

        let civBalanceInput = document.getElementById('civBalance');
        let selectedCivBalance = civBalanceInput.checked;

        //console.log(selectedPlayerCount, selectedTeamColors, selectedCivBalance, selectedSwapDepth, playerNames);
        generateTeamCivs(selectedPlayerCount, selectedTeamColors, selectedCivBalance, selectedSwapDepth, ...playerNames);
}

function clearGeneratedTeams(){
    document.getElementById('displayBox').innerHTML = '';
    console.log('Generated teams has been cleared!');
}