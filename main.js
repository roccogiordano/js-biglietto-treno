const kmPrice = 0.21;

let price;

let distance = Number(prompt("Inserisci il numero di KM da percorrere"));

while (isNaN(distance) || distance === 0) {
    distance = Number(prompt("Inserisci una distanza valida!"))
}

let age = Number(prompt("Inserisci l'età del viaggiatore"));

while (isNaN(age) || age === 0) {
    age = Number(prompt("Inserisci un'età valida!"))
}

if (age < 18) {
    price = kmPrice * distance / 100 * 80
}
else if (age > 65) {
    price = kmPrice * distance / 100 * 60
}
else {
    price = kmPrice * distance
}
