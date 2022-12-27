//Для проверки
let firstPlayer = {
    name: 'Boy1',
    goals: 20,
    passes: 100
}

let secondPlayer = {
    name: 'Boy2',
    goals: 10,
    passes: 150
}

let enoughPlayers = [firstPlayer, secondPlayer]

//Основная функция

let getStatistics = function (players) {
    for (let i = 0; i < players.length; i++){
        let summGoals = 0;

        for (let i = 0; i < players.length; i++) {
            let player = players[i];
            summGoals += player.goals;
            let coefficient = player.goals * 2 + player.passes;
            players[i].coefficient = coefficient;
            // console.log (coefficient);
        };
        // console.log (summGoals)
        let percent = Math.round(players[i].goals * 100 / summGoals)
        // console.log (percent)
        players[i].percent = percent;

    };

    return players
}
getStatistics (enoughPlayers)