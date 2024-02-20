export const popOver100 = (arr) => {
    return arr.filter(el => el.population > 100000)
}

export const popUnder100 = (arr) => {
    return arr.filter(el => el.population < 100000)
}