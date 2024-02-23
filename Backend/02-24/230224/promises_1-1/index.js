// double number and setTimeout
const doubleNumber = (number, ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(number)) {
                reject("not a number. please enter a number.");
            } else {
                resolve(number * 2);
            }
        }, ms);
    });

}
// call the function doubleNumber
doubleNumber(17.5, 2000)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });