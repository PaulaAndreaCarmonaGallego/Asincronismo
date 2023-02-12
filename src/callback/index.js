function sum(num1, num2){
    return num1 + num2;
};

function calc(num1, num2, callBack){
    return callBack(num1, num2);
};

console.log('Cálculo final', calc(3, 5, sum));

setTimeout(function (){
    console.log('Hola JavaScript');
}, 2000);



function gretting(name){
    console.log(`Hola ${name}`);
};

setTimeout(gretting, 2000, 'Paula');