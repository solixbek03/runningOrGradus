//========================================================================= FIRST FORM===========================================
let elForm =document.querySelector(".site-form");
let elNumber =elForm.querySelector(".enter-number");
let elResultFoot =document.querySelector(".result-foot");
let elResultVeli =document.querySelector(".result-veli");
let elResultCar =document.querySelector(".result-car");
let elResultTrain =document.querySelector(".result-train");

var minSpeed =0;
var footSpeed =4;
var veliSpeed = 10;
var carSpeed = 50;
var trainSpeed = 150; 



elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  let elNumberVall = elNumber.value;
  elNumber.value = "";

  if (elNumberVall <= minSpeed) {
    elResultFoot.textContent = "Iltimos manfiy son kiritmang";
    elResultVeli.textContent = "Iltimos manfiy son kiritmang";
    elResultCar.textContent = "Iltimos manfiy son kiritmang";
    elResultTrain.textContent = "Iltimos manfiy son kiritmang";
} else {
  var footH = Math.floor(elNumberVall / footSpeed);
  var footMin = Math.floor((elNumberVall / footSpeed - footH)*60);
  
  var veliH = Math.floor(elNumberVall / veliSpeed);
  var veliMin = Math.floor((elNumberVall / veliSpeed - veliH)*60);
  
  var carH = Math.floor(elNumberVall / carSpeed);
  var carMin = Math.floor((elNumberVall / carSpeed - carH)*60);
  
  var trainH = Math.floor(elNumberVall / trainSpeed);
  var trainMin = Math.floor((elNumberVall / trainSpeed - trainH)*60);

  elResultFoot.textContent =`On foot ${footH} hours ${footMin} min`;
  elResultVeli.textContent =`On bicycle  ${veliH} hours ${veliMin} min`;
  elResultCar.textContent =`By car ${carH} hours ${carMin} min`;
  elResultTrain.textContent =`By train  ${trainH} hours ${trainMin} min`;
}
});


//========================================================================= SECOND FORM ===========================================

let elFormRun = document.querySelector(".form-run");
let elGradus = document.querySelector(".enter-gradus");
let elRaining = document.querySelector(".check-raining");
let elHall = document.querySelector(".check-hall");

let elAnswer = document.querySelector(".answer");



elFormRun.addEventListener("submit", function(evt) {
  evt.preventDefault();
  
  const averagegradus = 5;
  const maxgradus =35;

  let GradusVall = elGradus.value
  let RainingCheck = elRaining.chacked;
  let HallCheck = elHall.checked;

  if ((GradusVall < averagegradus || GradusVall > maxgradus) || RainingCheck) {
    elAnswer.textContent = "Afsuski bugun  yugirishga chiqa olmaysiz :(";
  } else if ((GradusVall > averagegradus && GradusVall < maxgradus) && HallCheck) {
    elAnswer.textContent = "Afsuski bugun yomgir tufayli yugirishga chiqa olmaysiz :(";
  } else if ((GradusVall > averagegradus && GradusVall < maxgradus && HallCheck) && RainingCheck) {
    elAnswer.textContent = "Yugurishga zalga chiqishingiz mumkin :)";
  } else if ((GradusVall > averagegradus && GradusVall < maxgradus) || RainingCheck) {
    elAnswer.textContent = "Yugurishga zalga yoki kochaga chiqshingiz mumkin :)";
  } else if (GradusVall > averagegradus && GradusVall < maxgradus) {
    elAnswer.textContent = "Yugurishga chiqishingiz mumkin :)";
  } else {
    elAnswer.textContent = "Yugurishga chiqishingiz mumkin :)";
  }
});


//========================================================================= THIRD FORM ===========================================




let elFormTh = document.querySelector(".third-form");
let elInput = document.querySelector(".third-input");
let elSelect = document.querySelector(".third-select");
let elResultF = document.querySelector(".result-first");
let elResultS = document.querySelector(".result-second");

elFormTh.addEventListener('submit', function (event){
  event.preventDefault();

  let elSelectValue = elSelect.value;
  let elInputVall = parseInt(elInput.value);

  if (elSelectValue == "celsius") {
    elResultF.textContent = Math.round((elInputVall * 9/5) + 32) + `°F`;
    elResultS.textContent = Math.round(elInputVall + 273) + `K`;
  }
  if (elSelectValue == "Fahrenheit") {
    elResultF.textContent = Math.round((elInputVall - 32) * 5/9 ) + `°C`;
    elResultS.textContent = Math.round((elInputVall - 32) * 5/9 + 273,15) + `K`;
  }
  if (elSelectValue == "kelvin") {
    elResultF.textContent = Math.round((elInputVall - 273,15) * 9/5 + 32) + `°F`;
    elResultS.textContent =  Math.round(elInputVall - 273,15) + `C`;
  }
})








var convertToNumberInt = parseInt( 10);

// var convertToNumberFloat = parseFloat(stringNumber, 10);

// var convertToNumberNumber = Number(stringNumber);

console.log(convertToNumberInt);
console.log(typeof convertToNumberInt);

// console.log(convertToNumberFloat);/

// console.log(convertToNumberNumber);
// console.log(typeof convertToNumberNumber);






