import { Piece } from './piece'

export class King extends Piece {
  canMove(): boolean {
    return true
  }

  move(position: string): void {
    this.position = position
  }
}
