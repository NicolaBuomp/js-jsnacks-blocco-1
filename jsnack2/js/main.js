var numero = parseInt(prompt('inserisci un numero'));
console.log('Il numero inserito da te è: ' + numero);


if (isPari(numero) == true) {
    console.log('Il tuo numero è pari');
    document.getElementById('numero-pari-dispari').innerHTML = 'Il tuo numero è pari';

} else {
    console.log('Il tuo numero è dispari per cui stamperò ', ++numero);
    document.getElementById('numero-pari-dispari').innerHTML = 'Il tuo numero è dispari per cui stamperò ' + numero;
}


function isPari(n) {
    if (n % 2 == 0) {
        return true;
    }
    return false;
}