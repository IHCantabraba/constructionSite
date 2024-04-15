import { deleteTimers } from '../../components/utils/BrainGame/functions/funtions'
import { showBatle } from '../../components/utils/RPS/InitGame/initRPS'
import { initResultsRPS } from '../../components/utils/RPS/initResultDiv/RPSresultDiv'
import './rps.css'
/* iniciar el juego al hacer click en el botón del juego. */
export const ActivateRPSGame = (textContent) => {
  /* crear el botón del header */
  const headerRPSBtn = document.createElement('button')
  headerRPSBtn.textContent = textContent
  headerRPSBtn.addEventListener('click', () => {
    /* borrar todos los timeOut & Intervals de otro juego iniciado */
    deleteTimers()
    const footerP = document.querySelector('.footerP')
    footerP.style.color = 'white'
    initResultsRPS()
    showBatle()

    /* initOptionSelection() */
  })

  return headerRPSBtn
}
