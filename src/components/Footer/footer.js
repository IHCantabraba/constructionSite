import './footer.css'

export const footer = (divApp) => {
  // const divApp = document.querySelector('#app')
  /* crear el contador de obra sy su imaegn (cerdito) */
  const divTotal = document.createElement('footer')
  divTotal.className = 'footer'
  const cesta = document.createElement('img')
  cesta.className = 'cesta'
  cesta.src = '../assets/ObraCivl/caja-de-dinero.png'

  /* crear icono del aumento del dinero */
  const dinero = document.createElement('img')
  dinero.className = 'produccion'
  dinero.src = '../assets/ObraCivl/dinero.png'

  divTotal.append(cesta)
  divTotal.append(dinero)
  divApp.append(divTotal)
}
