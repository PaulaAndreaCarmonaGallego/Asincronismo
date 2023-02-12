const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Async!!'), 2000)
        :reject(new Error('Error!'));
    });
};

//Usar la palabra reservda async para el cuerpo de la función
//Y la palabra reservada await para la lógica de asincronismo que se desea usar.

const anotherFn = async() => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
};

console.log('Before');
anotherFn();
console.log('After');