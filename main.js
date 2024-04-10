#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
const myPin = 7890;
let userName = "Ahmad";
let myBallance = 10000;
console.log(chalk.bgCyanBright.magenta.bold("******** Welcome to Meezan Bank ATM Machine ********"));
let userPin = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: chalk.cyan.bold(" Enter your 4 Digit Pin :")
});
let conditon = true;
while (conditon) {
    if (userPin.pin != 7890) {
        console.log(chalk.red.bold(`Sorry! ${chalk.cyan.bold(userName)} you entered incorrect pin please try Again.`));
        userPin = await inquirer.prompt({
            name: "pin",
            type: "number",
            message: chalk.cyan.bold(" Enter your 4 Digit Pin :")
        });
    }
    else if (userPin.pin === 7890) {
        console.log(chalk.magenta.bold(`Good ${chalk.cyan.bold(userName)} you entered correct pin, succesfully logged in.`));
        conditon = false;
    }
}
let conditon2 = true;
while (conditon2) {
    let choices = await inquirer.prompt({
        name: "choice",
        type: "list",
        choices: ["Deposit", "Fast Cash", "Withdraw", "Ballance Inquiry", "Exit"],
        message: chalk.cyan.bold("Please select one option from the following these...")
    });
    conditon = true;
    if (choices.choice === "Deposit") {
        let deposit = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: chalk.cyan.bold("Enter your amount for deposit :")
        });
        myBallance += deposit.amount;
        console.log(chalk.magenta.bold(`Deposit has completed, ${chalk.cyan.bold(userName)} your new ballance is ${chalk.cyan.bold(myBallance)}`));
    }
    else if (choices.choice === "Fast Cash") {
        let options = await inquirer.prompt({
            name: "option",
            type: "list",
            choices: ["1000", "3000", "5000", "10000"],
            message: chalk.cyan.bold("Which amount do you want to withdraw?")
        });
        if (options.option === "1000" || options.option === "3000" || options.option === "5000" || options.option === "10000") {
            myBallance -= options.option;
            console.log(chalk.magenta.bold(`Transaction has completed, ${chalk.cyan.bold(userName)} your remaining ballance is ${chalk.cyan.bold(myBallance)}`));
        }
    }
    else if (choices.choice === "Withdraw") {
        let withDraw = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: chalk.cyan.bold("Enter amount for withdraw :")
        });
        if (withDraw.amount < myBallance) {
            myBallance -= withDraw.amount;
            console.log(chalk.magenta.bold(`Transaction has completed, ${chalk.cyan.bold(userName)} your remaining ballance is ${chalk.cyan.bold(myBallance)}`));
        }
        else if (withDraw.amount > 20000) {
            console.log(chalk.red.bold("Sorry! Your Atm card limit is 20000"));
        }
        else if (withDraw.amount > myBallance) {
            console.log(chalk.red.bold(`Sorry! ${chalk.cyan.bold(userName)} insufficent ballance.`));
        }
    }
    else if (choices.choice === "Ballance Inquiry") {
        console.log(chalk.magenta.bold(`${chalk.cyan.bold(userName)} your current ballance is ${chalk.cyan.bold(myBallance)}`));
    }
    else if (choices.choice === "Exit") {
        console.log(chalk.cyan.bold("Thanks for using our services Allah Hafiz."));
        conditon2 = false;
    }
}
