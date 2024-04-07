import { initBrainGame } from '../../../../pages/BrainGame/brainGame'
import { createDiv } from '../../TicTacToe/CreateDiv'
import { getReady } from '../GetReady/getReadyModal'
import { ExpiredTime } from '../functions/funtions'

import './endGame.css'
export let TIMEOUT
export const endGame = (msg) => {
  console.log('game completed!')

  const appDiv = document.querySelector('#app')
  const divMsg = createDiv('winning-msg-brain', 'winninMsg-brain')
  if (document.querySelector('.winning-msg-brain')) {
    divMsg.classList.remove('hide')
  }

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
    /* inicializar el juego de nuevo */
    getReady()
    initBrainGame()
    /* revisar */
    TIMEOUT = ExpiredTime()

    /* esconder la ventana modal */
    divMsg.classList.add('hide')
  })
  divMsg.append(divMsgTxt)
  divMsg.append(divBtn)
  appDiv.append(divMsg)
}
