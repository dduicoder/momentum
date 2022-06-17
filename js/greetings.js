const loginDiv = document.querySelector("#login-div");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");
const greet = document.querySelector(".greet");
const blur = document.querySelector(".blur");

const colors = [
  "#ff1acd",
  "#ff1acd",
  "#ff1acd",
  "#1fe98b",
  "#33ee97",
  "#f53b57",
  "#f53b57",
  "#f53b57",
  "#e2354f",
  "#ff5e57",
];

const color1 = colors[Math.floor(Math.random() * colors.length)];
greet.style.background = `linear-gradient(45deg, ${color1}, #ffc900)`;

function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;

  localStorage.setItem("username", username);
  greeting.innerText = `Hello ${username}`;

  blur.classList.add("blur-off");
  loginForm.classList.add("disappear");
  setTimeout(function () {
    loginDiv.remove();
    blur.remove();
  }, 1500);
}

const savedUserName = localStorage.getItem("username");

if (savedUserName === null) {
  loginForm.addEventListener("submit", loginSubmit);
} else {
  loginDiv.remove();
  blur.remove();
  greeting.innerText = `Hello ${savedUserName}`;
}
