// Code challenges 1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// Data 1
const markWeight1 = 78,
    markHeight1 = 1.69,
    johnWeight1 = 92,
    johnHeight1 = 1.95
// Data 2
const markWeight2 = 95,
    markHeight2 = 1.88,
    johnWeight2 = 85,
    johnHeight2 = 1.76

const markBMI1 = markWeight1 / markHeight1 ** 2;
const johnBMI1 = johnWeight1 / johnHeight1 ** 2;

console.log(`Data 1:\nMarks weights ${markWeight1} kg and is ${markHeight1} m tall.\nJohn weights ${johnWeight1} kg and is ${johnHeight1} m tall`)
console.log(`Mark BMI: ${markBMI1}, JohnBMI: ${johnBMI1}`)

const markHigherBMI1 = (markBMI1 > johnBMI1?"Mark's BMI is higher than John's BMI":"John's BMI is higher than Mark's BMI")
console.log(markHigherBMI1)

console.log(`\nData 2:\nMarks weights ${markWeight2} kg and is ${markHeight2} m tall.\nJohn weights ${johnWeight2} kg and is ${johnHeight2} m tall`)
const markBMI2 = markWeight2 / markHeight2 ** 2;
const johnBMI2 = johnWeight2 / johnHeight2 ** 2;

const markHigherBMI2 = (markBMI2 > johnBMI2?"Mark's BMI is higher than John's BMI":"John's BMI is higher than Mark's BMI")

console.log(`Mark BMI: ${markBMI1}, JohnBMI: ${johnBMI1}`)
console.log(markHigherBMI2)
