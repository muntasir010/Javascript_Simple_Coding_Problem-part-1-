/**
 * Function takes an array as parameter.
 * Give me the average of the odd numbers in the array.
 * */ 
/**
 * 1. Put odd number in an array
 * 
 * */ 
function oddAverage(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 === 1){
            // console.log(number);
            odds.push(number);
        }
    }
    // odds is the array that contains only the odd numbers
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}
const numbers = [23, 44, 34, 36, 99, 69, 35];
const avg = oddAverage(numbers);
console.log('Average of the odd number is ', avg);