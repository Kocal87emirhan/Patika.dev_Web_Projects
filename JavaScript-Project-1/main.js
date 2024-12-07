const USER_INPUT = prompt("İsminizi giriniz!").trim();
const USER = document.querySelector("#user");

if (USER_INPUT !== null && USER_INPUT.trim() !== "") {
    USER.textContent = USER_INPUT;
} else {
    USER.textContent = "Misafir";
}

document.querySelector(".container").style.visibility = "visible";

function takeTime() {
    const NOW = new Date();
    const HOUR = NOW.getHours().toString().padStart(2, "0");
    const MINUTE = NOW.getMinutes().toString().padStart(2, "0");
    const SECOND = NOW.getSeconds().toString().padStart(2, "0");

    const DAYS = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const DAY_NAME = DAYS[NOW.getDay()];

    const FORMATTED_TIME = `${HOUR}:${MINUTE}:${SECOND} ${DAY_NAME}`;

    document.querySelector("#time").innerHTML = FORMATTED_TIME;
}

setInterval(takeTime, 1);