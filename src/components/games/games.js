import { createHeaderBtn } from '../utils/TicTacToe/Headerbtn/headerBtn.js'
import { initBrainGame } from '../../pages/BrainGame/brainGame.js'
import { ActivateRPSGame } from '../../pages/RPS/rps.js'
export const Games = [
  {
    name: 'Tic Tac Toe',
    component: createHeaderBtn
  },
  { name: 'Brain Game', component: initBrainGame },
  { name: 'Rock Paper Scissors', component: ActivateRPSGame }
]
