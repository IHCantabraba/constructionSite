import './CovaCivil.css'
export let puntuacion = 0
sessionStorage.setItem('puntuacion', puntuacion)
let COUNT = 0
let intervalo
let pausado = true
const excavadoras = [
  { type: 'excavadora', src: './assets/ObraCivl/excavadora.png' },
  { type: 'excavadora', src: './assets/ObraCivl/Hitachi.png' },
  { type: 'excavadora', src: './assets/ObraCivl/pala.png' },
  { type: 'excavadora', src: './assets/ObraCivl/take-1px.png' },
  { type: 'excavadora', src: './assets/ObraCivl/take-2px.png' }
]

/* random excavadora */
const NuevaObra = () => {
  const index = Math.round(Math.random() * 4)
  return index
}
console.log(NuevaObra)
export const initObra = () => {
  /* obtener el div de la app */
  const divContent = document.querySelector('.content')
  /* vaciar al iniciar */
  divContent.innerHTML = ''

  const cesta = document.createElement('img')
  const dinero = document.createElement('img')
  dinero.className = 'produccion'
  dinero.src = './assets/ObraCivl/dinero.png'
  const textoContador = document.createElement('h2')

  const jugar = document.createElement('button')
  const pausar = document.createElement('button')
  textoContador.textContent = COUNT
  textoContador.className = 'textoContador'
  cesta.className = 'cesta'

  cesta.src = './assets/ObraCivl/caja-de-dinero.png'
  jugar.textContent = 'Jugar'
  pausar.textContent = 'Pausar'
  jugar.className = 'btn-obra'
  pausar.className = 'btn-obra'

  jugar.addEventListener('click', () => {
    toggleBtn(jugar, pausar)
    iniciarJuego()
  })
  pausar.addEventListener('click', () => {
    pausado != pausado
    toggleBtn(jugar, pausar)
    clearInterval(intervalo)
  })
  toggleBtn(jugar, pausar)

  divContent.append(jugar)
  divContent.append(pausar)

  divContent.append(cesta)
  divContent.append(dinero)

  divContent.append(textoContador)
}

const createObra = () => {
  const divContent = document.querySelector('.content')

  const imgPala = document.createElement('img')
  imgPala.className = 'obra'

  let left = Math.random() * window.innerWidth - 100
  let top = Math.random() * window.innerHeight - 400

  imgPala.style.top = `${top}px`
  imgPala.style.left = `${left + 25}px`
  imgPala.style.transform = `rotate(${Math.random() * 360}deg)`
  imgPala.classList.add('ejecutar')

  imgPala.addEventListener('click', (e) => EjecutarObra(e))

  const iconObra = NuevaObra()
  imgPala.src = excavadoras[iconObra]['src']
  divContent.append(imgPala)
  comprobarEjecucion()
}

const EjecutarObra = (e) => {
  COUNT++
  e.target.classList.remove('ejecutar')
  let contador = Number(sessionStorage.getItem('puntuacion'))
  contador += 1
  sessionStorage.setItem('puntuacion', contador)
  let score = document.querySelector('.score')
  score.textContent = contador
  repirtarTexto(COUNT)
  let randomTop = Math.random() * 5 + 80
  let randomleft = Math.random() * 5 + 80
  e.target.style.top = `${window.innerHeight - randomTop}px`
  e.target.style.left = `${window.innerWidth - randomleft}px`
  const produccion = document.querySelector('.produccion')
  const positionInfo = produccion.getBoundingClientRect()
  produccion.style.width = `${positionInfo.width + 1}px`
  produccion.style.height = `${positionInfo.heigth + 1}px`

  // produccion.style.transform = `scale(${1.1})`
}

const repirtarTexto = (count) => {
  const texto = document.querySelector('.textoContador')
  texto.textContent = count
}
/* comprobar cuantos elementos hay en pantalla */
const comprobarEjecucion = () => {
  const SinEjecutar = document.querySelectorAll('.ejecutar')
  console.log(SinEjecutar.length)
  if (SinEjecutar.length > 200) {
    alert('Te han superado las obras pendinetes de ejecutar')
    clearInterval(intervalo)
  }
}

const iniciarJuego = () => {
  intervalo = setInterval(() => {
    createObra()
  }, 1000)
  setTimeout(() => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
      createObra()
    }, 900)
  }, 5000)
  setTimeout(() => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
      createObra()
    }, 800)
  }, 10000)
  setTimeout(() => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
      createObra()
    }, 700)
  }, 15000)
  setTimeout(() => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
      createObra()
    }, 600)
  }, 20000)
  setTimeout(() => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
      createObra()
    }, 500)
  }, 25000)
  setTimeout(() => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
      createObra()
    }, 400)
  }, 30000)
  setTimeout(() => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
      createObra()
    }, 300)
  }, 35000)
  setTimeout(() => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
      createObra()
    }, 200)
  }, 40000)
  setTimeout(() => {
    clearInterval(intervalo)
    intervalo = setInterval(() => {
      createObra()
    }, 100)
  }, 60000)
  // comprobarEjecucion()
}

const toggleBtn = (jugar, pausar) => {
  if (pausado) {
    jugar.classList.add('show')
    pausar.classList.remove('show')
    pausado = false
  } else {
    pausar.classList.add('show')
    jugar.classList.remove('show')
    pausado = true
  }
}
