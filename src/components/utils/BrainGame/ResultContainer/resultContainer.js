import { createDiv } from '../../TicTacToe/CreateDiv'
import './resultContainer.css'

export const timeCounter = (time) => {
  const GeneralDiv = createDiv('brain-result-div ')
  const TextTimeDiv = createDiv('timer-text')
  TextTimeDiv.textContent = 'Time left:'
  const TimeDiv = createDiv('timer')
  TimeDiv.textContent = time
  const content = document.querySelector('.content')
  const board = document.querySelector('.boardBrain')
  GeneralDiv.append(TextTimeDiv)
  GeneralDiv.append(TimeDiv)
  content.insertBefore(GeneralDiv, board)
}
