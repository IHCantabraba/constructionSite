import './gameOptions.css'
import { gameIcons } from './gameIcons'
import { createDiv } from '../../TicTacToe/CreateDiv'

export const insertGameOptions = () => {
  const content = document.querySelector('.content')
  const optionsDiv = createDiv('options')
  for (let option of gameIcons) {
    /* creating elements */
    const IndivOption = createDiv(`option-${option.name}`)
    const optionImg = document.createElement('button')
    const optionText = document.createElement('p')

    /* adding elemnets value */
    optionImg.classList.add = option.name
    // IndivOption.style.backgroundImage = `url(${option.url})`
    optionText.textContent = `${option.name}`

    /* adding elemens to parent */
    IndivOption.append(optionImg)
    IndivOption.append(optionText)
    /* adding elemens to parent */
    optionsDiv.append(IndivOption)
  }

  if (content) {
    content.append(optionsDiv)
  }
}
