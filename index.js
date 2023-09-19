// Teil 1: PROGRAMM-PART A: Bereinigung codierter Nachrichten
function cleanInput(input) {
  // Code 
}

// Teil 2: PROGRAMM-PART B: Buchstaben verschieben
function shiftLetters(input) {
  // Code 
}

// Teil 3: PROGRAMM-PART C: Ziffern-Codierung
function encodeDigits(input) {
  // Code 
}

// Teil 4: PROGRAMM-PART D: Schlüssel-Codierung
function encodeKey(inputArray) {
  
  for (let i = 0; i < inputArray.length; i++) {
    // links von "A"
    let leftElement = inputArray[i - 2] ?? -Infinity;
    // rechts von "A"
    let rightElement = inputArray[i + 2] ?? -Infinity;
    
    // Wenn "A" <= "V" ist, => "A" + 10
    if (inputArray[i] <= leftElement || inputArray[i] <= rightElement) {
        inputArray[i] += 10;
    }
}

return inputArray;
}


function codeAndSecret(input) {
  let partAOutput = cleanInput(input);
  let partBOutput = shiftLetters(partAOutput);
  let partCOutput = encodeDigits(partBOutput);
  let finalOutput = encodeKey(partCOutput);
  
  return finalOutput;
}

const input = "s?§$f5wa&$=6eb8Ad1hs12z1,89i4w&/ajkhuyPs5§irf95kfoguh6(&opg%fh";
console.log(codeAndSecret(input)); // Sollte [8, 18, 17, 10,  8, 14, 13, 12, 11, 9,  4, 12, 12, 15, 12, 15,  7, 12] ausgeben