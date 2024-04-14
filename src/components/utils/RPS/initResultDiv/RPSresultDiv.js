import { createDiv } from '../../TicTacToe/CreateDiv'
import './RPSresultDiv.css'
localStorage.setItem('user', 0)
localStorage.setItem('comp', 0)

/* crear el result */
export const initResultsRPS = () => {
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

  winnerCoutner.append(userCounter)
  winnerCoutner.append(separator)
  winnerCoutner.append(compCounter)

  userP.textContent = 'user'
  userP.classList.add('resultPlayer')
  userP.classList.add('user')
  computerP.textContent = 'comp'
  computerP.classList.add('resultPlayer')
  computerP.classList.add('computer')

  generalDiv.append(userP)
  generalDiv.append(winnerCoutner)
  generalDiv.append(computerP)

  const content = document.querySelector('.content')
  if (content) {
    content.innerHTML = ''
    content.append(generalDiv)
  }
}
