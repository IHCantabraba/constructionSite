import { initBoardRPS } from '../../components/utils/RPS/InitGame/initRPS'
import './rps.css'

export const ActivateRPSGame = (textContent) => {
  console.log('RPS Game activated')
  const headerRPSBtn = document.createElement('button')
  headerRPSBtn.textContent = textContent
  headerRPSBtn.addEventListener('click', () => {
    initBoardRPS()
    /* initResultsRPS() */
    /* initOptionSelection() */
  })

  return headerRPSBtn
}
