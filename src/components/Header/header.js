import { initObra } from '../../pages/Obras/CovaCivil'
import { initPpt } from '../../pages/Ppt/ppt'
import './header_style.css'

export const Header = (divApp) => {
  /* create app buttons */
  /* crear header */
  const header = document.createElement('header')
  /* crear contenedor de botonoes*/
  const buttonsDiv = document.createElement('div')
  buttonsDiv.className = 'Butonsdiv'
  /* crear botones de juevo piedra.. y excavadoras */
  const buttonPpt = document.createElement('button')
  const btnCivl = document.createElement('button')

  /* add  text to buttons  */
  buttonPpt.textContent = 'Piedra, Papel,Tijera'
  btnCivl.textContent = 'Ejecutar Obras'
  /* iniciar página piedra papel tijera */
  buttonPpt.addEventListener('click', initPpt)

  /* iniciar página excavadoras */
  btnCivl.addEventListener('click', () => {
    initObra()
  })
  /* add button to header */

  buttonsDiv.append(buttonPpt)
  buttonsDiv.append(btnCivl)
  header.append(buttonsDiv)
  // header.append(punt)
  /* add header to divapp */
  divApp.append(header)
}
