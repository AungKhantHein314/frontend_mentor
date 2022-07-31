const maxAmount = 70;

const DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const date = new Date();
const DAY = date.getDay();

function isToday(day) {
  if (day == DAYS[DAY]) {
    return true;
  }
  return false;
}

function setProperties(datas) {
  let totalAmount = 0;
  let setTotalAmount = document.getElementById("totalAmount");
  let setHoverData = document.getElementsByClassName("showDataOnHover");
  let i = 0;
  for (let data of datas) {
    const { day, amount } = data;
    const toSetProps = document.getElementById(day);
    const height = calculateHeight(amount);
    toSetProps.style.height = height + "%";

    setHoverData[i].innerText = "$" + amount;
    i++;

    const is_Today = isToday(day);
    if (is_Today) {
      toSetProps.style.backgroundColor = "rgb(206, 66, 27)";
      toSetProps.setAttribute("id", "todayData");
    }

    totalAmount += amount;
  }
  setTotalAmount.innerText = totalAmount;
}

function calculateHeight(amount) {
  const height = (amount / maxAmount) * 100;
  return height;
}

fetch("./data.json")
  .then((response) => response.json())
  .then((datas) => {
    setProperties(datas);
  });

const circle = document.getElementById("circle");
const body = document.querySelector("body");
const attribution = document.getElementById("attribution");
const dataBalance = document.getElementById("dataBalance");
const info = document.getElementById("info");
const conclusion = document.getElementById("conclusion");
const days = document.getElementsByClassName("day");
const balance = document.getElementById("balance");
const chart = document.getElementById("chart");

function handleMode() {
  const todayData = document.getElementById("todayData");
  if (circle.style.right == "") {
    circle.style.right = "4px";

    body.style.backgroundColor = "#121212";
    attribution.style.color = "white";
    dataBalance.style.color = "green";
    info.style.color = "green";
    conclusion.style.color = "green";

    for (let day of days) {
      day.style.color = "white";
    }

    balance.style.backgroundColor = "black";
    chart.style.backgroundColor = "#18191a";
    todayData.style.backgroundColor = "#bb86fc";
  } else {
    circle.style.right = "";

    body.style.backgroundColor = "#d8d8d6";
    attribution.style.color = "black";
    dataBalance.style.color = "white";
    info.style.color = "white";
    conclusion.style.color = "white";

    for (let day of days) {
      day.style.color = "black";
    }

    balance.style.backgroundColor = "#d55e2d";
    chart.style.backgroundColor = "#2570bb";
    todayData.style.backgroundColor = "rgb(206, 66, 27)";
  }
}

function hoverEffect(day) {
  if (day == "todayData") {
    document.getElementById(DAYS[DAY] + "Data").style.visibility = "visible";
  } else {
    document.getElementById(day + "Data").style.visibility = "visible";
  }
}

function cancleHover(day) {
  if (day == "todayData") {
    document.getElementById(DAYS[DAY] + "Data").style.visibility = "hidden";
  } else {
    document.getElementById(day + "Data").style.visibility = "hidden";
  }
}
