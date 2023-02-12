//Se genera un import para llamar el paquete instalado fetch y poder manipular documentos http
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//Función recibe como argumento la url de la API que vamos a llamar y esto retornará el llamado de fetch. Esto es una promesa

function fetchData(urlApi) {
    return fetch(urlApi);
};


fetchData(`${API}/products`)
    //Se transforma lo que recibimos a un objeto
    .then(response => response.json())
    .then(products => {
        console.log(products);
        //Llamamos un producto en específico llamando nuevamente la función fetchData
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'));




//fetchData recibe la url que queremos llamar, para ello accedemos a la categoría products
fetchData(`${API}/products`)
//Con el primer Then sabemos qué hay en su respuesta
//Transforma la información a un objeto JSON
    .then(response => response.json())
    //Con este segundo then imprimimos en pantalla la información que arrojó Data
    .then(products => {
        console.log(products);
    })//Con catch imprimimos si hubo algún error
    .catch(error => console.log(error));
