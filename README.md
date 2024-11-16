# Proyecto: Clase Persona con Identificación de Generaciones

## Descripción

Este proyecto consiste en una aplicación web desarrollada en **JavaScript** que permite crear objetos de la clase `Persona` con diversas propiedades, como nombre, edad, DNI, sexo, peso, altura y año de nacimiento. Además, la aplicación ofrece métodos para determinar a qué generación pertenece una persona según su año de nacimiento y otras funcionalidades relacionadas.

## Funcionalidades

La clase `Persona` incluye los siguientes métodos:

### 1. `mostrarGeneracion()`
Muestra un mensaje indicando a qué generación pertenece la persona creada, así como el rasgo característico de dicha generación. Las generaciones se definen de acuerdo con la siguiente tabla:

| Nombre de la Generación | Marco Temporal (España) | Rasgo Característico   |
|-------------------------|-------------------------|------------------------|
| Generación Z            | 1994 - 2010             | Irreverencia           |
| Generación Y (Millennials) | 1981 - 1993        | Frustración            |
| Generación X            | 1969 - 1980             | Obsesión por el éxito  |
| Baby Boom               | 1949 - 1968             | Ambición               |
| Silent Generation       | 1930 - 1948             | Austeridad             |

### 2. `esMayorDeEdad()`
Verifica si la persona es mayor de edad (18 años o más) y muestra un mensaje indicando si es mayor de edad.

### 3. `mostrarDatos()`
Devuelve toda la información del objeto persona en un formato legible.

## Interfaz de Usuario

La aplicación cuenta con una interfaz interactiva que permite:

- Crear un objeto `Persona` mediante un formulario en el que se pueden ingresar las propiedades (nombre, edad, DNI, sexo, peso, altura, año de nacimiento).
- Botones interactivos para ejecutar las funciones:
  - **"Mostrar Generación"**: Muestra en un alert la generación y el rasgo característico correspondiente.
  - **"Es Mayor de Edad"**: Indica si la persona es mayor de edad.
  - **"Mostrar Datos"**: Muestra todos los datos de la persona creada.

## Tecnologías Utilizadas

- **HTML5** para la estructura del formulario.
- **CSS3** para el estilo visual.
- **Bootstrap** para un diseño responsivo y moderno.
- **JavaScript** para la lógica del juego y manipulación del DOM.

## Cómo Usar el Proyecto

1. **Clona este repositorio** en tu máquina local:
    ```bash
    git clone https://github.com/frantejerizo/TP5-PT2-Generaciones.git
    ```

2. **Abre el archivo `index.html`** en tu navegador:
    ```bash
    open index.html
    ```

3. **Interacción**:
    - Completa el formulario con los datos de la persona.
    - Usa los botones para interactuar con las funcionalidades de la clase `Persona`.

