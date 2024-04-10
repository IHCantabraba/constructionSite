import { initGame } from '../../components/utils/BrainGame/InitGame/initGame'
import { deleteTimers } from '../../components/utils/BrainGame/functions/funtions'
import './brainGame.css'

/* función para el botón del juego en el header */
export const initBrainGame = (textContent) => {
  deleteTimers()
  const buttonBrainGame = document.createElement('button')
  buttonBrainGame.textContent = textContent
  /* listener del botón del header */
  buttonBrainGame.addEventListener('click', () => {
    /* limpiar en contenido del div content cuando se hace click en un header menu */
    if (document.querySelector('.content')) {
      const content = document.querySelector('.content')
      content.innerHTML = ''
      initGame()
      const BoardBrain = document.querySelector('.boardBrain')
      BoardBrain.classList.remove('hide')
    }
  })
  return buttonBrainGame
}
