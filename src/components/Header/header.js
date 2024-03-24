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
  const punt = document.createElement('div')
  punt.className = 'puntuacion'
  const puntTitle = document.createElement('h2')
  puntTitle.textContent = 'Best-Score: '
  punt.append(puntTitle)
  const score = document.createElement('h2')
  score.className = 'score'
  score.textContent = sessionStorage.getItem('puntuacion')
  punt.append(score)
  /* add  text to buttons  */
  buttonPpt.textContent = 'Piedra, Papel,Tijera'
  btnCivl.textContent = 'Ejecutar Obras'

  buttonPpt.addEventListener('click', initPpt)
  btnCivl.addEventListener('click', initObra)
  /* add button to header */

  buttonsDiv.append(buttonPpt)
  buttonsDiv.append(btnCivl)
  header.append(buttonsDiv)
  header.append(punt)
  /* add header to divapp */
  divApp.append(header)
}
