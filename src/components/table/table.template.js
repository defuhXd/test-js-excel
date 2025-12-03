const CODES = {
  A: 65, Z: 90
}

function toCell() {
  return `
  <div class="excel__table-row__data-cell" contenteditable></div>
  `
}

function toColumn(column) {
  return `
    <div class="excel__table-row__data-column">${column}</div>
  `
}

function toRow(rowNumber, content) {
  const number = rowNumber ? rowNumber : ''
  return `
    <div class="excel__table-row">
      <div class="excel__table-row__info">${number}</div>
      <div class="excel__table-row__data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowCount = 50) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  rows.push(toRow('', cols))

  for (let i = 0; i < rowCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')
    rows.push(toRow(i+1, cells))
  }

  return rows.join('')
}
