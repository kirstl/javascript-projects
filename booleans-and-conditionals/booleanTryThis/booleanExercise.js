// Try This: Explore how Boolean converts various non-boolean values.
//console.log(Boolean("true"));                //true
//console.log(Boolean("TRUE"));               //true
//console.log(Boolean(0));                   //false
//console.log(Boolean(1));                  //true
//console.log(Boolean(''));                //false
// console.log(Boolean("LaunchCode"));     //true

//Check Your Understanding: Which of the following is a Boolean expression? Select all that apply
// console.log(typeof 3==4); // boolean
// console.log(typeof 3+4);  // number
// console.log(typeof 3+4 === 7); //boolean
// console.log(typeof "false"); // string

//Exercise: Write code that prints different messages based on the value of a number variable. 
// If the number is odd, print nothing. If it is even, print "EVEN". If it is also positive print
//"POSITIVE".

// let number = 6;

// if (number % 2 === 0 && number > 0) {
//     console.log("EVEN")
//     console.log("POSITIVE")
// };

let num = 0;

if (num % 2 === 0 ) {
    if (num % 2 === 1) {
        console.log("odd");
    }
}