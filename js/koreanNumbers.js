const sinoKorean = ['공', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구', '십', '백'];

const nativeKorean = ['공', '하나', '둘', '셋', '넷', '다섯',
 '여삿', '일곱', '여덟', '아홉', '열'];

let generatedNumbers = [];
let count = 0;

let number = 0;

let generateMin = 0;
let generateMax = 999;

var cards = document.querySelectorAll('.card');
let nextNumberButton = document.getElementById("nextNumber");
let theCardNumber = document.getElementsByClassName("card__face--front")[0];
let theCardSinoKorean = document.getElementsByClassName("card__face--back")[0];
let buttonSubmit = document.getElementById("submit");

buttonSubmit.addEventListener("click", () => {
  let valMin = parseInt(document.getElementById("inputMin").value);
  let valMax = parseInt(document.getElementById("inputMax").value);
  if (valMin < valMax) {
    generateMin = valMin;
    generateMax = valMax;
    theCardNumber.innerHTML = '';
    theCardSinoKorean.innerHTML = '';
    generatedNumbers = [];
    count = 0;
    generateRandomNumbers(generateMin, generateMax);
  }
});

nextNumberButton.addEventListener("click", () => {
  if (count != generatedNumbers.length) {
    number = generatedNumbers[count];
    count++;
    console.log(number);
    theCardNumber.innerHTML = number;
    theCardSinoKorean.innerHTML = getStringFromNumber(number);
  }
  else if (generatedNumbers.length === 0){
    theCardNumber.innerHTML = '';
    theCardSinoKorean.innerHTML = '';
  }
  else {
    theCardNumber.innerHTML = "End";
    theCardSinoKorean.innerHTML = "끝"
  }
  
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max+1-min) + min);
}

function getStringFromNumber(n) {
  let inSinoKorean = '';
  let stringN = n.toString();
  switch (stringN.length) {
    //100 -> 999
    case 3:
      inSinoKorean += get100(stringN[0]);
      inSinoKorean += get10(stringN[stringN.length-2] + stringN[stringN.length-1]);
      break;
    //10 -> 99
    case 2:
      inSinoKorean += get10(stringN);
      break;
    //0 -> 9
    case 1:
      inSinoKorean = sinoKorean[n];
      break;
    default:
      console.log("Erreur");
  }

  console.log(inSinoKorean);
  return inSinoKorean;
}

function get100(stringN) {
  let number = parseInt(stringN);
  let string = '';
  console.log(number);
  if (number == 1) {
    string += sinoKorean[11];
  }
  else {
    string += sinoKorean[number];
    string += sinoKorean[11];
  }
  return string;
}

function get10(stringN) {
  let number = parseInt(stringN);
  let string = '';
  if (number >= 11 && number <= 19) {
    string += '십';
    string += sinoKorean[number%10];
  }
  else if (parseInt(stringN[0]) >= 2 && parseInt(stringN[1]) == 0) {
    string += sinoKorean[Math.floor(number / 10)] + '십';
  }
  else if (number > 10){
    string += sinoKorean[Math.floor(number / 10)] + '십';
    string += sinoKorean[number%10];
  }
  else {
    string += sinoKorean[number];
  }
  return string;
}

function generateRandomNumbers(min, max) {
  let n;
  let added = false;
  for (let index = 0; index < max - min + 1; index++) {
    while(added == false) {
      n = getRandomNumber(min, max);
      if (!existIn(generatedNumbers, n)) {
        generatedNumbers[index] = n;
        added = true;
      }
    }
    added = false;
  }
}

function existIn(tab, value) {
  for (let index = 0; index < tab.length; index++) {
    if(value === tab[index]) {
      return true;
    }
  }
  return false;
}

/* --------- Flip the card ----------*/

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});