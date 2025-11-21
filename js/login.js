
let formularioLogin = document.querySelector('#loginform');
formularioLogin.addEventListener('submit', function (e) {
    let campoEmail = document.querySelector('#Email');
    let campoPassword = document.querySelector('#password');
    let nombre= localStorage.getItem('usuario');
    let contraseña=  localStorage.getItem('password');

    let email = campoEmail.value;
    let password = campoPassword.value;

    if (email === "" || password === "") {
        
        e.preventDefault();
    } else if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        e.preventDefault();

    } else if (email === nombre && password === contraseña) {
        localStorage.setItem('UsuarioLogueado', "True");
        location.href = 'index.html';
    }
    else {
        alert('El usuario o la contraseña son incorrectos, intente nuevamente');
        e.preventDefault();
    }
});
