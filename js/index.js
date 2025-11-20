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


fetch("")







