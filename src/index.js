module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }
    let numberAsAString = " ";
    let numberOf100 = Math.floor(number / 100);
    let stringof100 =
        numberOf100 > 0 ? toReadableSingleDigits(numberOf100) + " hundred" : ""; // 0-9
    let remainderOfDividingBy100 = number % 100;
    let stringOf10 = remainderOfDividingBy100 > 0 ? toReadableSingleDigits2090(remainderOfDividingBy100 - (remainderOfDividingBy100 % 10)) : ""; // 20.30...90
    if (remainderOfDividingBy100 >= 11 && remainderOfDividingBy100 <= 19) {
        numberAsAString = addSpaceIfNotEmpty(stringof100) + toReadableSingleDigits19(remainderOfDividingBy100); // 111-119 ... 911-919
    } else {
        let hundredsAndTens = addSpaceIfNotEmpty(stringof100) + stringOf10;

        numberAsAString =
            addSpaceIfNotEmpty(hundredsAndTens) + toReadableSingleDigits(number % 10); // 101-109 ... 901-909
    }
    return numberAsAString.trim();
};
function addSpaceIfNotEmpty(str) {
    return str == "" ? "" : str.trim() + " ";
}

function toReadableSingleDigits(number) {
    let numberAsAString = "";
    switch (number) {
        case 1:
            numberAsAString = "one";
            break;
        case 2:
            numberAsAString = "two";
            break;
        case 3:
            numberAsAString = "three";
            break;
        case 4:
            numberAsAString = "four";
            break;
        case 5:
            numberAsAString = "five";
            break;
        case 6:
            numberAsAString = "six";
            break;
        case 7:
            numberAsAString = "seven";
            break;
        case 8:
            numberAsAString = "eight";
            break;
        case 9:
            numberAsAString = "nine";
            break;
    }
    return numberAsAString;
}
function toReadableSingleDigits19(number) {
    let numberAsAString = "";
    switch (number) {
        case 10:
            numberAsAString = "ten";
            break;
        case 11:
            numberAsAString = "eleven";
            break;
        case 12:
            numberAsAString = "twelve";
            break;
        case 13:
            numberAsAString = "thirteen";
            break;
        case 14:
            numberAsAString = "fourteen";
            break;
        case 15:
            numberAsAString = "fifteen";
            break;
        case 16:
            numberAsAString = "sixteen";
            break;
        case 17:
            numberAsAString = "seventeen";
            break;
        case 18:
            numberAsAString = "eighteen";
            break;
        case 19:
            numberAsAString = "nineteen";
            break;
    }
    return numberAsAString;
}
function toReadableSingleDigits2090(number) {
    let numberAsAString = "";
    switch (number) {
        case 10:
            numberAsAString = "ten";
            break;
        case 20:
            numberAsAString = "twenty";
            break;
        case 30:
            numberAsAString = "thirty";
            break;
        case 40:
            numberAsAString = "forty";
            break;
        case 50:
            numberAsAString = "fifty";
            break;
        case 60:
            numberAsAString = "sixty";
            break;
        case 70:
            numberAsAString = "seventy";
            break;
        case 80:
            numberAsAString = "eighty";
            break;
        case 90:
            numberAsAString = "ninety";
            break;
    }
    return numberAsAString;
}

/*
    let stringof100 = numberOf100 > 0 ? toReadableSingleDigits(numberOf100) + " hundred " : ''; // 0-9
    if (numberOf100 > 0) {
    stringof100 = toReadableSingleDigits(numberOf100) + " hundred ";
}
else {
stringof100 = '';
}*/