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

let listaCategoriasCategory = document.querySelector('.categorias2');

if (listaCategoriasCategory) {
    fetch('https://dummyjson.com/products/categories')
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (data) {
            let contenido = "";

            for (let i = 0; i < data.length; i++) {
                let categoria = data[i];

                contenido = contenido + '<li>' +
                    '<a href="./category.html?category=' + categoria.slug + '">' +
                    categoria.name +
                    '</a>' +
                    '</li>';
            }

            listaCategoriasCategory.innerHTML = contenido;
        })
        .catch(function (error) {
            console.log("Error al traer las categorías", error);
        });
}