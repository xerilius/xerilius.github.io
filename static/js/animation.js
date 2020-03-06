// select something on DOM
let shape = document.querySelector('#1');
// find length of square
let shapeLength = shape.getTotalLength();
console.log("Length of shape-white: ", shapeLength);

let shape2 = document.querySelector('.square-purple');
let shape2Length = shape2.getTotalLength();
console.log("Length of shape-purple: ", shape2Length);

let shape3 = document.querySelector('.ramen1');
let shape3Length = shape3.getTotalLength();
console.log("Length of shape 3: ", shape3Length);