import inquirer from "inquirer";
import {differenceInSeconds, interval} from "date-fns"
import chalk from "chalk";

console.log(chalk.bold.yellow("_______________________________________________"));
console.log(chalk.bold.yellow("<<<<<")+chalk.bold.green(" WelCome")+chalk.bold.cyan(" To ")+chalk.magenta.bold("Countdown")+chalk.bold.cyan(" Timer ")+chalk.bold.green("Project ")+chalk.bold.yellow(">>>>>"));
console.log(chalk.bold.yellow("_______________________________________________\n"));


const timer = await inquirer.prompt(
    [
        {
            name : "seconds",
            type : "number",
            message : chalk.bold.magenta("Enter the amount of seconds :"),
            validate : ((input)=>{
                if (isNaN(input)){
                    return chalk.bold.red("Error ,")+chalk.bold.blue(" <Please Provide Seconds In Number .!>")
                }else if((input)>60){
                    return chalk.bold.magenta("Please Provide Seconds Within 60 .!")
                }else {
                    return true
                }
            })
        }
    ]
)
const input = timer.seconds
function startTimer  (val:number){
    const iniTime = new Date().setSeconds(new Date().getSeconds() + val)
const setTimer = new Date(iniTime)


setInterval(()=>{
    const currentTime =  new Date()
    const timeDiff = differenceInSeconds (setTimer,currentTime)
    if(timeDiff <= 0){
        console.log(chalk.bold.cyan("<<<<<< ")+chalk.bold.yellow("Timer")+chalk.bold.green(" Has ")+chalk.bold.magenta("Expired .!")+chalk.bold.cyan(" >>>>>>"));
        process.exit()
    }
    const min = Math.floor((timeDiff%(3600*24))/3600)
    const sec = Math.floor((timeDiff%60))
    console.log(`${min.toString().padStart(2,"0")} : ${sec.toString().padStart(2,"0")}`);
    

},1000)
    
    
}

startTimer(input)



