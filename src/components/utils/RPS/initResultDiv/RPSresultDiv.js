import { createDiv } from '../../TicTacToe/CreateDiv'
import './RPSresultDiv.css'
sessionStorage.setItem('user', 0)
sessionStorage.setItem('comp', 0)
sessionStorage.setItem('globalBatles', 0)
sessionStorage.setItem('globalDrawns', 0)
/* crear el result */
export const initResultsRPS = () => {
  /* Results */
  const ResultsDiv = createDiv('Results')
  /* Global Counter */
  const globalBatlesCount = createDiv('globalCount')
  /* Global counter P & Text */
  const globalBatleP = document.createElement('p')
  const globalBatleText = document.createElement('p')
  /* Global Drawns */
  const globalBatleDrawns = createDiv('GlobalDrawns')
  /* Global drawns P & Text */
  const globalDrawnsP = document.createElement('p')
  const globalDrawnsText = document.createElement('p')

  /* general */
  const generalDiv = createDiv('generalResult')
  /* userP */
  const userP = document.createElement('p')
  /* computerP */
  const computerP = document.createElement('p')
  /* winer counter */
  const winnerCoutner = createDiv('winnerCounter')
  /* userCoutner */
  const userCounter = document.createElement('p')
  userCounter.classList.add('userCounter')
  userCounter.textContent = localStorage.getItem('user')
  /* separator */
  const separator = document.createElement('p')
  separator.classList.add('separator')
  separator.textContent = ':'

  /* compCounter */
  const compCounter = document.createElement('p')
  compCounter.classList.add('compCounter')
  compCounter.textContent = localStorage.getItem('comp')

  /* adding globalBatleCount elements */
  globalBatlesCount.append(globalBatleP)
  globalBatlesCount.append(globalBatleText)

  /* adding globalBatleCount elements */
  globalBatleDrawns.append(globalDrawnsP)
  globalBatleDrawns.append(globalDrawnsText)
  /* adding globalBatleCount elements values */
  globalBatleP.textContent = 'Total Batles :'
  globalBatleP.classList.add('globalBatleCounter')
  globalBatleText.classList.add('globalBatleText')
  globalBatleText.textContent = sessionStorage.getItem('globalBatles')
  /* adding globalBatleDrawns elements values */
  globalDrawnsP.textContent = 'Total Drawns :'
  globalDrawnsP.classList.add('globalDrawnsCounter')
  globalDrawnsText.classList.add('globalDrawnsText')
  globalDrawnsText.textContent = sessionStorage.getItem('globalDrawns')
  /* adding elements to winnerCounter */
  winnerCoutner.append(userCounter)
  winnerCoutner.append(separator)
  winnerCoutner.append(compCounter)
  /* adding winnerCounter elements text and clases */
  userP.textContent = 'user'
  userP.classList.add('resultPlayer')
  userP.classList.add('user')
  computerP.textContent = 'comp'
  computerP.classList.add('resultPlayer')
  computerP.classList.add('computer')
  /* adding general div elements */
  generalDiv.append(userP)
  generalDiv.append(winnerCoutner)
  generalDiv.append(computerP)
  /* adding Results elements */
  ResultsDiv.append(globalBatlesCount)
  ResultsDiv.append(generalDiv)
  ResultsDiv.append(globalBatleDrawns)

  const content = document.querySelector('.content')
  if (content) {
    content.innerHTML = ''
    content.append(ResultsDiv)
  }
}
