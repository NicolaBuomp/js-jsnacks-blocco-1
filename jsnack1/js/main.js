var parolaUno = prompt('inserisci una parola');
var parolaDue = prompt('inserisci una parola');


var risultato = parolaLunga(parolaUno, parolaDue);
console.log(risultato);


// function
function parolaLunga(p1, p2) {
    var res = '';

    if (p1.length > p2.length) {
        res = p1;
    } else if (p1.length < p2.length) {
        res = p2;
    } else {
        res = 'Le parole sono uguali';
    }
    return res;
}