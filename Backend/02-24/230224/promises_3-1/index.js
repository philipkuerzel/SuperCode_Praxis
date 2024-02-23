const multiply = (number) => {
    return new Promise((resolve, reject) => {
        if (isNaN(number) === false) {
        resolve(number * number);
        } else {
        reject('please enter a number');
        }
    });
}

const multiplyThreeTimes = (number) => {
    return multiply(number)
    .then((result) => {
        return multiply(result);
    })
    .then((result) => {
        return multiply(result);
    });
}

// andere Schreibweise
// const multiplyThreeTimes = (number) => {
//     return multiply(number)
//     .then(multiply)
//     .then(multiply)
// }

multiplyThreeTimes(3)
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})
