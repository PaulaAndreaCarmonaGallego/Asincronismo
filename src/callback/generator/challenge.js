import fetch from 'node-fetch';
const API = 'http://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data
};

async function* anotherFunction(urlApi){

    try{
        const products = await fetchData(`${urlApi}/products`);
        yield console.log(products);

        const product =  await fetchData(`${urlApi}/products/${products[0].id}`);
        yield console.log(product.title);

        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        yield console.log(category.name);
    }catch (error){
        console.error(error);
    };
};

const url = anotherFunction(API);

url.next().value;
url.next().value;
url.next().value;