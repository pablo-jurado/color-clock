var clock = document.querySelector('.clock')
var time = new Date()
time = time.toLocaleTimeString()
clock.textContent = time
