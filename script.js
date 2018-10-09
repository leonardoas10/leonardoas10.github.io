let body = document.getElementById("cuerpo"); 
let color1 = document.querySelector(".color1"); 
let color2 = document.querySelector(".color2"); 
let css = document.querySelector("h3");
let random = document.querySelector(".random");

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandColor);

color1.value = "#ff0000";
color2.value = "#00ffff";

setGradient();
    
function setGradient() {
    
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    +", "
    + color2.value
    + ")";

    css.textContent = body.style.background;
}

function setRandColor() {
	color1.value = "#"+(Math.random()*0xFFFFFF<<0).toString(16); 
	color2.value = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
    setGradient(); 
}




 
