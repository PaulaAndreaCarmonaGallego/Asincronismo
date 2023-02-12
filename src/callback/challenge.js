const xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest; //Referencia de lo que se va a implementar del recurso xml.

const API  = 'http://api.escuelajs.co/api/v1'; //Variable en mayuscula se hace refrencia a un vlor que no cambiará. Referencia al RUT del API.

//Función para hacer el llamado de elementos clave de esta API como la URL, en este caso de API, y el callback, este será una función anónima para recibir la solicitud que nos está entregando el llamado a este API

//el callback nos retorna la data o un error

function fetchData(urlAPI, callback){
    //Con XML se pueden controlar todo el flujo del llamado
    let xhttp = new xmlHttpRequest; //llamado de xhttp como una instancia

    xhttp.open('GET', urlAPI, true); // abre una conexión a la API. EL primer argumento es el tipo de petición que vamos a obtener. EL segundo valor es la url de la API. EL tercer valor permite habilitarlo

    //Escuchar estados de la solicitud para saber cuando está disponible la información
    xhttp.onreadystatechange = function (event){
        //Escuchar el tipo de estado en que se encuentra
        if(xhttp.readyState === 4){
            //Existen 5 estados en un llamado XMLHttpRequest
            /*0 → No se ha inicializado.
            1 → Loading, todavía no se ha llamado el valor de send.
            2 → Cuando ya se ejecutó el valor de send.
            3 → Procesamiento si existe alguna descarga.
            4 → Completado
            */
            if(xhttp.status === 200){
                //200: solicitud correcta, el servidor respondió de forma correcta
                callback(null, JSON.parse(xhttp.responseText))//Transformación de texto a objeto
            }else {//manejo de la información cuano tengamos un error.
                const error = new Error('Error' + urlAPI);// Se específica que el error fue de la URL.
                return callback(error, null); //Retorna valor nulo porque al entrar en un error no se puede retornar ningún dato
            }
        }
    }
    xhttp.send();
};

//Primer argumento es la API previamente definida, con el / se accede a una pestaña específica de la página web.

// El callBack es una función anónima, la cual tiene como argumentos, ERROR y data
fetchData(`${API}/products`, function(error1, data1){
    //Si retorna un error, se detiene la ejecución
    if(error1) return console.error(error1);
    //De no encontrar un error se podrá seguir navegando en el data1, con todos los hipervínculos que allí contiene
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});

