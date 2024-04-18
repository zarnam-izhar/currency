import inquirer from 'inquirer'
const currency: any = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.80,
    INR: 83.59,
    JPY: 154.59,
    CNS: 7.24,
    PKR: 278
};
let user_answer = await inquirer.prompt(
    [
{ 
    name: 'from',
    message: 'Choose the currency you want to convert',
    type: 'list',
    choices: ['USD', 'EUR','GBP', 'INR', 'JPY', 'CNS', 'PKR'],

},
{
    name: 'to',
    message: 'Choose the currency you want to convert into',
    type: 'list',
    choices: ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'CNS', 'PKR'],

},
{
    name: 'amount',
    message: 'Enter Your Amount',
    type: 'number'

}
]
)
function roundToDecimal(number: number, decimalPlaces: number): number {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}
let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount * toAmount
let roundedAmount:number = roundToDecimal(convertedAmount,2);

console.log(roundedAmount);