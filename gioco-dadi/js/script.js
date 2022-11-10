// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// creo variabile per bottone:
let myButton = document.querySelector("button")

// creo funzione al click:
myButton.addEventListener("click",

    function(){
        // genero il mio numero:
        let myNum = Math.floor(Math.random() * 6) + 1;
        console.log("mia scelta ", myNum);
        document.getElementById("myNum").innerHTML= myNum;
       
        // genero il numero del computer:
        let numCpu = Math.floor(Math.random() * 6) + 1;
        console.log("scelta cpu ", numCpu);
        document.getElementById("numCpu").innerHTML= numCpu;
        
        // creo le mie condizioni:
        if (myNum > numCpu){
            document.querySelector("h3").innerHTML ="Complimenti, hai vinto!";
        }else if(myNum == numCpu){
            document.querySelector("h3").innerHTML ="Ops, partita patta! Ritenta!";
        }else{
            document.querySelector("h3").innerHTML ="Mi dispiace, hai perso!";
        }
    }
    
);


