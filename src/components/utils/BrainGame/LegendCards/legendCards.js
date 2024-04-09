import { createDiv } from '../../TicTacToe/CreateDiv'
import './legendCards.css'

export const insertLegendCard = (cards) => {
  const content = document.querySelector('.content')
  if (document.querySelector('.legendDiv')) {
    console.log('existe la leyenda')
    // const legendDiv = document.querySelector('.legendDiv')
    // resetLegendElement()
  } else {
    const legendDiv = createDiv('legendDiv')
    for (let i = 0; i < cards.length; i++) {
      const legendCardDiv = document.createElement('img')
      const card = cards[i]

      legendCardDiv.classList.add('legendCard')
      legendCardDiv.classList.add(`${card.name}`)
      legendCardDiv.id = i
      legendCardDiv.dataset.name = card.name
      legendCardDiv.src = card.url
      legendDiv.append(legendCardDiv)
    }
    content.append(legendDiv)
  }
}

export const resetLegendElement = () => {
  if (document.querySelector('.legendDiv')) {
    const childrens = [].slice.call(
      document.querySelector('.legendDiv').getElementsByClassName('legendCard')
    )
    if (childrens.length > 0) {
      console.log('found children')
      console.log(childrens[0])
      childrens.forEach((e) => {
        e.classList.remove('hide')
      })
    }
  }
}
