// Variables

const kmPrice = 0.21;

let price;

//


// Distance Input

let distance = Number(prompt("Inserisci il numero di KM da percorrere"));

while (isNaN(distance) || distance === 0) {
    distance = Number(prompt("Inserisci una distanza valida!"))
}

//


// Age Input

let age = Number(prompt("Inserisci l'età del viaggiatore"));

while (isNaN(age) || age === 0) {
    age = Number(prompt("Inserisci un'età valida!"))
}

//


// Price Calculator

if (age < 18) {
    price = kmPrice * distance / 100 * 80
}
else if (age > 65) {
    price = kmPrice * distance / 100 * 60
}
else {
    price = kmPrice * distance
}

//


// Price Output

price = Math.round(price * 100) / 100

window.alert(`Il prezzo del tuo biglietto è di ${price}\u20AC`)

//