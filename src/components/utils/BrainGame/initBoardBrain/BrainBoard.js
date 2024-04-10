import './BrainBoard.css'
import { createDiv } from '../../TicTacToe/CreateDiv'
import { imgBunch } from '../GameImage/gameImgArr'
import {
  GameSolved,
  cardMatch,
  checkDone,
  removelegendElement
} from '../functions/funtions'
import { timeCounter } from '../ResultContainer/resultContainer'
import { insertLegendCard } from '../LegendCards/legendCards'

export const initBrainBoard = () => {
  timeCounter(`${50} s`)
  /* crear div para el board */
  let clickCount = 0
  let firstCard = ''
  let secondCard = ''
  let cardId1
  let cardId2

  /* resetear los contadores una vez que se hayan seleccionado dos cartas */
  const resetGame = () => {
    clickCount = 0
    firstCard = ''
    secondCard = ''
    cardId1 = ''
    cardId2 = ''
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
        cardId1 = currentCard.parentNode.id
        firstCard = currentCard.parentNode.dataset.name
        currentCard.parentNode.classList.add('card-selected')
      } else {
        /* si no es el primer click (tienen que ser el segundo a la fuerza)
          ...si no se ha clicado sobre la misma carta que en el primer click */
        if (cardId1 !== currentCard.parentNode.id) {
          secondCard = currentCard.parentNode.dataset.name
          currentCard.parentNode.classList.add('card-selected')
        } else {
          /* si se ha clicado sobre la misma carta que en el primer click */
          cardId2 = currentCard.parentNode.id
          secondCard = currentCard.parentNode.dataset.name
          currentCard.parentNode.classList.remove('card-selected')
        }
      }

      /* asignar el match o el reset */

      if (firstCard !== '' && secondCard !== '') {
        if (firstCard === secondCard) {
          setTimeout(() => {
            /* asigan clase card-match a las cartas */
            cardMatch()
            /* elimina de la leyenda el icono de lenguaje */
            if (cardId1 !== cardId2) {
              console.log(cardId1, cardId2)
              removelegendElement(firstCard)
            }
            /* resetea valores de clicks */
            resetGame()
            /* comprueba si todas las cartas se han emparejado (tienen la clase card-match) 
             ...asigna  true a la variable done */
            GameSolved(clickCount)
            /* si la variable "done" === true elimina 
              ...el time out del Modal de "TimeOut"  
              ...y llama a endGame() */
            checkDone()
          }, 500)
        } else {
          setTimeout(() => {
            /* resetea valores de clicks */
            resetGame()
          }, 500)
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

  /* llamar a función insert leyendCard */
  insertLegendCard(imgBunch)

  return board
}
