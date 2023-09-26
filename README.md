# Práctica 1 I Calculadora HTML + CSS + JavaScript 🐈

**Nombre:** Barba Navarro Luis Rodrigo

**Fecha (Creación):** 25/09/23

**Descripción:**

1. `document.querySelector(".display");` selecciona el primer elemento en el documento HTML que tiene la clase CSS "display" y lo devuelve como un objeto que se puede manipular en JavaScript.

2. `const buttons = document.querySelectorAll("button");` selecciona todos los elementos `<button>` en el documento HTML y los devuelve como una lista de nodos que se pueden usar en JavaScript.

3. `buttonText = button.textContent;` asigna el texto contenido dentro del elemento `<button>` actual a la variable `buttonText`.

4. `buttons.forEach((button) => { ... })` es un bucle que itera a través de todos los elementos `<button>` seleccionados por `document.querySelectorAll("button")`. Permite realizar una acción en cada uno de estos elementos.

5. `button.addEventListener("click", () => { ... })` agrega un "escuchador de eventos" a un elemento (en este caso, el elemento `<button>`). Cuando se hace clic en ese botón, la función dentro del bloque `{ ... }` se ejecuta, lo que permite realizar acciones específicas en respuesta al evento de clic.
