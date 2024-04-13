import { setInitialTurn } from '../../../../pages/TicTacToe/TicTacToe'
import { createDiv } from '../CreateDiv'
import './createResultDiv.css'

export function createResultsDiv(ScoreX, ScoreO, Drawns, Totals) {
  /* Div general */
  const GeneralDiv = createDiv('general-vid')
  /* crear div para contadores de partidas */
  const resultsDiv = createDiv('results-div')

  /* crear div para ganados por X */
  const resultsDivX = createDiv('results-div-x')

  const resultCountXTitle = document.createElement('p')
  resultCountXTitle.textContent = 'X - won: '
  resultCountXTitle.className = 'Xtext'

  const resultCountXvalue = document.createElement('p')
  resultCountXvalue.className = 'result-count-x-value'
  resultCountXvalue.textContent = ScoreX

  resultsDivX.append(resultCountXTitle)
  resultsDivX.append(resultCountXvalue)

  /* crear div para ganados por Y */
  const resultsDivO = createDiv('results-div-y')

  const resultCountOTitle = document.createElement('p')
  resultCountOTitle.textContent = 'O - won: '
  resultCountOTitle.className = 'Otext'

  const resultCountOValue = document.createElement('p')
  resultCountOValue.className = 'result-count-o-value'
  resultCountOValue.textContent = ScoreO

  resultsDivO.append(resultCountOTitle)
  resultsDivO.append(resultCountOValue)
  /* empates */
  const resultsDivdrawns = createDiv('result-drawns')

  const resultCountDrownTitle = document.createElement('p')
  resultCountDrownTitle.textContent = 'Drawns: '
  resultCountDrownTitle.className = 'Drawntext'

  const resultCountDrawnValue = document.createElement('p')
  resultCountDrawnValue.className = 'result-count-drawn-value'
  resultCountDrawnValue.textContent = Drawns

  resultsDivdrawns.append(resultCountDrownTitle)
  resultsDivdrawns.append(resultCountDrawnValue)
  /* Crear div general de turno */
  const GeneralTurn = document.createElement('div')
  GeneralTurn.className = 'general-turn'
  /* crear un div con texto y turno */
  const textDiv = document.createElement('div')
  textDiv.className = 'text-div'
  const turnText = document.createElement('p')
  turnText.className = 'turnText'
  turnText.textContent = 'Turn of: '
  const turnValue = document.createElement('p')
  turnValue.className = 'turnValue'
  turnValue.textContent = 'X'
  textDiv.append(turnText)
  textDiv.append(turnValue)
  /* crear div para insertar selector de quién comienza */
  const TurnDiv = document.createElement('div')
  TurnDiv.className = 'turno'

  /* crear select  */
  const selectorX = document.createElement('button')
  // selectorX.type = 'input'
  selectorX.textContent = 'X'
  selectorX.className = 'selectorX'
  selectorX.id = 'selectorX'
  selectorX.addEventListener('click', (e) => {
    const turnoX = ElegirTurno(selectorX.value)
    turnValue.textContent = 'X'
    setInitialTurn(turnoX)
    const board = document.querySelector('.board')

    board.classList.remove('o')
    board.classList.add('x')
  })

  TurnDiv.append(selectorX)

  /* crear select con option X */
  const selectorO = document.createElement('button')
  // selectorO.type = 'input'
  selectorO.className = 'selectorO'
  selectorO.id = 'selectorO'
  selectorO.textContent = 'O'
  selectorO.addEventListener('click', (e) => {
    const board = document.querySelector('.board')
    const turnoO = ElegirTurno(selectorO.value)
    turnValue.textContent = 'O'

    setInitialTurn(turnoO)
    board.classList.remove('x')
    board.classList.add('o')
  })
  TurnDiv.append(selectorO)

  GeneralTurn.append(TurnDiv)
  GeneralTurn.append(textDiv)

  /* recuento total Partidas */

  const resultsDivTotals = createDiv('result-totals')

  const resultDivTotalText = document.createElement('p')
  resultDivTotalText.textContent = 'Games: '
  resultDivTotalText.className = 'total-games'

  const resultDivTotalValue = document.createElement('p')
  resultDivTotalValue.className = 'result-count-total-value'
  resultDivTotalValue.textContent = Totals

  resultsDivTotals.append(resultDivTotalText)
  resultsDivTotals.append(resultDivTotalValue)
  /* añadir los div de reslt-x e Y ald div results */
  resultsDiv.append(resultsDivX)
  resultsDiv.append(resultsDivO)
  resultsDiv.append(resultsDivdrawns)

  GeneralDiv.append(resultsDiv)
  GeneralDiv.append(GeneralTurn)
  GeneralDiv.append(resultsDivTotals)

  return GeneralDiv
}
const ElegirTurno = (seleccion) => {
  if (seleccion === 'X') {
    return false
  } else {
    return true
  }
}
