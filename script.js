//Creacion del lienzo -------------------------------------------------------------------
const lienzo = document.querySelector('.content')

const input = document.querySelector('.input')

let x = input.value



for (let i = 0; i < x * x; i++) {
    const cuadrado = document.createElement('div');
    cuadrado.id = 'cuadro';
    cuadrado.style.width = (720 / x) + "px";
    cuadrado.style.height = (720 / x) + "px"
    lienzo.appendChild(cuadrado);
}



//Pintar cuadrado de negro -------------------------------------------------------------------

const cuadro = document.querySelectorAll('#cuadro')

const btnBorrador = document.querySelector('.btnBorrador')
const btnNegro = document.querySelector('.btnNegro')
const btnRojo = document.querySelector('.btnRojo')
const btnVerde = document.querySelector('.btnVerde')
const btnAzul = document.querySelector('.btnAzul')

var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);

btnBorrador.addEventListener('click', function () {
    root.style.setProperty('--cambiarColor', 'white')
    cuadro.forEach(element => {
        element.addEventListener('mouseover', function () {
            if (mousePresionado == true) {
                element.className = ''
            }
        })

        element.addEventListener('click', function () {
            element.classList = ''
        })
    });
})

btnNegro.addEventListener('click', function () {
    root.style.setProperty('--cambiarColor', 'black')
    cuadro.forEach(element => {
        element.addEventListener('mouseover', function () {
            if (mousePresionado == true) {
                element.className = 'colorNegro'
            }
        })

        element.addEventListener('click', function () {
            element.classList = 'colorNegro'
        })
    });
})

btnRojo.addEventListener('click', function () {
    root.style.setProperty('--cambiarColor', 'red')
    cuadro.forEach(element => {
        element.addEventListener('mouseover', function () {
            if (mousePresionado == true) {
                element.classList = 'colorRojo'
            }
        })

        element.addEventListener('click', function () {
            element.classList = 'colorRojo'
        })
    });
})

btnVerde.addEventListener('click', function () {
    root.style.setProperty('--cambiarColor', 'green')
    cuadro.forEach(element => {
        element.addEventListener('mouseover', function () {
            if (mousePresionado == true) {
                element.classList = 'colorVerde'
            }
        })

        element.addEventListener('click', function () {
            element.classList = 'colorVerde'
        })
    });
})

btnAzul.addEventListener('click', function () {
    root.style.setProperty('--cambiarColor', 'blue')
    cuadro.forEach(element => {
        element.addEventListener('mouseover', function () {
            if (mousePresionado == true) {
                element.classList = 'colorAzul'
            }
        })

        element.addEventListener('click', function () {
            element.classList = 'colorAzul'
        })
    });
})

let mousePresionado = false;

document.addEventListener('mousedown', function () { mousePresionado = true; });

document.addEventListener('mouseup', function () { mousePresionado = false; })



//Borrar todo en el lienzo -------------------------------------------------------------------

const btnBorrar = document.querySelector('.btnBorrar')

btnBorrar.addEventListener('click', function () {
    cuadro.forEach(element => {
        element.className = ''
    })
})


cuadro.forEach(element => {
    element.addEventListener('mouseover', function () {
        if (mousePresionado == true) {
            element.className = 'colorNegro'
        }
    })

    element.addEventListener('click', function () { element.classList = 'colorNegro' })
})



