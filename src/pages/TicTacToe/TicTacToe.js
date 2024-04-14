import { ShowWinner } from '../../components/utils/TicTacToe/TicTacModal/TicTacTowModal'
import { createResultsDiv } from '../../components/utils/TicTacToe/ResultsContainer/createResultsDiv'
import { createBoard } from '../../components/utils/TicTacToe/Board/CreateBoard,js'
import './TicTacToe.css'
import { DisablingTurnSelectio } from '../../components/utils/TicTacToe/disablingTurnSelectiion'
import { disablingAllCells } from '../../components/utils/TicTacToe/functions'
/* determinar el turno */
let circleTurn
let cellElements
const X_CLASS = 'x'
const CIRCLE_CLASS = 'o'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
/* sesion storage */
sessionStorage.setItem('Xscore', 0)
sessionStorage.setItem('Oscore', 0)
sessionStorage.setItem('Drawns', 0)
sessionStorage.setItem('Totals', 0)
let ScoreX = sessionStorage.getItem('Xscore')
let ScoreO = sessionStorage.getItem('Oscore')
let Drawns = sessionStorage.getItem('Drawns')
let Totals = sessionStorage.getItem('Totals')

export const initBoard = () => {
  /* obtener el div de la app */
  const appContect = document.querySelector('.content')

  appContect.append(createResultsDiv(ScoreX, ScoreO, Drawns, Totals))
  appContect.append(createBoard())

  if (!document.querySelector('.winning-msg')) {
    ShowWinner()
  }
  startGame()
  /* deshabilitar click en celdas */
  disablingAllCells()

  const cellEments = document.querySelectorAll('.cell')

  cellEments.forEach((cell) => {
    cell.addEventListener('click', handleClick, { once: true })
  })

  /* reset entire game */
  const restartBtn = document.getElementById('restartBtn')
  const modalMsg = document.querySelector('.winning-msg')
  modalMsg.classList.toggle('hide')
  restartBtn.addEventListener('click', () => {
    DisablingTurnSelectio(document.getElementById('selectorX'), false)
    DisablingTurnSelectio(document.getElementById('selectorO'), false)
    const turno = document.querySelector('.turnValue')
    turno.innerHTML = '-'
    startGame()
  })
}
export const setInitialTurn = (turn) => {
  circleTurn = turn
  console.log(circleTurn)
}
/* inicializar juego */
function startGame() {
  // circleTurn = false
  cellElements = document.querySelectorAll('.cell')
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS)
    cell.classList.remove(CIRCLE_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClasss()
  const winninMsgText = document.querySelector('.winning-msg')
  winninMsgText.classList.toggle('hide')
}
/* en cada click asignar clase a la casilla (x, o) */
function handleClick(e) {
  /* deshabilitar botones */
  DisablingTurnSelectio(document.getElementById('selectorX'), true)
  DisablingTurnSelectio(document.getElementById('selectorO'), true)

  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS

  placeMarker(cell, currentClass)

  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClasss()
  }
}
/* al finalizar la partida mostrar el modal */
function endGame(draw) {
  const winninMsgText = document.querySelector('.data-winning-msg-text')
  const totalDraws = document.querySelector('.result-count-drawn-value')
  const modalWin = document.querySelector('.winning-msg')
  const scoreO = document.querySelector('.result-count-o-value')
  const scoreX = document.querySelector('.result-count-x-value')
  const totalGames = document.querySelector('.result-count-total-value')

  if (draw) {
    winninMsgText.textContent = 'Draw!'
    const modalWin = document.querySelector('.winning-msg')
    modalWin.classList.toggle('hide')
    sessionStorage.setItem(
      'Drawns',
      Number(sessionStorage.getItem('Drawns')) + 1
    )
    sessionStorage.setItem(
      'Totals',
      Number(sessionStorage.getItem('Totals')) + 1
    )
    totalDraws.innerHTML = sessionStorage.getItem('Drawns')
    totalGames.innerHTML = sessionStorage.getItem('Totals')
  } else {
    winninMsgText.textContent = `${circleTurn ? "O's" : "X's"} Wins!`
    modalWin.classList.toggle('hide')
    sessionStorage.setItem(
      'Totals',
      Number(sessionStorage.getItem('Totals')) + 1
    )
    totalGames.innerHTML = sessionStorage.getItem('Totals')
    if (!circleTurn) {
      sessionStorage.setItem(
        'Xscore',
        Number(sessionStorage.getItem('Xscore')) + 1
      )
      scoreX.innerHTML = sessionStorage.getItem('Xscore')
    } else {
      sessionStorage.setItem('Oscore', 1)
      scoreO.innerHTML = sessionStorage.getItem('Oscore')
    }
  }
}
/* identificar si hay empate */
function isDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    )
  })
}
/* asignar clase a la casilla */
function placeMarker(cell, currentClass) {
  cell.classList.add(currentClass)
}
/* cambiar los turnos */
function swapTurns() {
  circleTurn = !circleTurn
  const turno = document.querySelector('.turnValue')
  turno.innerHTML = ''
  if (circleTurn) {
    turno.textContent = 'O'
  } else {
    turno.textContent = 'X'
  }
}
/* mostrar en la casilla seleccionada el objeto que se va a pintar si se hace click */
function setBoardHoverClasss() {
  const board = document.querySelector('.board')
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}
/* cmoprobar quién ha ganado */
function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}
