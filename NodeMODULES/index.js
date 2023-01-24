// const chalk=require("chalk")
// import * as chalk from "chalk";
// console.log(chalk.blue("Hello WOrld!!"));
import chalk from 'chalk';

console.log(chalk.blue.inverse('Hello world!'));
import validator from 'validator';

const res=validator.isEmail("amartya@ghjjg.jom")
if (!res) {
    console.log(chalk.green.inverse("Yes this is a valid email"))
} else {
    console.log(chalk.blue.inverse("No this email id is not valid"));
}


res?console.log(chalk.blue.inverse('This is a valid mail!')):console.log(chalk.red.inverse('This is not a valid email!'));