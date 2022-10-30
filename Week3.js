// Question #1

let ages = [3, 9, 23, 64, 2, 8, 28, 93] 
console.log("This is my original ages array,",ages);
let first = ages[0]; //This is the first element of the ages array.
let last = ages[ages.length - 1]; // This is the last element of the ages array.

console.log(last);
let subtractvalue = last - first;
console.log(subtractvalue);

ages.push(27); //Question 1b

subtractvalue = last - first;
console.log("This is my ages array,",ages);

subtractvalue = last - first;
console.log(ages[8]);

//Question 1c. 

var sum = 0 
for( var number of ages) {
    sum += number
}
average = sum / ages.length;
console.log(`This is the average of ages`,average);

// Question #2 

let names = ['Sam', 'Tommy','Tim','Sally','Bucky','Bob']
console.log(names);

//2a. The average number of letters per name
let total = 0
for (let i = 0; i < names.length;i++) {
    total += names[i].length;
}
average = total / names.length;
console.log('This is the average of names', average);
//2b. Concatenate all the name together. 
let result = ''
for (let i = 0; i < names.length;i++) {
result = result.concat(names[i]);
    if(i < names.length - 1); {
        result = result.concat(' ')
    }
}
console.log(result);

//Question 5
let namesLength =[3,5,3,5,5,3];
for(let i = 0; i < names.length; i++); {
    console.log(namesLength);
}


// Question 6 Find the sum of array
let totalOfNames = 0;
for(let i = 0; i < namesLength.length; i++) {
    totalOfNames += namesLength[i];
}
console.log('The sum of the array',totalOfNames);
//


// Question 7 
let num = 0
function repeat (word, n) {
    if (num < 0) return "";
    return word.repeat(n);
}

console.log('hi'.repeat(4))


//Question 8 
function createName (firstName, lastName) {
    console.log(firstName + ' ' + lastName)
}
    createName('Quiara',  'Butler');

    //Question 9
    
function sumOfNumbers (array) {
    let sum = 100
    for(let i = 0; i < array.length; i++) {
        sum = sum += array[i];
    } if(sum >= 100) {
        console.log(true);
            return true;
    } else{
        console.log(false)
        return false
    }
} 
    console.log(sumOfNumbers(sum))
    
    // Question 10 Ave stands for average 
    
    array = [2,3,6,8]
    function findave(array) {
       let ave = 0
        for (let i = 0; i < findave.length; i++) {
        let num  = array[i]  
            ave += num;
        ave = ave / array.length
        return ave;
    }

    } 
    console.log("Average of given array",findave(array));
    
    //Question 11
function twoArrays (arr1, arr2) {
    var AvgOfArr1 = 0;
    for(let i = 0; i < arr1.length; i++) {
        AvgOfArr1 += arr1[i];
    }
    var AvgOfArr2 = 0
    for(let i = 0; i < arr2.length; i++) {
        AvgOfArr2 += arr2[i];
    } 
    var arr1Average = AvgOfArr1 / arr1.length;
    var arr2Average = AvgOfArr2 / arr2.length;
    if(AvgOfArr1 > AvgOfArr2) {
        return true;
    }
    else {
        return false
    }
}
 let ave = twoArrays ([3, 9, 23, 64, 2, 8, 28, 93], [2,3,6,8])
 console.log(ave);


//Question 12 
function willBuyDrink (isHotOutside, moneyInPocket) {
if (isHotOutside === true && moneyInPocket > 10.50) {
    console.log ("I will buy a drink");
}    else {
    console.log ('I will not buy a drink');
    }
}
console.log(willBuyDrink(true,10.50));
// Question 13 Find the sum of 4 numbers 
function sumOfFour(a, b, c, d) {
    return( a + b + c + d)
}
console.log(sumOfFour(12, 2, 4, 6) )

