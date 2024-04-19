import { deleteTimers } from '../../components/utils/BrainGame/functions/funtions'
import { dialogBoard } from '../../components/utils/RPS/dialogBoard/dialogBoard'
import { resetGlobalBatle } from '../../components/utils/RPS/gameLogic/gameLogic'

import { insertGameOptions } from '../../components/utils/RPS/gameOptions/gameOptions'
import { initResultsRPS } from '../../components/utils/RPS/initResultDiv/RPSresultDiv'
import { resetStorageTicTac } from '../../components/utils/TicTacToe/functions'
import './rps.css'
/* iniciar el juego al hacer click en el botón del juego. */
export const ActivateRPSGame = (textContent) => {
  /* crear el botón del header */
  const headerRPSBtn = document.createElement('button')
  headerRPSBtn.textContent = textContent
  headerRPSBtn.addEventListener('click', () => {
    /* borrar todos los timeOut & Intervals de otro juego iniciado */
    deleteTimers()
    resetStorageTicTac()
    resetGlobalBatle()
    const footerP = document.querySelector('.footerP')
    footerP.style.color = 'white'
    initResultsRPS()
    dialogBoard()
    insertGameOptions()
  })

  return headerRPSBtn
}
