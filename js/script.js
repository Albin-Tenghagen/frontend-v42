// let albin = {
//     firstName: 'Albin',
//     lastName: 'Tenghagen',
//     age: 21
// }


// let firstName = 'Albin';
// let middleName = 'Karl';
// let lastName = 'Tenghagen';
// let age = '21';


// let fullName = firstName + " " + middleName + " " +  lastName ;
// console.log(fullName, "Mitt hela namn");


// const radius = 15;


// let omkrets = radius * 2 * Math.PI;
// let area = Math.PI * radius * radius;


// console.log(omkrets, area)
// console.log(`Cirklens omkrets är: ${omkrets} medans arean är ${area}`)


// let siffra = 420;
// let text = 'string';
// let santFalskt = true;
// let vetEj = undefined;
// let inget = null;
// const enBil = {
//     color: 'red',
//     wheels: 4,
//     motor: 'big ass shit'
// }
// console.log(siffra, typeof siffra);
// console.log(text, typeof text);
// console.log(santFalskt, typeof santFalskt);
// console.log(vetEj, typeof vetEj);
// console.log(inget, typeof inget);
// console.log(enBil, typeof enBil);


// let something = 'hej, skriv något kul!';
// // let promptVariable = prompt(" prompt: ", something);
// // alert(something, prompt("prompt:"))


/*
let x = "5";
let y = 3;


console.log("x + y : " + (x + y))
console.log("x + y : " + (Number(x) + y))
console.log("x * y : " + (x * y))
console.log("x / y : " + (x / y))
console.log("x + y + y : " + (Number(x) + y + y))
console.log("x + (y + y) : " + (x + (y +y)))
*/


/* Uppgift 7
let inputValue = prompt("Mata in ett tal");
let numberValue = Number(inputValue)
if (!isNaN(numberValue)) {
   console.log(numberValue, typeof numberValue)
} else {
   console.log("det du mata in är ej ett nummer ")
}
Uppgift 7
*/
function kalkylator() {
    let firstInput = parseFloat(prompt("första siffran"));
    let secondInput = parseFloat(prompt("andra siffran"));
    
    
    if (isNaN(firstInput) || isNaN(secondInput)) {
       alert("Felaktig inmatning. Var vänlig mata in giltiga nummer.");
           return;
    }
    
    
    
    
     let firstValue = Number(firstInput)
    let secondValue = Number(secondInput)
    
    
    let operation = prompt("välj en operation (+, -, /, *)")
    
    
    let result;
    
    
    switch (operation) {
       case '+':
           result = firstInput + secondInput;
       break;
       case '-':
           result = firstInput - secondInput;
       break;
       case '/':
           if (secondInput === 0) {
               alert('Kan inde dividera med noll!')
               return;
           }
           result = firstInput / secondInput;
       break;
       case '*':
           result = firstInput * secondInput;
       break;
       default:
       alert('ogiltigt räknesätt, försök igen')
       return;
    }
    
    
    alert(`Resultatet av ${firstInput} ${operation} ${secondInput} är: ${result}`);
    
    
    }
    
    
    kalkylator()