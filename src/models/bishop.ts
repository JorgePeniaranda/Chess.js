import { Piece } from './piece'

export class Bishop extends Piece {
  canMove(): boolean {
    return true
  }

  move(position: string): void {
    this.position = position
  }
}
