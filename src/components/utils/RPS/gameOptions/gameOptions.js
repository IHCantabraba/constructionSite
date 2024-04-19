import './gameOptions.css'
import { gameIcons } from './gameIcons'
import { createDiv } from '../../TicTacToe/CreateDiv'
import {
  AddSelectedOption,
  CheckBatleWinner,
  ClickControl,
  MachineSelection
} from '../gameLogic/gameLogic'
import { CreateBtn, CreateElement } from '../utlis/utlis.'

sessionStorage.setItem('subBatle', 0)
sessionStorage.setItem('lastWinner', '-')

export const insertGameOptions = () => {
  /* main element */
  const content = document.querySelector('.content')
  /* main container */
  const optionsDiv = createDiv('options')
  /* SubBatles */
  const subBatles = createDiv('subBatles')
  const subBatlesP = CreateElement('p', 'subBatlesP', 'Batle: ')
  const optionDiv = createDiv('optionDiv')
  const subBatlesText = CreateElement(
    'p',
    'subBatlesText',
    `${sessionStorage.getItem('subBatle')}/5`
  )
  /* adding data to elements */
  subBatles.append(subBatlesP)
  subBatles.append(subBatlesText)
  /* adding subbatles to main container */
  optionsDiv.append(subBatles)

  /* lasWinner */
  const lastWiner = createDiv('lastWinner')
  const lastWinerP = CreateElement('p', 'lastWinnerP', 'Last Winner: ')
  const lastWinerText = CreateElement(
    'p',
    'lastWinnerText',
    sessionStorage.getItem('lastWinner')
  )
  /* affibt childs to lastWinner */
  lastWiner.append(lastWinerP)
  lastWiner.append(lastWinerText)
  /* create button forEach option */
  for (let option of gameIcons) {
    /* creating elements */
    const IndivOption = createDiv(`option`)
    const optionImg = CreateBtn(
      option.name,
      'RPS-Btn',
      option.url,
      option.winnerTo
    )
    /* eventListener */
    optionImg.addEventListener('click', (e) => {
      console.log()
      /* asignar selección del usuairo */
      AddSelectedOption(
        e.target.src,
        e.target.id,
        e.target.getAttribute('data-winner')
      )
      /* generar una selecion de la máquina */
      MachineSelection()
      /* comprobar quien gana la batalla */
      if (CheckBatleWinner() !== 'drawn') {
        console.log('distinto de drawn ')
        ClickControl()
      }
      /* mostrar modal de seguir jugando */
    })
    /* adding elemens to parent */
    IndivOption.append(optionImg)
    optionDiv.append(IndivOption)
  }
  optionsDiv.append(optionDiv)
  optionsDiv.append(lastWiner)
  if (content) {
    content.append(optionsDiv)
  }
  OptionsQuery()
}

const OptionsQuery = () => {
  /* main element */
  const content = document.querySelector('.dialogBoard')
  /* main container */
  const optionsDiv = createDiv('optionsQuery')
  // optionsDiv.style.display = 'none'
  const optionDiv = createDiv('optionDivQuery')
  /* create button forEach option */
  for (let option of gameIcons) {
    /* creating elements */
    const IndivOption = createDiv(`optionQuery`)
    const optionImg = CreateBtn(
      option.name,
      'RPS-Btn',
      option.url,
      option.winnerTo
    )
    /* eventListener */
    optionImg.addEventListener('click', (e) => {
      console.log()
      /* asignar selección del usuairo */
      AddSelectedOption(
        e.target.src,
        e.target.id,
        e.target.getAttribute('data-winner')
      )
      /* generar una selecion de la máquina */
      MachineSelection()
      /* comprobar quien gana la batalla */
      if (CheckBatleWinner() !== 'drawn') {
        console.log('distinto de drawn ')
        ClickControl()
      }
      /* mostrar modal de seguir jugando */
    })
    /* adding elemens to parent */
    IndivOption.append(optionImg)
    optionDiv.append(IndivOption)
  }
  optionsDiv.append(optionDiv)
  if (content) {
    content.append(optionsDiv)
  }
}
