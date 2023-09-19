// BEISPIEL INPUT
// const inputAusTeil2 = "uhxcfcCejklmwRtqir";

function ziffernCodierung(input) {

    input = input.toLowerCase();


    // CONVERSION ALPHABET TO NUMBER
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    const outputAlphabetArray = [];

    for ( let i = 0; i < input.length; i++) {
        let alphabetChar = input.charAt(i);
        let alphabetIndex = alphabet.indexOf(alphabetChar);

        if ( alphabetIndex >= 0) {
            outputAlphabetArray.push(alphabetIndex);
        }
    }

    // THE TOTAL SUMME FOR THE TWO DIGIT NUMBER

    for ( let i = 0; i < outputAlphabetArray.length; i++) {
        let theNumber =outputAlphabetArray[i];

        if ( theNumber >= 10) {

            let sum2DigitNumber = 0;

            // STACK OVER FLOW RESOURCE
            while (theNumber > 0) {
                sum2DigitNumber += theNumber % 10;
                theNumber = Math.floor(theNumber / 10);
            }

            outputAlphabetArray[i] = sum2DigitNumber
        }

    }

    // REVERSE THE ARRAY OUTPUT

   return outputAlphabetArray.reverse();
}

console.log(ziffernCodierung("uhxcfcCejklmwRtqir"));



/*
function test 1

console.log(ziffernCodierung("uhxcfcCejklmwRtqir"));


result :

[
  20,  7, 23,  2,  5,  2,  2,
   4,  9, 10, 11, 12, 22, 17,
  19, 16,  8, 17
]

function test 2

result 

[
   2, 7, 5, 2, 5, 2, 2,
   4, 9, 1, 2, 3, 4, 8,
  10, 7, 8, 8
]

reverse th array result

[
  8, 8, 7, 10, 8, 4, 3,
  2, 1, 9,  4, 2, 2, 5,
  2, 5, 7,  2
]

*/


