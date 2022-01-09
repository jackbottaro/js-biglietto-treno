console.log('JS OK');
/*
1 chiedere quanti km l'utente vuole percorrere
2 chiedere età passeggero.
3 calcolare prezzo biglietto (0.21E KM) sapendo che:
    A) va applicato uno sconto del 20% per < 18 anni
    B) va applicato uno sconto del 40% per > 65 anni
4 Stampare output con due decimale
*/

// 1 chiedere quanti km l'utente vuole percorrere

const lenghtTrip = prompt('Inserisci la distanza da percorrere in Km').trim();
console.log('lenghtTrip: ' +  lenghtTrip);

// 2 chiedere età passeggero.
const userAge = prompt('Inserisci la tua età').trim();
console.log('userAge: ' + userAge);

// 4 Imposto prezzo biglietto

const priceKm = '0.21';
const ticketPrice = lenghtTrip * priceKm;
console.log('ticketPrice: ' + ticketPrice)


// 5 calcolare prezzo biglietti

let message = 'Il costo del tuo biglietto ammonta a: ';
let discountValue = '0';

if (userAge < 18) { 
    // Applico gli sconti
    percentage = 20;
    discountValue = (ticketPrice / 100) * percentage;
    console.log('discountValue: ' + discountValue);
} else if (userAge >= 65) {
    percentage = 40;
    discountValue = (ticketPrice / 100) * percentage;
    console.log('discountValue: ' + discountValue);
}

// 6 Stampo prezzo finale con sconto

finalPrice = (ticketPrice - discountValue).toFixed(2);
console.log(`${message} ${finalPrice} €`);

// 7 Recupero elemento in pagina e ne modifico il contenuto

const ticketElemet = document.getElementById('ticket')

ticketElemet.innerText = `${message} ${finalPrice} €`