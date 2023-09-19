// BEISPIEL INPUT
// const inputAusTeil1 = "pgorPyukjizhdAbeawfs"

function shiftLetters(input) {
    // Verschieben der Buchstaben
    let shiftedInput = input.replace(/[a-z]/gi, function(c) {
        switch (c) {
            case 'b': case 'B': case 'd': case 'D': case 'e': case 'E': case 'v': case 'V': case 'w': case 'W':
                return String.fromCharCode(c.charCodeAt(0) + 1);
            default:
                return String.fromCharCode(c.charCodeAt(0) + 2);
        }
    });
    
    // Entfernen aller Sonderzeichen und Zahlen
    shiftedInput = shiftedInput.replace(/[^a-zA-Z]/g, '');
    
    // Umkehren der Reihenfolge des Strings
    let reversedInput = shiftedInput.split('').reverse().join('');

    return reversedInput;
}

const inputAusTeil1 = "pgorPyukjizhdAbeawfs";
console.log(shiftLetters(inputAusTeil1)); // Sollte "uhxcfcCejklmwRtqir" ausgeben

module.exports = {shiftLetters};

