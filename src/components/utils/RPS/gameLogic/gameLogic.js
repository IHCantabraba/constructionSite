import { gameIcons } from '../gameOptions/gameIcons'
let machineSelection
let clicks = 0

export const AddSelectedOption = (imgUrl, id) => {
  const userSelection = document.querySelector('.userSelecImg')
  userSelection.src = imgUrl
  userSelection.id = id
}

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
  if (currentBatleCount < 5) {
    currentBatleCount = currentBatleCount + 1
  } else {
    currentBatleCount = 0
  }
  sessionStorage.setItem('subBatle', String(Number(currentBatleCount)))

  batleText.innerHTML = `${currentBatleCount}/5`
}
const resetBatleCount = () => {
  const batleText = document.querySelector('.subBatlesText')
  batleText.innerHTML = '0/5'
}
const updateWarsCount = () => {
  let warCount = sessionStorage.getItem('globalBatles')
  warCount++
  sessionStorage.setItem('globalBatles', warCount)
  const globalCount = document.querySelector('.globalBatleText')
  globalCount.innerHTML = String(warCount)
}
export const CheckBatleWinner = () => {
  const userSelection = document.querySelector('.userSelecImg')
  const lastWinnerText = document.querySelector('.lastWinnerText')
  updateBatleCount()
  if (machineSelection.winnerTo.includes(userSelection.id)) {
    /*TODO añadir uno al seassonStorage('lasWinner') */
    sessionStorage.setItem('lastWinner', machineSelection.name)
    lastWinnerText.innerHTML = machineSelection.name
  } else {
    sessionStorage.setItem('lastWinner', userSelection.id)
    lastWinnerText.innerHTML = userSelection.id
  }
}
export const ClickControl = () => {
  clicks += 1
  console.log(clicks)
  if (clicks < 5) {
    updateBatleCount()
  } else if (clicks === 5) {
    updateWarsCount()
    resetBatleCount()
    /* Mostrar texto de ganador de batalla */
  }
}
