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
    
var risposta;
if (registered == 1){
    risposta = 'ciao\xa0' + mail + '!' + '\xa0accesso effettuato con successo!';
    console.log(risposta);
    
}
else{
    risposta = 'utente \xa0' + mail + '\xa0 non è registrato';
    console.log(risposta);
    
}

document.getElementById("risultato").innerHTML = risposta;


var cognome = prompt('inserire cognome')
cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1).toLowerCase();
console.log(cognome);
var arrCognomi = ['Rossi' , 'Bianchi' , 'Verdi' , 'Blue'];
arrCognomi.push(cognome);
arrCognomi.sort();
console.log(arrCognomi);



var holder = document.getElementById("holder");
for(var i=0; i < arrCognomi.length; i++){
  holder.innerHTML += "<h2>"+arrCognomi[i]+"</h2><br>";
}

var index = arrCognomi.indexOf(cognome) + 1;
document.getElementById("index").innerHTML = 'sei alla posizione ' + index ;