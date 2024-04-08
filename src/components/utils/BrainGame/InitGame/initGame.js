import { getReady } from '../GetReady/getReadyModal'
import { initBrainBoard } from '../initBoardBrain/BrainBoard'
// import './initGame.css'

export const initGame = () => {
  /* crear elementos */
  /* instanciar aquí la funcion initBrainboard */
  const boardBrain = initBrainBoard()

  /* insertar en el div content el board */
  if (document.querySelector('.content')) {
    const content = document.querySelector('.content')
    content.append(boardBrain)
  }
  getReady()
}
