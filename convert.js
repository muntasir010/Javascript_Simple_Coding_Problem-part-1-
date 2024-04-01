// 12 inch to 1 feet
function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const jhankarHeight= inchToFeet(74);
// console.log(jhankarHeight);


function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' FT ' + inchRemaining + ' inch.';
    return result;
}

const jhankarHeight2 = inchToFeet2(75);
// console.log(jhankarHeight2);

function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const distance = mileToKilometer(45);
// console.log(distance);

function kilometerToMile(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
const distance2 = kilometerToMile(10);
console.log(distance2);