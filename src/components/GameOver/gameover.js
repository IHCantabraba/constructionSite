import { initObra } from '../../pages/Obras/CovaCivil'
import './gameover.css'

export const gameOver = () => {
  /* obtener el div de la app */
  const divApp = document.querySelector('#app')
  /* crear div de la ventana modal*/
  const modalDiv = createDiv('modal', 'modal')
  /* crear div del Header de  la ventana modal*/
  const modalHeaderDiv = createDiv('modal-header')
  /* crear div del título del Header de  la ventana modal*/
  const modalTilte = createDiv('title')
  modalTilte.textContent = 'Game Over!'
  /* crear el boton de "cerrar" del Header de  la ventana modal*/
  const modalCloseBtn = document.createElement('button')
  modalCloseBtn.className = 'close-button'
  modalCloseBtn.innerHTML = '&times;'

  /* crear el boton de "Nueva Partida" del Header de  la ventana modal*/
  const modalRestartBtn = document.createElement('button')
  modalRestartBtn.className = 'restart-button'
  modalRestartBtn.textContent = 'Try again!'
  /* crear el div para ocupar toda la pantalla */
  const modalOverlay = createDiv('overlay')

  /* TODO implementar event listener para los botones de la ventana Game Over
   */
  modalRestartBtn.addEventListener('click', () => {
    initObra()

    modalDiv.classList.toggle('hide')
    modalOverlay.classList.toggle('hide')
  })
  modalCloseBtn.addEventListener('click', () => {})
  modalHeaderDiv.append(modalTilte)
  modalHeaderDiv.append(modalCloseBtn)
  modalDiv.append(modalHeaderDiv)
  modalDiv.append(modalRestartBtn)
  const footer = document.querySelector('.footer')

  divApp.append(modalDiv, footer)
  divApp.append(modalOverlay)
}

export const createDiv = (clas, id = '') => {
  const div = document.createElement('div')
  div.className = clas
  if (!id === '') {
    modalDiv.id = id
  }
  return div
}
