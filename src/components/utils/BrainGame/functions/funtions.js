import { endGame } from '../EndGame/endGame'
let done = false
let gameTime
let counter
/* generar random */
// export function getRandomInt(min, max) {
//   min = Math.ceil(min)
//   max = Math.floor(max)
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }
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

    if (MachedCars.length === 16) {
      done = true
      console.log('todas emparejadas')
      const msg = 'Game Completed'
      clearInterval(counter)
      endGame(msg)
    }
  }
}
/* mostrar la ventana modal de timeout al pasar 50 segundos */
export const ExpiredTime = () => {
  gameTime = setTimeout(() => {
    endGame('Time Out')
  }, 51000)
  return gameTime
}
/* comprobar si se ha terminado el juego cada vez que se clica en una carta*/
export const checkDone = () => {
  if (done) {
    clearTimeout(gameTime)
    done = !done
  }
}
/* intervalo para ir mostrando el tiempo restante */
export const startBackcount = () => {
  counter = setInterval(() => {
    const timer = document.querySelector('.timer')
    const restTime = Number(timer.textContent.split(' ')[0])
    if (restTime >= 1) {
      timer.innerHTML = `${restTime - 1}  s`
    } else {
      timer.innerHTML = '¡Time Out!'
      console.log('stopping interval')
      clearInterval(counter)
    }
  }, 1000)
  setTimeout(() => {
    clearInterval(counter)
  }, 55000)
}
/* resetaer el valor del contador */
export const resetTimeLeft = () => {
  const time = document.querySelector('.timer')
  time.innerHTML = '50 s'
}
/* resetear el intervalo */
export const resetTimer = () => {
  clearInterval(counter)
}

export const removelegendElement = (name) => {
  const legendElement = document.querySelector(`.${name}`)
  legendElement.classList.add('hide')
}
