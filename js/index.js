urlproductos= 'https://dummyjson.com/products'    

let queryString = location.search
queryStringobject = new URLSearchParams (queryString)
let id = queryStringobject.get('botton-buscar')
if (id == ""){
    alert("Debe buscar un producto")
    console.log("vacio")
}

if (id.length < 3){
    alert("El termino de busqueda debe tener al menos 3 caracteres")
}
 //* 3) Menú de navegación
//El proyecto mantendrá los dos tipos de navegación presentes en todas las páginas.
//Navegación superior horizontal: allí se encontrará el logo o nombre del sitio web, 
// un link "Home” que permite navegar a la página principal, los links de acceso al formulario
//  de login, de registro y el campo de búsqueda con su correspondiente botón "buscar".
//Navegación de forma vertical (tipo columna) para acceder a las categorías de producto
//  detalladas más abajo*. Hacer click en cualquiera de los elementos del menú  
// debe llevar al detalle de esa categoría (Punto 5). 
// La información de la “Lista de categorías”debe venir de manera dinámica desde la API.


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

let listaCategoriasIndex = document.querySelector('.categorias1');

if (listaCategoriasIndex) {
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

            listaCategoriasIndex.innerHTML = contenido;
        })
        .catch(function (error) {
            console.log("Error al traer las categorías", error);
        });
}