let slider = document.querySelector(".carrusel");
let boton = document.querySelector("#siguiente");
let boton2 = document.querySelector("#atras");
let oculto = 
next = () =>{
    slider.style.transform = "translateX(-100%)"
    slider.style.transition = "transform 2s";
}
back = () =>{
    slider.style.transform = "translateX(100%)"
    slider.style.transition = "transform 2s";
}

boton.addEventListener("click", next);
boton2.addEventListener("click", next);

