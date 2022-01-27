function convertToRoman(num) {
    let ones = num % 10;
    let onesRemainder = num - num % 10;
    let tens = onesRemainder % 100;
    let tensRemainder = onesRemainder - onesRemainder % 100;
    let hundreds = tensRemainder % 1000;
    let hundredsRemainder =  tensRemainder - tensRemainder % 1000;
    let thousands = hundredsRemainder;
    
    let thousandsRoman;
    let hundredsRoman;
    let tensRoman;
    let onesRoman;
  
    switch (thousands) {
      case 1000:
        thousandsRoman = "M";
        break;
      case 2000:
        thousandsRoman = "MM";
        break;
      case 3000:
        thousandsRoman = "MMM";;
        break;
      case 4000:
        thousandsRoman = "MMMM";;
        break;
      case 5000:
       thousandsRoman = "MMMMM";
        break;
      case 6000:
        thousandsRoman = "MMMMMM";
        break;
      case 7000:
        thousandsRoman = "MMMMMMM";
        break;
      case 8000:
        thousandsRoman = "MMMMMMMM";
        break;
      case 9000:
        thousandsRoman = "MMMMMMMMM";
        break;
      case 0:
        thousandsRoman = "";
        break;
    }
  
    switch (hundreds) {
      case 100:
        hundredsRoman = "C";
        break;
      case 200:
        hundredsRoman = "CC";
        break;
      case 300:
        hundredsRoman = "CCC";;
        break;
      case 400:
        hundredsRoman = "CD";;
        break;
      case 500:
       hundredsRoman = "D";
        break;
      case 600:
        hundredsRoman = "DC";
        break;
      case 700:
        hundredsRoman = "DCC";
        break;
      case 800:
        hundredsRoman = "DCCC";
        break;
      case 900:
        hundredsRoman = "CM";
        break;
      case 0:
        hundredsRoman = "";
        break;
    }
    switch (tens) {
      case 10:
        tensRoman = "X";
        break;
      case 20:
        tensRoman = "XX";
        break;
      case 30:
        tensRoman = "XXX";;
        break;
      case 40:
        tensRoman = "XL";;
        break;
      case 50:
       tensRoman = "L";
        break;
      case 60:
        tensRoman = "LX";
        break;
      case 70:
        tensRoman = "LXX";
        break;
      case 80:
        tensRoman = "LXXX";
        break;
      case 90:
        tensRoman = "XC";
        break;
      case 0:
        tensRoman = "";
        break;
    }
    switch (ones) {
      case 1:
        onesRoman = "I";
        break;
      case 2:
        onesRoman = "II";
        break;
      case 3:
        onesRoman = "III";;
        break;
      case 4:
        onesRoman = "IV";;
        break;
      case 5:
        onesRoman = "V";
        break;
      case 6:
        onesRoman = "VI";
        break;
      case 7:
        onesRoman = "VII";
        break;
      case 8:
        onesRoman = "VIII";
        break;
      case 9:
        onesRoman = "IX";
        break;
      case 0:
        onesRoman = "";
        break;
    }
    
    num = thousandsRoman + hundredsRoman + tensRoman + onesRoman
    console.log(num);
    return num;
  }
  
  convertToRoman(2014);