
// - creare una lista con arrey dei email
const mailList = [ 
    "mamma@gmail.com",
    "papa@gmail.com",
    "nonno@gmail.com",
    "nonna@gmail.com"
]
console.log(mailList);

// - chiedere al utente la sua mail
const userMail = prompt('Inserisci la tua mail')
console.log(userMail);

let access = false;

// - con il sistema for individuare lista dei mail dal array
for ( let i = 0; i < mailList.length; i++) {
    console.log(i, mailList[i]);

    // - SE la mail è presente nella lista stampare il messaggio positivo

    const verifyMail = (mailList[i] === userMail);
    if (verifyMail) {
        // console.log('benvenuto ' + verifyMail);
        access = true;
    }
}

if (access === true) {
    console.log('accesso consentito');

        // # js-dadi
    // - generare un numero random da 1/6 per il giocatore

    const userRandom = Math.floor((Math.random() * 6) + 1);
    console.log(userRandom);

    // - generare un numero random da 1/6 per il computer

    const pcRandom = Math.floor((Math.random() * 6) + 1);
    console.log(pcRandom);


    // - SE il numero del giocatore è più alto allora ha vinto il gicatore
    let userWin = userRandom > pcRandom;
    let pcWin = userRandom < pcRandom;
    let gameResult = 'Pareggio';

    const diceDomElement = document.getElementById('game');

    if (userWin) {
        console.log('userRandom ha vinto');
        gameResult = 'User ha vinto';

    // - ALTRIMENTI SE il numero del computer è più altro ha vinto il computer

    } else if (pcWin) {
        console.log('pcRandom ha vinto');
        gameResult = 'User ha perso';
    // -  ALTRIMENTI il numero è uguale allora è un pareggio

    }

    diceDomElement.innerHTML = gameResult;

} else {
    alert('accesso negato');
}

console.log(access);