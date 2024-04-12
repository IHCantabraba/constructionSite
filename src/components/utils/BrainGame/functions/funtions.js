import { endGame } from '../EndGame/endGame'
import { showBoard, hideBoard } from '../showBoard/showBoard'
// let done = false
let gameTime
let counter
let msg
let Timers = []
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
      console.log('solved')
      // done = true
      msg = 'Solved'
      deleteTimers()
      endGame(msg)
    }
  }
}
/* mostrar la ventana modal de timeout al pasar 50 segundos */
export const ExpiredTime = () => {
  gameTime = setTimeout(() => {
    console.log('Time Out')
    msg = 'Time Out'
    endGame(msg)
  }, 51000)
  Timers.push(gameTime)
  console.log(Timers)
  return gameTime
}
export const ClearAllTimers = () => {
  for (let i = 0; i < Timers.length; i++) {
    console.log(`closing Timer ${Timers[i]}`)
    clearTimeout(Timers[i])
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
      deleteTimers()
    }
  }, 1000)
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
export const deleteTimers = () => {
  clearInterval(counter)
  clearTimeout(gameTime)
}

export const removelegendElement = (name) => {
  const legendElement = document.querySelector(`.${name}`)
  legendElement.classList.add('hide')
}

export const showBoardAtInitial = (divBtn) => {
  /* mostrar las cartas y esconderlas */
  /* ver por qué  divMsg si se lo paso como
    ...parámetro desde getReadyModal llega com "Undefined" */
  const divMsg = document.querySelector('.get-ready-msg')
  setTimeout(() => {
    /*mostrar cartas 250 secs despues de hacer click en Start */
    showBoard()
    /* esconder las cartas tras 1 segundo */
    setTimeout(() => {
      /* esconder las cartas */
      hideBoard()
      divBtn.classList.remove('hide')
      divMsg.classList.add('hide')
    }, 1000)
  }, 250)
}
