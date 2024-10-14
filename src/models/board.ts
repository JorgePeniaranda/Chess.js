import { Piece } from './piece'

export class Board {
  private pieces: Piece[] = []

  constructor() {}

  getPieces(): Piece[] {
    return this.pieces
  }
}
