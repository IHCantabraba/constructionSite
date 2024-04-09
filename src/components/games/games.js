import { createHeaderBtn } from '../utils/TicTacToe/Headerbtn/headerBtn.js'
import { initBrainGame } from '../../pages/BrainGame/brainGame.js'
export const Games = [
  {
    name: 'Tic Tac Toe',
    component: createHeaderBtn
  },
  { name: 'Brain Game', component: initBrainGame }
]
