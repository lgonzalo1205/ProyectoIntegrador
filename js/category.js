let formularioBusqueda = document.querySelector('.forma');
let campoBusqueda = document.querySelector('.forma1');
let categoria = document.querySelector('.categorias1');

formularioBusqueda.addEventListener('submit', function (e) {
    e.preventDefault();
    if (campoBusqueda.value.length < 3 ){
        return alert("El término buscado debe tener al menos 3 caracteres");
    }
    this.submit();
});

let listaCategorias = document.querySelector('.categorias2');



fetch('https://dummyjson.com/products/category-list')
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            listaCategorias.innerHTML += `<li><a href="./category.html">${data[i]} </a></li>`;
        }
    })
                
    .catch(function (error) {
        console.log("Error al traer las categorías", error);
    });


let catalo = location.search
let cataobjeto = new URLSearchParams(catalo);
let categoria1 = cataobjeto.get('');

let tituloCategoria = document.querySelector('.titulo-categoria');
let productos = document.querySelector('.productos');

fetch('https://dummyjson.com/products/category/' + categoria1)
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        let contendio = ``
        let producto = data.products;

        for (let i = 0; i < producto.length; i++) {
            contendio += `<article class="producto">
            <h1> ${producto[i].title} </h1>
            <h3> Precio: $ ${producto[i].price} </h3>
            <a href="./detalle.html?Idproducto=${producto[i].id}"> Ver detalles </a>
            </article>`
        }
        productos.innerHTML = contendio;
    
        if(producto.length === 0){
            tituloCategoria.innerText = `No hay productos en la categoría ${categoria}`;
        } else {
            tituloCategoria.innerText = `Los productos que estan en: ${categoria}` `son ` + producto.length;
        }
    })

    .catch(function (error) {
        console.log("Error: " + error);
    });


