const nativeKorean = ['공', '하나', '둘', '셋', '넷', '다섯',
 '여삿', '일곱', '여덟', '아홉', '열'];

let theCard = document.getElementById("card");
let number = getRandomNumber(0, 10);
theCard.innerHTML += "The number :" + number + "<br>";
theCard.innerHTML += "In native korean :" + nativeKorean[number];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max+1-min) + min);
}