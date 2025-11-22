document.addEventListener('DOMContentLoaded', function () {
    let emailUsuario = localStorage.getItem('usuario');
    let useraction = document.querySelector('.login');

    if (emailUsuario) {
        useraction.innerHTML=  `
        <li id=logout ><a href=""></a></li>
        <li>Bienvenido, ${emailUsuario}</li>
        `;
    }
});