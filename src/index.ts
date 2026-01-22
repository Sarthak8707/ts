// const variable: string = "Hello from Typescript";
// const word: string = "this is from changes";
// //console.log(word)

// console.log(variable);

// const add = (num1: number, num2: number): number => {
//     return num1+num2;
// }

// console.log(add(56, 45))

// type User = {
//     name: string,
//     // age can be ignored
//     age: number
// }

// type Person = {
//     height: number,
//     weight: number
// }

// type worker = User | Person;

// const letsgo: worker = {
//     height: 56,
//     weight: 56
// }

// console.log(letsgo.height);

// let arr: number[] = [1, 2, 56, 34];

// let num: any;

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


//  CALCULATOR for types on functions

type operation = "+" | "-" | "*" | "/";

const calculator = (num1: number, num2: number, op:operation): number => {
    if(op === "+") return num1+num2;
    if(op === "-") return num1-num2;
    if(op === "*") return num1*num2;

    return num1/num2;
}

//console.log(calculator(45, 2, "+"));

type Staff = {
    name: string,
    age: number
}

function getUser(arg: Staff): void {
console.log(arg.name);
}

const newStaff: Staff = {
    name: "Your Name",
    age: 89
}

getUser(newStaff)

