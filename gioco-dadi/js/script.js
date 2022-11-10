// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// genero il mio numero:
let myNum = Math.floor(Math.random() * 6) + 1;
console.log("mia scelta ", myNum);

// genero il numero del computer:
let numCpu = Math.floor(Math.random() * 6) + 1;
console.log("scelta cpu ", numCpu);

// creo le mie condizioni:
if (myNum > numCpu){
    console.log("Complimenti, hai vinto");
}else{
    console.log("Mi dispiace, ha vinto il computer")
}