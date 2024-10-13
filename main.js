// Variables

const kmPrice = 0.21;

let price;

//


// Distance Input

let distance = parseFloat(prompt("Inserisci il numero di KM da percorrere"));

while (isNaN(distance) || distance <= 0 || distance > 100000) {
    distance = parseFloat(prompt("Inserisci una distanza valida!"));
}

//


// Age Input

let age = parseInt(prompt("Inserisci l'età del viaggiatore"));

while (isNaN(age) || age <= 0 || age > 123) {
    age = parseInt(prompt("Inserisci un'età valida!"));
}

//


// Price Calculator

if (age < 18) {
    price = kmPrice * distance * 0.8;
}
else if (age >= 65) {
    price = kmPrice * distance * 0.6;
}
else {
    price = kmPrice * distance;
}

//


// Price Output

price = Math.round(price * 100) / 100;

window.alert(`Il prezzo del tuo biglietto è di ${price}\u20AC`);

//

console.log(distance, age, price);