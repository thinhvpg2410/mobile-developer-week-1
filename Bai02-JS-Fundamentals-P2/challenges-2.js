// Code chanllenges 2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%


// Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip
const calcTip = (billValue) => {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2
}
console.log(`Test the function using a bill value of 100. Tip of 100 is:  ${calcTip(100)}`)

// create an array 'bills' containing the test data 125, 555, 44
const bills = [125, 555, 44]
// Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
const tips = bills.map(calcTip)
console.log(`Tips:`, tips)

const total = bills.map((bill, index) => bill + tips[index])
console.log(`Total:`, total)



