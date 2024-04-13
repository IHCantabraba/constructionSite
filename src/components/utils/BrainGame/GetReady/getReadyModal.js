import { createDiv } from '../../TicTacToe/CreateDiv'
import './getReadyModal.css'
import {
  ClearAllTimers,
  ExpiredTime,
  resetTimeLeft,
  resetTimer,
  showBoardAtInitial,
  startBackcount
} from '../functions/funtions'
import { resetLegendElement } from '../LegendCards/legendCards'

export const getReady = () => {
  ClearAllTimers()
  const appDiv = document.querySelector('#app')
  let divMsg = document.querySelector('.get-ready-msg')
  let divBtn = document.querySelector('.ReadyBtn')
  if (divMsg !== null) {
    divMsg.classList.remove('hide')
  } else {
    divMsg = createDiv('get-ready-msg', 'winninMsg-brain')
    divBtn = document.createElement('button')
    divBtn.classList.add('ReadyBtn')
  }

  // const divBtn = document.createElement('button')
  divBtn.id = 'PlayBtn'
  divBtn.textContent = 'Start'
  /* resetar las classes de cada carta */
  divBtn.addEventListener('click', () => {
    /* elimina el timeOut y el setInterval */
    resetTimer()
    divBtn.classList.add('hide')
    /* mostrar las cartas y esconderlas */
    showBoardAtInitial(divBtn)
    /* inicia el timer out del juego 50 secs */
    ExpiredTime()
    /* comineza la cuenta atras en pantalla */
    startBackcount()
    /* resetear la cuenta atras a 50s */
    resetTimeLeft()
    /* resetear img's en leyenda */
    resetLegendElement()
  })

  divMsg.append(divBtn)
  appDiv.append(divMsg)
}
