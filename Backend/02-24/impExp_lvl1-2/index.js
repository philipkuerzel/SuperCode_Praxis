import {names, numbers} from './data.js'
import { firstElement,arrWithoutFirstElement,arrWithoutLastElement, lastElement, removeElement, removeDuplicates, sumOfArray, randomNumberBetween, capitalizeFirstLetter, capitalize, lastLetter} from './functions.js'

console.log(firstElement(names));
console.log(lastElement(names));
console.log(arrWithoutFirstElement(names));
console.log(arrWithoutLastElement(names));
console.log(removeElement(numbers, 55));
console.log(removeDuplicates(numbers));
console.log(sumOfArray(numbers));
console.log(randomNumberBetween(9, 77));
console.log(capitalizeFirstLetter("javascript"));
console.log(capitalize("javascript"));
console.log(lastLetter("javascript", "p"));