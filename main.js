const REDIRECT_URL = "http://p8r9.com/?utm_campaign=D65m7f7e4i&v1=[v1]&v2=[v2]&v3=[v3]"; // 🔁 change
const DURATION = 5;
const SESSION_KEY = "racing_popup_seen";

const popup = document.getElementById("popup");
const countdown = document.getElementById("countdown");

// 🚫 DO NOT hide popup before render
if (sessionStorage.getItem(SESSION_KEY)) {
  window.location.href = REDIRECT_URL;
}

// Buttons
document.getElementById("verifyBtn").addEventListener("click", redirect);
document.getElementById("enterBtn").addEventListener("click", redirect);

// Countdown
let timeLeft = DURATION;
countdown.textContent = timeLeft;

const timer = setInterval(() => {
  timeLeft--;
  countdown.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(timer);
    redirect();
  }
}, 1000);

// Redirect (single fire)
let redirected = false;
function redirect(){
  if (redirected) return;
  redirected = true;
  sessionStorage.setItem(SESSION_KEY,"1");
  window.location.href = REDIRECT_URL;
}
