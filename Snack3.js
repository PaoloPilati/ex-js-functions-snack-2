//Snack 3
//Crea una funzione eseguiOperazione
//Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

const performOperation = (x, y, operation) => operation(x, y);

const subtract = (x, y) => x - y;
const divide = (x, y) => x / y;
const sum = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(performOperation(5, 5, sum));
console.log(performOperation(5, 5, multiply));
console.log(performOperation(5, 5, subtract));
console.log(performOperation(5, 5, divide));