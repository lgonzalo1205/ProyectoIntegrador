let queryString = location.search
queryStringobject = new URLSearchParams (queryString)
let id = queryStringobject.get('forma1')
if (id.lenght === 0){
    alert("Debe buscar un producto")
}



