let formularioBusqueda = document.querySelector('#forma');
let campoBusqueda = document.querySelector('.forma1');
let categoria = document.querySelector('.categorias1');
let lista = document.querySelector('.categorias2');

formularioBusqueda.addEventListener('submit', function (e) {
    e.preventDefault();
    if (campoBusqueda.value.length < 3 ){
        return alert("El término buscado debe tener al menos 3 caracteres");
    }
    this.submit();
});



fetch('https://dummyjson.com/products/categories')
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            lista.innerHTML += `<li><a href="./category.html?name=${data[i].name}">${data[i].name} </a></li>`;
        }
    })
                
    .catch(function (error) {
        console.log("Error al traer las categorías", error);
    });



if (lista) {
    fetch('https://dummyjson.com/products/category-list')
        .then(function(respuesta) {
            return respuesta.json();
        })
        .then(function(data) {
            let contenidoCategorias = '';
            for (let i = 0; i < data.length; i++) {
                let categoriaNombre = data[i];
                
                contenidoCategorias += '<li><a href="./category.html?categoria=' + categoriaNombre + '">' + categoriaNombre + '</a></li>';
            }
            lista.innerHTML = contenidoCategorias;
        })
        .catch(function(error) {
            console.log("Error al traer las categorías", error);
            if (lista) lista.innerHTML = '<li>Error al cargar categorías.</li>';
        });
}








fetch('https://dummyjson.com/products/category/smartphones?limit=10') 
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(data) {
        
        Productos2(data.products, '.cuadro1');
    })
    .catch(function(error) {
        console.log("Error al traer los smartphones:", error);
        if (document.querySelector('.cuadro1')) {
             document.querySelector('.cuadro1').innerHTML = '<p>Error al cargar productos (smartphones): ' + error.message + '</p>';
        }
    });


fetch('https://dummyjson.com/products/category/groceries?limit=10')
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(data) {

        Productos2(data.products, '.cuadro2');
    })
    .catch(function(error) {
        console.log("Error al traer las fragancias:", error);
        if (document.querySelector('.cuadro2')) {
            document.querySelector('.cuadro2').innerHTML = '<p>Error al cargar productos (fragancias): ' + error.message + '</p>';
        }
    });







