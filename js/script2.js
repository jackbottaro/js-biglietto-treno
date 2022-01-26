/*
1 chiedere quanti km l'utente vuole percorrere
2 chiedere età passeggero.
3 calcolare prezzo biglietto (0.21E KM) sapendo che:
    A) va applicato uno sconto del 20% per < 18 anni
    B) va applicato uno sconto del 40% per > 65 anni
4 Stampare output con due decimale
*/

let ticketElement = document.getElementById('ticket')

// 1 Chiedo con prompt i km da percorrere e l'età

const userKm = prompt('Inserire quanti km si vuole percorrere', 50);
const userAge = prompt('Inserire età passeggero', 20);

console.log('userKm', userKm)
console.log('userAge', userAge)

// TODO validare dati

// 2 Calcolo prezzo base biglietto

let ticketPrice = userKm * 0.21;

console.log('ticketPrice', ticketPrice)

// 2 A Calcolo il prezzo in base al età
if (userAge < 18){
    ticketPrice = ticketPrice * 0.8;
} else if (userAge > 65){
    ticketPrice = ticketPrice * 0.6;
}

// 3 Stampare in pagina il prezzo 

const ticketMessage = ticketPrice.toFixed(2) + ' Euro';

ticketElement.innerText = `Il prezzo del tuo biglietto ammonta a: ${ticketMessage}`
