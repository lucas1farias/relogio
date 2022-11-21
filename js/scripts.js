

// PARTE 1
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let dayOrNight = document.getElementById('am-pm')

setInterval(() => {
  // PARTE 2
  let hr = new Date().getHours()
  let mnt = new Date().getMinutes()
  let sec = new Date().getSeconds()
  let isDayOrNight = hr >= 12 ? 'PM' : 'AM'

  if (hr > 12) {
    hr = hr - 12
  }

  hours.textContent = hr < 10 ? `0${hr} h` : hr + ' h'
  minutes.textContent = mnt < 10 ? `0${mnt} min` : mnt + ' min'
  seconds.textContent = sec < 10 ? `0${sec} s` : sec + ' s'
  dayOrNight.textContent = isDayOrNight

  // PARTE 3
  let strokeForHour = document.getElementById('stroke-hr')
  let strokeForMinute = document.getElementById('stroke-mnt')
  let strokeForSecond = document.getElementById('stroke-sec')
  
  // CÁLCULO DO PROGRESSO DO CÍRCULO
  strokeForHour.style.strokeDashoffset = 440 - (440 * hr) / 12
  strokeForMinute.style.strokeDashoffset = 440 - (440 * mnt) / 60
  strokeForSecond.style.strokeDashoffset = 440 - (440 * sec) / 60

  // PARTE 4
  let hrDot = document.querySelector('.hour-dot')
  let mntDot = document.querySelector('.minute-dot')
  let secDot = document.querySelector('.second-dot')
  
  // [360 / 12 = 30] [360 / 60 = 6] [360 / 60 = 6]
  hrDot.style.transform = `rotate(${hr * 30}deg)`
  mntDot.style.transform = `rotate(${mnt * 6}deg)`
  secDot.style.transform = `rotate(${sec * 6}deg)`
})
