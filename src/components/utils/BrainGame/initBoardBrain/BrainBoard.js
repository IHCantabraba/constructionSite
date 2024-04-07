import './BrainBoard.css'
import { createDiv } from '../../TicTacToe/CreateDiv'
import { imgBunch } from '../../GameImage/gameImgArr'
import { GameSolved, cardMatch } from '../functions/funtions'
export const initBrainBoard = () => {
  /* crear div para el board */
  let clickCount = 0
  let firstCard = ''
  let secondCard = ''

  /* resetear los contadores una vez que se hayan seleccionado dos cartas */
  const resetGame = () => {
    clickCount = 0
    firstCard = ''
    secondCard = ''
    let cardSelected = document.querySelectorAll('.card-selected')
    cardSelected.forEach((element) => {
      element.classList.remove('card-selected')
    })
  }
  /* control clicks on board */
  const board = createDiv('boardBrain')
  /*  board listener to get card clicked */
  board.addEventListener('click', (e) => {
    /* get selectid card */
    let currentCard = e.target

    /* avoid  boardbrain styleing on click */
    if (currentCard.classList.contains('boardBrain')) {
      return false
    }
    clickCount++
    /* asignación de clases a las cartas clicadas */
    if (clickCount < 3) {
      if (clickCount === 1) {
        firstCard = currentCard.parentNode.dataset.name
        currentCard.parentNode.classList.add('card-selected')
      } else {
        secondCard = currentCard.parentNode.dataset.name
        currentCard.parentNode.classList.add('card-selected')
      }
      /* asignar el match o el reset */
      /* TODO--> Evitar que dos clicks sobre la misma imágen provoquen un match erroneo */
      if (firstCard !== '' && secondCard !== '') {
        if (firstCard === secondCard) {
          setTimeout(() => {
            cardMatch()
            resetGame()
            GameSolved(clickCount)
          }, 700)
        } else {
          setTimeout(() => {
            resetGame()
            GameSolved(clickCount)
          }, 700)
        }
      }
    }
  })
  /* duplicar el array de cartas */
  const cards = imgBunch.concat(imgBunch)

  /* random position */
  /* TODO --> revisar otro algoritmo de generación de random */
  let RandomPositions = Array.from(cards).sort(() => 0.5 - Math.random())
  /* create 4x4 grid */

  for (let i = 0; i < RandomPositions.length; i++) {
    /* crear contenedor de la imagen */
    const cell = createDiv('card', i)
    cell.dataset.name = RandomPositions[i].name
    cell.id = i
    /* crear div de front y back para dar vuelta ala carta */
    const frontDiv = createDiv('frontCard')
    const backDiv = createDiv('backCard')
    /* asignar imagen al div back */
    backDiv.style.backgroundImage = `url(${RandomPositions[i].url})`

    /* crear la celda  */
    board.append(cell)
    cell.append(frontDiv)
    cell.append(backDiv)
  }
  return board
}
