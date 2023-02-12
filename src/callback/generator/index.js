//Función para controlar el iterador, esto permite pausar o retomar la información en cualquier momento.
// function* define una función generadora que devuelve un objeto generator
function* gen() {
    //La palabra reservada yield se usa para pausar o reanudar la función generadora
    yield 1;
    yield 2;
    yield 3;
};

const g = gen();
//Palabra reservada next permite ir iterando entre todos los elementos de la función generadora gen.
//Se usa la cantidad de veces que se cite la palabra reservada yield.
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);


function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(['oscar', 'omar', 'ana', 'lucia']);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());