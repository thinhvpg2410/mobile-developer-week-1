// Code challenges 3
//There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Test data:
//     § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// var dolphins = [96, 108, 89],
//     koalas = [88, 91, 110];

//      § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
var dolphins = [97, 112, 101],
    koalas = [109, 95, 123];

//      § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// var dolphins = [97, 112, 101],
//     koalas = [109, 95, 106];

// 1. Calculate the average score for each team, using the test data below
var dolphinsScore = () => {
    sum = 0;
    for (let i = 0; i < dolphins.length; i++) {
        sum += dolphins[i]
    }
    return sum / 3;
}
var koalasScore = () => {
    sum = 0;
    for (let i = 0; i < koalas.length; i++) {
        sum += koalas[i]
    }
    return sum / 3;
}

console.log(`Dolphins's Score: ${dolphinsScore()}, Koalas's Score: ${koalasScore()}`)

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that as well

if (dolphinsScore() > koalasScore()) {
    console.log("The Winner is: Dolphins's Team")
} else if (dolphinsScore() < koalasScore()) {
    console.log("The Winner is Koalas's Team")
} else {
    console.log("Two teams is DRAW")
}
// Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points.
const minimumScore = 100

console.log("\nBonus 1, 2: Rule")
if (dolphinsScore() > koalasScore() && dolphinsScore() >= minimumScore) {
    console.log("The Winner is: Dolphins's Team")
} else if (dolphinsScore() < koalasScore() && koalasScore() >= minimumScore) {
    console.log("The Winner is Koalas's Team")
} else if (dolphinsScore() == koalasScore() && dolphinsScore() >= minimumScore && koalasScore() >= minimumScore) {
    console.log("Two teams is DRAW")
} else {
    console.log("No teams WIN")
}

//


