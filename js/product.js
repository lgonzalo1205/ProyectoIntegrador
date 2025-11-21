
let productContainer = document.querySelector('#producto-container');
let reviewsContainer = document.querySelector('#container-reseña');
let loading = document.querySelector('#cargando-mensaje');
let errorMsg = document.querySelector('#error-mensaje');

let query = location.search;
let productId = null;

let partes = query.split("id=");
 
if (partes.length > 1) {
    productId = partes[1];
}

if (productId === "") {
    loading.style.display = "none";
    errorMsg.innerText = "No se encontró ID del producto.";
} else {

    

    fetch("https://dummyjson.com/products/" + productId)
        .then(function(res) {
            if (loading) loading.style.display = "none"; 
            
            
            if (!res === res) {
                alert('Producto no encontrado o error en la red.');
            }
            return res.json();
        })
        .then(function(data) {
      
            if (productContainer) productContainer.style.display = "flex"; 
            
            mostrarProducto(data);
            mostrarReviews(data.reviews);
        })
        .catch(function(err) {
            if (errorMsg) errorMsg.innerText = "Error al cargar el producto. " + err.message;
            if (productContainer) productContainer.style.display = "none"; 
        });
}




let formBuscador = document.querySelector('.forma');
let campoBuscador = document.querySelector('.forma1');

if (formBuscador && campoBuscador) {

    formBuscador.addEventListener("submit", function(e) {
        e.preventDefault();

        let termino = campoBuscador.value;

        if (termino.length < 3) {
            alert("El término buscado debe tener al menos 3 caracteres");
        } else {
            location.href = "./search-results.html?Resultados=" + termino;
        }
    });
}



function mostrarProducto(producto) {

    let tituloHeader = document.querySelector("#titulo-producto");
    if (tituloHeader) tituloHeader.innerText = producto.title;

        let tags = "";
        for (let i = 0; i < producto.tags.length && i <= 3; i++) {
            tags = tags + "<span class='product-tag'>" + producto.tags[i] + "</span> ";
        }


    let html = 
        "<div class='product-details-info'>" +
            "<p class= texto1234> Marca: " + producto.brand + "</p>" +
            "<p class = texto1234>Descripción: " + producto.description + "</p>" +
            "<p class = texto1234>Precio: $ " + producto.price + "</p>" +
            "<p class = texto1234>Categoría: <a href='./category.html?categoria=" + producto.category + "'>" + producto.category + "</a></p>" +
            "<p class = texto1234>Stock: " + producto.stock + "</p>" +
            "<p class = texto1234>Tags: " + tags + "</p>" +
        "</div>" +
        "<div class='product-image'>" +
            "<img class=derechos src='" + producto.thumbnail + "' alt='" + producto.title + "'>" +
        "</div>";

    if (productContainer) productContainer.innerHTML = html;
}



function mostrarReviews(reviews) {

    let reviewsSection = document.querySelector('#reviews');
    let noReviews = document.querySelector('#sin-reseña');

    if (!reviewsSection) return;

    if (reviews && reviews.length > 0) {
        reviewsSection.style.display = "block";
        if (noReviews) noReviews.style.display = "none"; 

        let html = "";

        for (let i = 0; i < reviews.length; i++) {
            let r = reviews[i];
            
        
            let reviewDate = r.date;

            
            
            html += 
                "<div class='review-item' style='border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 5px;'>" +
                    "<p>Usuario: " + r.reviewerName + "</p>" +
                    "<p>Rating: " + r.rating + " / 5</p>" +
                    "<p>Fecha: " + reviewDate + "</p>" +
                    "<p>Comentario: " + r.comment + "</p>" +
                "</div>";
        }

        if (reviewsContainer) reviewsContainer.innerHTML = html;

    } else {
        reviewsSection.style.display = "block";
        if (reviewsContainer) reviewsContainer.innerHTML = ''; 
        if (noReviews) noReviews.style.display = "block";
    }
}