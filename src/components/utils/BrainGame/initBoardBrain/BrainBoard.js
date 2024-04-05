import './BrainBoard.css'
import { createDiv } from '../../TicTacToe/CreateDiv'
import { imgBunch } from '../../GameImage/gameImgArr'
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
    /* random position */
    let exist = false
    let position = getRandomInt(0, 15)

    if (!UsedRandoms.includes(position)) {
      UsedRandoms.push(position)
    } else {
      exist = !exist
    }
    /* si el numero ya s eha usado, volver  agenerar otro */
    while (exist) {
      console.log('repeated')
      position = getRandomInt(0, 15)
      if (!UsedRandoms.includes(position)) {
        UsedRandoms.push(position)
        exist = !exist
      }
    }

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

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
