const sinoKorean = ['공', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구', '십'];

const nativeKorean = ['공', '하나', '둘', '셋', '넷', '다섯',
 '여삿', '일곱', '여덟', '아홉', '열'];

let number = getRandomNumber(0, 10);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max+1-min) + min);
}


var cards = document.querySelectorAll('.card');

theCardNumber = document.getElementsByClassName("card__face--front")[0];
theCardNumber.innerHTML = number;
theCardSinoKorean = document.getElementsByClassName("card__face--back")[0];
theCardSinoKorean.innerHTML = sinoKorean[number];

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});