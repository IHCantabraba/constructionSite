import './footer.css'

export const footer = () => {
  const divApp = document.querySelector('#app')
  /* crear el contador de obra sy su imaegn (cerdito) */
  const footer = document.createElement('footer')
  footer.className = 'footer'
  const copyRight = document.createElement('p')
  copyRight.classList.add('footerP')
  copyRight.innerHTML = `&copy; Created By Iñigo's Games`
  footer.append(copyRight)
  divApp.append(footer)
}
