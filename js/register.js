let formularioLogin = document.querySelector('form');
    formularioLogin.addEventListener('submit', function (e) {
        let campoEmail = document.querySelector('#Email');
        let campospassword1 = document.querySelector('#password1');
        let campospassword2 = document.querySelector('#password2');
        let checkTerminos = document.querySelector('#terminos');


        let email = campoEmail.value();
        let password1 = campospassword1.value();
        let password2 = campospassword2.value();

        if (email === "" || password1 === "" || password2 === "") {
            alert('Todos los campos son obligatorios');
            e.preventDefault();
        } else if (password1.length < 6 || password2.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            e.preventDefault();

        } else if (password1 !== password2){
            alert('Las contraseñas no coinciden, intente nuevamente');
            e.preventDefault();
        } else if (!checkTerminos.checked) {
            alert('Debe aceptar los términos y condiciones para registrarse');
            e.preventDefault();
        } else {
            e.preventDefault();
            location.href = 'login.html';

        }});
