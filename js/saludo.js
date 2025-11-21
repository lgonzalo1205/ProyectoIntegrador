document.addEventListener('DOMContentLoaded', function () {
    let nombreUsuario = localStorage.getItem('usuario');
    let UsuarioLogueado = localStorage.getItem('UsuarioLogueado');

    let cartellogin = document.querySelector('#log');
    let cartelregistro = document.querySelector('#reg');
    let headerexsistente = document.querySelector('header');
    let contenedor = document.querySelector('#contenedor');


    if (UsuarioLogueado === "True" && contenedor) {
        let contenido  = ` 
            <div style="margin-right: 20px;">
                Bienvenido ${nombreUsuario}
            </div>
            <span id="logout" >
                Logout
            </span>`;

        contenedor.innerHTML=contenido;
        const logoutlabel = document.querySelector('#logout');
        if (logoutlabel) {
            logoutlabel.addEventListener('click', logout);
        }
        cartellogin.style.display = 'none';
        
        cartelregistro.style.display = 'none';
    }

});