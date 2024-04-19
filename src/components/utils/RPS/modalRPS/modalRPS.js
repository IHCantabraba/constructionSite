import './modalRPS.css'
import { CreateElement } from '../utlis/utlis.'
import {
  resetBatleCount,
  resetLastWinner,
  resetScoreBoard,
  resetStorage,
  whoWonWarExport
} from '../gameLogic/gameLogic'

export const showRPSmodal = () => {
  const appDiv = document.querySelector('#app')
  let divMsg = document.querySelector('.get-RPS-ready-msg')
  let divBtn = document.querySelector('.ReadyBtn')
  if (divMsg !== null) {
    divMsg.classList.remove('hide')
  } else {
    divMsg = CreateElement('div', 'get-ready-msg')
    divMsg.id = 'winninMsg-brain'
    divBtn = CreateElement('button', 'ReadyBtn')
    // divBtn.classList.add('ReadyBtn')
  }
  divMsg.innerHTML = whoWonWarExport()
  // const divBtn = document.createElement('button')
  divBtn.id = 'PlayBtn'
  divBtn.textContent = 'Play again!'
  /* resetar las classes de cada carta */
  divBtn.addEventListener('click', () => {
    divMsg.classList.add('hide')
    resetScoreBoard()
    resetBatleCount()
    resetStorage()
    resetLastWinner()
  })

  divMsg.append(divBtn)
  appDiv.append(divMsg)
}
