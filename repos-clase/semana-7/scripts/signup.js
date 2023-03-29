window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
   
    const form = document.querySelector("form")
    const inputNombre = document.querySelector("#inputNombre")
    const inputApellido = document.querySelector("#inputApellido")
    const inputEmail = document.querySelector("#inputEmail")
    const inputPassword = document.querySelector("#inputPassword")
    const inputPasswordRepetida = document.querySelector("#inputPasswordRepetida")



    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        
        event.preventDefault()

        const datosRegistro = {
            firstName: inputNombre.value,
            lastName: inputApellido.value,
            email: inputEmail.value,
            password: inputPassword.value
        }

        if (inputPassword.value === inputPasswordRepetida.value){
            realizarRegister(datosRegistro);
        }else{
            console.error("Las contraseñas no coinciden")
        }
        console.log(datosRegistro);
    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(datosRegistro) {
        
        const register = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosRegistro)
        }
        const URL = "https://todo-api.ctd.academy/v1"
        const path = "/users"
        const URI = URL + path

        fetch(URI,register)
        .then(response => {
            return response.json()
        })
        .then(resJS => {
                localStorage.setItem("jwt", resJS.jwt)
                location.replace("index.html")
        })
        .catch( err => console.error(err))

    };


});