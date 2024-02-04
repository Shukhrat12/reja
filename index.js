// const calculate = require('./hisob.js');

// const sum = calculate.add(10, 20)
// console.log("Sum: ", sum)

// const subst = calculate.substract(30, 20)
// console.log("Substraction: ", subst)

// const mult = calculate.multiply(5, 3)
// console.log("Multiplication: ", mult)

// const divid = calculate.divide(10, 5)
// console.log("Division: ", divid)

// let count = {};

// count.add = (a, b) => {
//     return a + b;
// }

// count.substract = (a, b) => {
//     return a - b;
// }

// count.multiply = (a, b) => {
//     return a * b;
// }

// count.divide = (a, b) => {
//     return a/b;
// }

// console.log(require('module').wrapper)

// const Account = require('./account.js')

// const classInfo = Account.getClassInfo()
// console.log(classInfo)

const myAccount = new Account("Shawn", 100000, 4395883790)
myAccount.getBalance();
myAccount.makeDeposit(50000);
myAccount.withdrawMoney(20000)
myAccount.giveMeDetails()