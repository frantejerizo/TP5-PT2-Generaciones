class Persona
{
    #nombre
    #edad
    #dni
    #sexo
    #peso
    #altura
    #añoNacimiento

    constructor(nombre,edad,dni,sexo,peso,altura,añoNacimiento)
    {
        this.#nombre= nombre
        this.#edad= edad
        this.#dni= dni
        this.#sexo= sexo
        this.#peso= peso
        this.#altura= altura
        this.#añoNacimiento= añoNacimiento
    }

    mostrarGeneracion()
    {
        if (this.#añoNacimiento >= 1994 && this.#añoNacimiento <= 2010) 
        {
            alert("Pertenece a la Generación Z.");
        } 
        else if (this.#añoNacimiento >= 1981 && this.#añoNacimiento <= 1993) 
        {
            alert("Pertenece a la Generación Y.");
        } 
        else if (this.#añoNacimiento >= 1969 && this.#añoNacimiento <= 1980) 
        {
            alert("Pertenece a la Generación X.");
        }
        else if (this.#añoNacimiento >= 1949 && this.#añoNacimiento <= 1968) 
        {
            alert("Pertenece a la Generación Baby Boom.");
        } 
        else if (this.#añoNacimiento >= 1930 && this.#añoNacimiento <= 1948) 
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
            alert(`<p>Es mayor de edad.</p>`)
        }
        else
        {
            alert(`<p>No es mayor de edad.</p>`)
        }
    }

    mostrarDatos()
    {
        alert(`<h3>Datos de la persona:</h3>`)
        alert(`<ul>
            <li>Nombre: ${this.#nombre}</li>
            <li>Edad: ${this.#edad}</li>
            <li>DNI: ${this.#dni}</li>
            <li>Sexo: ${this.#sexo}
            <li>Peso: ${this.#peso}kg</li>
            <li>Altura: ${this.#altura}cm</li>
            <li>Año de nacimiento: ${this.#añoNacimiento}</li>
            </ul`)
    }
}

const formulario = document.querySelector("form")
formulario.addEventListener("submit",crearPersona)

function crearPersona(e)
{
    e.preventDefault()
    const nombre = document.getElementById("nombre")
    const edad = document.getElementById("edad")
    const dni = document.getElementById("dni")
    const sexo = "M"
    const peso = document.getElementById("peso")
    const altura = document.getElementById("altura")
    const anioNacimiento = document.getElementById("anioNacimiento")

    const nuevaPersona = new Persona(nombre,edad,dni,sexo,peso,altura,anioNacimiento)

}









