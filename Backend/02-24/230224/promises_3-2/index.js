
const getRandomNumber = (number) => {
    return new Promise((resolve, reject) => {
        if (isNaN(number) === false) {
            setTimeout(() => {
                resolve(Math.ceil(Math.random() * 1000));
            }, number);
        } else {
            reject('please enter a number');
        }
    });
}


Promise.all([getRandomNumber(1000), getRandomNumber(10000)])
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })