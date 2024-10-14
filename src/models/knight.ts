import { Piece } from './piece'

export class Knight extends Piece {
  canMove(): boolean {
    return true
  }

  move(position: string): void {
    this.position = position
  }
}
