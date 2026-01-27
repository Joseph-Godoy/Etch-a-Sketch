const lienzo = document.querySelector('.content')

let x = 25;

for (let i = 0; i < x*x; i++) {
    const cuadrado = document.createElement('div');
    cuadrado.className = 'cuadro';
    cuadrado.style.width = (720 / x) + "px";
    cuadrado.style.height = (720 / x) + "px"
    lienzo.appendChild(cuadrado);
}

const cuadro = document.querySelectorAll('.cuadro')

let mousePresionado = false;

document.addEventListener('mousedown', function(){
    mousePresionado = true;
});

document.addEventListener('mouseup', function() {
    mousePresionado = false;
})

cuadro.forEach(element => {
    element.addEventListener('mouseover', function() {
        if (mousePresionado == true) {
        element.classList.add('clickCuadro')
    }
    })
});

const btnBorrar = document.querySelector('.btnBorrar')

btnBorrar.addEventListener('click', function() {
    cuadro.forEach(element => {
        element.classList.remove('clickCuadro');
    })
})




