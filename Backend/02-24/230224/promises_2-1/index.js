// get random number between 1 and 10. if number < 6 reject, else resolve
const getRandomNumber = () => {
    return new Promise((resolve, reject) => {
        let randomNumber = Math.ceil(Math.random() * 10);
        if (randomNumber < 6) {
            reject(new Error(`randomnumber ${randomNumber} is smaller than 6`));
        }else {
            resolve(randomNumber);}
    })
}

getRandomNumber()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });