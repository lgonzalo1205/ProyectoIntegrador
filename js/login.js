let queryString = location.search
queryStringobject = new URLSearchParams (queryString)
let id = queryStringobject.get('forma1')
if (id.lenght === 0){
    alert("Debe buscar un producto")
}

let formularioBusqueda = document.querySelector('.forma');
let campoBusqueda = document.querySelector('.forma1');

if (formularioBusqueda && campoBusqueda) {
    formularioBusqueda.addEventListener('submit', function (event) {
        let valorBuscado = campoBusqueda.value.trim();

        if (valorBuscado === "") {
            alert("El campo de búsqueda no puede estar vacío");
            event.preventDefault();
        } else if (valorBuscado.length < 3) {
            alert("El término buscado debe tener al menos 3 caracteres");
            event.preventDefault();
        }
    });
}
