import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    //Pasar el response a un objeto json
    const data = await response.json();
    //Retorna la información de la API a nuestros usuarios
    return data;
};


//Función que se encarga de hacer las solicitudes:
/* - A todos los productos
   - A un producto en particular
   - A la catrgoría de este producto para mostrarlos en consola.
*/
const anotherFunction = async (urlApi) => {
    //Try y catch manejo de errores en las funciones asíncronas
    
    try {//En try sucede toda la lógica de la aplicación
        //Definimos variables con asignaciones de la función fetch Data

        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log('Product', product);
        console.log('Title', product.title);
        console.log('Name', category.name);

    }catch (error) {//En caso de que alguna de estas promesas llegue a un reject, pasará a catch y tendríamos la lógica consecuente a esto
        console.error(error);
    };
};


anotherFunction(API);

