//Snack 6
//Crea un contatore automatico con setInterval
//Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.


const createAutoCounter = (intervalTime) => {
    let counter = 0;

    return () => {
        setInterval(() => {
            counter = counter + 1;
            console.log(counter);
        }, intervalTime);
    };
};
    
const startCounter = createAutoCounter(1000);

startCounter();