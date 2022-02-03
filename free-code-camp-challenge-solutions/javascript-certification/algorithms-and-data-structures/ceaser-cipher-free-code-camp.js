/*1. Convert the given string to an array (stringToAscii[]) of their respective ascii value. 
    2. Check all the values of stringToAscii[] array are within the range of 'all capital letter'.
    3. Implementing the logic of ROT13 ceaser cipher and get the ciphered version of the array(cipheredStringToAscii[]) containing the ascii values of the ciphered string. 
    4. Convert back the cipheredArrayOfString[] into an array of ciphered string(cipheredArrayOfString[]) 
    5. Convert the array cipheredArrayOfString[] into the final string (cipheredString).*/
function rot13(str) {
  let cipheredArrayOfString = [];
  let stringToAscii = [];
  let cipheredStringToAscii = [];
  let cipheredString;

  for (let i = 0; i < str.length; i++) {
    stringToAscii[i] = str[i].charCodeAt(0);
    if (stringToAscii[i] > 64 && stringToAscii[i] < 91) {
      if (stringToAscii[i] + 13 <= 90) {
        cipheredStringToAscii[i] = stringToAscii[i] + 13;
      } else {
        cipheredStringToAscii[i] = 65 + stringToAscii[i] % 13;
      }
    } else {
      cipheredStringToAscii[i] = stringToAscii[i]
    }
    cipheredArrayOfString[i] = String.fromCharCode(cipheredStringToAscii[i]);
  }

  cipheredString = cipheredArrayOfString.join("");
  str = cipheredString;

  for (let i = 0; i < str.length; i++) {

  }

  console.log(str);

  return str;
}

rot13("SERR PBQR PNZC");
