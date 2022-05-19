/***********************************************************************
Write a function `catBuilder(name, color, toys)` that returns a cat object
object with the corresponding properties.

Example:


cat1; // => { name: 'Garfield', color: 'golden', toys: ['scratching-post', 'yarn'] }

const cat2 = catBuilder('Whiskers', 'rainbow', ['poptarts']);
cat2; // => { name: 'Whiskers', color: 'rainbow', toys: [ 'poptarts' ] }
***********************************************************************/

class catBuilder {
    constructor(name, color, toys) {
        this.name = name
        this.color = color
        this.toys = toys
    }
}

newCat = new catBuilder("garfield", "golden", ["scratching-post", "yarn"]);
console.log(newCat);