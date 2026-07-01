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