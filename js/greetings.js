const loginDiv = document.querySelector("#login-div");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:nth-child(2)");
const greeting = document.querySelector("#greeting");
const greet = document.querySelector(".greet");
const blur = document.querySelector(".blur");

const colors = [
    "#4bcffa",
    "#50c1e6",
    "#34e7e4",
    "#00d8d6",
    "#0be881",
    "#1fe98b",
    "#40e99a",
    "#ef5777",
    "#f53b57",
    "#f53b57",
    "#eb5f74",
    "#e2354f",
    "#ff5e57"
  ];
const color1 = colors[Math.floor(Math.random() * colors.length)];
console.log(color1);
greet.style.background = `linear-gradient(45deg, ${color1}, #ffc900)`;

function loginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}`;
    blur.classList.remove("blur");
    blur.classList.add("blur-off");
    loginForm.classList.add("disappear");
    setTimeout(function() { loginDiv.remove(); }, 1500);
}

  
const savedUserName = localStorage.getItem("username");

if(savedUserName === null) {
    loginForm.addEventListener("submit", loginSubmit);
} else {
    blur.classList.remove("blur");
    loginDiv.remove();
    greeting.innerText = `Hello ${savedUserName}`;
}