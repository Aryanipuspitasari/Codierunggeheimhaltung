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

module.exports = {ziffernCodierung};


