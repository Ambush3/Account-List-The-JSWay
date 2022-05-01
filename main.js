class BankAccount {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }

    credit(amount) {
        this.balance += amount;
        return this.balance;
    }

    describe() {
        return `Owner: ${this.name}, Balance: ${this.balance}`;
    }
}

const Sean = new BankAccount('Sean', 1000);
const Brad = new BankAccount('Brad', 1000);
const Georges = new BankAccount('Georges', 1000);
Sean.credit(1000);
Brad.credit(1000);
Georges.credit(1000);

console.log(Sean.describe());
console.log(Brad.describe());
console.log(Georges.describe());