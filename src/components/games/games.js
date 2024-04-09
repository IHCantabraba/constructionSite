import { createHeaderBtn } from '../utils/TicTacToe/Headerbtn/headerBtn.js'
import { initBrainGame } from '../../pages/BrainGame/brainGame.js'
export const Games = [
  {
    name: 'Tres en raya',
    component: createHeaderBtn
  },
  { name: 'Train Your Brain', component: initBrainGame }
]
