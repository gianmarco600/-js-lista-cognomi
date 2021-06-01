var mail = prompt('Log-in');
mail = mail.toLowerCase();


var db = ['pippo@gmail.com' , 'marco@gmail.com' , 'andrea@gmail.com' , 'luca@gmail.com' , 'mattia@gmail.com'];

var registered = 0
var i = 0
var risposta;

while (i < db.length){
    if (db[i] == mail){
        registered = 1
    }
    i++
}
    
if (registered == 1){
    risposta = 'Ciao' + mail + '!' + ' Accesso effettuato con successo!';
    // console.log(risposta);
}
else{
    risposta = 'Utente ' + mail + ' non è registrato';
    // console.log(risposta);
}

document.getElementById("risultato").innerHTML = risposta;


var cognome = prompt('inserire cognome')
cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1).toLowerCase();
// console.log(cognome);
var arrCognomi = ['Rossi' , 'Bianchi' , 'Verdi' , 'Blue'];
arrCognomi.push(cognome);
arrCognomi.sort();
// console.log(arrCognomi);



var holder = document.getElementById("holder");
for(var i=0; i < arrCognomi.length; i++){
  holder.innerHTML += "<li>"+arrCognomi[i]+"</li><br>";
}


var i = 0
while (arrCognomi[i] != cognome && i <= arrCognomi.length ){
    
    ++i;
}
document.getElementById("index").innerHTML = 'sei alla posizione ' + ++i ;


// var index = arrCognomi.indexOf(cognome) + 1;
// document.getElementById("index").innerHTML = 'sei alla posizione ' + index ;