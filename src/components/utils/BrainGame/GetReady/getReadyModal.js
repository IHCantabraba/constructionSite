import { hideBoard, showBoard } from '../showBoard/showBoard'
import { createDiv } from '../../TicTacToe/CreateDiv'
import './getReadyModal.css'

export const getReady = () => {
  console.log('game completed!')

  const appDiv = document.querySelector('#app')
  const divMsg = createDiv('get-ready-msg', 'winninMsg-brain')
  if (document.querySelector('.get-ready-msg')) {
    divMsg.classList.remove('hide')
  }

  const divBtn = document.createElement('button')
  divBtn.id = 'PlayBtn'
  divBtn.textContent = 'Start'
  /* resetar las classes de cada carta */
  divBtn.addEventListener('click', () => {
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
  })
  // divMsg.append(divMsgTxt)
  divMsg.append(divBtn)
  appDiv.append(divMsg)
}
