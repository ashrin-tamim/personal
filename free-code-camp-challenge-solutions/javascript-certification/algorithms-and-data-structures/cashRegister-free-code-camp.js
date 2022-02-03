function checkCashRegister(price, cash, cid) {
  let moneyInPenny, moneyInNickel, moneyInDime, moneyInQuarter, moneyInOneDollar, moneyInFiveDollars, moneyInTenDollars, moneyInTwentyDollars, moneyInHundredDollars;
  moneyInPenny = cid[0][1];
  moneyInNickel = cid[1][1];
  moneyInDime = cid[2][1];
  moneyInQuarter = cid[3][1];
  moneyInOneDollar = cid[4][1]
  moneyInFiveDollars = cid[5][1];
  moneyInTenDollars = cid[6][1];
  moneyInTwentyDollars = cid[7][1];
  moneyInHundredDollars = cid[8][1];

  let numberOfAvailablePenny, numberOfAvailableNickel, numberOfAvailableDime, numberOfAvailableQuarter, numberOfAvailableOnedollar, numberOfAvailableFive, numberOfAvailableTen, numberOfAvailableTwenty, numberOfAvailableHundreds;
 
  numberOfAvailablePenny  = cid[0][1] / .01;
  numberOfAvailableNickel  = cid[1][1] / .05;
  numberOfAvailableDime  = cid[2][1] / .1;
  numberOfAvailableQuarter  = cid[3][1] / .25;
  numberOfAvailableOnedollar  = cid[4][1];
  numberOfAvailableFive  = cid[5][1] / 5;
  numberOfAvailableTen  = cid[6][1] / 10;
  numberOfAvailableTwenty  = cid[7][1] / 20;
  numberOfAvailableHundreds  = cid[8][1] / 100;
  // let reverseArrayOfRegister = [];
  // for (let i = 0; i < cid.length; i++) {
  //   reverseArrayOfRegister[i] = cid[cid.length - i - 1];
  // }
  
  let statusWithChangeObject = {
    status : "unknown",
    change : []
  }; 
  let checkChange = cash - price;
  console.log(checkChange);
  let availableCash = 0;
  for(let i = 0; i < cid.length; i++) {
      availableCash += cid[i][1];
  }

  if(availableCash < checkChange) {
    statusWithChangeObject.status = "INSUFFICIENT_FUNDS";
    statusWithChangeObject.change = [];
    return statusWithChangeObject;
  } else if (availableCash === checkChange) {
    statusWithChangeObject.status = "CLOSED";
    
  } else {
    statusWithChangeObject.status = "OPEN";
     do {
      if(checkChange >= 100 && moneyInHundredDollars >= 100) {
        let numberOfRequiredHundred = Math.floor(checkChange / 100);
        if(numberOfAvailableHundreds > numberOfRequiredHundred) {
          moneyInHundredDollars = 100 * numberOfRequiredHundred;
        }
        checkChange = checkChange % moneyInHundredDollars; 
        console.log(numberOfRequiredHundred);
      } else if(checkChange >= 20 && moneyInTwentyDollars >= 20) { 
        let numberOfRequiredTwenty = Math.floor(checkChange / 20);
        if(numberOfAvailableTwenty > numberOfRequiredTwenty) {
          moneyInTwentyDollars = 20 * numberOfRequiredTwenty;
        }
        checkChange = checkChange % moneyInTwentyDollars; 
      } else if(checkChange >= 10 && moneyInTenDollars >= 10) {
        let numberOfRequiredTen = Math.floor(checkChange / 10);
        if(numberOfAvailableTen > numberOfRequiredTen) {
          moneyInTenDollars = 10 * numberOfRequiredTen;
        }
        checkChange = checkChange % moneyInTenDollars; 
      } else if(checkChange >= 5 && moneyInFiveDollars >= 5) {
        let numberOfRequiredFive = Math.floor(checkChange / 5);
        if(numberOfAvailableFive > numberOfRequiredFive) {
          moneyInFiveDollars = 5 * numberOfRequiredFive;
        }
        checkChange = checkChange % moneyInFiveDollars; 
      } else if(checkChange >= 1 && moneyInOneDollar >= 1) {
        let numberOfRequiredOnedollar = Math.floor(checkChange / 1);
        if(numberOfAvailableOnedollar > numberOfRequiredOnedollar) {
          moneyInOneDollar = 1 * numberOfRequiredOnedollar;
        }
        checkChange = checkChange % moneyInOneDollar; 
      } else if(checkChange >= .25 && moneyInQuarter >= .25) {
        let numberOfRequiredQuarter = Math.floor(checkChange / .25);
        if(numberOfAvailableQuarter > numberOfRequiredQuarter) {
          moneyInQuarter = .25 * numberOfRequiredQuarter;
        }
        checkChange = checkChange % moneyInQuarter; 
      } else if(checkChange >= .10 && moneyInDime >= .10) {
        let numberOfRequiredDime = Math.floor(checkChange / .10);
        if(numberOfAvailableDime > numberOfRequiredDime) {
          moneyInDime = .10 * numberOfRequiredDime;
        }
        checkChange = checkChange % moneyInDime; 
      } else if(checkChange >= .05 && moneyInNickel >= .05) {
        let numberOfRequiredNickel = Math.floor(checkChange / .05);
        if(numberOfAvailableNickel > numberOfRequiredNickel) {
          moneyInNickel = .05 * numberOfRequiredNickel;
        }
        checkChange = checkChange % moneyInNickel; 
      } else if(checkChange >= .01 && moneyInPenny >= .01) {
        let numberOfRequiredPenny = Math.floor(checkChange / .01);
        if(numberOfAvailablePenny > numberOfRequiredPenny) {
          moneyInPenny = .01 * numberOfRequiredPenny;
        }
        checkChange = checkChange % moneyInPenny; 
      } 
    } while (checkChange > 1);
    console.log(checkChange);
  }

  statusWithChangeObject.change = 
  [
    ["PENNY", moneyInPenny],
    ["NICKEL", moneyInNickel],
    ["DIME", moneyInDime],
    ["QUARTER", moneyInQuarter],
    ["ONE", moneyInOneDollar],
    ["FIVE", moneyInFiveDollars],
    ["TEN", moneyInTenDollars],
    ["TWENTY", moneyInTwentyDollars],
    ["ONE HUNDRED", moneyInHundredDollars]
  ];
  let a = statusWithChangeObject.change;
  a.sort(compareSecondColumn);
  function compareSecondColumn(a, b) {
      if (a[1] === b[1]) {
          return 0;
      }
      else {
          return (a[1] > b[1]) ? -1 : 1; 
      }
  }
  console.log(statusWithChangeObject.status);
  console.log(statusWithChangeObject.change)
  
  return statusWithChangeObject;
}


checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])