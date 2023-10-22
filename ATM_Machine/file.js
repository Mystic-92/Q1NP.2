import inquirer from 'inquirer';
import { faker } from '@faker-js/faker';
const createUser = () => {
    let users = [];
    for (let i = 0; i < 5; i++) {
        let user = {
            id: i,
            pin: 1000 + i,
            name: faker.person.fullName(),
            accountnumber: Math.floor(100000000 * Math.random() * 900000000),
            balance: 10000000 * i,
        };
        users.push(user);
    }
    return users;
};
const atmMachine = async (users) => {
    const res = await inquirer.prompt({
        type: "number",
        message: " Enter your Pin Code",
        name: "pin",
    });
    const user = users.find((val) => val.pin == res.pin);
    if (user) {
        console.log(`Welcome ${user.name}`);
        atmFunc(user);
        return;
    }
    console.log("Invalid Pin");
};
const users = createUser();
atmMachine(users);
const atmFunc = async (user) => {
    const ans = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Select Operation",
        choices: ["Withdraw", " balance", "deposit", "exit"]
    });
    if (ans.select == " Withdraw") {
        const amount = await inquirer.prompt({
            type: "number",
            message: "enter amount",
            name: "rupee"
        });
        if (amount.rupee > user.balance) {
            return console.log("Insufficient Balance");
        }
        if (amount.rupee > 25000) {
            return console.log("You can not withdraw more than 25000");
        }
        console.log(`Withdraw Amount: ${amount.rupee}`);
        console.log(`Balance: ${user.balance - amount.rupee}`);
    }
    if (ans.select == "balance") {
        console.log(`Balance: ${user.balance}`);
        return;
    }
    if (ans.select == "deposit") {
        const deposit = await inquirer.prompt({
            type: "number",
            message: "Enter Amount to Deposit",
            name: "rupee"
        });
        console.log(`Deposit Amount: ${deposit.rupee}`);
        console.log(`Total Balance: ${user.balance + deposit.rupee}`);
    }
    if (ans.select == "exit ") {
        console.log("Thank you for using this ATM");
    }
};
console.log();
