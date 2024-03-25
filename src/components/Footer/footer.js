import './footer.css'
let COUNT
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
  dinero.classList.add('animation')
  dinero.src = '../assets/ObraCivl/dinero.png'
  /* crear contador para a partida */
  const textoContador = document.createElement('h2')
  textoContador.className = 'textoContador'
  COUNT = 0
  textoContador.textContent = COUNT

  divTotal.append(textoContador)
  divTotal.append(cesta)
  divTotal.append(dinero)
  divApp.append(divTotal)
}
