// Crea un array di numeri interi, ad esempio (1, 4, 2, 15, 120, 17, 3)
// Fai la somma di tutti gli elementi che sono in posizione dispari.
//  Prova prima senza funzione e poi con funzione.


var numeri = [1, 4, 2, 15, 120, 17, 3];

// for (var i = 0; i < numeri.length; i++) {
//     if (i % 2 !== 0) {
//         somma += numeri[i];
//     }
// }

// console.log(somma);


var somma = isDispari(numeri);
console.log(somma);



function isDispari(x) {
    var risultato = 0;
    for (var i = 0; i < x.length; i++) {
        if (i % 2 !== 0) {
            risultato += x[i];
        }
    }
    return risultato;
}