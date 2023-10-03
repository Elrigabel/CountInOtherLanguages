const sinoKorean = ['공', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구', '십'];

const nativeKorean = ['공', '하나', '둘', '셋', '넷', '다섯',
 '여삿', '일곱', '여덟', '아홉', '열'];

let number = getRandomNumber(0, 10);

var cards = document.querySelectorAll('.card');
let nextNumberButton = document.getElementById("nextNumber");
let theCardNumber = document.getElementsByClassName("card__face--front")[0];
let theCardSinoKorean = document.getElementsByClassName("card__face--back")[0];


nextNumberButton.addEventListener("click", () => {
  number = getRandomNumber(0, 99);
  console.log(number);
  theCardNumber.innerHTML = number;
  theCardSinoKorean.innerHTML = getStringFromNumber(number);
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max+1-min) + min);
}

function getStringFromNumber(n) {
  let inSinoKorean = '';
  if(n > 10) {
    inSinoKorean += sinoKorean[Math.floor(n / 10)] + '십';
    console.log(Math.floor(n / 10));
    inSinoKorean += sinoKorean[n%10];
    console.log(n%10);
  }
  else {
    inSinoKorean = sinoKorean[n]
  }
  
  console.log(inSinoKorean);
  return inSinoKorean;
}

/* --------- Flip the card ----------*/

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});