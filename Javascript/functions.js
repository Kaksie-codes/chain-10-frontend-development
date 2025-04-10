// A function is a block of reuseable code.

function Greetings(){
    console.log('Hello World');
    console.log('Hello People');
    console.log('how far');
    console.log('Wa Guan!'); 
    console.log('    ');   
}


// for(let i = 0; i <=10; i++){
//     Greetings();
// }
 
const sayHi = (firstName) => {
    console.log(firstName)
    console.log('Hello ' + firstName);   
    console.log('how far ' + firstName);     
    console.log('    ');  
}
// let name = "Gabriel"

// sayHi('Gabriel')
// sayHi('Esther')
// alert('I am at home')
let response = prompt('How old are you?')
console.log({response})

// const voterElegibility = (age) => {
//     console.log({age})
//     let isNotANumber = isNaN(age)
//     if(isNotANumber){
//         console.log('Invalid input')
//         return
//     }
//     if(age >= 18){
//         console.log("You are of Age and you are elegible to vote")
//     }else{
//         console.log('You are not of age, go back home')
//     }
// }
const voterElegibility = (age) => {
    console.log({age})
    let isNotANumber = isNaN(age)
    if(isNotANumber){
        console.log('Invalid input')
        return
    }else{
        if(age >= 18){
            console.log("You are of Age and you are elegible to vote")
        }else{
            console.log('You are not of age, go back home')
        }
    }   
}

voterElegibility(response)

const num3 = 10;

function addNum(num1, num2){    
    // console.log('result >>>> ' + (num1 + num2));
    // console.log(`result >>>>> ${num1 + num2}`);  
   return  num1 + num2 
}

// console.log(5 + 10)

// let res = addNum(100, 10)
// console.log({res})
// addNum(1, 4)

function example() {
    var x = 10;
    if (true) {
        var y = 20; // Block scope
        console.log(y); // 20
    }
    console.log(x); // 10
    console.log(y); // Error: y is not defined
}

// example();

// console.log(num3);
// console.log(num4);
// console.log(num1);

// AddNum();
// AddNum();
// AddNum();
// addNum(5);
// addNum(50, 100);

// function substractNums(num1, num2){
//     return num1 - num2;
// }



// Arrow functions
var substractNums = (num1, num2) => {
    return num1 - num2;
}

// let substractNums = (num1, num2) => {
//     return num1 + num2;
// }

// let result = substractNums(7,5);
let result = substractNums(7,5);
// console.log({result});
