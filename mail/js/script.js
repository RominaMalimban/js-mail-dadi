// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// chiedo all'utente la sua mail:
let userMail = prompt("Per favore, inserisci la tua mail:");
console.log("email utente:", userMail);

// creo lista delle mail degli invitati:
let listaInvitati = ["romina@gmail.com", "pincopallo@gmail.com", "pippo@gmail.com"];

for (let i = 0; i < listaInvitati.length; i++){
    // console.log(listaInvitati[i]);

    // controllo che la mail dell'utente sia nella lista degli invitati:
    if(userMail === listaInvitati[i]){
        console.log("benvenuto");
    }

   
};




// stampo messaggio per esito: