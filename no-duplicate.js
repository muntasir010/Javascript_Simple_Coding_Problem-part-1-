/**
 * array has some duplicate elements
 * []
 */

const biryaniKhor = ['abul', 'babul', 'cabul', 'dabul', 'abul', 'babul', 'dabul', 'kabul',];
const numbers = [1, 2, 4, 5, 55, 3, 4, 76, 55, 34, 67, 76, 77, 87, 2];

function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biryaniKhor);
const uniqueArray2 = noDuplicate(numbers);
// console.log(uniqueArray);
// console.log(uniqueArray2);