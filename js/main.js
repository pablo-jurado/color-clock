var clock = document.querySelector('.clock')
var isHex = false

function getTime (input) {
  var time = new Date()
  var hour = addCeroToSingleDigit(time.getHours())
  var min = addCeroToSingleDigit(time.getMinutes())
  var sec = addCeroToSingleDigit(time.getSeconds())
  if (input !== 'hex') {
    return hour + ':' + min + ':' + sec
  } else {
    return toHex(hour) + ':' + toHex(min) + ':' + toHex(sec)
  }
}

function addCeroToSingleDigit (input) {
  if (input.toString().length === 1) return '0' + input
  return input
}

function toHex (num) {
  return num.toString(16)
}

clock.addEventListener('mouseover', function () {
  isHex = true
  renderTime()
})

clock.addEventListener('mouseout', function () {
  isHex = false
  renderTime()
})

function renderTime () {
  if (isHex) {
    clock.textContent = getTime('hex')
  } else {
    clock.textContent = getTime()
  }
}

renderTime()

var timer = setInterval(renderTime, 1000)
