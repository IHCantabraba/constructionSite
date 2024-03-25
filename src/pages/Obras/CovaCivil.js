import './CovaCivil.css'
let puntuacion = 0
sessionStorage.setItem('puntuacion', puntuacion)
let bestmark
if (bestmark) {
  localStorage.setItem('BestMark', bestmark)
} else {
  bestmark = 0
  localStorage.setItem('BestMark', bestmark)
}

/* contador de excavadoras clickadas */
let COUNT = 0
/* intervalo para la velocidad de mostart excavadoras */
let intervalo
/* crear el main */
let main
/* variable para mostrar el boton de pausa(false) o de jugar (true) */
let pausado = true
/* array de escavadoras */
const excavadoras = [
  { type: 'excavadora', src: '/assets/ObraCivl/excavadora.png' },
  { type: 'excavadora', src: '/assets/ObraCivl/Hitachi.png' },
  { type: 'excavadora', src: '/assets/ObraCivl/pala.png' },
  { type: 'excavadora', src: '/assets/ObraCivl/take-1px.png' },
  { type: 'excavadora', src: '/assets/ObraCivl/take-2px.png' }
]
/* generación del juego */
export const initObra = () => {
  /* obtener el div de la app */
  const divApp = document.querySelector('#app')
  if (!document.querySelector('main')) {
    main = document.createElement('main')
  } else {
    main = document.querySelector('main')
  }
  const divContent = document.querySelector('.content')
  /* vaciar al iniciar */
  divContent.innerHTML = ''

  /* crear los elementos del juego */

  /* añadir el h2 para mostrar el numero de excavadoras clickadas */
  const textoContador = document.createElement('h2')
  textoContador.textContent = COUNT
  textoContador.className = 'textoContador'
  /* añadir audio */
  const audio = document.createElement('audio')

  /* crear botones de jugar y pausar */
  const jugar = document.createElement('button')
  jugar.textContent = 'Jugar'
  jugar.className = 'btn-obra'

  const pausar = document.createElement('button')
  pausar.textContent = 'Pausar'
  pausar.className = 'btn-obra'
  /* eventlistener para modificar a clase "show" que hará que se muestre un botón u otro */
  jugar.addEventListener('click', () => {
    pausado = !pausado
    toggleBtn(jugar, pausar)
    iniciarJuego()
  })
  pausar.addEventListener('click', () => {
    pausado = !pausado
    toggleBtn(jugar, pausar)
    clearInterval(intervalo)
  })
  /* instanciar la funcion para mostrar el 
  botón de jugar pausado(false) */
  toggleBtn(jugar, pausar)
  /* añadir al contenedor los botones e imágenes */
  divContent.append(jugar)
  divContent.append(pausar)
  divContent.append(audio)
  divContent.append(textoContador)
  main.append(divContent)
  divApp.append(main)
}

/* seleccionar una excavadora aleatoria */
const NuevaObra = () => {
  const index = Math.round(Math.random() * 4)
  return index
}
/* creaer los elementos de una partida */
const createObra = () => {
  /* obtener el contenedor del juego */
  const divContent = document.querySelector('.content')
  /* crear el contenedor de la escavadora a mostrar */
  const imgPala = document.createElement('img')
  imgPala.className = 'obra'

  /* definir la posición maxima de la excavadora */
  let left = Math.random() * (window.innerWidth - 100)
  let top = Math.random() * (window.innerHeight - 200)

  imgPala.style.top = `${top + 150}px`
  imgPala.style.left = `${left}px`
  imgPala.style.transform = `rotate(${Math.random() * 360}deg)`
  imgPala.classList.add('ejecutar')
  /* una vez clickado sobre la imagen de la excavadora
  ejecutar la funcion que la envía al cerdito prepara la siguiente */
  imgPala.addEventListener('click', (e) => EjecutarObra(e))
  const iconObra = NuevaObra()
  imgPala.src = excavadoras[iconObra]['src']
  divContent.append(imgPala)
  comprobarEjecucion()
}

