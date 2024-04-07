

import inquirer from"inquirer";
import chalk from "chalk"
console.log(`<=======================================      ${chalk.bold.bgBlue          ("Wellcom to khan - currency convert cli")}     ================================>`)
//curruncy to convert project

const curruncy : any ={
    PKR: 280,
    USD: 1.00,
    EUR: 0.92,
    GBP: 0.79,
    CAD: 1.36,
    AUD: 1.53,
    JPY: 152,
    INR: 83.89,
    NZD: 1.67,
    CHF: 0.90,
    ZAR: 18.81,
    RUB: 92.56,
    SGD: 1.35,
    HKD: 7.88,
    SAR: 3.77,
    LKR: 301.16,
    PkR: 280,
    
    
}

 
let user_Ans = await inquirer.prompt([
    
    {
   

    message: `${chalk.red("Enter From Currency")}`,
    name: "from",
    type: "list",
    choices: ['USD','EUR','GBP','CAD','AUD','JPY','INR','NZD','CHF','ZAR','RUB','SGD','HKD','SAR','LKR','PkR']
    },
    {
        name: 'to',
        message: `${chalk.red("Enter To Currency")}`,
        type: "list",
        choices: ['USD','EUR','GBP','CAD','AUD','JPY','INR','NZD','CHF','ZAR','RUB','SGD','HKD','SAR','LKR','PkR']
    },
   {
     name: "amount",
     message:`${chalk.blue("Enter your Amount to convert")}`,
     type: "number"
   },
   
]);

//console.log(user_Ans)

 let fromamount = curruncy[user_Ans.from];
 let toamount = curruncy[user_Ans.to];
 let amount =user_Ans.amount;
 let baseamount = amount/fromamount;
 let convertamount = baseamount * toamount;
 
 
 console.log(`${chalk.red("Convert Amount =")} ${chalk.green (convertamount.toFixed(2))}`);

 
 
