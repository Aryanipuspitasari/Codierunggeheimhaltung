// BEISPIEL INPUT
// const inputAusTeil3 = [8, 8, 7, 10, 8, 4, 3, 2, 1, 9, 4, 2, 2, 5, 2, 5, 7, 2];

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

const inputAusTeil3 = [8, 8, 7, 10, 8, 4, 3, 2, 1, 9, 4, 2, 2, 5, 2, 5, 7, 2];
console.log(encodeKey(inputAusTeil3)); // Sollte [8, 18, 17, 10,  8, 14, 13, 12, 11, 9,  4, 12, 12, 15, 12, 15,  7, 12] ausgeben

module.exports = {encodeKey};


// s