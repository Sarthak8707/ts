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

// type operation = "+" | "-" | "*" | "/";

// const calculator = (num1: number, num2: number, op:operation): number => {
//     if(op === "+") return num1+num2;
//     if(op === "-") return num1-num2;
//     if(op === "*") return num1*num2;

//     return num1/num2;
// }

// //console.log(calculator(45, 2, "+"));

// type Staff = {
//     name: string,
//     age: number
// }

// function getUser(arg: Staff): void {
// console.log(arg.name);
// }

// const newStaff: Staff = {
//     name: "Your Name",
//     age: 89
// }

// getUser(newStaff)

type User = {
  name: string;
  age: number;
  email: string;
};

const users: User[] = [
  { name: "A", age: 17, email: "a@mail.com" },
  { name: "B", age: 21, email: "b@mail.com" }
];

function getAdultEmails(users: User[]): string[] {
  const result: string[] = [];
  for(let i=0; i<users.length; i++){
    if(users[i].age >= 18) result.push(users[i].email);
  }

  return result;
}
//console.log("new")
console.log(getAdultEmails(users)); // ["b@mail.com"]

const getId = (id: string | number): void => {
    if(typeof id === "string") console.log(id.toUpperCase());
    else console.log(id.toFixed(8));
}

getId(74549824936784280637)
