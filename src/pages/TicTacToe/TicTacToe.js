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

  createBoard()
  appContect.append(createResultsDiv())
  appContect.append(createBoard())
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
/* crear tablero */
function createBoard() {
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
  return board
}
/* crear la parte del los resultados */
function createResultsDiv() {
  /* Div general */
  const GeneralDiv = createDiv('general-vid')
  /* crear div para contadores de partidas */
  const resultsDiv = createDiv('results-div')

  /* crear div para ganados por X */
  const resultsDivX = createDiv('results-div-x')
  const resultCountXTitle = document.createElement('p')
  resultCountXTitle.textContent = 'X - won: '
  resultCountXTitle.className = 'Xtext'
  const resultCountXvalue = document.createElement('p')
  resultCountXvalue.className = 'result-count-x-value'
  resultCountXvalue.textContent = ScoreX
  resultsDivX.append(resultCountXTitle)
  resultsDivX.append(resultCountXvalue)

  /* crear div paraganados por Y */
  const resultsDivO = createDiv('results-div-y')
  const resultCountOTitle = document.createElement('p')
  resultCountOTitle.textContent = 'O - won: '
  resultCountOTitle.className = 'Otext'
  const resultCountOValue = document.createElement('p')
  resultCountOValue.className = 'result-count-o-value'
  resultCountOValue.textContent = ScoreO
  resultsDivO.append(resultCountOTitle)
  resultsDivO.append(resultCountOValue)
  /* empates */
  const resultsDivdrawns = createDiv('result-drawns')
  const resultCountDrownTitle = document.createElement('p')
  resultCountDrownTitle.textContent = 'Drawns: '
  resultCountDrownTitle.className = 'Drawntext'
  const resultCountDrawnValue = document.createElement('p')
  resultCountDrawnValue.className = 'result-count-drawn-value'
  resultCountDrawnValue.textContent = Drawns

  resultsDivdrawns.append(resultCountDrownTitle)
  resultsDivdrawns.append(resultCountDrawnValue)
  /* recuento total Partidas */

  const resultsDivTotals = createDiv('result-totals')
  const resultDivTotalText = document.createElement('p')
  resultDivTotalText.textContent = 'Games: '
  resultDivTotalText.className = 'total-games'
  const resultDivTotalValue = document.createElement('p')
  resultDivTotalValue.className = 'result-count-total-value'
  resultDivTotalValue.textContent = Totals

  resultsDivTotals.append(resultDivTotalText)
  resultsDivTotals.append(resultDivTotalValue)
  /* añadir los div de reslt-x e Y ald div results */
  resultsDiv.append(resultsDivX)
  resultsDiv.append(resultsDivO)
  resultsDiv.append(resultsDivdrawns)
  GeneralDiv.append(resultsDiv)
  GeneralDiv.append(resultsDivTotals)
  return GeneralDiv
}
/* inicializar juego */
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
/* en cada click asignar clase a la casilla (x, o) */
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
