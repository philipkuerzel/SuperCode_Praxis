import {names, numbers} from './data.js'
import { firstElement,arrWithoutFirstElement,arrWithoutLastElement, lastElement, removeElement, removeDuplicates, sumOfArray, randomNumberBetween, capitalizeFirstLetter, capitalize, lastLetter} from './functions.js'

console.log("first element: ",firstElement(names));
console.log("last element: ",lastElement(names));
console.log("array without first element: ",arrWithoutFirstElement(names));
console.log("array without last element: ",arrWithoutLastElement(names));
console.log("remove specific element: ",removeElement(numbers, 55));
console.log("remove duplicates: ",removeDuplicates(numbers));
console.log("sum of numbers: ",sumOfArray(numbers));
console.log("random number between: ",randomNumberBetween(9, 77));
console.log("capitalize first letter: ",capitalizeFirstLetter("javascript"));
console.log("capitalize string: ",capitalize("javascript"));
console.log("compare last letter:",lastLetter("javascript", "p"));