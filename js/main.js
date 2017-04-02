var clock = document.querySelector('.clock')
var isHex = false

function getTime (input) {
  var time = new Date()
  var hour = addCeroToSingleDigit(time.getHours())
  var min = addCeroToSingleDigit(time.getMinutes())
  var sec = addCeroToSingleDigit(time.getSeconds())
  if (input === 'color') {
    return '#' + hour + min + sec
  } else if (input === 'hex') {
    return toHex(hour) + ':' + toHex(min) + ':' + toHex(sec)
  } else {
    return hour + ':' + min + ':' + sec
  }
}

function getSeconds () {
  var time = new Date()
  return time.getSeconds()
}
function getPercentage (x) {
  return (x * 100) / 60
}
function addCeroToSingleDigit (input) {
  if (input.toString().length === 1) return '0' + input
  return input
}

function toHex (num) {
  return num.toString(16)
}

function renderTime () {
  var color = getTime('color')
  document.querySelector('.circle').style.boxShadow = '5px 5px 50px' + color
  document.body.style.color = color
  document.body.style.background = 'radial-gradient(at top left, ' + 'white' + ',' + color + ')'
  document.querySelector('.box').style.height = getPercentage(getSeconds()) + '%'

  if (isHex) {
    clock.textContent = getTime('hex')
  } else {
    clock.textContent = getTime()
  }
}

clock.addEventListener('mouseover', function () {
  isHex = true
  renderTime()
})

clock.addEventListener('mouseout', function () {
  isHex = false
  renderTime()
})

renderTime()

var timer = setInterval(renderTime, 1000)
