import { cities } from "./cities.js";
import { popOver100, popUnder100 } from "./functions.js";

console.log("population > 100k:" , popOver100(cities));
console.log("population < 100k:",popUnder100(cities));