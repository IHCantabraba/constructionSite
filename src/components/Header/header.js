import './header_style.css'
import { createHeaderBtn } from '../utils/headerBtn'

export const Header = (divApp) => {
  /* create app buttons */
  /* crear header */
  const header = document.createElement('header')

  /* crear contenedor de botones*/
  const buttonsDiv = document.createElement('div')
  buttonsDiv.className = 'Butonsdiv'

  /* crear botones de juevo piedra.. y excavadoras */
  const buttonTiTacTOE = createHeaderBtn('Tres en Raya')

  /* add button to header */
  buttonsDiv.append(buttonTiTacTOE)
  header.append(buttonsDiv)

  /* add header to divapp */
  divApp.append(header)
}
