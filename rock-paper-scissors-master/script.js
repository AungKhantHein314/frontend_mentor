// Generate Result Start
let logos = document.getElementsByClassName("resultImage");
let worl = document.getElementsByClassName("worl")[0];
let score = document.getElementById("score");
let showResult = document.getElementsByClassName("showResult")[0];
let chooseComponent = document.getElementsByClassName("chooseComponent")[0];

function generateHouseId() {
  return Math.ceil(Math.random() * 5);
}

function generateResult(playerId, houseId) {
  let resultArr = [4, 5, 1, 2, 3, 4, 5, 1, 2];
  let arr = resultArr.splice(playerId - 1, 5);

  if (arr.indexOf(playerId) > arr.indexOf(houseId)) {
    worl.style.color = "red";
    score.innerHTML = parseInt(score.innerHTML) - 1;
    worl.innerHTML = "<center>YOU LOSE!</center>";
  } else if (arr.indexOf(playerId) < arr.indexOf(houseId)) {
    worl.style.color = "green";
    score.innerHTML = parseInt(score.innerHTML) + 1;
    worl.innerHTML = "<center>YOU WIN!</center>";
  } else {
    worl.style.color = "white";
    worl.innerHTML = "<center>DRAW!</center>";
  }
}

function generateLogos(playerId, houseId) {
  let logoList = ["scissors", "lizard", "paper", "spock", "rock"];
  logos[0].src = "./images/icon-" + logoList[playerId - 1] + ".svg";
  logos[1].src = "./images/icon-" + logoList[houseId - 1] + ".svg";
}

function generateLogoColors(playerId, houseId) {
    let colorCodes = ["hsl(39, 89%, 49%)", "hsl(261, 73%, 60%)", "hsl(230, 89%, 62%)", "hsl(189, 59%, 53%)", "hsl(349, 71%, 52%)"];
    logos[0].parentElement.style.borderColor = colorCodes[playerId - 1];
    logos[0].parentElement.style.backgroundColor = "white";
    logos[1].parentElement.style.borderColor = colorCodes[houseId - 1];
    logos[1].parentElement.style.backgroundColor = "white";
}

function mainGenerator(playerId) {
    let houseId = generateHouseId();
    generateResult(playerId, houseId);
    generateLogos(playerId, houseId);
    generateLogoColors(playerId, houseId);
    showResultVis(1);
    showChoose(0);
}

function showResultVis(status) {
    if(status) {
        showResult.classList.remove("visibility");
    } else {
        showResult.classList.add("visibility");
        showChoose(1);
    }
}

function showChoose(status) {
    if(status) {
        chooseComponent.classList.remove("visibility");
    } else {
        chooseComponent.classList.add("visibility");
    }
}
// Generate Result End

// Rules Start 
let rules = document.getElementsByClassName("showRules")[0];
function showRules(status) {
    if(status) {
        rules.classList.remove("visibility");
    } else {
        rules.classList.add("visibility");
    }
}
// Rules End