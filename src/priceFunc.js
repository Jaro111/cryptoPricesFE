// Fuction is changing format of the number depends how big is the number
// For example for numbers greater and equal than 1000 it returns string with coma
// Ex. for 1000 it will return 1,000. For 1000000000 will return 1,000,000 and round to 2 decimal places
// For  1<= numbers < 1000 will return string round to 3 decimal places
// for  0.1 <=numbers < 1 will return string round to 4 decimal places
// As many more decimal places are after zero it will return string round to +1 decimal places

export const priceFunc = (num) => {
  let myString = "";
  let modString = "";
  let backString = "";
  let comaString = "";
  let finalString = "";

  if (num >= 1000) {
    // We are changing number to string
    const numString = num.toString();
    if (numString.includes(".")) {
      // We have to split it by  "." to 2 separate arrays if it is decimal number
      const splitString = numString.split(".");
      // First part before decimal
      myString = splitString[0];
      // Second part after decimal
      modString = splitString[1];
    } else {
      myString = numString;
    }
    // So we are iterating backward to get reversed string
    for (let i = myString.length - 1; i >= 0; i--) {
      backString += myString[i];
    }
    // We iterate now by reversed strin and we place coma every 3 numbers with conditions
    for (let i = 0; i < backString.length; i++) {
      comaString += backString[i];
      if ((i + 1) % 3 === 0 && i != backString.length - 1) {
        comaString += ",";
      }
    }
    // So now we are iterating backwerd again to get bask reversed number with comas which will be our number
    for (let i = comaString.length - 1; i >= 0; i--) {
      finalString += comaString[i];
    }
    // Now we need to round second part of the string to 2 decimal places
    const modNumber = (Math.round(Number("0." + modString) * 10 ** 2) / 100)
      .toString()
      .slice(1, 4);
    //
    // And now we connst string from 2 parts which is the string we are looking for
    const connectedString = finalString + modNumber;
    return connectedString;
    //
    // Here it returns numbers rounded to 2 decimal places
  } else if (num < 1000 && num >= 1) {
    const myNum = Math.round(num * 10 ** 2) / 100;
    return myNum.toString();
    //
    // Here it returns numbers rounded to 4 decimal places
  } else if (num < 1 && num >= 0.1) {
    const decNum = Math.round(num * 10 ** 4) / 10 ** 4;
    return decNum.toString();
    //
    // In this condition, as many more decimal places are after zero it will return string round to +1 decimal places
  } else {
    const numOfZeros = Math.floor(Math.log10(num) + 1) * -1;

    const decNum =
      Math.round(num * 10 ** (4 + numOfZeros)) / 10 ** (4 + numOfZeros);
    return decNum.toString();
  }
};
