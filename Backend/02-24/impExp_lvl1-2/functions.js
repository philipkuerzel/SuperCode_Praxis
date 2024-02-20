export const firstElement = (arr) => {
    return arr[0];
}

export const arrWithoutLastElement = (arr) => {
    return arr.slice(0, arr.length - 1);
}

export const lastElement = (arr) => {
    return arr[arr.length - 1];
}

export const arrWithoutFirstElement = (arr) => {
    return arr.slice(1);
}

export const removeElement = (arr, value) => {
    return arr.filter(el => el !== value)
}

export const removeDuplicates = (arr) => {
    return arr.filter((value, index) => arr.indexOf(value) === index);
}

export const sumOfArray = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

export const randomNumberBetween = (a, b) => {
    return Math.floor(Math.random() * (b - a + 1) + a);
}

export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const capitalize = (str) => {
    return str.toUpperCase();
}

export const lastLetter = (str, letter) => {
    return str.charAt(str.length - 1) === letter;
}