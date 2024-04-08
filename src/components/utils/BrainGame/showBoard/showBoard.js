export const hideBoard = () => {
  const cards = document.querySelectorAll('.card')
  cards.forEach((e) => {
    e.classList.remove('showCard')
  })
}

export const showBoard = () => {
  const cards = document.querySelectorAll('.card')
  cards.forEach((e) => {
    e.classList.add('showCard')
  })
}
