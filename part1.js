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
