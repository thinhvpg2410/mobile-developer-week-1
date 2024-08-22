// Code Challenges 4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

const billValue = 275

const tip = (billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2)

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip}`)