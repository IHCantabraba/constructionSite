import { initObra, toggleBtn } from '../../pages/Obras/CovaCivil'
import { initPpt } from '../../pages/Ppt/ppt'
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
  const buttonPpt = document.createElement('button')
  const btnCivl = document.createElement('button')

  /* add  text to buttons  */
  buttonPpt.textContent = 'Tren en raya'
  btnCivl.textContent = 'Ejecutar Obras'
  btnCivl.title = 'Grab the excavators'
  btnCivl.setAttribute('data-toggle', 'tooltip')
  btnCivl.setAttribute('data-placement', 'bottom')
  /* iniciar página piedra papel tijera */
  buttonPpt.addEventListener('click', () => {
    const excvFooter = document.querySelector('.footer')
    excvFooter.classList.toggle('hide')
    initPpt()
  })

  /* iniciar página excavadoras */
  btnCivl.addEventListener('click', () => {
    initObra()
    const jugar = document.querySelector('#jugar')
    const pausar = document.querySelector('#pausar')

    toggleBtn(jugar, pausar)
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

  buttonsDiv.append(buttonPpt)
  buttonsDiv.append(btnCivl)
  header.append(buttonsDiv)
  // header.append(punt)
  /* add header to divapp */
  divApp.append(header)
}
