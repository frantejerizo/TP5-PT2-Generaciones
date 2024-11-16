class Persona
{
    #nombre
    #edad
    #dni
    #sexo
    #peso
    #altura
    #anioNacimiento

    constructor(nombre,edad,dni,sexo,peso,altura,anioNacimiento)
    {
        this.#nombre= nombre
        this.#edad= edad
        this.#dni= dni
        this.#sexo= sexo
        this.#peso= peso
        this.#altura= altura
        this.#anioNacimiento= anioNacimiento
    }

    mostrarGeneracion()
    {
        if (this.#anioNacimiento >= 1994 && this.#anioNacimiento <= 2010) 
        {
            alert("Pertenece a la Generación Z.");
        } 
        else if (this.#anioNacimiento >= 1981 && this.#anioNacimiento <= 1993) 
        {
            alert("Pertenece a la Generación Y.");
        } 
        else if (this.#anioNacimiento >= 1969 && this.#anioNacimiento <= 1980) 
        {
            alert("Pertenece a la Generación X.");
        }
        else if (this.#anioNacimiento >= 1949 && this.#anioNacimiento <= 1968) 
        {
            alert("Pertenece a la Generación Baby Boom.");
        } 
        else if (this.#anioNacimiento >= 1930 && this.#anioNacimiento <= 1948) 
        {
            alert("Pertenece a la Generación Silent Generation.");
        } 
        else 
        {
            alert("No pertenece a ninguna generación documentada.");
        }
    }

    esMayorDeEdad()
    {
        if (this.#edad>= 18)
        {
            alert(`Es mayor de edad. 
            Edad del susodicho: ${this.#edad}`)
        }
        else
        {
            alert(`No es mayor de edad. 
            Edad del susodicho: ${this.#edad}`)
        }
    }

    mostrarDatos()
    {
        alert(`Datos de la persona:

            Nombre: ${this.#nombre}
            Edad: ${this.#edad}
            DNI: ${this.#dni}
            Sexo: ${this.#sexo}
            Peso: ${this.#peso}kg
            Altura: ${this.#altura}cm
            Año de nacimiento: ${this.#anioNacimiento}
            `)
    }
}

// Declarar la variable fuera del scope de la función para que sea accesible globalmente
let nuevaPersona = null;

const formulario = document.querySelector("form")
formulario.addEventListener("submit",crearPersona)

function crearPersona(e)
{
    e.preventDefault()

    const nombre = document.getElementById("nombre").value
    const edad = document.getElementById("edad").value
    const dni = document.getElementById("dni").value
    const sexo = document.getElementById("sexo").value
    const peso = document.getElementById("peso").value
    const altura = document.getElementById("altura").value
    const anioNacimiento = document.getElementById("anioNacimiento").value

    nuevaPersona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
    alert("Persona creada exitosamente");
}

// Seleccionamos los botones del html y asignamos eventos a cada uno con sus respectivas funciones

document.querySelector(".btn-warning").addEventListener("click", () => {
    if (nuevaPersona) nuevaPersona.mostrarGeneracion();
    else alert("Primero debes crear una persona");
});

document.querySelector(".btn-danger").addEventListener("click", () => {
    if (nuevaPersona) nuevaPersona.esMayorDeEdad();
    else alert("Primero debes crear una persona");
});

document.querySelector(".btn-success").addEventListener("click", () => {
    if (nuevaPersona) nuevaPersona.mostrarDatos();
    else alert("Primero debes crear una persona");
});









