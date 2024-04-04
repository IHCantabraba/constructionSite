import { initGame } from '../../components/utils/BrainGame/InitGame/initGame'
import './brainGame.css'

/* función para el botón del juego en el header */
export const initBrainGame = (textContent) => {
  const buttonBrainGame = document.createElement('button')
  buttonBrainGame.textContent = textContent
  console.log('Brain ')
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
