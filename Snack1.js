//Snack 1
//Crea una funzione che somma due numeri.
//Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
//Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
//Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

//STEP ONE 
function sum(firstAddendum, secondAddendum) {
    const result = firstAddendum + secondAddendum;
    return  result;
}

console.log(sum(3,4))

//STEP 2
const somma = function(firstAddendum, secondAddendum) {
    const result = firstAddendum + secondAddendum;
    return  result;
}

const testResult = somma(4, 4);
console.log(testResult);

//STEP 3
const sommaArrow = (firstAddendum, secondAddendum) => {
    const result = firstAddendum + secondAddendum;
    return  result;
} 

const testResultArrow = sommaArrow(5, 4);
console.log(testResultArrow)




//FUNZIONE CON CALLBACK E CLOSURE
const countViews = (sum) => {
    //private state
    let currentViews = 0;

    //closure
    const incrementViews = () => {
        currentViews = sum(currentViews, 1);
        return currentViews;
    };

    return incrementViews;
};

//riferimento esterno
const addView = countViews(sum);

console.log(addView());
console.log(addView());
console.log(addView());
