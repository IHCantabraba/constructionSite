import './BrainBoard.css'
import { createDiv } from '../../TicTacToe/CreateDiv'
import { imgBunch } from '../../GameImage/gameImgArr'
export const initBrainBoard = () => {
  /* crear div para el board */
  let clickCount = 0
  let firstCard = ''
  let secondCard = ''

  const cardMatch = () => {
    let cardSelected = document.querySelectorAll('.card-selected')
    cardSelected.forEach((element) => {
      element.classList.add('card-match')
    })
  }
  const resetGame = () => {
    clickCount = 0
    firstCard = ''
    secondCard = ''
    let cardSelected = document.querySelectorAll('.card-selected')
    cardSelected.forEach((element) => {
      element.classList.remove('card-selected')
    })
  }

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

    if (clickCount < 3) {
      if (clickCount === 1) {
        firstCard = currentCard.dataset.name
        currentCard.classList.add('card-selected')
      } else {
        secondCard = currentCard.dataset.name
        currentCard.classList.add('card-selected')
      }
      if (firstCard !== '' && secondCard !== '') {
        if (firstCard === secondCard) {
          // currentCard.classList.add('card-match')
          cardMatch()
          resetGame()
        } else {
          resetGame()
        }
      }
    }
  })

  /* duplicar el array de cartas */
  const cards = imgBunch.concat(imgBunch)
  /* random position */

  let RandomPositions = Array.from(cards).sort(() => 0.5 - Math.random())
  /* create 4x4 grid */
  for (let i = 0; i < RandomPositions.length; i++) {
    /* crear contenedor de la imagen */
    const cell = createDiv('card', i)

    cell.style.backgroundImage = `url(${RandomPositions[i].url})`
    cell.dataset.name = RandomPositions[i].name
    cell.id = i
    /* crear la celda  */
    board.append(cell)
  }
  return board
}
