export const disablingAllCells = () => {
  const cells = document.querySelectorAll('.cell')

  cells.forEach((cell) => {
    cell.style.pointerEvents = 'none'
    // cell.disabled = true
  })
}

export const enablingAllCells = () => {
  const turno = document.querySelector('.turnValue')
  const cells = document.querySelectorAll('.cell')
  if (turno.value !== '-') {
    cells.forEach((cell) => {
      cell.style.pointerEvents = 'auto'
    })
  }
}
