import { boardPosition } from '../types/commons'

export function normalizeBoardPosition(position: boardPosition): boardPosition {
  const [file, rank] = position.split('')
  const normalizedFile = file.toUpperCase()
  const normalizedRank = parseInt(rank)
  return `${normalizedFile}${normalizedRank}`
}
