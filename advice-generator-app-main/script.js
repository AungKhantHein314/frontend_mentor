const api = "https://api.adviceslip.com/advice";

let advice_id = document.querySelector(".advice_id");
let advice_text = document.querySelector(".advice_text");

function refresh() {
  fetch(api)
    .then((response) => response.json())
    .then((advice) => setAdvice(advice.slip));
}

function setAdvice(advice) {
  if (advice_id.innerHTML.slice(8) == advice.id) {
    refresh();
  } else {
    advice_id.innerHTML = "ADVICE #" + advice.id;
    advice_text.innerHTML = '<center>"' + advice.advice + '"</center>';
  }
}

window.onload = refresh();
