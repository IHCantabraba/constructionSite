import './header_style.css'
import { createHeaderBtn } from '../utils/TicTacToe/Headerbtn/headerBtn'
import { Games } from '../games/games'

export const Header = (divApp) => {
  /* create app buttons */
  /* crear header */
  const header = document.createElement('header')
  /* Crear un div para el header */
  const headerDiv = document.createElement('div')
  headerDiv.className = 'header-div'

  /* crear contenedor de botones y el botón de cada juego*/
  for (const game of Games) {
    /* Crear contenedor de botones */
    const buttonsDiv = document.createElement('div')
    buttonsDiv.className = 'Butonsdiv'

    /* crear botones de juevo piedra.. y excavadoras */
    const GameButton = game.component(game.name)

    /* add button to header */
    buttonsDiv.append(GameButton)
    headerDiv.append(buttonsDiv)
  }
  header.append(headerDiv)
  /* add header to divapp */
  divApp.append(header)
}
