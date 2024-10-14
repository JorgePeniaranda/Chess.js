import { boardColors, boardPosition } from '../types/commons'
import { Piece } from './piece'

export class Rook extends Piece {
  constructor(position: boardPosition, color: boardColors) {
    super(position, color)
  }

  public canMove(position: boardPosition): boolean {
    const [currentFile, currentRank] = this.position.split('')
    const [targetFile, targetRank] = position.split('')

    return currentFile === targetFile || currentRank === targetRank
  }

  public move(position: boardPosition): void {
    if (!this.canMove(position)) {
      throw new Error('Invalid move')
    }

    this.position = position
  }

  public getPosition(): boardPosition {
    return this.position
  }
}
