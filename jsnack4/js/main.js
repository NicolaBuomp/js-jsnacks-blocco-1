// Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3)
// Fai la somma di tutti gli elementi che sono in posizione dispari.
//  Prova prima senza funzione e poi con funzione.


var numeri = [1, 4, 2, 15, 120, 17, 3, 13, 48, 67];

var dispari = numDispari(numeri);
console.log(dispari);



function numDispari(n) {
    if (n % 2 != 0) {
        return true;
    }
    return false;
}