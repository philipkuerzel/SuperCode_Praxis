const checkDay = (day) => {
    const d = new Date(day).getDay()
    if (d % 6 !== 0){  // 1-5 --> Montag - Freitag
        return "Arbeitstag"
    }else if (d % 6 === 0){  // 0 + 6 --> Sonntag und Samstag
        return "Weekend"
    }
}
console.log(checkDay("12.15.2019")); // Weekend
console.log(checkDay("2.16.2001")); // Arbeitstag
console.log(checkDay("2.1.2020")); // Weekend
console.log(checkDay("12.15.2019")); // Weekend
