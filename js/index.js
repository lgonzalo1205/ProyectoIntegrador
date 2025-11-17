urlproductos= 'https://dummyjson.com/products'    

let queryString = location.search
queryStringobject = new URLSearchParams (queryString)
let id = queryStringobject.get('botton-buscar')
if (id == ""){
    alert("Debe buscar un producto")
    console.log("vacio")
}

if (id.length < 3){
    alert("El termino de busqueda debe tener al menos 3 caracteres")
}
console.log("hoal")