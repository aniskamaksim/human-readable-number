module.exports = function toReadable(number) {
    let numberAsAString = " ";
    let numberOf100 = Math.floor(number / 100);
    numberAsAString = toReadableSingleDigits(numberOf100) + ' hundred';
    
let numberOf10 = Math.floor((number - (numberOf100 * 100)) / 10);

//let stringHundreds = toReadableSingleDigits(numberOf100) + ' hundred';

//let stringDoubleDigits = '';

//let stringSingleDigits = toReadableSingleDigits(number);
// number of the string = number as string of hundreds + number as string of double digits + number as string single digits
    return numberAsAString;
};
function toReadableSingleDigits(number) {
    let numberAsAString = "";
    switch (number) {
        case 0:
            numberAsAString = "zero";
            break;
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
