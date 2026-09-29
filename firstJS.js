// //prompt
// let age = prompt('How old are you?', 25);
// alert(`You are ${age} years old!`)

// //confirm
// let isBoss = confirm('Are you admin?');
// if (isBoss) {
//     alert('Hello Admin!')}
//     else {alert('Please log in as Admin!')}

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
/// all of the following results in true
// 2 > 1
// 2 != 1 
// 'Z' > 'A'
// 'Glow' > 'Glee'
// 'a' > 'A'
// '2' > 1 //numeric conversion happens first
// true == 1
// 0 == false // again numberic conversion happens first
/// to compare without conversion we use strict equality 0 === false results in false
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

let message = (login == 'Employee')? 'Hello' : 
(login == 'Director') ? 'Greeting' :
(login = '') ? 'No login': 
'';