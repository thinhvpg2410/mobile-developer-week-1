// Code challenges 1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new  gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins

// Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3
}
// Use the function to calculate the average for both teams
// Data 1
const avgDolphins1 = calcAverage(44, 23, 71)
const avgKoalas1 = calcAverage(65, 54, 49)
// Data 2
const avgDolphins2 = calcAverage(85, 54, 41)
const avgKoalas2 = calcAverage(23, 34, 27)

function checkWinner(avgDolphins, avgKoalas) {
    return (avgDolphins >= 2 * avgKoalas ?
        `Dolphins win (${avgKoalas} vs. ${avgDolphins})` :
        avgKoalas >= 2 * avgDolphins ?
            `Koalas win (${avgDolphins} vs. ${avgKoalas})` :
            `No team win!`)
}
console.log(checkWinner(avgDolphins1, avgKoalas1))
console.log(checkWinner(avgDolphins2, avgKoalas2))

