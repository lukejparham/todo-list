import "./styles.css";

console.log("hello");

const div = document.createElement("div");
const body = document.querySelector("body");
div.textContent = "Hello Luke!";
body.appendChild(div);
