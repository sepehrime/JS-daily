// //prompt
// let age = prompt('How old are you?', 25);
// alert(`You are ${age} years old!`)

// //confirm
// let isBoss = confirm('Are you admin?');
// if (isBoss) {
//     alert('Hello Admin!')
//     } else {alert('Please log in as Admin!')}

///Conversion
// let value = true, x = '6'
// typeof value
// String(true) // "true"
// Number(x) // 6
// Number(undefine) // NaN
// Number(null) // 0
// Number(true) //1
// Number("  123 \t  \n ") // 123
// Boolean(1) //true
// Boolean("hello") // true
// Boolean("") // false

/// Comparison (> < >= <=  != == ===) which outputs true or false
/// all of the following results are true
// 2 > 1
// 2 != 1
// 'Z' > 'A'
// 'Glow' > 'Glee'
// 'a' > 'A'
// '2' > 1 //numeric conversion happens first
// true == 1
// 0 == false // again numberic conversion happens first
/// to compare without conversion we use strict equality; 0 === false results in false
/// there is also strict non-equality !===

/* Conditional statement if
    if (condition) 
        {code block}
    else {code block} 
    
or in short form
 let result = condition ? Value 1 : Value 2    */
//  let x = prompt('number?', 2);
//  let oddOrEven = (x % 2)? "It's an odd number" : "It's an even number."
//  alert(oddOrEven)

// let message = (login == 'Employee')? 'Hello' :
// (login == 'Director') ? 'Greeting' :
// (login = '') ? 'No login':
// '';
/// logical Operators
// result = a || b; // short circut, looks for the first true (and exit) or the result is false
// if (hour == 12 && minute = 30) {alert('time is 12:30')}
// let result = !value // returns true or false

// let age = prompt('age?', 25)
// if (!((age >= 14) && (age <=90))) {alert('You are not between 14 and 90')}

// let userName = prompt("Who's there?")
// if (userName===null) {
//     alert('Cancelled!')
//     } else if (userName === "" || userName !== "Admin") {
//         alert("I don't know you!")
//     } else if (userName === "Admin"){
//         let password = prompt('Password?')
//         if (password === null) {
//             alert ('Cancelled')
//         } else if (password ==="Password") {
//             alert('Login Successful!')
//         } else {alert('Wrong Password')}
//     }

/* Nullish coallescing operator ??
It’s used to assign default values to variables: height = height ?? 100;
it returns the first argument if it's not null/undefined, otherwise the second one and so on
result = a ?? b
result = (a !== null && a !== undefined) ? a : b;
difference between || and && is
|| returns the first truthy value.
?? returns the first defined value.
example
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

*/

/* loops
- while (condition) {loop body};
- do {loop body} while (condition);
- for (begin;condition; step) {loop body}
*/
///example
// let sum = 0;
// while(true){
//     let value = +prompt('value?'); // + here converts the input to a number
//     if (!value) break;
//     if (value % 2 == 0) continue;
//     sum += value;
// }
// alert('sum:'+ sum)

/// ask user to input a number greater than 100
// let num;
// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);

/// prime numbers from 2 to n

// let n = prompt('Enter a number')
// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   alert( i ); // a prime
// }
/// switch
// let a = 15;
// let guess = +prompt('I am thinking of a number. Can you guess it?')
// switch (guess) {
//     case 15 :
//         alert('That is correct!');
//         break;
//     case 12 :
//         alert('your guess was too small');
//         break;
//     case 20 :
//     case 25 : // you can group multiple cases
//         alert('Your guess was too high!');
//         break;
//     default :
//         alert('Sorry')
// }

/// functions
// function showMessage(from='user', text='default text'){
//     from = '*' + from + '*';
//     alert(from + ': '+ text);
// };
// showMessage('Ann', 'Hello!')
// const heading2 = document.getElementById("myH2")
// heading2.innerText = "Hi"

/// functions with output
// function checkAge(age){
//     if (age >= 18) return true;
//     else return false;
// }
// function checkAgeShort(age){
//     reutrn (age>18) ? true : confirm('Did parents allow you?');
//     // return (age>18) || confirm('Did parents ...');
// }

// function showMin(a,b) {
//     debugger;
//     return (a>b) ? a:b;
// }
// alert(showMin(2,2))
/* you can return without a value (returns undefined)
- name the function as a verb, it should be descriptive 
showResults, getData, calcSum, createForm, checkPermission, etc
- function should be short and do only one thing
*/
/// function expression
// let calcSum = function(a,b) {
//  return a+b;
//  };

/// arrow functions can be define with multiple, one or no arguments. it can be one line or multiple
/// let calcSum = (a,b) => a+b;
/// let double = a => a * 2 ;
/// let sayHi = () => alert('Hi')
/// let sum = (a,b) => {
///     let result  = a+b;
///    return results;
///   };

//// objects
// objectName.propertyName;
// objectName["propertyName"];
// person.name = "John";
// delete person.age;
// // in
// let result = "firstName" in person;
// //this
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// person.fullName(); //>>> 'John Doe'
// person.fullName; // >>> ƒ () {return this.firstName + " " + this.lastName;}
// Object.values(person); // array of values  ['John', 'Doe', 50, ƒ]
// Object.keys(person); //array of keys ['firstName', 'lastName', 'age', 'fullName']
// Object.entries(person); // array of array of key, vlues [[key0,value0], [key1, value1]]
// JSON.stringify(perosn); // '{"firstName":"John","lastName":"Doe","age":50}'

// /// object construct, define objects
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
//   this.nationality = "English"; /// default value, but can be changed
// }
// /// create new objects from the construct
// const mySelf = new Person("Johnny", "Rally", 22, "green");
// mySelf.nationality = "American";

// Date
localTime = new Date();
let hours  = localTime.getHours();
let minute = localTime.getMinutes();
minute = minute.toString().padStart(2,"0") // adds zero when the minutes are 0-9 >> 00-09
