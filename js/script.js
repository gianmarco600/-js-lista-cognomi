var mail = prompt('log-in');
mail = mail.toLowerCase();

var nome = mail.split("@");

var db = ['pippo@gmail.com' , 'marco@gmail.com' , 'andrea@gmail.com' , 'luca@gmail.com' , 'mattia@gmail.com'];

var registered = 0
var i = 0

while (i < db.length){
    if (db[i] == mail){
        registered = 1
    }
    i++
}
    
if (registered == 1){
    console.log('ciao \xa0' + mail + '!' + '\xa0 accesso effettuato')
}
else{
    console.log('utente \xa0' + mail + '\xa0 non è registrato')
}

