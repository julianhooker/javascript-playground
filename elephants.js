// Saw a really cool way to implement recursion on Martin Fowler's blog. It was done in a way
//   I had not seen before. So, I decided to try it out myself and learn a bit of JS ES6, plus
//   how to run Javascript in Visual Studio Code.
//   Blog post: https://martinfowler.com/bliki/CourtesyImplementation.html

'use strict';

// box
class box {
    constructor () {
        this.children = [];  
    }

    addChild (child) {
        this.children.push (child);
        console.log('added ' + child.name);
    }

    num_elephants () {
        var result = 0;

        for (var value of this.children) {
            console.log (value);
            result += value.num_elephants();
        }

        return result;
    }
}   

// elephant
class elephant {
    constructor (name) {
        this.name = name;
    }

    num_elephants () {
        return 1;
    }
}

var boxOfElephants = new box();
boxOfElephants.addChild( new elephant ('joe'));
boxOfElephants.addChild( new elephant ('fred'));

var anotherBoxOfElephants = new box();
anotherBoxOfElephants.addChild( new elephant ('greg'));
anotherBoxOfElephants.addChild( new elephant ('julian'));

var finalBoxOfElephants = new box()
finalBoxOfElephants.addChild(new elephant ('mike'));

anotherBoxOfElephants.addChild(finalBoxOfElephants);

boxOfElephants.addChild(anotherBoxOfElephants);

console.log();

console.log ('number of elephants: ' + boxOfElephants.num_elephants());


