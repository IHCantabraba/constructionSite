import './style.css'
import { Header } from '/src/components/Header/header'

const divApp = document.querySelector('#app')
const divContent = document.createElement('div')
divContent.className = 'content'

Header(divApp)
divApp.append(divContent)
