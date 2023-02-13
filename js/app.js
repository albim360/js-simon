let numeriCasuali = [];

// Genera 5 numeri casuali e memorizzali nell'array numeriCasuali
for (let i = 0; i < 5; i++) {
  let num = Math.floor(Math.random() * 100) + 1;
  numeriCasuali.push(num);
}

// Mostra l'array numeriCasuali all'utente con una finestra di alert
alert("I seguenti numeri sono stati generati: " + numeriCasuali);

// Attendi 30 secondi
setTimeout(function() {
  let numeriInseriti = [];
  let numeriIndovinati = [];

  // Chiedi all'utente di inserire un numero alla volta tramite prompt
  for (let i = 0; i < 5; i++) {
    let numInserito = prompt("Inserisci il numero " + (i+1) + ":");
    numeriInseriti.push(parseInt(numInserito));
  }

  console.log("Numeri inseriti dall'utente:", numeriInseriti);

  // Confronta i numeri inseriti dall'utente con quelli generati casualmente
  for (let i = 0; i < numeriInseriti.length; i++) {
    let numInserito = numeriInseriti[i];
    if (numeriCasuali.includes(numInserito) && !numeriIndovinati.includes(numInserito)) {
      numeriIndovinati.push(numInserito);
    }
  }

  console.log("Numeri indovinati dall'utente:", numeriIndovinati);
  console.log("Hai indovinato " + numeriIndovinati.length + " numeri: " + numeriIndovinati.join(", "));

}, 30000);
