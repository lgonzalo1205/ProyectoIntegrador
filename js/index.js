let formularioBusqueda = document.querySelector('#forma');
let campoBusqueda = document.querySelector('.forma1');
let categoria = document.querySelector('.categorias1');
let lista = document.querySelector('.categorias2');
let cuadro1 = document.querySelector('.cuadro1');
let cuadro2 = document.querySelector(".cuadro2");

formularioBusqueda.addEventListener('submit', function (e) {
    e.preventDefault();
    if (campoBusqueda.value.length < 3) {
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



fetch('https://dummyjson.com/products/category/smartphones?limit=10')
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {

        let contenido = '';

        for(let i = 0; i < data.products.length; i++) {
            contenido += `
             <article><img class="barato" src="${data.products[i].thumbnail}" alt="">
                    <p class="texto">${data.products[i].title}</p>
                    <p class="texto">${data.products[i].price}</p>
                    <a class="detalles" href="./product.html?id=${data.products[i].id}">VER DETALLES</a>
                    </article>
            `
        }

        cuadro1.innerHTML = contenido;

        console.log(contenido);
        

        
    })
    .catch(function (error) {
        console.log("Error al traer los smartphones:", error);
        if (document.querySelector('.cuadro1')) {
            document.querySelector('.cuadro1').innerHTML = '<p>Error al cargar productos (smartphones): ' + error.message + '</p>';
        }
    });


fetch('https://dummyjson.com/products/category/groceries?limit=10')
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {

        let contenido = '';

         for(let i = 0; i < data.products.length; i++) {
            contenido += `
             <article><img class="barato" src="${data.products[i].thumbnail}" alt="">
                    <p class="texto">${data.products[i].title}</p>
                    <p class="texto">${data.products[i].price}</p>
                    <a class="detalles" href="./product.html?id=${data.products[i].id}">VER DETALLES</a>
                    </article>
            `
        }

        cuadro2.innerHTML = contenido;
    })
    .catch(function (error) {
        console.log("Error al traer las fragancias:", error);
        if (document.querySelector('.cuadro2')) {
            document.querySelector('.cuadro2').innerHTML = '<p>Error al cargar productos (fragancias): ' + error.message + '</p>';
        }
    });







