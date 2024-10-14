import { boardColors, boardPosition } from '../types/commons'

export abstract class Piece {
  protected position: boardPosition
  protected color: 'white' | 'black'

  constructor(position: boardPosition, color: boardColors) {
    this.position = position
    this.color = color
  }

  abstract canMove(position: boardPosition): boolean
  abstract move(position: boardPosition): void
  abstract getPosition(): boardPosition
}
