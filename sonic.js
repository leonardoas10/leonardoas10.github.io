var boton = document.getElementById("doyouwant");
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

boton.addEventListener("click", gocontact);
backdrop.addEventListener("click", gohome);

function gohome () {
    backdrop.style.display = "none";
    modal.style.display = 'none';
}

function gocontact() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}