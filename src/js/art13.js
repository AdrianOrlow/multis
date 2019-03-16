const date = new Date()
const blackoutDate = new Date('2019-03-21')
const infoStartDate = new Date('2019-03-22')
const infoEndDate = new Date('2019-03-28')

const art13El = document.querySelector('.art13')
const art13BackBtn = document.querySelector('.button--art13--back')

function sameDay (d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
  d1.getDate() === d2.getDate() &&
  d1.getMonth() === d2.getMonth()
}

function inRange (d, start, end) {
  return (
    isFinite(d = d.valueOf()) &&
      isFinite(start = start.valueOf()) &&
      isFinite(end = end.valueOf())
      ? start <= d && d <= end
      : NaN
  )
}

if (sameDay(date, blackoutDate)) {
  setTimeout(() => {
    art13El.classList.add('show')
  }, 1000)
} else if (inRange(date, infoStartDate, infoEndDate)) {
  setTimeout(() => {
    art13El.classList.add('show')
    art13BackBtn.classList.add('show')
  }, 1000)
}

art13BackBtn.addEventListener('click', () => {
  art13El.classList.remove('show')
})
