const hero = (heroName, heroPower, heroEnemy) => {
    let name = `Mein Lieblingsheld ist: ${heroName}.`;
    let power = ` Er hat die Fähigkeit: ${heroPower}.`;
    let enemy = `Sein größter Gegner ist: ${heroEnemy}`;
    console.log(name + power + enemy);
}

hero("Iron Man", "Er hat eine Rüstung mit fortschrittlichen Waffen wie zb Laserstrahl", "Mandarin") 