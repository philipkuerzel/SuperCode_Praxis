// Arrays slice()

let lieblingsreiseziele = ["Schweden", "Island", "Finnland", "Österreich", "Portugal"]
console.log(lieblingsreiseziele);
let lieblingsreisezieleNeu = lieblingsreiseziele.slice(2, 4)
console.log(lieblingsreisezieleNeu);
console.log(lieblingsreiseziele);

// Arrays split()

const text = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."

let textArr = text.split(".")
console.log(textArr);
