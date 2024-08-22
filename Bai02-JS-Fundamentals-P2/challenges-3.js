// Code challenges 3


const mark = {
    fullName: "Mark Miller",
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2
        return this.bmi
    }
}
const john = {
    fullName: "John Smith",
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2
        return this.bmi
    }
}
console.log(mark.calcBMI() > john.calcBMI() ?
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!` :
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`)
