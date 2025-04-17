const numbers = [];

console.log('numbers array before loop', numbers)
console.log({numbers});

for(let i = 0; i<=20; i++){
    if(i%2 === 0){
        numbers.push(i);
    }    
    console.log(numbers);
}

// console.log(numbers);


// let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let q = 0; q<=10; q++){
//     console.log(count);
//     count.pop();    
// }