// double number and setTimeout
const doubleNumber = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNaN(number)) {
                reject("not a number. please enter a number.");
            } else {
                resolve(number * 2);
            }
        }, 1000);
    });

}
// call the function doubleNumber
doubleNumber("298.33")
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });