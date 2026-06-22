//Snack 8 (Bonus)
//Crea una funzione che simula un conto alla rovescia
//Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

const countdown = (n) => {
    let counter = n;

    const intervalId = setInterval(() => {
        if (counter > 0) {
            console.log(counter);
            counter = counter - 1;
        } else {
            clearInterval(intervalId);
            console.log("Time's up!");
        }
    }, 1000);
};

countdown(10);