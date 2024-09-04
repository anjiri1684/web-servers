function displayTime() {
  const displayParaTime = document.getElementById("time");
  const h = new Date().getHours();
  const m = new Date().getMinutes();
  const s = new Date().getSeconds();
  const ampm = h >= 12 ? "PM" : "AM";

  displayParaTime.innerHTML = `${h}:${m}:${s} ${ampm}`;
}

setInterval(displayTime, 1000);

console.log("Client side javascript file is loaded");
