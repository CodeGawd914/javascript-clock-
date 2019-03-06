console.log("im ready");
const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setTic() {
  const now = new Date()

  const seconds = now.getSeconds()
  const secondDegree = ((seconds/60)* 360)+90
  secondHand.style.transform = `rotate(${secondDegree}deg)`

  const mins = now.getMinutes()
  const minsDegree = ((mins/60)* 360)+90
  minHand.style.transform = `rotate(${minsDegree}deg)`

  const hour = now.getMinutes()
  const hourDegree = ((hour/12)* 360)+90
  hourHand.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(setTic,1000)
