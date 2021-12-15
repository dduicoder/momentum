const clock = document.querySelector("#electronic-watch");

const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".minute-hand");
const secHand = document.querySelector(".second-hand");

const dayOfWeek = document.querySelector("#dayOfWeek");
const dayText = document.querySelector("#day");


function getTime() {
    const date = new Date();
    
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

function clockMovement() {
    const date = new Date();
    const seconds = date.getSeconds();
    const secondsDeg = seconds * 6 + 90;
    secHand.style.transform = `rotate(${secondsDeg}deg)`;
  
    const minutes = date.getMinutes();
    const minutesDeg = minutes * 6 + 0.1 * seconds + 90;
    minHand.style.transform = `rotate(${minutesDeg}deg)`;
  
    const hours = date.getHours();
    const hoursDeg = hours * 30 + 0.5 * minutes + 90;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

function days() {
    const week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const date = new Date();
    const day = date.getDate();
    const dayOfWeekIndex = date.getDay();
    const dayOfWeekText = week[dayOfWeekIndex];
    dayText.innerText = day;
    dayOfWeek.innerText = dayOfWeekText;
}


getTime()
clockMovement();
days();
setInterval(getTime, 1000);
setInterval(clockMovement, 1000);
setInterval(days, 86400000);


