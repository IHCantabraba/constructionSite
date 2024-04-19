import { initBoard } from '../../../../pages/TicTacToe/TicTacToe'
import { deleteTimers } from '../../BrainGame/functions/funtions'
import { resetStorage } from '../../RPS/gameLogic/gameLogic'

import './headerBtn.css'

export const createHeaderBtn = (textContent) => {
  const buttonTicTac = document.createElement('button')

  // /* add  text to buttons  */
  buttonTicTac.textContent = textContent

  /* iniciar página Tres en raya */
  buttonTicTac.addEventListener('click', () => {
    /* eliminar posibles timers de BrainGame */
    deleteTimers()
    resetStorage()

    if (!document.querySelector('.board')) {
      const content = document.querySelector('.content')
      content.innerHTML = ''
      initBoard()
      /* deshabilitar click en celdas hasta que haya elegido turno */
    }
    if (document.querySelector('.board')) {
      const board = document.querySelector('.board')

      if (board.classList.contains('hide')) {
        board.classList.remove('hide')
        /* probar */
        board.classList.remove('x')
        /* */
      }
    }
  })

  return buttonTicTac
}
