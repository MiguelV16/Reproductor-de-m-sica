// String
const mensaje = 'instituto alfa carabobo'

// Number
const numero = 7 

// Boolean
const condicion = false 

// Array 
const mercado = [
    'Tomates', 
    'Lechuga',
    'Salsa ketchup',
    'Yogurt',
    'Pan',
]

// Object
const usuario = {
    email: 'pedro@outlook.com',
    password: '1234*',
    username: 'pedrouwu32',
    address: {
        city: 'Valencia',
        State: 'Carabobo',
        street: 'Michelena',
        code: '404'
    },
    children: [
        'juan',
        'pedrito',
    ],
}

const indefinido = undefined

const vacio = null


/**
 * OPERADORES LÓGICOS
 * &&          AND o también 'y'
 * ||          OR o también "o"
 * =           Asignación
 * 
 * ==          comparación igual
 * !=          desigualdad 
 * 
 * >=          mayor o igual
 * >           mayor
 * 
 * <=          menor o igual 
 * <           menor
 * 
 * OPERADORES MATEMÁTICOS
 * +          suma o adicón
 * -          resta o sustracción
 * *          multiplicación
 * **         potenciación
 * /          división
 * %          residuo
 * 
 */



//  if (3 == 4) {
//     console.log("se cumple")
    
// }
// else {
//     console.log("no se cumple")
// }


const suma = (num1, num2) => {
      return num1 + num2
}

const validarUsuario = (usuario) => {

    return (usuario.email != undefined &&
           usuario.password != undefined)
}


const elemento = document.getElementById('identify')

elemento.addEventListener('click', () => {
    elemento.style.display = 'none'
})


axios.get("https://leonardoapi.onrender.com/songs")
.then(
    // datos que vienen del servidor
    (res) => {
        const contenedor = document.getElementById("list-list")
    
      //recorrer las canciones
    res.data.songs.map(
        (song) => {
            //esto se repite por cada canción
            console.log(song)

            const songHTML = document.createElement('div')
            songHTML.classList.add("div")

            songHTML.innerHTML = `
            <img src="${song.path.front}" alt="imagen de una cabeza de robot">
            <div>
                <h3>${song.title} </h3>

                <p>${song.duration}</p>
            </div>
            `
             
            songHTML.addEventListener('click' , () => {
                  document.getElementById('current-song-audio').setAttribute('src', song.path.audio)
                  document.getElementById('current-song-img').setAttribute('src', song.path.front)
            })

            contenedor.appendChild(songHTML)
        }
    )
}

)

