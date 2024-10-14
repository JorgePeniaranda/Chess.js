import { Rook } from './src/models/rook'
import { normalizeBoardPosition } from './src/helpers/normalize-board-position'

const initialPosition = normalizeBoardPosition('A1')

const rook = new Rook(initialPosition, 'white')

const newPosition = normalizeBoardPosition('a3')

rook.move(newPosition)
console.log(rook.getPosition()) // true
