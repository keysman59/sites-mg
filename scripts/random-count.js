function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

let random = randomInteger(980, 1250)

let place = document.querySelector('.dinamic-views')

place.innerHTML = random