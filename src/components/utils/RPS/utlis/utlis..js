export const CreateBtn = (id, clas, value) => {
  const btn = document.createElement('button')
  btn.id = id
  btn.classList.add(clas)
  btn.value = value
  btn.innerHTML = `<img src='${value}' id='${id}'/>`
  return btn
}

export const CreateElement = (type, clas = '', text = '') => {
  const p = document.createElement(`${type}`)
  if (clas !== '') {
    p.classList.add(clas)
  }
  if (text !== '') {
    p.textContent = text
  }
  return p
}
