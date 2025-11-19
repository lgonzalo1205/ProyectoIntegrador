let formularioBusqueda = document.querySelector('.forma');
let campoBusqueda = document.querySelector('.forma1');

if (formularioBusqueda != null && campoBusqueda != null) {
    formularioBusqueda.addEventListener('submit', function (e) {
        let valorBuscado = campoBusqueda.value.trim();

        if (valorBuscado === "") {
            alert("El campo de búsqueda no puede estar vacío");
            e.preventDefault();
        } else if (valorBuscado.length < 3) {
            alert("El término buscado debe tener al menos 3 caracteres");
            e.preventDefault();
        }
    });
}