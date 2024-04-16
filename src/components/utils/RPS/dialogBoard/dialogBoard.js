import { createDiv } from '../../TicTacToe/CreateDiv'
import { CreateElement } from '../utlis/utlis.'
import './dialogBoard.css'

export const dialogBoard = () => {
  /* get content element to insert board */
  const content = document.querySelector('.content')
  /* get options to insert board Before */
  const options = document.querySelector('.options')
  /* create dialogBoard Section */
  const dialogBoard = CreateElement('section', 'dialogBoard')
  /* create dialogBoard title */
  const boardTitle = CreateElement(
    'h1',
    'sectionTitle',
    'Take a risk and Play!'
  )
  /* selections div */
  const batleSelection = createDiv('batleSelection')
  /* create userarticle  */
  const userArticle = CreateElement('article', 'userArticle')
  const userSelection = CreateElement(
    'h2',
    'userSelection',
    'You have chosen... '
  )
  const userSelecImg = CreateElement('img', 'userSelecImg')
  /* create VS paragraf */
  const vSparagraph = CreateElement('p', 'vSparagraph', 'VS')
  /* create computer article */
  const computerArticle = CreateElement('article', 'computerArticle')
  const computerSelection = CreateElement(
    'h2',
    'computerSelection',
    'Computer has chosen...'
  )
  /* adding imag element for chosen option */
  const computerSelecImg = CreateElement('img', 'computerSelecImg')
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
