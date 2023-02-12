import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//Función para publicar un post

function postData(urlApi, data){
    //Se crea una estructura get para subir información
    //Para ello el segundo parámetro para la función fetch es un objeto que indique el tipo de metodo que se va a realizar, el modo, credenciales y el cuerpo que será enviado a esta API
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors', // los permisos que va a obtener
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    return response;
};

const data = {
    "title": "New Product Course",
    "price": 67365,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
};

postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));