const EjecutarObra = (e) => {
  const audio = document.querySelector('audio')
  audio.src = './assets/ObraCivl/sound.mp3'
  audio.play()
  audio.volume = 0.1
  /* actualizar el número de excavadoras */
  COUNT++
  /* eliminar la clase "ejecutar" para no tenerla en cuenta en el recuento de 
  elementos en pantalla */
  e.target.classList.remove('ejecutar')
  /* almacenar ne la sesión el número de excavadoras ganadas */
  let contador = Number(sessionStorage.getItem('puntuacion'))
  contador += 1
  sessionStorage.setItem('puntuacion', contador)
  /* actualizar el número en el contador */
  let score = document.querySelector('.score')
  score.textContent = contador
  repirtarTexto(COUNT)
  /* definir posición a la que se van las excavadoras que se han ganado */
  /* generar un random en px para height y width */
  let randomTop = Math.random() * 5 + 80
  let randomleft = Math.random() * 5 + 80
  /*  */
  e.target.style.top = `${window.innerHeight - randomTop}px`
  e.target.style.left = `${window.innerWidth - randomleft}px`
}
/* actualizar el contador del cerdito */
const repirtarTexto = (count) => {
  const texto = document.querySelector('.textoContador')
  texto.textContent = count
}
/* comprobar cuantos elementos hay en pantalla */
const comprobarEjecucion = () => {
  const SinEjecutar = document.querySelectorAll('.ejecutar')

  if (SinEjecutar.length > 200) {
    /* obtener la puntuacion actual */
    const current = sessionStorage.getItem('puntuacion')
    /* obtener el contador general */
    const bestmar = document.querySelector('#best-score')
    /* actualizar valor de vest mark */
    bestmar.textContent = current
    /* actualizar local storage para que persista */
    localStorage.setItem('BestMark', current)
    sessionStorage.setItem('puntuacion', 0)
    const currentmar = document.querySelector('#current-score')
    currentmar.textContent = 0

    alert('Te han superado las obras pendinetes de ejecutar')
    clearInterval(intervalo)
  }
}
/* crear el incremento de la velocidad del juego
a partir de los intervalos de tiempo  */
const iniciarJuego = () => {
  intervalo = setInterval(() => {
    createObra()
  }, 1000)
  setTimeout(() => {
    clearInterval(intervalo)
    if (!pausado) {
      intervalo = setInterval(() => {
        createObra()
      }, 800)
    }
  }, 5000)
  setTimeout(() => {
    clearInterval(intervalo)
    if (!pausado) {
      intervalo = setInterval(() => {
        createObra()
      }, 600)
    }
  }, 10000)
  setTimeout(() => {
    clearInterval(intervalo)
    if (!pausado) {
      intervalo = setInterval(() => {
        createObra()
      }, 400)
    }
  }, 15000)
  setTimeout(() => {
    clearInterval(intervalo)
    if (!pausado) {
      intervalo = setInterval(() => {
        createObra()
      }, 300)
    }
  }, 20000)
  setTimeout(() => {
    clearInterval(intervalo)
    if (!pausado) {
      intervalo = setInterval(() => {
        createObra()
      }, 200)
    }
  }, 25000)
  setTimeout(() => {
    clearInterval(intervalo)
    if (!pausado) {
      intervalo = setInterval(() => {
        createObra()
      }, 100)
    }
  }, 30000)
}

/* añadir o quitar la clase "show" en función del valor true/false de "let pausado" */
const toggleBtn = (jugar, pausar) => {
  if (pausado) {
    jugar.classList.add('show')
    pausar.classList.remove('show')
    console.log(pausado)
  } else {
    pausar.classList.add('show')
    jugar.classList.remove('show')
    // pausado = !pausado
    console.log(pausado)
  }
}
