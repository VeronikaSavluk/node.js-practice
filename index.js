const chalk = require("chalk");

console.log(chalk.bgGreen.bold("Hello! Start the game!"));

const readLine = require("readline").createInterface({
    output: process.stdout,
    input: process.stdin
});

let count = 1;
const randomNumber = Math.round(Math.random() * 100).toString();
const tryLimit = 7;

const game = () => {
    if(count <= tryLimit){
        readLine.question(chalk.gray.underline("Try to guess a number from 0 to 100 \n"), (number) => {
            if(number === randomNumber){
                console.log(chalk.yellow.bgBlue("🎊 🥳 You win!!! 🎉 👏👏👏"));
                readLine.close();
            }
            if(number > randomNumber) {
                console.log(chalk.red.bgYellow("😕 Your number is bigger!"));
                count += 1;
                game();
            }
            if(number < randomNumber) {
                console.log(chalk.blue.bgYellow("😕 Your number is less!"));
                count +=1;
                game();
            }
        });
    } else {
        console.log(chalk.bgGray.underline("Game over!"));
        readLine.close();
    };
};

game();