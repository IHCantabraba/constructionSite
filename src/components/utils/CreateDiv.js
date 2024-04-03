export const createDiv = (clas, id = '') => {
  const div = document.createElement('div')
  div.className = clas
  if (!id === '') {
    modalDiv.id = id
  }
  return div
}
