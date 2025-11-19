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

let queryString = window.location.search;
let queryStringObj = new URLSearchParams(queryString);


let terminoBuscado = queryStringObj.get('Resultados');

let tituloResultado = document.querySelector('.titulo-resultado');
let metaResultados = document.querySelector('.Metaa');
let contenedorResultados = document.querySelector('.resultados-busqueda');


if (metaResultados) {
    metaResultados.innerText = '';
}


if (!terminoBuscado || terminoBuscado.trim() === '') {
    if (tituloResultado) {
        tituloResultado.innerText = 'No se ingresó ningún término de búsqueda.';
    }
} else if (terminoBuscado.trim().length < 3) {
    if (tituloResultado) {
        tituloResultado.innerText = 'El término buscado es demasiado corto.';
    }
    if (metaResultados) {
        metaResultados.innerText = '';
    }
    if (mensajeError) {
        mensajeError.innerText = 'El término buscado debe tener al menos 3 caracteres.';
    }
} else {

    if (tituloResultado) {
        tituloResultado.innerHTML = 'Resultados para: <mark>' + terminoBuscado + '</mark>';
    }

    fetch('https://dummyjson.com/products/search?q=' + terminoBuscado)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (data) {

            let resultados = data.products;

            if (!resultados || resultados.length === 0) {
                if (metaResultados) {
                    metaResultados.innerText = 'Mostrando 0 resultados';
                }
                if (mensajeError) {
                    mensajeError.innerText = 'No se encontraron productos para "' + terminoBuscado + '".';
                }
                return;
            }

            let cantidad = resultados.length;
            if (metaResultados) {
                metaResultados.innerText = 'Mostrando ' + cantidad + ' resultados';
            }

            let limite = 10;
            if (cantidad < limite) {
                limite = cantidad;
            }

            let html = '';

            for (let i = 0; i < limite; i++) {
                let producto = resultados[i];

                html +=
                    '<div class="items">' +
                        '<img class="barato2" src="' + producto.thumbnail + '" alt="' + producto.title + '">' +
                        '<p class="texto">$ ' + producto.price + '</p>' +
                        '<p class="texto">' + producto.title + '</p>' +
                        '<a class="detalles2" href="./product.html?id=' + producto.id + '">VER DETALLES</a>' +
                    '</div>';
            }

            if (contenedorResultados) {
                contenedorResultados.innerHTML = html;
            }
        })
        .catch(function (error) {
            console.log('Error al buscar productos:', error);
            if (mensajeError) {
                mensajeError.innerText = 'Ocurrió un error al buscar los productos. Intentá nuevamente.';
            }
        });
}