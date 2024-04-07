import { initBoard } from '../../../../pages/TicTacToe/TicTacToe'
import './headerBtn.css'
import { TIMEOUT } from '../../BrainGame/EndGame/endGame'
export const createHeaderBtn = (textContent) => {
  const buttonTicTac = document.createElement('button')

  // /* add  text to buttons  */
  buttonTicTac.textContent = textContent

  /* iniciar página Tres en raya */
  buttonTicTac.addEventListener('click', () => {
    clearTimeout(TIMEOUT)
    if (!document.querySelector('.board')) {
      const content = document.querySelector('.content')
      content.innerHTML = ''
      initBoard()
    }
    if (document.querySelector('.board')) {
      const board = document.querySelector('.board')
      if (board.classList.contains('hide')) {
        board.classList.remove('hide')
      }
    }
  })
  return buttonTicTac
}
