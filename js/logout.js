document.addEventListener('DOMContentLoaded', function () {

    let emailUsuario = localStorage.getItem('UsuarioLogueado');
    let useractions = document.querySelector('#contenedor');
    let usuarios = localStorage.getItem('usuario');
    let logoutLabel;
    

    if (emailUsuario === "True") {
        
        useractions.innerHTML = `
            <div class=kenjy>
            <li class = hola id="logout"><a href="./index.html">Cerrar Sesion</a></li>
            <li class= hola >Bienvenido, ${usuarios}</li>
            </div>
            `;
        logoutLabel = document.querySelector('#logout');

    }
    

    if (logoutLabel) {
        logoutLabel.addEventListener('click', function () {
            

            localStorage.clear();

            useractions.innerHTML = `
                <li><a href="./login.html">Iniciar Sesión</a></li>
                <li><a href="./register.html">Registrarse</a></li>
                `;
            });
    }
});

