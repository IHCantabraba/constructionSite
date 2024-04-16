import { gameIcons } from '../gameOptions/gameIcons'
export const AddSelectedOption = (imgUrl) => {
  const userSelection = document.querySelector('.userSelecImg')
  userSelection.src = imgUrl
}

let Urls = []
gameIcons.forEach((icon) => {
  console.log(icon.url)
  Urls.push(icon.url)
})
export const MachineSelection = () => {
  const compSelector = document.querySelector('.computerSelecImg')
  let MatchSelection = Array.from(Urls).sort(() => 0.5 - Math.random())
  compSelector.src = MatchSelection[0]
}
