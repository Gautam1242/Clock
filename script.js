function myTimer() {
  const d = new Date();
document.getElementById("hour").innerHTML=d.getHours();
document.getElementById("minute").innerHTML=d.getMinutes();
document.getElementById("second").innerHTML=d.getSeconds();
}

setInterval(myTimer, 1000);