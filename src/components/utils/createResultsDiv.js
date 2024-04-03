import { createDiv } from './CreateDiv'

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

  /* crear div paraganados por Y */
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
  GeneralDiv.append(resultsDivTotals)
  return GeneralDiv
}
