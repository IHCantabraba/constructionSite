import { ShowWinner } from '../../components/GameOver/TicTacTowModal'
import { createDiv } from '../../components/GameOver/gameover'
import './TicTacToe.css'
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
/* local and sesion storage */
export const initBoard = () => {
  /* obtener el div de la app */
  const appContect = document.querySelector('.content')

  /* create board */
  const board = createDiv('board')
  board.classList.add('hide')
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
  appContect.append(board)
  if (!document.querySelector('.winning-msg')) {
    ShowWinner()
  }
  startGame()

  const cellEments = document.querySelectorAll('.cell')

  cellEments.forEach((cell) => {
    cell.addEventListener('click', handleClick, { once: true })
  })

  /* reset entire game */
  const restartBtn = document.getElementById('restartBtn')
  const modalMsg = document.querySelector('.winning-msg')
  modalMsg.classList.toggle('hide')
  restartBtn.addEventListener('click', () => {
    startGame()
  })
}
function startGame() {
  circleTurn = false
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
function handleClick(e) {
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
function endGame(draw) {
  const winninMsgText = document.querySelector('.data-winning-msg-text')
  if (draw) {
    winninMsgText.textContent = 'Draw!'
    const modalWin = document.querySelector('.winning-msg')
    modalWin.classList.toggle('hide')
  } else {
    winninMsgText.textContent = `${circleTurn ? "O's" : "X's"} Wins!`
    const modalWin = document.querySelector('.winning-msg')
    modalWin.classList.toggle('hide')
  }
}
function isDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    )
  })
}
function placeMarker(cell, currentClass) {
  cell.classList.add(currentClass)
}
function swapTurns() {
  circleTurn = !circleTurn
}
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
function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}
