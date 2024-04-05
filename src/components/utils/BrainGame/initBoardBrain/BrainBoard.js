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

  /* create 4x4 grid */
  for (let i = 0; i <= 15; i++) {
    /* crear contenedor de la imagen */
    const cell = createDiv('cellGame show', i)
    // let position = getRandomInt(0, 15)
    let position = checkRandomExistance(UsedRandoms, getRandomInt(0, 15), false)
    /* si el numero ya s eha usado, volver  agenerar otro */
    let imgSelected = imgBunch.slice(position, position + 1)
    /* crewar etiqueta img y asignar los valores de la imagen seleccionada */
    const imgDiv = document.createElement('img')
    imgDiv.src = imgSelected[0].url
    imgDiv.id = imgSelected[0].name
    imgDiv.className = 'img show'
    cell.addEventListener('click', (e) => {
      let clase = e.target.classList[1]
      console.log(`se va a cambiar la clase ${clase}`)
      swapVisibility(cell, clase, e.target)
    })

    cell.append(imgDiv)
    /* crear la celda  */
    board.append(cell)
  }
  return board
}

export function swapVisibility(contenedor, clase, img) {
  if (clase === 'show') {
    contenedor.classList.remove('show')
    contenedor.classList.add('hide')
    img.classList.remove('show')
    img.classList.add('hideImg')
  } else {
    contenedor.classList.remove('hide')
    contenedor.classList.add('show')
    img.classList.remove('hideImg')
    img.classList.add('show')
  }
  // contenedor.classList.add(clase)

  // if (clase === 'hide') {
  //   img.classList.add('hideImg')
  // } else {
  //   img.classList.add('show')
  // }
}
