import { createDiv } from '../../TicTacToe/CreateDiv'
import './dialogBoard.css'

export const dialogBoard = () => {
  /* get content element to insert board */
  const content = document.querySelector('.content')
  /* get options to insert board Before */
  const options = document.querySelector('.options')

  /* create dialogBoard Section */
  const dialogBoard = document.createElement('section')
  dialogBoard.classList.add('dialogBoard')

  /* create dialogBoard title */
  const boardTitle = document.createElement('h1')
  boardTitle.classList.add('sectionTitle')
  boardTitle.textContent = 'Take a risk and Play!'
  /* selections div */
  const batleSelection = createDiv('batleSelection')
  /* create userarticle  */
  const userArticle = document.createElement('article')
  userArticle.classList.add('userArticle')
  const userSelection = document.createElement('h2')
  userSelection.classList.add('userSelection')
  userSelection.textContent = 'You have chosen... '
  const userSelecImg = document.createElement('img')
  userSelecImg.classList.add('userSelecImg')
  /* create VS paragraf */
  const vSparagraph = document.createElement('p')
  vSparagraph.classList.add('vSparagraph')
  vSparagraph.textContent = 'VS'
  /* create computer article */
  const computerArticle = document.createElement('article')
  computerArticle.classList.add('computerArticle')
  const computerSelection = document.createElement('h2')
  computerSelection.classList.add('computerSelection')
  computerSelection.textContent = 'Computer has chosen...'

  /* adding imag element for chosen option */
  const computerSelecImg = document.createElement('img')
  computerSelecImg.classList.add('computerSelecImg')

  /* adding elements to articles */
  /* user relative */
  userArticle.append(userSelection)
  userArticle.append(userSelecImg)

  /* computer relative */
  computerArticle.append(computerSelection)
  computerArticle.append(computerSelecImg)
  /* adding element to batle selection div */
  batleSelection.append(userArticle)
  batleSelection.append(vSparagraph)
  batleSelection.append(computerArticle)
  /* adding elements to section */
  dialogBoard.append(boardTitle)
  dialogBoard.append(batleSelection)

  if (options) {
    content.insertBefore(dialogBoard, options)
  } else {
    content.append(dialogBoard)
  }
}
