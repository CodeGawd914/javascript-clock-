console.log("im ready");

function setTic() {
  const now = new Date()
  const seconds = now.getSeconds()
  console.log(seconds);
}

setInterval(setTic,1000)
