/**
 * SIMPLE LOGIC:
 * Year will be a leaf year if the year divisible by 4;
 * */ 

function isLeafYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isLeaf = isLeafYear(2017);
console.log(isLeaf);


/**
 * 1. Those year that is not divisible by 100, if the year is divisible 4: then it will be a leaf year.
 * 2. If the year is divisible by 400, then it is a leaf year.
 * 3. else it is not a leaf year.
 * */ 

function isLeafYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isLeaf1 = isLeafYear2(2100);
const isLeaf2 = isLeafYear2(1600);
const isLeaf3 = isLeafYear2(1900);
const isLeaf4 = isLeafYear2(2000);
console.log(isLeaf1, isLeaf2, isLeaf3, isLeaf4);