const maxLength = 9

function getFormatNum(num) {
  const isShortEnough = num.toString().length <= maxLength
  if (isShortEnough) return `${num}`

  const intLength = Math.round(Math.abs(num)).toString().length
  if (intLength > maxLength) return num.toPrecision(1)

  const isInteger = Number.isInteger(num)
  if (!isInteger) return `${Number(num.toFixed(maxLength - intLength))}`

  return `${num}`
}
