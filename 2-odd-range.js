/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array 
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
******************************************************************************/

function oddRange(end) {
    let odds = 0;
   
       for (let i = 0; i < end.length; i++) {
       if (end[i] % 2 !== 0) {
           console.log(end[i]);
       }
       }
   }
   
   oddRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);