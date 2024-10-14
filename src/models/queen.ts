import { Piece } from './piece'

export class Queen extends Piece {
  canMove(): boolean {
    return true
  }

  move(position: string): void {
    this.position = position
  }
}
