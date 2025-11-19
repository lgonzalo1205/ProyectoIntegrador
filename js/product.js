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

let detalle = document.querySelector('.texto123');
fetch('https://dummyjson.com/products/1')
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (data) {
        console.log(data);
        detalle.innerHTML = `<h2>  ${data.title}  </h2>
        <p class="texto123"> ${data.brand} </p>
        <p class = "texto123"> ${data.description}</p>
        <p class = "texto123"> $ ${data.price} </p>
        <img class= "producto1" src="${data.images[0]}"/>
        <a class= "texto123" href = "./category.html" > ${data.category} </a>
        <p  class= "texto123"> ${data.stock} unidades disponibles </p>
        <p  class= "texto123"> Rating: ${data.rating} </p>  `
    })

    .catch(function (error) {
        console.log("Error: " + error);
    });


    