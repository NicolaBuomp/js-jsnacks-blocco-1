var nomi = ['Michele', 'Fabio', 'Roberto'];
var cognomi = ['Forghieri', 'Pagani', 'Marazzini'];

var nomeCompleto = [];


for (var i = 0; i < 5; i++) {
    var randomNameNumber = Math.floor(Math.random() * ((nomi.length - 1) - 0 + 1) + 0);
    var randomLastNameNumber = Math.floor(Math.random() * ((nomi.length - 1) - 0 + 1) + 0);


    var newFullName = nomi[randomNameNumber] + ' ' + cognomi[randomLastNameNumber];

    nomeCompleto.push(newFullName);

}

console.log(nomeCompleto);