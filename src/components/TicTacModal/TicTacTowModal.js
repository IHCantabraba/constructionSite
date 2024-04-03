import './TicTacToeModal.css'
import { createDiv } from '../utils/CreateDiv'

export const ShowWinner = () => {
  const appDiv = document.querySelector('#app')
  const divMsg = createDiv('winning-msg', 'winninMsg')
  divMsg.classList.add('hide')
  const divMsgTxt = createDiv('data-winning-msg-text')
  // divMsgTxt.textContent = 'X wins!'
  const divBtn = document.createElement('button')
  divBtn.id = 'restartBtn'
  divBtn.textContent = 'Restart'
  divMsg.append(divMsgTxt)
  divMsg.append(divBtn)
  appDiv.append(divMsg)
}
