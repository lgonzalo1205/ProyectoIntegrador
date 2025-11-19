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