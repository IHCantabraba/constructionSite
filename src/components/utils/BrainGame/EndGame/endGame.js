import { initBrainGame } from '../../../../pages/BrainGame/brainGame'
import { createDiv } from '../../TicTacToe/CreateDiv'
import { getReady } from '../GetReady/getReadyModal'
import { resetTimeLeft } from '../functions/funtions'

import './endGame.css'

export const endGame = (msg) => {
  const appDiv = document.querySelector('#app')
  const divMsg = createDiv('winning-msg-brain', 'winninMsg-brain')
  if (document.querySelector('.winning-msg-brain')) {
    const divMsg = document.querySelector('.winning-msg-brain')
    divMsg.classList.remove('hide')
  } else {
    const divMsgTxt = createDiv('data-winning-msg-text')
    divMsgTxt.textContent = `¡${msg}!`
    const divBtn = document.createElement('button')
    divBtn.id = 'restartBtn'
    divBtn.textContent = 'Play Again'
    /* resetar las classes de cada carta */
    divBtn.addEventListener('click', () => {
      const cards = document.querySelectorAll('.card')
      cards.forEach((e) => {
        e.classList.remove('card-match')
      })
      /* resetear el timer */
      resetTimeLeft()
      /* inicializar el juego de nuevo */
      initBrainGame()
      getReady()

      /* esconder la ventana modal */
      divMsg.classList.add('hide')
    })
    divMsg.append(divMsgTxt)
    divMsg.append(divBtn)
    appDiv.append(divMsg)
  }
}
