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
            listaCategorias.innerHTML += `<li><a href="./category.html?categoria=${data[i]}">${data[i]}</a></li>`;        }
    })
                
    .catch(function (error) {
        console.log("Error al traer las categorías", error);
    });



let catalo = location.search
let cataobjeto = new URLSearchParams(catalo);
let categoria1 = cataobjeto.get("categoria")



let tituloCategoria = document.querySelector('.titulo_categoria');
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
            <h1 class= "texto12"> ${producto[i].title} </h1>
            <img class= "barato3" src="${producto[i].images[0]}"/>
            <p class = "texto12"> ${producto[i].description}</p>
            <h3 class= "texto12"> Precio: $ ${producto[i].price} </h3>
            <p class = "texto12">  Rating: ${producto[i].rating} </p>
            <p  class= "texto12"> Categoria: ${producto[i].category} </p>
            <p  class= "texto12"> Stock: ${producto[i].stock} unidades disponibles </p>
            <p  class= "texto12"> Marca: ${producto[i].brand} </p>
            <a class= "detalle" href="./detalle.html?idproducto=${producto[i].id}"> Ver detalles </a>

            
            </article>`
        }
       productos.innerHTML = contenido;

if (producto.length === 0) {
    tituloCategoria.innerText = `No hay productos en la categoría ${categoria1}`;
} else {
    tituloCategoria.innerText = `Los productos que están en ${categoria1} son ${producto.length}`;
}
    })

        





