/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

const obj1 = {company: 'General Assembly', course: 'Software Engineering Immersive'}
doesKeyExist(obj1, 'company'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

const obj1 = {
    company: "Twitter",
    location: "who knows"
}


function doesKeyExist(obj, key) {
     if (obj[key]) return true;
     return false;
}

 


console.log(doesKeyExist(obj1, "name"));