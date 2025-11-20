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
            //listaCategorias.innerHTML += `<li><a href="./category.html">${data[i]} </a></li>`;
            listaCategorias.innerHTML += `<li><a href="./category.html?categoria=${data[i]}">${data[i]}</a></li>`;        }
    })
                
    .catch(function (error) {
        console.log("Error al traer las categorías", error);
    });



let catalo = location.search
let cataobjeto = new URLSearchParams(catalo);
let categoria1 = cataobjeto.get("categoria")



let tituloCategoria = document.querySelector('.titulo-categoria');
let productos = document.querySelector('.productos');




fetch('https://dummyjson.com/products/category/' + categoria1)
 .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        let producto = data.products
        contenido = ""
        for (let i = 0; i < producto.length; i++) {
            contenido += `<article class="producto">
            <h1 class= "texto123"> ${producto[i].title} </h1>
            <h3class= "texto123"> Precio: $ ${producto[i].price} </h3>
            <a class= "texto123" href="./detalle.html?Idproducto=${producto[i].id}"> Ver detalles </a>
            </article>`
        }
        productos.innerHTML = contenido;
    })
                
    .catch(function (error) {
        console.log("Error al traer las categorías", error);
    });











if(productos.length === 0){
    tituloCategoria.innerText = `No hay productos en la categoría ${categoria}`;
} else {
    tituloCategoria.innerText = `Los productos que estan en: ${categoria}` `son ` + productos.length;
}





