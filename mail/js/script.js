// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.





// creo variabile bottone:
let myButton = document.querySelector("button");

// creo la funzione al click:
myButton.addEventListener("click",

    function(){

        // chiedo all'utente la sua mail:
        let userMail = document.querySelector("input").value;
        console.log("email utente:", userMail);

        // creo lista delle mail degli invitati:
        let listaInvitati = ["romina@gmail.com", "pincopallo@gmail.com", "pippo@gmail.com"];

        for (let i = 0; i < listaInvitati.length; i++){
            // console.log(listaInvitati[i]);

            // controllo che la mail dell'utente sia nella lista degli invitati:
            if(userMail === listaInvitati[i]){

                document.getElementById("messaggio").innerHTML = "Evvai! Puoi partecipare!"
                var invitato = "ci sta";
            }

        };

        
        // se invitato non è uguale a nessuna email della lista allora accesso negato:
        if (invitato !== "ci sta"){
            document.getElementById("messaggio").innerHTML = "Mi dispiace! Non sei nella lista!"
        }
    }
);





