//3. given an array of numbers, find the pair of adjacent elements that has the largest product and return that product

// inputArray = [3 ,6 , -2 , -5 , 7 , 3]

// adjacentElementsProduct(inputArray) = 21

function adjacentElementsProduct(inputArray) {
    
    let a =inputArray[0]*inputArray[1];

    let b = a;
    
    for(let i=1;i<inputArray.length;i++){
    
        let a=inputArray[i]*inputArray[i+1];
        if(a > b){
            b=a;
        };
    };
    
    return b;
};

console.log(adjacentElementsProduct([3 ,6 , -2 , -5 , 7 , 3]));

// 4. a. Given an array of number, find the odd number
// b. find but not use loop

// inputArray = [3, 6, -2, -5, 7, 3, 8, 10, 11]

// output = [6, -2, 8, 10]

//a
function oddNumber(inputArray) {
    let arr = [];
    
    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] % 2 === 0) {
            arr.push(inputArray[i])
        }
    }
    
    return arr
}

console.log(oddNumber([3, 6, -2, -5, 7, 3, 8, 10, 11]))

//b
inputArr = [3, 6, -2, -5, 7, 3, 8, 10, 11]

function noUseLoop(inputArr){
    return inputArr.filter(input => (input % 2) === 0 )
}
console.log(noUseLoop(inputArr));