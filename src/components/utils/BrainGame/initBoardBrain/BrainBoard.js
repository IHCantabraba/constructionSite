import './BrainBoard.css'
import { createDiv } from '../../TicTacToe/CreateDiv'
import { imgBunch } from '../../GameImage/gameImgArr'
import { checkRandomExistance, getRandomInt } from '../functions/funtions'
export const initBrainBoard = () => {
  /* crear div para el board */
  const board = createDiv('boardBrain')
  board.classList.add('hide')
  /* Ready Used  */
  let UsedRandoms = []
  console.log(`used randoms numebrs are: ${UsedRandoms}`)

  /* create 4x4 grid */
  for (let i = 0; i <= 15; i++) {
    console.log(`forLoop lop: ${i}`)
    /* crear contenedor de la imagen */
    const cell = createDiv('cellGame show', i)

    // let position = getRandomInt(0, 15)
    let position = checkRandomExistance(UsedRandoms, getRandomInt(0, 15), false)
    /* si el numero ya s eha usado, volver  agenerar otro */

    let imgSelected = imgBunch.slice(position, position + 1)
    console.log(imgSelected)

    const imgDiv = document.createElement('img')
    for (let img of imgSelected) {
      imgDiv.src = img.url
      imgDiv.id = img.name
      imgDiv.className = 'img hide'
    }
    cell.append(imgDiv)
    /* crear la celda  */
    board.append(cell)
  }
  console.log(UsedRandoms)
  UsedRandoms = []

  return board
}
