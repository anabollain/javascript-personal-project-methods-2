'use strict';

//Variables
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];


//ARRAY METHODS

//Array.prototype.some() // is at least one person 19?
//The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
const isAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
})

console.log(isAdult);


//Array.prototype.every()
//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const allAdults = people.every(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
})

console.log(allAdults);

//Array.prototype.find()
//The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// find the element with id 823423
const comment = comments.find(comment => comment.id === 823423);

console.log(comment);


//Array.prototype.findIndex()
//The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
const commentIndex = comments.find(comment => comment.id === 823423);

console.log(commentIndex);

//If we want to delete it
comments.splice(commentIndex, 1);
console.table(comments);
//Or we can create a new array
const newComments = [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex + 1)
];
console.table(newComments);
