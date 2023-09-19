// Teil 1: PROGRAMM-PART A: Bereinigung codierter Nachrichten

// mit import


const {processString} = require("./part1");
const {shiftLetters} = require("./part2");
const {ziffernCodierung} = require("./part3");
const {encodeKey} = require("./part4");



function main(input) {
    let partAOutput = processString(input);
    let partBOutput = shiftLetters(partAOutput);
    let partCOutput = ziffernCodierung(partBOutput);
    let finalOutput = encodeKey(partCOutput);
    
    return finalOutput;
}

const input = "s?§$f5wa&$=6eb8Ad1hs12z1,89i4w&/ajkhuyPs5§irf95kfoguh6(&opg%fh";
console.log(main(input)); // Sollte [8, 18, 17, 10,  8, 14, 13, 12, 11, 9,  4, 12, 12, 15, 12, 15,  7, 12] ausgeben




// ohne import 

// function cleanInput(input) {
//   let ergebnisHash = input.replace(/[^a-zA-Z]/g, '');
//   let deleteDouble = {};
//   let output = '';
//   for (let char of ergebnisHash) {
//     if (!deleteDouble[char]) {
//       deleteDouble[char] = true;
//       output += char;
//     }
//   }
//   ergebnisHash = output;
//   ergebnisHash = ergebnisHash.split('').reverse().join('');
//   if (ergebnisHash.length < 20) {
//     throw new Error('Der ergebnisHashierende String ist kürzer als 20 Zeichen');
//   }
//   return ergebnisHash;
// }

// // Teil 2: PROGRAMM-PART B: Buchstaben verschieben
// function shiftLetters(input) {
//   let shiftedInput = input.replace(/[a-z]/gi, function(c) {
//     switch (c) {
//         case 'b': case 'B': case 'd': case 'D': case 'e': case 'E': case 'v': case 'V': case 'w': case 'W':
//             return String.fromCharCode(c.charCodeAt(0) + 1);
//         default:
//             return String.fromCharCode(c.charCodeAt(0) + 2);
//     }
// });

// // Entfernen aller Sonderzeichen und Zahlen
// shiftedInput = shiftedInput.replace(/[^a-zA-Z]/g, '');

// // Umkehren der Reihenfolge des Strings
// let reversedInput = shiftedInput.split('').reverse().join('');

// return reversedInput;
// }

// // Teil 3: PROGRAMM-PART C: Ziffern-Codierung
// function encodeDigits(input) {
  
//   input = input.toLowerCase();


//   // CONVERSION ALPHABET TO NUMBER
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const outputAlphabetArray = [];

//   for ( let i = 0; i < input.length; i++) {
//       let alphabetChar = input.charAt(i);
//       let alphabetIndex = alphabet.indexOf(alphabetChar);

//       if ( alphabetIndex >= 0) {
//           outputAlphabetArray.push(alphabetIndex);
//       }
//   }

//   // THE TOTAL SUMME FOR THE TWO DIGIT NUMBER

//   for ( let i = 0; i < outputAlphabetArray.length; i++) {
//       let theNumber =outputAlphabetArray[i];

//       if ( theNumber >= 10) {

//           let sum2DigitNumber = 0;

//           // STACK OVER FLOW RESOURCE
//           while (theNumber > 0) {
//               sum2DigitNumber += theNumber % 10;
//               theNumber = Math.floor(theNumber / 10);
//           }

//           outputAlphabetArray[i] = sum2DigitNumber
//       }

//   }

//   // REVERSE THE ARRAY OUTPUT

//  return outputAlphabetArray.reverse();

// }

// // Teil 4: PROGRAMM-PART D: Schlüssel-Codierung
// function encodeKey(inputArray) {
  
//   for (let i = 0; i < inputArray.length; i++) {
//     // links von "A"
//     let leftElement = inputArray[i - 2] ?? -Infinity;
//     // rechts von "A"
//     let rightElement = inputArray[i + 2] ?? -Infinity;
    
//     // Wenn "A" <= "V" ist, => "A" + 10
//     if (inputArray[i] <= leftElement || inputArray[i] <= rightElement) {
//         inputArray[i] += 10;
//     }
// }

// return inputArray;
// }


// function codeAndSecret(input) {
//   let partAOutput = cleanInput(input);
//   let partBOutput = shiftLetters(partAOutput);
//   let partCOutput = encodeDigits(partBOutput);
//   let finalOutput = encodeKey(partCOutput);
  
//   return finalOutput;
// }

// const input = "s?§$f5wa&$=6eb8Ad1hs12z1,89i4w&/ajkhuyPs5§irf95kfoguh6(&opg%fh";
// console.log(codeAndSecret(input)); // Sollte [8, 18, 17, 10,  8, 14, 13, 12, 11, 9,  4, 12, 12, 15, 12, 15,  7, 12] ausgeben