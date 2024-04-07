export const hideBoard = () => {
  const cards = document.querySelectorAll('.card')
  cards.forEach((e) => {
    e.classList.remove('card-selected')
  })
}

export const showBoard = () => {
  const cards = document.querySelectorAll('.card')
  cards.forEach((e) => {
    e.classList.add('card-selected')
  })
}
