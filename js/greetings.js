const loginDiv = document.querySelector("#login-div");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:nth-child(2)");
const greeting = document.querySelector("#greeting");
const blur = document.querySelector(".blur");

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