import './BrainBoard.css'
import { createDiv } from '../../TicTacToe/CreateDiv'
import { imgBunch } from '../GameImage/gameImgArr'
import { GameSolved, cardMatch } from '../functions/funtions'
import { getReady } from '../GetReady/getReadyModal'
export const initBrainBoard = () => {
  /* crear div para el board */
  let clickCount = 0
  let firstCard = ''
  let secondCard = ''
  let cardId

  /* resetear los contadores una vez que se hayan seleccionado dos cartas */
  const resetGame = () => {
    clickCount = 0
    firstCard = ''
    secondCard = ''
    cardId = ''
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
      /* si es el primer click que se hace */
      if (clickCount === 1) {
        cardId = currentCard.parentNode.id
        console.log(`card Id is: ${cardId}`)
        firstCard = currentCard.parentNode.dataset.name
        currentCard.parentNode.classList.add('card-selected')
      } else {
        /* si no es el primer click (tienen que ser el segundo a la fuerza) */
        /* si no se ha clicado sobre la misma carta que en el primer click */
        if (cardId !== currentCard.parentNode.id) {
          console.log(
            `cardId es: ${cardId} & currentcardId es: ${currentCard.id}`
          )
          secondCard = currentCard.parentNode.dataset.name
          currentCard.parentNode.classList.add('card-selected')
        } else {
          /* si se ha clicado sobre la misma carta que en el primer click */
          secondCard = currentCard.parentNode.dataset.name
          currentCard.parentNode.classList.remove('card-selected')
        }
      }

      /* asignar el match o el reset */
      console.log(`firstCard is:${firstCard} & second card is: ${secondCard}`)
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
  /* inicializar la ventana modal de start */
  getReady()

  return board
}
