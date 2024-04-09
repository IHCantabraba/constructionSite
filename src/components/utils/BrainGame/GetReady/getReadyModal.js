import { hideBoard, showBoard } from '../showBoard/showBoard'
import { createDiv } from '../../TicTacToe/CreateDiv'
import './getReadyModal.css'
import {
  ExpiredTime,
  resetTimeLeft,
  resetTimer,
  startBackcount
} from '../functions/funtions'

export const getReady = () => {
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
    resetTimer()
    divBtn.classList.add('hide')
    /* mostrar las cartas y esconderlas */
    setTimeout(() => {
      showBoard()
      setTimeout(() => {
        /* esconder las cartas */
        hideBoard()
        divBtn.classList.remove('hide')
        divMsg.classList.add('hide')
      }, 1000)
    }, 250)
    ExpiredTime()
    // callTimeleft()
    startBackcount()
    resetTimeLeft()
  })

  divMsg.append(divBtn)
  appDiv.append(divMsg)
}
