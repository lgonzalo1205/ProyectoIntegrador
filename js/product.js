
let productContainer = document.querySelector('#producto-container');
let reviewsContainer = document.querySelector('#container-reseña');
let loading = document.querySelector('#cargando-mensaje');
let errorMsg = document.querySelector('#error-mensaje');

let query = location.search;
let queryObj = new URLSearchParams(query);
let productId = queryObj.get("id");


fetch(`https://dummyjson.com/products/${productId}`)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    for (let i = 0; i < data.tags.length; i++) {
    productContainer.innerHTML = `
     <div class='product-details-info'>
            <h2 > ${data.title} </h2>
            <div class='imagen14'>
            <img class=derechos src='${data.thumbnail}' alt=""> 
            </div>
            <p class= texto1234> Marca: ${data.brand} </p>
            <p class = texto1234>Descripción: ${data.description}</p>
            <p class = texto1234>Precio: $${data.price}  </p>
            <p class = texto1234> Categoría: <a href=./category.html?categoria=${data.category}> ${data.category} </a></p>
            <p class = texto1234>Stock:  ${data.stock}</p>
            <p class = texto1234>Tags: ${data.tags[i]} </p>
            <p> .       </p>
            </div>`}

    loading.style.display = 'none';

        
    for (let i = 0; i < data.reviews.length; i++) {
        reviewsContainer.innerHTML += 
        `<div class = "clase2000">
            <p style= "color:red">Usuario: ${data.reviews[i].reviewerName} </p>
            <p >Rating: ${data.reviews[i].rating} / 5</p>
            <p >Fecha: ${data.reviews[i].date} </p>
            <p >Comentario:${data.reviews[i].comment} </p>
        </div>`
    } 

})
.catch(function (error) {
    console.log("Error al traer el producto:", error);
});
