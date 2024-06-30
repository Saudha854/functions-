//Practice exercise 6.1
//Question no :1 
function sum (a,b){
    console.log (a+b);
}
sum (4,5);
//Question no : 2 
function mulNumber(x,y){
    return x*y
}
let numb1 = 7;
let numb2 = 2;
let result1  = mulNumber(numb1,numb2);
console.log (`The result of multiplying ${numb1} by ${numb2} is: ${result1}`);
//Question no 3
let result2 = mulNumber(5,9);
console.log(`The result of multiplying 5 by 9 is: ${result2}`);

//Practice excercise 6.2
//Question no 1
let descrWords = ["Interesting", "Remarkable","Smart","Joyful"];
//Question no : 2
function describeperson(){
    let UserName = prompt ("Enter your fullName");
    let randomIndex = Math.floor(Math.random()*descrWords.length);
    let randomWord = descrWords[randomIndex];
//Questio no : 3
    console.log (`${UserName} is ${randomWord}`);
}
//Question no : 4
describeperson();

//Practice excercise 03
let num1 = 6;
let num2 = 4;

let operator = "+";
function calculate(y,z,op){
    if (op === "-"){
        return y - z;
    }else {
        return y + z; 
    }
}
console.log (`Result with operator ${operator}: ${calculate(num1,num2,operator)}`);
operator = "-"
console.log(`Result with operator ${operator}: ${calculate(num1,num2,operator)}`);

