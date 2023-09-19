// BEISPIEL INPUT
// const input = "s?§$f5wa&$=6eb8Ad1hs12z1,89i4w&/ajkhuyPs5§irf95kfoguh6(&opg%fh";
function processString(input) {
    let ergebnisHash = input.replace(/[^a-zA-Z]/g, '');
    let deleteDouble = {};
    let output = '';
    for (let char of ergebnisHash) {
      if (!deleteDouble[char]) {
        deleteDouble[char] = true;
        output += char;
      }
    }
    ergebnisHash = output;
    ergebnisHash = ergebnisHash.split('').reverse().join('');
    if (ergebnisHash.length < 20) {
      throw new Error('Der ergebnisHashierende String ist kürzer als 20 Zeichen');
    }
    return ergebnisHash;
  }

  let input = "s?§$f5wa&$=6eb8Ad1hs12z1,89i4w&/ajkhuyPs5§irf95kfoguh6(&opg%fh";
  console.log(processString(input));

  module.exports = {processString};


// Hier erstmal alles einzeln geplant
/*
// Entfernen aller Sonderzeichen und Zahlen aus dem String
const input = "s?§$f5wa&$=6eb8Ad1hs12z1,89i4w&/ajkhuyPs5§irf95kfoguh6(&opg%fh";
let ergebnisHash = input.replace(/[^a-zA-Z]/g, '');
console.log(`Erste Prüfung: ${ergebnisHash}`);

// Entfernen von doppelten Buchstaben aus dem String
let deleteDouble = {};
let ausgabe = '';
for (let char of ergebnisHash) {
    if (!deleteDouble[char]) {
        deleteDouble[char] = true;
        ausgabe += char;
    }
}
ergebnisHash = ausgabe;
console.log(`Zweite Prüfung: ${ergebnisHash}`);

// Umkehren der Reihenfolge des Strings
ergebnisHash = ergebnisHash.split('').reverse().join('');
console.log(`Dritte Prüfung: ${ergebnisHash}`);

// Überprüfen der Länge des Strings und sicherstellen, dass sie nicht kürzer als 20 Zeichen ist
if (ergebnisHash.length < 20) {
    throw new Error('Der String ist kürzer als 20 Zeichen!');
}
console.log(`Vierte Prüfung: ${ergebnisHash}`);

*/

// Alles von oben, in eine Funktion eingebaut
function processString(input) {
    let ergebnisHash = input.replace(/[^a-zA-Z]/g, '');
    let deleteDouble = {};
    let output = '';
    for (let char of ergebnisHash) {
      if (!deleteDouble[char]) {
        deleteDouble[char] = true;
        output += char;
      }
    }
    ergebnisHash = output;
    ergebnisHash = ergebnisHash.split('').reverse().join('');
    if (ergebnisHash.length < 20) {
      throw new Error('Der ergebnisHashierende String ist kürzer als 20 Zeichen');
    }
    return ergebnisHash;
  }

  let input = "s?§$f5wa&$=6eb8Ad1hs12z1,89i4w&/ajkhuyPs5§irf95kfoguh6(&opg%fh";
  console.log(processString(input));