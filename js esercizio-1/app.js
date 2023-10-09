
// - creare una lista con arrey dei email
const mailList = [ 
    "mamma@gmail.com",
    "papa@gmail.com",
    "nonno@gmail.com",
    "nonna@gmail.com"
]
console.log(mailList)

// - chiedere al utente la sua mail
const userMail = prompt('Inserisci la tua mail')
console.log(userMail)

// - con il sistema for individuare lista dei mail dal array
for ( let i = 0; i < mailList.length; i++) {
    console.log(i, mailList[i])

    // - SE la mail è presente nella lista stampare il messaggio positivo
    if (mailList[i] === userMail) {
        alert('Benvenuto')

    // ALTRIMENTI negare l'accesso
    } else {
        alert('Accesso Negato')
    }
}

