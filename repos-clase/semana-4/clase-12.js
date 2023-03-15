/*                        [4] FUNCION: renderizar errores                      */

// Desarrollamos esta funcion para llamarla en el submit
function renderizarErrores(listado) {
    const cajaErrores = document.querySelector("#errores")
  
    if (cajaErrores){
      cajaErrores.remove()
    }
  
    if (listado.length > 0){
      const divTemplate = document.createElement("fieldset")
      divTemplate.setAttribute("id", "erroes")
      divTemplate.style = 
      "background: rgba(255, 0, 0, 0.2); padding: .5em 1em; color: red; margin: 0.5em 0;";
      listado.forEach((error) => {
        divTemplate.innerHTML += `<p><small>${error}</small></p>`
      });
      form.appendChild(divTemplate)
    }
  }
  
  /* ----------------------------- MESA DE TRABAJO ---------------------------- */
  /* -------------------------------------------------------------------------- */
  /*                [5] FUNCION: Formulario completado con éxito                */
  /* -------------------------------------------------------------------------- */
  // Esta funcion se va a encargar de mostrar que el formulario se completó correctamente.
  // Para eso debera cumplir con los siguientes requerimientos.
  // 1 - Recibe el listado de errores, y solo si no hay ninguno debe:
  // 2 - mostrar al final del formulario un caja con la misma estructura que la caja de errores, pero con la tonalidad verde
  // 3 - dentro la caja debe mostrar un párrafo con el mensaje: "¡Formulario completado con éxito!"
  // 4 - a su vez se debe deshabilitar el boton del formulario
  // 5 - finalmente pasados 4 segundos: se debe eliminar esa caja, habilitar el boton y limpiar el formulario
  
  function mostrarMensajeExito(listado) {
    //   desarrollar la funcion aqui
  
    const boton = document.querySelector("button[type='submit']")
  
    if(listado.length == 0){
      const divTemplate = document.createElement("fieldset")
      divTemplate.setAttribute("id", "exito")
      divTemplate.style = 
      "background: rgba(0, 255, 0, 0.2); padding: .5em 1em; color: black; margin: 0.5em 0;";
      divTemplate.innerHTML += `<p><small>"¡Formulario completado con éxito!"</small></p>`
      form.appendChild(divTemplate)
      boton.setAttribute("disabled", true)
      setTimeout(() => {
        form.removeChild(divTemplate)
        form.reset()
        boton.removeAttribute("disabled")
      }, 4000);
    }
  }