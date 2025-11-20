let formularioBusqueda = document.querySelector('.forma');
let campoBusqueda = document.querySelector('.forma1');
let mensajeError = document.querySelector('.mensaje-error');

if (formularioBusqueda) {
    formularioBusqueda.addEventListener('submit', function (e) {
        let texto = campoBusqueda.value.trim();

        if (texto === '') {
            e.preventDefault();
            alert('El campo de búsqueda no puede estar vacío.');
        } else if (texto.length < 3) {
            e.preventDefault();
            alert('El término buscado debe tener al menos 3 caracteres.');
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
if (mensajeError) {
    mensajeError.innerText = '';
}

if (terminoBuscado) {
    terminoBuscado = terminoBuscado.trim();
} else {
    terminoBuscado = '';
}

if (terminoBuscado === '') {
    if (tituloResultado) {
        tituloResultado.innerText = 'No se ingresó ningún término de búsqueda.';
    }
    if (mensajeError) {
        mensajeError.innerText = 'Por favor ingresá un término en el buscador.';
    }
} else if (terminoBuscado.length < 3) {
 
    if (tituloResultado) {
        tituloResultado.innerText = 'El término buscado es demasiado corto.';
    }
    if (mensajeError) {
        mensajeError.innerText = 'El término buscado debe tener al menos 3 caracteres.';
    }
} else {
    let terminoMinuscula = terminoBuscado.toLowerCase();

    if (terminoMinuscula.includes('vino')) {

        if (tituloResultado) {
            tituloResultado.innerHTML = 'Resultados de búsqueda para: <mark>' + terminoBuscado + '</mark>';
        }
        let idsVinos = [1, 2, 3, 4, 5];

        if (idsVinos.length === 0) {
            if (metaResultados) {
                metaResultados.innerText = 'Mostrando 0 resultados';
            }
            if (mensajeError) {
                mensajeError.innerText = 'No hay resultados para el término: ' + terminoBuscado;
            }
            if (contenedorResultados) {
                contenedorResultados.innerHTML = '';
            }
        } else {
            if (metaResultados) {
                metaResultados.innerText = 'Mostrando ' + idsVinos.length + ' resultados';
            }
            if (contenedorResultados) {
                contenedorResultados.innerHTML = '';
            }
            for (let i = 0; i < idsVinos.length; i++) {
                let idProducto = idsVinos[i];

                fetch('https://dummyjson.com/products/' + idProducto)
                    .then(function (respuesta) {
                        return respuesta.json();
                    })
                    .then(function (producto) {
                        let card =
                            '<article class="items">' +
                                '<img class="barato2" src="' + producto.thumbnail + '" alt="' + producto.title + '">' +
                                '<p class="texto">$ ' + producto.price + '</p>' +
                                '<p class="texto">' + producto.title + '</p>' +
                                '<a class="detalles2" href="./product.html?id=' + producto.id + '">VER DETALLE</a>' +
                            '</article>';

                        if (contenedorResultados) {
                            contenedorResultados.innerHTML += card;
                        }
                    })
                    .catch(function (error) {
                        console.log('Error al cargar un vino:', error);
                    });
            }
        }

    } else {

        if (tituloResultado) {
            tituloResultado.innerHTML = 'Resultados de búsqueda para: <mark>' + terminoBuscado + '</mark>';
        }

        fetch('https://dummyjson.com/products/search?q=' + encodeURIComponent(terminoBuscado))
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
                        mensajeError.innerText = 'No hay resultados para el término: ' + terminoBuscado;
                    }
                    if (contenedorResultados) {
                        contenedorResultados.innerHTML = '';
                    }
                    return;
                }

                let cantidad = resultados.length;
                if (metaResultados) {
                    metaResultados.innerText = 'Mostrando ' + cantidad + ' resultados';
                }

                let html = '';

                for (let i = 0; i < resultados.length; i++) {
                    let producto = resultados[i];

                    html +=
                        '<article class="items">' +
                            '<img class="barato2" src="' + producto.thumbnail + '" alt="' + producto.title + '">' +
                            '<p class="texto">$ ' + producto.price + '</p>' +
                            '<p class="texto">' + producto.title + '</p>' +
                            '<a class="detalles2" href="./product.html?id=' + producto.id + '">VER DETALLE</a>' +
                        '</article>';
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
}
