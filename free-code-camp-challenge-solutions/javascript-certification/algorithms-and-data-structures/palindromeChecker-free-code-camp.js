function palindrome(str) {
    //converting the string to lowercase.
    let capitalStr = str.toLowerCase();

    //converting the string into an array.
    let arrayOfString = [];
    for (let i = 0; i < capitalStr.length; i++) {
        arrayOfString[i] = capitalStr[i];
    }

    //removing the non-alphanumeric characters from the array of string.
    let regexOnlyAlphanumeric = /^[0-9a-zA-Z]+$/;
    for (let i = 0; i < arrayOfString.length; i++) {
        if (!regexOnlyAlphanumeric.test(arrayOfString[i])) {
            arrayOfString.splice(i, 1);
            i--;
        }
    }

    //converting the array of string into a reverse array of string.
    let arrayOfReverseString = [];
    for (let i = 0; i < arrayOfString.length; i++) {
        arrayOfReverseString[(arrayOfString.length - 1) - i] = arrayOfString[i];
    }

    //comparing the reverse array of string  with the main array of the string.
    let flag = 1;
    for (let i = 0; i < arrayOfReverseString.length; i++) {
        if (arrayOfReverseString[i] !== arrayOfString[i]) {
            flag = 0;
        }
    }

    if (flag == 1) {
        return true;
    } else {
        return false;
    }
}

palindrome("almostomla");