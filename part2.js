// BEISPIEL INPUT




//  "b", "d", "e", "v", "w" 


function shiftLetters(input) {
    
    let shiftedInput = input.replace(/[a-z]/gi, function(c) {
        switch (c) {
            case 'b': case 'B': case 'd': case 'D': case 'e': case 'E': case 'v': case 'V': case 'w': case 'W':
                return String.fromCharCode(c.charCodeAt(0) + 1);
            default:
                return String.fromCharCode(c.charCodeAt(0) + 2);
        }
    });
    
    
    shiftedInput = shiftedInput.replace(/[^a-zA-Z]/g, '');
    
    
    let reversedInput = shiftedInput.split('').reverse().join('');

    return reversedInput;
}

console.log(shiftLetters("pgorPyukjizhdAbeawfs"));