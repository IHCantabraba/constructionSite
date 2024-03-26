import { createDiv } from '../../components/GameOver/gameover'
import './TicTacToe.css'

export const initBoard = () => {
  /* obtener el div de la app */
  const appDiv = document.querySelector('#app')

  /* create board */
  const board = document.createElement('div')
  const cell0_0 = createDiv('cell', '0_0')
  const cell0_1 = createDiv('cell', '0_1')
  const cell0_2 = createDiv('cell', '0_2')
  const cell1_0 = createDiv('cell', '1_0')
  const cell1_1 = createDiv('cell', '1_1')
  const cell1_2 = createDiv('cell', '1_2')
  const cell2_0 = createDiv('cell', '2_0')
  const cell2_1 = createDiv('cell', '2_1')
  const cell2_2 = createDiv('cell', '2_2')

  board.append(cell0_0)
  board.append(cell0_1)
  board.append(cell0_2)
  board.append(cell1_0)
  board.append(cell1_1)
  board.append(cell1_2)
  board.append(cell2_0)
  board.append(cell2_1)
  board.append(cell2_2)
  appDiv.append(board)
}
