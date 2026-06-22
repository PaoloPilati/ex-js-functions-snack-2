//Snack 7
//Crea una funzione che ferma un timer dopo un certo tempo
//Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

const executeAndStop = (message, start, stop) => {
    let timer = 0;

    const intervalId = setInterval(() => {
        timer = timer + 1;
        console.log(timer);
    }, start);

    setTimeout(() => {
        clearInterval(intervalId);
        console.log(message);
    }, stop);
};

executeAndStop("Timer stopped at 10!", 1000, 10000);