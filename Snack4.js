// Snack 4
//Crea un generatore di funzioni creaTimer
//Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".


const createTimer = (time) => {
    const timeout = time;
    const message = "Tempo scaduto!"
    return setTimeout(() => console.log(message), timeout);
}

createTimer(2000)