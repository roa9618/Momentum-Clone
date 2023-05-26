const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const nowHour = String(date.getHours()).padStart(2, "0");
  const nowMinutes = String(date.getMinutes()).padStart(2, "0");
  const nowSeconds = String(date.getSeconds()).padStart(2, "0");
  
  clock.innerText = `${nowHour}:${nowMinutes}:${nowSeconds}`;
}

getClock();
setInterval(getClock, 1000);