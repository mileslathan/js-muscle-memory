/***********************************************************************
In these exercises we will be practicing decomposition by building
multiple functions. Be sure to test each function thoroughly as you go
before moving on to the next problem. Each function will require the
previous to solve.
***********************************************************************/


/***********************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if
`number` is prime or not. Assume `number` is a positive integer.

Examples:

isPrime(2); // => true
isPrime(1693); // => true
isPrime(15); // => false
isPrime(303212); // => false
***********************************************************************/

function isPrime(number) {
    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            return false;
        } else {
        return true;
        }
    }
    }
    console.log(isPrime(11));
  
/***********************************************************************
Using the `isPrime` function you made, write a function `firstNPrimes(n)`
that returns an array of the first `n` prime numbers.

Examples:

firstNPrimes(0); // => []
firstNPrimes(1); // => [2]
firstNPrimes(4); // => [2, 3, 5, 7]
***********************************************************************/

function firstNPrimes(n) {
    for (let i = 2; i * i <= n; i++) 
        if (n % i === 0) 
            return false;
        return n > 1;
        }
    
//         let newNum = 0;
//     let newArray = [];
//     for (let i = 0; i < n; i++) {
//         if (n % i === 0) {
//             newArray.push(n[i]);
//         }
//     }
// }
firstNPrimes(4);

/***********************************************************************
 Using `firstNPrimes`, write a function `sumOfNPrimes(n)` that returns
the sum of the first `n` prime numbers.

Examples:

sumOfNPrimes(0); // => 0
sumOfNPrimes(1); // => 2
sumOfNPrimes(4); // => 17
***********************************************************************/

function sumOfNPrimes(n) {

}