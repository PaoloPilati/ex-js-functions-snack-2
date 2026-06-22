//Snack 6
//Crea un contatore automatico con setInterval
//Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.


const createAutoCounter = (intervalTime) => {
    let counter = 0;

    return () => {
        const intervalId = setInterval(() => {
            counter = counter + 1;
            console.log(counter);
        }, intervalTime);

        return intervalId;
    };
};
    
const startCounter = createAutoCounter(1000);

const intervalId = startCounter();

setTimeout(() => {
    clearInterval(intervalId);
    console.log("10 secondi passati!");
}, 10000);