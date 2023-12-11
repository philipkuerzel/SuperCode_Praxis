function game(){
    let heightUser1 = 170
    let ageUser1 = 22
    let scoreUser1 = heightUser1 + 5* ageUser1
    console.log(`User1 Score: ${scoreUser1}`);

    let heightUser2 = 168
    let ageUser2 = 34
    let scoreUser2 = heightUser2 + 5* ageUser2
    console.log(`User2 Score: ${scoreUser2}`);


    if (scoreUser1 > scoreUser2){
        console.log(`Spieler1 gewinnt das Spiel mit ${scoreUser1} Punkten`);
    }
    else if (scoreUser1 < scoreUser2){
        console.log(`Spieler2 gewinnt das Spiel mit ${scoreUser2} Punkten`);
    }
    else {
        console.log("Es ist ein Unentschieden");
    }
}

game()
