// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// -----------------------------------------------------------------------

function checkPalindroma(string) {

    // loop a meta della parola
    for (let i = 0; i < string.length / 2; i++) {

        // controllo se la prima e l`ultima lettera sono uguali
        if (string[i] !== string[string.length - 1 - i]) {
            return 'Non è una parola palindroma';
        }
    }
    return 'È una parola palindroma';
}

const string = prompt('Inserisci la parola da controllare');

console.log(checkPalindroma(string));

// -----------------------------------------------------------------------

// -----------------------------------------------------------------------

// -----------------------------------------------------------------------

// -----------------------------------------------------------------------

// -----------------------------------------------------------------------

// -----------------------------------------------------------------------

// -----------------------------------------------------------------------

// -----------------------------------------------------------------------

// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// -----------------------------------------------------------------------

let sceltaUtente = prompt('Vuoi avere il pari o dispari?');

const numeroUtente = parseInt(prompt('Inserisci un numero ' + sceltaUtente + ' che sia compreso tra 1 e 5'));

sceltaUtente = sceltaUtente.toLowerCase;

while (numeroUtente < 1 || numeroUtente > 5) {

    alert('C`è qualcosa che non va! Riprova');

    break
}

function generaNumeroRandom(min, max) {
    
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;

    return numeroRandom;

}

const numeroCpu = generaNumeroRandom(1 , 5)

console.log(numeroCpu);

const sommaNumeri = numeroUtente + numeroCpu;

console.log(sommaNumeri);

function checkPariODispari (num1) {

    if (num1 % 2 == 0) {
        
        return 'pari';

    }
    else { 
        
        return 'dispari';

    }

}

const risultatoUtente = checkPariODispari(numeroUtente);
const risultatoCpu = checkPariODispari(numeroCpu);

if (risultatoUtente == sceltaUtente) {

    alert('Hai Vinto! La somma del tuo numero e quello assegnato alla CPU da come risultato ' + sceltaUtente);

}
else {

    alert('Hai Perso! La somma del tuo numero e quello assegnato alla CPU non da come risultato la tua scelta!');
}




// -----------------------------------------------------------------------