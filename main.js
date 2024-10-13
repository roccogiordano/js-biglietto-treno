const kmPrice = 0.21;

let price;

let distance = Number(prompt("Inserisci il numero di KM da percorrere"));

while (isNaN(distance)) {
    distance = Number(prompt("Inserisci una distanza valida!"))
}

let age = Number(prompt("Inserisci l'età del viaggiatore"));

while (isNaN(age)) {
    age = Number(prompt("Inserisci un'età valida!"))
}

