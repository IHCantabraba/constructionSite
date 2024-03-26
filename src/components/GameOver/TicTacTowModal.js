import './TicTacToeModal.css'
import { createDiv } from './gameover'

export const ShowWinner = () => {
  const appDiv = document.querySelector('#app')
  const divMsg = createDiv('winning-msg', 'winninMsg')
  divMsg.classList.add('.hide')
  const divMsgTxt = createDiv('data-winning-msg-text')
  const divBtn = document.createElement('button')
  divBtn.id = 'restartBtn'
}
