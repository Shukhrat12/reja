const moment = require('moment');

class Account {
    #amount;
    #account_id;

    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount=amount;
        this.#account_id = account_id;
    }

    getBalance() {
        console.log("Your account balance is ", this.#amount)
        return this.#amount;
    }

    withdrawMoney(amount) {
        if(this.#amount > amount) {
            this.#amount -= amount;
            console.log(`Withdrawed ${amount}`)
            console.log(`Balance: ${this.#amount}`)
        }

    }
    
    makeDeposit(amount) {
        this.#amount += amount;
        console.log(`Deposited ${amount}`)
        console.log(`Total balance ${this.#amount}`)
    }

    giveMeDetails() {
        let dateTime = moment().format('YYYY-MM-DD HH:mm:ss')
        console.log(`Hello ${this.name}, your account number is ${this.#account_id}`)
        console.log(`You have $${this.#amount} in your balance.`)
        console.log(`Current time: ${dateTime}`)
    }

    static getClassInfo() {
        console.log("This class is used to create accounts.")
    }
}

module.exports = Account;