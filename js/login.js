let formularioLogin = document.querySelector('main form');
    formularioLogin.addEventListener('submit', function (e) {
        let campoEmail = document.querySelector('#Email');
        let campoPassword = document.querySelector('#password');

        let email = campoEmail.value();
        let password = campoPassword.value();

        if (email === "" || password === "") {
            alert('Todos los campos son obligatorios');
            e.preventDefault();
        } else if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            e.preventDefault();
        } else {
            localStorage.setItem('usuario', email);

            e.preventDefault();
            location.href = 'index.html';
        }
    });
