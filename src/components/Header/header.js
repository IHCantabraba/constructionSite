import { initObra, toggleBtn } from '../../pages/Obras/CovaCivil'
import { initBoard } from '../../pages/TicTacToe/TicTacToe'
import { footer } from '../../components/Footer/footer'
import './header_style.css'

export const Header = (divApp) => {
  /* create app buttons */
  /* crear header */
  const header = document.createElement('header')
  /* crear contenedor de botonoes*/
  const buttonsDiv = document.createElement('div')
  buttonsDiv.className = 'Butonsdiv'
  /* crear botones de juevo piedra.. y excavadoras */
  const buttonTicTac = document.createElement('button')
  const btnCivl = document.createElement('button')

  /* add  text to buttons  */
  buttonTicTac.textContent = 'Tres en raya'
  btnCivl.textContent = 'Ejecutar Obras'
  btnCivl.title = 'Grab the excavators'
  btnCivl.setAttribute('data-toggle', 'tooltip')
  btnCivl.setAttribute('data-placement', 'bottom')

  /* iniciar página piedra papel tijera */
  buttonTicTac.addEventListener('click', () => {
    /* eliminar footer */
    if (document.querySelector('.footer')) {
      const excvFooter = document.querySelector('.footer')
      const excContent = document.querySelector('.puntuacion')
      const jugar = document.querySelector('.btn-jugar')
      const pausar = document.querySelector('.btn-pausar')
      if (!excvFooter.classList.contains('hide')) {
        excvFooter.classList.toggle('hide')
      }
      if (!excContent.classList.contains('hide')) {
        excContent.classList.toggle('hide')
      }
      if (jugar.classList.contains('show')) {
        jugar.classList.remove('show')
      }
      if (pausar.classList.contains('show')) {
        pausar.classList.remove('show')
      }
    }
    if (!document.querySelector('.board')) {
      initBoard()
    }
    if (document.querySelector('.board')) {
      const board = document.querySelector('.board')
      if (board.classList.contains('hide')) {
        board.classList.remove('hide')
      }
    }
  })

  /* iniciar página excavadoras */
  btnCivl.addEventListener('click', () => {
    /* eliminar lo relativo al juego anterior si existe */
    if (document.querySelector('.board')) {
      const board = document.querySelector('.board')
      if (!board.classList.contains('hide')) {
        board.classList.add('hide')
      }
    }
    /* mostrar boto jugar, y contadores */
    initObra()
    /* añadir clase para mostrar botón jugar y ocultar botón pausar */
    const jugar = document.querySelector('#jugar')
    const pausar = document.querySelector('#pausar')
    toggleBtn(jugar, pausar)
    /* si hay un footer ne el DOM se mujestra y sino, se añade uno. */
    if (document.querySelector('.footer')) {
      const footer = document.querySelector('.footer')
      footer.classList.remove('hide')
    } else {
      footer(divApp)
    }
    const puntuacion = document.querySelector('.puntuacion')
    puntuacion.classList.toggle('hide')
  })
  /* add button to header */

  buttonsDiv.append(buttonTicTac)
  buttonsDiv.append(btnCivl)
  header.append(buttonsDiv)
  // header.append(punt)
  /* add header to divapp */
  divApp.append(header)
}
