import './gameOptions.css'
import { gameIcons } from './gameIcons'
import { createDiv } from '../../TicTacToe/CreateDiv'
import { AddSelectedOption, MachineSelection } from '../gameLogic/gameLogic'
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
    const IndivOption = createDiv(`option-${option.name}`)
    const optionImg = CreateBtn(option.name, 'RPS-Btn', option.url)
    /* eventListener */
    optionImg.addEventListener('click', (e) => {
      /* asignar selección del usuairo */
      AddSelectedOption(e.target.value)
      /* generar una selecion de la máquina */
      MachineSelection()
    })
    /* adding elemens to parent */
    IndivOption.append(optionImg)
    /* adding elemens to parent */
    optionsDiv.append(IndivOption)
  }
  optionsDiv.append(lastWiner)
  if (content) {
    content.append(optionsDiv)
  }
}
