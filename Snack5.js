//Snack 5
//Crea una funzione stampaOgniSecondo con setInterval.
//Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

//Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

printEverySecond = (message) => console.log(message);

const intervalFunction = setInterval(() => {
    printEverySecond("Print me after a while!");}, 1000);

printEverySecond("Print me now.");

setTimeout(() => {
    clearInterval(intervalFunction);
}, 5000);

setTimeout(() => {
    console.log("The job is done...");
}, 6000);