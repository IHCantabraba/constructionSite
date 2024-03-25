import { initObra } from '../../pages/Obras/CovaCivil'
import { initPpt } from '../../pages/Ppt/ppt'
import './header_style.css'

export const Header = (divApp) => {
  /* create app buttons */
  const header = document.createElement('header')
  const buttonsDiv = document.createElement('div')
  buttonsDiv.className = 'Butonsdiv'

  const buttonPpt = document.createElement('button')
  const btnCivl = document.createElement('button')
  /* contenedor general para puntuaciones */
  const punt = document.createElement('div')
  punt.className = 'puntuacion'
  /* contendores de puntuacion */
  /* current (sesionStorage) */
  const puntPartida = document.createElement('div')
  puntPartida.className = 'current-partida'
  /* título del marcador */
  const puntTitle = document.createElement('h2')
  puntTitle.textContent = 'Current-Score: '
  puntPartida.append(puntTitle)
  /* valor del marcador */
  const score = document.createElement('h2')
  score.id = 'current-score'
  score.className = 'score'
  score.textContent = sessionStorage.getItem('puntuacion')
  puntPartida.append(score)
  /* current (localStorage) */
  const puntGlobal = document.createElement('div')
  puntGlobal.className = 'current-partida'
  /* best puntuacion (localstorage) */
  const bestScore = document.createElement('h2')
  bestScore.textContent = 'Best-Score: '
  puntGlobal.append(bestScore)
  const scoreB = document.createElement('h2')
  scoreB.id = 'best-score'
  scoreB.className = 'score'
  scoreB.textContent = localStorage.getItem('BestMark')
  puntGlobal.append(scoreB)

  /* añadir al contenedor de puntuaciones */
  punt.append(puntPartida)
  punt.append(puntGlobal)
  /* add  text to buttons  */
  buttonPpt.textContent = 'Piedra, Papel,Tijera'
  btnCivl.textContent = 'Ejecutar Obras'

  buttonPpt.addEventListener('click', initPpt)
  btnCivl.addEventListener('click', () => {
    const currentScore = document.querySelector('#current-score')
    currentScore.textContent = 0
    initObra()
  })
  /* add button to header */

  buttonsDiv.append(buttonPpt)
  buttonsDiv.append(btnCivl)
  header.append(buttonsDiv)
  header.append(punt)
  /* add header to divapp */
  divApp.append(header)
}
