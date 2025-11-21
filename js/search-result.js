let lista = document.querySelector('.listaCategoria')
fetch(`https://dummyjson.com/products/categories`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < data.length; i++) {
            lista.innerHTML += `<li><a href="./category.html">${data[i].name}</a></li>`
        }
    })
    .catch(function (error) {
        console.log('Error: ' + error);
    });

const form = document.querySelector(".search-container");
const busqueda = document.querySelector(".buscar");

form.addEventListener('submit', function (event){
    event.preventDefault();
    if (busqueda.value == '' ) {
        alert('Este campo no debe estar vacio');
    } else if (busqueda.value.length < 3 ) {
        alert('Por favor ingrese al menos 3 caracteres');
    } else {
        this.submit();
    }
})

const querystring = location.search;
const querystringobj = new URLSearchParams(querystring);
const buscador = querystringobj.get('q');

console.log(buscador);

const resultado = document.querySelector('.category-title');
resultado.innerHTML = 'Resultados de búsqueda para: ' + buscador;
const searchResults = document.querySelector('.product-grid');

fetch(`https://dummyjson.com/products/search?q=${buscador}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(searchResults);
        searchResults.innerHTML = "";

        if (!data.products || data.products.length === 0) {
            searchResults.innerHTML = `
                <p>No hay resultados para el término: <mark>${buscador}</mark></p>
            `;
            return;
        }

        for (let i = 0; i < data.products.length; i++) {
            const prod = data.products[i];

            searchResults.innerHTML += `
                <article class="resultado-producto">
                    <img src="${prod.thumbnail}" alt="${prod.title}">
                    <h3>${prod.title}</h3>
                    <p>${prod.description}</p>
                    <p><strong>Precio: $${prod.price}</strong></p>
                    <a class="btn-detalle" href="./product.html?id=${prod.id}">Ver detalle</a>
                </article>
            `;
        }
    })
    .catch(function (error) {
        console.log('Error: ' + error);
    });
