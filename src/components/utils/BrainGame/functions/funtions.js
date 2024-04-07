import { endGame } from '../EndGame/endGame'

/* generar random */
export function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
/* comprobar existencia del valor random */
export function checkRandomExistance(UsedRandoms, randomNumber, exist) {
  if (!UsedRandoms.includes(randomNumber)) {
    UsedRandoms.push(randomNumber)
  } else {
    exist = !exist
    while (exist) {
      randomNumber = getRandomInt(0, 15)
      if (!UsedRandoms.includes(randomNumber)) {
        UsedRandoms.push(randomNumber)
        exist = !exist
      }
    }
  }
  return randomNumber
}

/* asignar clase match a las cartas que coincidan */
export const cardMatch = () => {
  let cardSelected = document.querySelectorAll('.card-selected')
  cardSelected.forEach((element) => {
    element.classList.add('card-match')
  })
}

/* finalizar juego cuando todas la scartas tienen clase match */
export const GameSolved = (clickCount) => {
  if (clickCount === 0) {
    const MachedCars = document.querySelectorAll('.card-match')
    console.log(MachedCars.length)
    if (MachedCars.length === 16) {
      console.log('todas emparejadas')
      const msg = 'Game Completed'
      endGame(msg)
    }
  }
}

export const ExpiredTime = () => {
  const gameTime = setTimeout(() => {
    endGame('Time Out')
  }, 50000)
  return gameTime
}

export const GameTime = (div) => {
  currentContent = div.textContent
  setTimeout(() => {
    setInterval(() => {
      currentContent--
    }, 1000)
  }, 50000)
  return currentContent
}
