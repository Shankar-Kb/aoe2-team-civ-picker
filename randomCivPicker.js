let allCivs = ["Britons", "Byzantines", "Celts", "Chinese", "Franks", "Goths", "Japanese", "Mongols", "Persians", "Saracens", "Teutons", "Turks", "Vikings", "Aztecs", "Huns", "Koreans", "Mayans", "Spanish", "Incas", "Indians", "Italians", "Magyars", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Khmer", "Malay", "Vietnamese", "Bulgarians", "Cumans", "Lithuanians", "Tartars", "Burgundians", "Sicilians"];
let dlcCivs = ["Burgundians", "Sicilians"];
let greatCivs = ["Britons", "Byzantines", "Celts", "Franks", "Goths", "Mongols", "Persians", "Teutons", "Huns", "Spanish", "Magyars", "Cumans", "Lithuanians", "Burgundians"];
let restCivs = ["Chinese", "Japanese", "Saracens", "Vikings", "Aztecs", "Koreans", "Mayans", "Incas", "Indians", "Italians", "Slavs", "Berbers", "Ethiopians", "Malians", "Portuguese", "Burmese", "Malay", "Vietnamese", "Bulgarians", "Tartars"];
let playerColors = ["Blue", "Red", "Green", "Yellow", "Teal", "Purple", "Grey", "Orange"];

function getRandomCiv(civPool){

    if(civPool === "All") return allCivs[Math.floor(Math.random()*allCivs.length)];

    if(civPool === "Great") return greatCivs[Math.floor(Math.random()*greatCivs.length)];

    if(civPool === "Rest") return restCivs[Math.floor(Math.random()*restCivs.length)];
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

function swapPlayerColors(playerColorsArr){

    return playerColorsArr.sort(() => Math.random() - 0.5);
}

function assignCivsToPlayers(playerNamesArr, playerCivsArr, playerColorsArr, applyPlayerColorArg){
    
    //array.sort(() => Math.random() - 0.5);
    let teamOnePlayers = playerNamesArr.slice(0, playerNamesArr.length/2);
    let teamTwoPlayers = playerNamesArr.slice(playerNamesArr.length/2, playerNamesArr.length);
    
    let teamOneCivs = playerCivsArr.slice(0, playerCivsArr.length/2);
    let teamTwoCivs = playerCivsArr.slice(playerCivsArr.length/2, playerCivsArr.length).sort(() => Math.random() - 0.5);

    if(applyPlayerColorArg === "Yes"){

      playerColorsArr = swapPlayerColors(playerColorsArr);
      let teamOneColors = playerColorsArr.slice(0, playerCivsArr.length/2).sort(() => Math.random() - 0.5);
      let teamTwoColors = playerColorsArr.slice(playerCivsArr.length/2, playerCivsArr.length).sort(() => Math.random() - 0.5);

      console.log(teamOnePlayers, teamOneColors, teamOneCivs);
      console.log(teamTwoPlayers, teamTwoColors, teamTwoCivs);

    }
    else if(applyPlayerColorArg === "No"){

        console.log(teamOnePlayers, teamOneCivs);
        console.log(teamTwoPlayers, teamTwoCivs);

    }
}

function generateTeamCivs(playerCount, applyPlayerColor = "Yes", applyCivBalance = "Yes", swapPlayerDepth = 0, ...playerNamesArgs){
     
    let usedCivs = [];
    let teamOneGreatCivs = 0;
    let playerCivs = [];
    let playerNames = playerNamesArgs;
    let swappedPlayerNames = [];
    
    if(applyCivBalance === "Yes"){

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
  
      function buildTeamTwo(greatCivCount){
  
          //let normalCivCount = playerCount/2 - greatCivCount;
          if(greatCivCount === 0) {
              for(let j=playerCount/2; j<playerCount; j++) {
                  playerCivs[j] = getRandomCiv("Rest");
                  if(usedCivs.includes(playerCivs[j])) j--;
                   else usedCivs.push(playerCivs[j]);
              }
          }
  
          else {
              for(let k=playerCount/2; k<playerCount; k++){
                  playerCivs[k] = getRandomCiv("Great");
                  if(usedCivs.includes(playerCivs[k])) k--;
                   else usedCivs.push(playerCivs[k]);
              }
  
              for(let l=(playerCount/2)+greatCivCount; l<playerCount; l++){
                  playerCivs[l] = getRandomCiv("Rest");
                  if(usedCivs.includes(playerCivs[l])) l--;
                   else usedCivs.push(playerCivs[l]);
              }
          }
      }
      buildTeamTwo(teamOneGreatCivs);
    }
    else if(applyCivBalance==="No"){
        for(let m=0; m<playerCount; m++){
            playerCivs[m] = getRandomCiv("All");
            if(usedCivs.includes(playerCivs[m])) m--;
             else usedCivs.push(playerCivs[m]);
        }
    }
    swappedPlayerNames = swapPlayers(playerNames, swapPlayerDepth);
    assignCivsToPlayers(swappedPlayerNames, playerCivs, playerColors, applyPlayerColor);
}

generateTeamCivs(6, "Yes", "Yes", 0, "Protox", "Glitch", "Killer", "Maniac", "Kuroko", "Kronos");
//generateTeamCivs(8, "Yes", "Yes", 2, "Protox", "Hawk", "Kronos", "Gunjack", "Firehawk", "Maniac", "Glitch", "Lezionare");