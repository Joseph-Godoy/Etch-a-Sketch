//Variables globales
const lienzo = document.querySelector('.content')
const btnTamaño = document.querySelector('.btnTamaño')
const btnBorrador = document.querySelector('.btnBorrador')
const btnNegro = document.querySelector('.btnNegro')
const btnRojo = document.querySelector('.btnRojo')
const btnVerde = document.querySelector('.btnVerde')
const btnAzul = document.querySelector('.btnAzul')
const btnBorrar = document.querySelector('.btnBorrar')
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
let cuadro = '';
let modo = 'colorNegro';
let mousePresionado = false;

// ------------------------------------------------------------------------------------------------------------
// Funciones
// ------------------------------------------------------------------------------------------------------------

function crearCuadricula(x) {
    for (let i = 0; i < x * x; i++) {
        const cuadrado = document.createElement('div');
        cuadrado.id = 'cuadro';
        cuadrado.style.width = (720 / x) + "px";
        cuadrado.style.height = (720 / x) + "px"
        lienzo.appendChild(cuadrado);
    }
    cuadro = document.querySelectorAll('#cuadro')
    correrCuadricula(cuadro);
};

function correrCuadricula(x) {
    
    x.forEach(element => {
        element.addEventListener('mouseover', function () {
            if (mousePresionado == true) {
                element.className = modo;
            }
        })
    })
    document.addEventListener('mousedown', function (e) { 
        mousePresionado = true; 
        if (e.target.id == 'cuadro') {
            e.target.className = modo;
        }
    });
    document.addEventListener('mouseup', function () { mousePresionado = false; })
};


// ------------------------------------------------------------------------------------------------------------
// Eventos
// ------------------------------------------------------------------------------------------------------------

btnTamaño.addEventListener('click', function () {
    let x = prompt('Escribe un tamaño del 1 al 100:')
    while (x > 100 || x < 1) {
        alert('ese numero es incorrecto, debe ser del 1 al 100')
        x = prompt('Escribe un tamaño del 1 al 100:')
    }
    lienzo.innerHTML = '';
    crearCuadricula(x);
})

btnBorrador.addEventListener('click', function () {
    root.style.setProperty('--cambiarColor', 'white')
    modo = '';
    correrCuadricula(cuadro);
})

btnNegro.addEventListener('click', function () {
    root.style.setProperty('--cambiarColor', 'black')
    modo = 'colorNegro';
    correrCuadricula(cuadro);
})

btnRojo.addEventListener('click', function () {
    root.style.setProperty('--cambiarColor', 'red')
    modo = 'colorRojo';
    correrCuadricula(cuadro);
})

btnVerde.addEventListener('click', function () {
    root.style.setProperty('--cambiarColor', 'green')
    modo = 'colorVerde'
    correrCuadricula(cuadro);
})

btnAzul.addEventListener('click', function () {
    root.style.setProperty('--cambiarColor', 'blue')
    modo = 'colorAzul';
    correrCuadricula(cuadro);
})

btnBorrar.addEventListener('click', function () {
    cuadro.forEach(element => {
        element.className = ''
    })
})

// ------------------------------------------------------------------------------------------------------------
//Inicializar el programa
// ------------------------------------------------------------------------------------------------------------

crearCuadricula(10)
correrCuadricula(cuadro);