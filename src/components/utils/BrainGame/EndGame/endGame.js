import { initBrainGame } from '../../../../pages/BrainGame/brainGame'
import { createDiv } from '../../TicTacToe/CreateDiv'
import { getReady } from '../GetReady/getReadyModal'
import { initGame } from '../InitGame/initGame'
import {
  ClearAllTimers,
  deleteTimers,
  resetTimeLeft
} from '../functions/funtions'

import './endGame.css'

export const endGame = (msg) => {
  deleteTimers()
  ClearAllTimers()
  const appDiv = document.querySelector('#app')
  const divMsg = createDiv('winning-msg-brain', 'winninMsg-brain')
  if (document.querySelector('.winning-msg-brain')) {
    const divMsg = document.querySelector('.winning-msg-brain')
    const divMsgTxt = document.querySelector('.data-winning-msg-text')

    divMsg.classList.remove('hide')
    divMsgTxt.innerHTML = `${msg}!`
  } else {
    const divMsgTxt = createDiv('data-winning-msg-text')
    divMsgTxt.innerHTML = `${msg}!`
    const divBtn = document.createElement('button')
    divBtn.id = 'restartBtn'
    divBtn.textContent = 'Play Again'
    /* resetar las classes de cada carta */
    divBtn.addEventListener('click', () => {
      divMsgTxt.innerHTML = ''
      const cards = document.querySelectorAll('.card')
      cards.forEach((e) => {
        e.classList.remove('card-match')
      })
      /* resetear el timer */
      resetTimeLeft()
      /* inicializar el juego de nuevo */
      /* TODO Fix problem  should i call initBrainGame() or initGame()????? */
      initBrainGame()
      // initGame()
      getReady()

      /* esconder la ventana modal */
      divMsg.classList.add('hide')
    })
    divMsg.append(divMsgTxt)
    divMsg.append(divBtn)
    appDiv.append(divMsg)
  }
}
