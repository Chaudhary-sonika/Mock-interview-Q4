var textIp = document.querySelector("#ip");
var btnh1 = document.querySelector("#btnh1");
var btnh2 = document.querySelector("#btnh2");
var btnh3 = document.querySelector("#btnh3");

function h1text() {
    textIp.style.fontSize = "32px";
   console.log("working");
}
function h2text() {
    textIp.style.fontSize ="24px";
}
function h3text() {
    textIp.style.fontSize ="18px";
}

btnh1.addEventListener("click",h1text );
btnh2.addEventListener("click", h2text);
btnh3.addEventListener("click",h3text );