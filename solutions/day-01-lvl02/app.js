import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

console.log(countries);
console.log(webTechs);

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

const textArr = text.split(' ');
console.log(textArr);
console.log(textArr.length);

// modify Tea to 'Green Tea'
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift('Meat');
// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar');
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
let honeyRemove = shoppingCart.indexOf('Honey');
let teaChange = shoppingCart.indexOf('Tea');
if (honeyRemove > -1) {
    shoppingCart.splice(honeyRemove, 1);
    shoppingCart.splice(teaChange, 1, 'Green Tea');
}

console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

if (countries.indexOf('Ethiopia')) {
    console.log('ETHIOPIA');
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.indexOf('Sass') === -1) {
    webTechs.unshift('Sass');
    console.log(webTechs);
}

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
