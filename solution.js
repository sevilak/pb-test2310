// Hi Hadi :) aufgabe 1

function startsWithLosOrNew(inputString) {
    const lowerCaseString = inputString.toLowerCase();
    
    return lowerCaseString.startsWith("los") || lowerCaseString.startsWith("new");
}

console.log(startsWithLosOrNew("New York"));
console.log(startsWithLosOrNew("newark")); 
console.log(startsWithLosOrNew("London")); 
console.log(startsWithLosOrNew("Los Angeles")); 
console.log(startsWithLosOrNew("lOs Angeles")); 
console.log(startsWithLosOrNew("San Carlos")); 

// aufgabe 2

function isDivisibleBy100(number) {
    return number % 100 === 0;
}

console.log(isDivisibleBy100(1));      // false
console.log(isDivisibleBy100(1000));   // true
console.log(isDivisibleBy100(100));     // true

// aufgabe 3

function isRaining(isItRaining) {
    return isItRaining ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home";
}

console.log(isRaining(true)); 
console.log(isRaining(false)); 

// aufgabe 4

function powerOf(number) {
    return Math.pow(number, number);
}

console.log(powerOf(2)); // 4
console.log(powerOf(3)); // 27
console.log(powerOf(4)); // 256
console.log(powerOf(5)); // 3125

// aufgabe 5

function range(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}


console.log(range(5, 10)); // [ 5, 6, 7, 8, 9, 10 ]
console.log(range(10, 16)); // [ 10, 11, 12, 13, 14, 15, 16 ]
console.log(range(1, 6)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(range(0, 3)); // [ 0, 1, 2, 3 ]