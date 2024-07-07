
// Calculator 
function calculator(){
    let numb1 = Number(prompt ("Enter numb1"));
    let numb2 = Number(prompt ("Enter numb2"));
    let opertaor = prompt("Enter any operator +,-,*,/");

    switch(opertaor){
        case '+':
        alert ("result:" + (numb1 + numb2));
        break

        case '-':
        alert ("result:"+ (numb1 - numb2));
        break

        case '*':
        alert ("result:"+ (numb1 * numb2) );
        break

        case '/':
        alert ("result:" + (numb1 / numb2));
        break

        default:
            alert ("Wrong operator");
         
     
    } 
}
let res;
    do {
        calculator()
        res = prompt("Do you want to continue? y/n")
    } while (res === "y") 
 