#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = ()=>{
    return new Promise((res) => {
      setTimeout(res, 2000);  
    })
}


async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets do some Maths');
    await sleep (),
    rainbowTitle.stop();
    console.log(`
    `)
}

await welcome ();

async function askQuestion(){
   const answers = await inquirer
  .prompt([
    {
        type: "list",
        name: "operator",
        message:"Which operation do you want to choose?",
        choices: ["Addition" , "Subtraction", "Multiplication" , "Division"]

    },
    {
        type: "number",
        name: "num1",
        message: "Enter your first number"

    },
    {
        type: "number",
        name: "num2",
        message: "Enter your second number"

    }
  ]);   
    if 
    (answers.operator == "Addition"){
        console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
}
    else if
    (answers.operator == "Subtraction"){
        console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
    }
    else if
    (answers.operator == "Multiplication"){
        console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
    }
    else if
    (answers.operator == "Division"){
        console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
    }

};

async function startAgain() {
    do{
        await askQuestion();
        var again = await inquirer
        .prompt({
            type: "input",
            name: "restart",
            message: "Do you wish to continue?, Type Y or N"
        })
    }while(again.restart == "y" || again.restart == "Y" || again.restart == "yes" || again.restart == "YES")
}

startAgain();