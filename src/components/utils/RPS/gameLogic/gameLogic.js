import { gameIcons } from '../gameOptions/gameIcons'
import { showRPSmodal } from '../modalRPS/modalRPS'
import './gameLogic.css'
let machineSelection
let clicks = 0
let userSelectionWinners = []
let msg
let winner
export const AddSelectedOption = (imgUrl, id, winner) => {
  const userSelection = document.querySelector('.userSelecImg')
  userSelection.src = imgUrl
  userSelection.id = id
  userSelection.setAttribute('data-winner', winner)
}
/* get machine selected gameImage */
export const MachineSelection = () => {
  const compSelector = document.querySelector('.computerSelecImg')
  let MatchSelection = Array.from(gameIcons).sort(() => 0.5 - Math.random())
  compSelector.src = MatchSelection[0].url
  compSelector.id = MatchSelection[0].name
  machineSelection = MatchSelection[0]
}
const updateBatleCount = () => {
  const batleText = document.querySelector('.subBatlesText')
  batleText.innerHTML = ''
  let currentBatle = sessionStorage.getItem('subBatle')
  let currentBatleCount = Number(currentBatle.split('/')[0])
  if (currentBatleCount <= 5) {
    currentBatleCount++
  } else {
    currentBatleCount = 0
  }
  sessionStorage.setItem('subBatle', String(Number(currentBatleCount)))

  batleText.innerHTML = `${currentBatleCount}/5`
}

/* actualizare el contador de Guerras (cada 5 batallas) */
const updateWarsCount = () => {
  let warCount = sessionStorage.getItem('globalBatles')
  warCount++
  sessionStorage.setItem('globalBatles', warCount)
  const globalCount = document.querySelector('.globalBatleText')
  globalCount.innerHTML = String(warCount)
}
/* actualizare el contador de empates en guerras (cada 5 batallas) */
const UpdateDrawnCount = () => {
  let drawnCount = sessionStorage.getItem('globalDrawns')
  drawnCount++
  sessionStorage.setItem('globalDrawns', drawnCount)
  const drawnsCount = document.querySelector('.globalDrawnsText')
  drawnsCount.innerHTML = String(drawnCount)
}

/* comprobar quien gano en la batalla */
export const CheckBatleWinner = () => {
  const userSelection = document.querySelector('.userSelecImg')
  userSelectionWinners.push(userSelection.getAttribute('data-winner'))
  const lastWinnerText = document.querySelector('.lastWinnerText')

  if (machineSelection.winnerTo.includes(userSelection.id)) {
    sessionStorage.setItem('lastWinner', machineSelection.name)
    lastWinnerText.innerHTML = machineSelection.name
    updateComputerScore()
    winner = 'machine'
  } else if (userSelectionWinners.includes(machineSelection.name)) {
    sessionStorage.setItem('lastWinner', userSelection.id)
    lastWinnerText.innerHTML = userSelection.id
    updateUserScore()
    winner = 'user'
  } else {
    sessionStorage.setItem('lastWinner', 'drawn')
    lastWinnerText.innerHTML = 'drawn'
    winner = 'drawn'
  }
  /* make the list empty */
  userSelectionWinners.length = 0
  return winner
}
/* control sobre los clicks */
export const ClickControl = () => {
  clicks += 1
  if (clicks <= 5) {
    if (clicks !== 5) {
      updateBatleCount()
    } else {
      // showBatleWinner()
      updateWarsCount()
      showRPSmodal()
      // resetScoreBoard()
      // resetBatleCount()
      clicks = 0
    }
    /* Mostrar texto de ganador de batalla */
  }
}
export const resetBatleCount = () => {
  const batlesText = document.querySelector('.subBatlesText')
  batlesText.innerHTML = '0/5'
}
/* actualizar marcador del computer */
const updateComputerScore = () => {
  let computerScoreBoard = sessionStorage.getItem('comp')
  sessionStorage.setItem('comp', Number(computerScoreBoard) + 1)
  const compCounter = document.querySelector('.compCounter')
  compCounter.innerHTML = Number(computerScoreBoard) + 1
}
/* actualizar marcador del user */
const updateUserScore = () => {
  let userScoreBoard = sessionStorage.getItem('user')
  sessionStorage.setItem('user', Number(userScoreBoard) + 1)
  const userCounter = document.querySelector('.userCounter')
  userCounter.innerHTML = Number(userScoreBoard) + 1
}
/* resetar scores */
export const resetScoreBoard = () => {
  const userCounter = document.querySelector('.userCounter')
  userCounter.innerHTML = '0'
  const compCounter = document.querySelector('.compCounter')
  compCounter.innerHTML = '0'
}

export const whoWonWarExport = () => {
  const userCounter = document.querySelector('.userCounter')
  const compCounter = document.querySelector('.compCounter')
  console.log(`userCount: ${userCounter.innerHTML}`)
  console.log(`comCount: ${compCounter.innerHTML}`)
  if (Number(userCounter.innerHTML) > Number(compCounter.innerHTML)) {
    console.log('user wins')
    msg = 'User Win!'
  } else if (Number(compCounter.innerHTML) > Number(userCounter.innerHTML)) {
    console.log('comp wins')
    msg = 'Computer Win!'
  } else {
    console.log('drawn!')
    msg = 'Drawn!'
    UpdateDrawnCount()
  }
  return msg
}
export const resetStorage = () => {
  sessionStorage.setItem('user', 0)
  sessionStorage.setItem('comp', 0)
  sessionStorage.setItem('subBatle', 0)
  sessionStorage.setItem('lastWinner', '-')
}
export const resetLastWinner = () => {
  const lastWinnerText = document.querySelector('.lastWinnerText')
  lastWinnerText.innerHTML = sessionStorage.getItem('lastWinner')
}
