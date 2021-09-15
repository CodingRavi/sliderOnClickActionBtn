var slider=document.querySelector(".slider");
var btn1=document.querySelector(".btn1");
var btn2=document.querySelector(".btn2");
var btn3=document.querySelector(".btn3");
var btn4=document.querySelector(".btn4");

btn1.onclick = function() {
    slider.style.transform="translateX(0%)"; 
}

btn2.onclick = function() {
    slider.style.transform="translateX(-100%)";
}

btn3.onclick = function() {
    slider.style.transform="translateX(-200%)";
}

btn4.onclick = function() {
    slider.style.transform="translateX(-300%)";
}
