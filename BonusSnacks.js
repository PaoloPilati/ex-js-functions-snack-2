//Snack 8 (Bonus)
//Crea una funzione che simula un conto alla rovescia
//Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

const countdown = (n) => {
    let counter = n;

    const intervalId = setInterval(() => {
        if (counter >= 0) {
            console.log(counter);
            counter = counter - 1;
        } else {
            clearInterval(intervalId);
            console.log("Time's up!");
        }
    }, 1000);
};

countdown(10);


//Snack 9 (Bonus)
//Creare una funzione che esegue una sequenza di operazioni con ritardi
//Scrivi una funzione "sequenzaOperazioni" che accetta un array di operazioni (funzioni) e un tempo di intervallo.
//Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

//SequenzaOperazioni([
// () => console.log("Operazione 1"),
// () => console.log("Operazione 2"),
// () => console.log("Operazione 3")
//],2000)

//Operazione 1
//Operazione 2
//Operazione 3

function operationSequence(operations, interval) {
    operations.forEach((operation, index) => {
        setTimeout(() => {
            operation();
        }, interval * index);
    })
}

operationSequence([
    () => console.log("Operation 1"),
    () => console.log("Operation 2"),
    () => console.log("Operation 3")
], 2000)


//Snack10

//Creare un throttle per limitare l'esecuzione di una funzione
// Scrivi una funzione "creaTHrottler" che accetta una funzione e un tempo limite.
//Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale **al massimo una volta ogni 'limite' millisecondi**.
// 
// const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

//throttledLog(); //"Eseguito!"
//throttledLog(); //Ignorato, (chiamato troppo presto)
//setTimeout(throttledLog, 2500); // "Eseguito!" (dopo 2.5 sec)

function createThrottler(callback, limit){
    let lastExecution = 0;
    return function (...args){

        const time = Date.now();

        if(time - lastExecution >= limit){
            lastExecution = time;
            callback(...args);
        }else{
            console.log("Cannot execute")
        }
    }
}

const throttledLog = createThrottler(() => console.log("Executed!"), 2500);

throttledLog(); //"Eseguito!"
throttledLog(); //Ignorato, (chiamato troppo presto)
setTimeout(throttledLog, 2500); // "Eseguito!" (dopo 2.5 sec)
