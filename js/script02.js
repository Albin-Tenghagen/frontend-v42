// Övning 1
let a = 12;
let b = 5;
console.log(a - b);
console.log(12 - b);
console.log(b * a);
console.log(b / a);

//övning 2
// let celsius = parseFloat(prompt('Ange temperatur att konvertera'))
// let Fahrenheit = celsius * 9/5 + 32;
// console.log(`Så här många ${Fahrenheit} blir ${celsius} i konverteringen.`);

//övning 3 
// let num1 = parseFloat(prompt('ange en siffra'));
// let num2 = parseFloat(prompt('ange en andra siffra'));
// let storsta = (num1 > num2) ? num1 : num2;
// console.log(`${storsta} är den större av dem två`)

//övning 4
let number = parseFloat(prompt('ange en siffra'));
let remainder = (number % 2);
console.log(remainder);
if (remainder === 0) {
    console.log(`${number} är jämy`)
} else {
    console.log(`${number} är udda`)
}
                //övning 5
/*
let age = prompt('ange din ålder här');
let idCheck = prompt('Har du biljett? ja eller nej');

if (age >= 17 && idCheck === 'ja') {
    console.log('du får komma in'); 
} else {
    console.log('du får tyvärr inte komma in')
}
*/
                // övning 6 gjord

                // övning 7
//Strikt vs Lös Jämförelse (Medel) Uppgift: Deklarera variablerna let x = '10'; och let y = 10;. Jämför x och y med == och ===. Förklara skillnaden i en kommentar.

let x = '100';
let y = 100 ;
/* 
== blir true om värdet är densamma
=== blir true om datatypen och innehållet stämmer överens
*/ 
console.log(x === y)
console.log(x == y)
                //övning 7

                // övning 8
//Ålderskontroll (Medel) Uppgift: Skriv ett program som ber användaren ange sin ålder. Om åldern är mellan 13 och 19 (inklusive), skriv ut "Du är tonåring." Annars, skriv ut "Du är inte tonåring."
/*
function tonåringsKoll() {
let age = Number(prompt('Vad är din ålder, ange nedan'))
console.log(age);

if (age >= 13 && age <=19) {
    console.log('du är tonåring')
} else {
    console.log('Du är inte tonåring')
}

}
tonåringsKoll()
*/

// function utför koden inom sig, för att aktivera function skriv namnet och ()
// age >= 13(om age är 13 eller mer= TRUE)
// age >= 19(om age är 19 eller mindre= TRUE)
                //övning 8

                //övning 9
// // Max av Tre Tal (Svår) Uppgift: Be användaren ange tre tal. Använd jämförelseoperatorer för att bestämma vilket tal som är störst. Skriv ut det största talet.
// function störstTal() {

//     let num1 = parseFloat(prompt('välj nummer 1'));
//     let num2 = parseFloat(prompt('välj nummer 2'));
//     let num3 = parseFloat(prompt('välj nummer 3'));
    
//     let largest = (num1 > num2) /*condition*/
//     ? (num1 > num3 ? num1 : num3) /*trueResult*/ 
//     : (num2 > num3 ? num2 : num3); /*falseResult*/
//     /* ternary operator i detta fall nested operator
//     condition ? trueResult : falseResult;

    //     condition- utvärderas för booleant värde
    //     trueResult- visas ifall det värderas till truthy
    //     falseResult- visas ifall det värderas till false
    //     om num1 > num2 = true;-->*trueResult* utvärderas om num1 > num3; if true show num1 --> if false show num3

    //     om num1 > num2 = false;-->*falseResult* utvärderas om num2 > num3; if true show num2 --> if false show num3
    
//     */   
//     console.log(`Den största siffran är: ${largest}`)


//     console.log( num1 >= num2, num3)
//     console.log(num1, num2, num3);
// }
// störstTal()

// let biggestNumber = Math.max(num1, num2, num3);
// console.log(biggestNumber);

                //Övning 9

                // Övning 10
// Enkel Lösenordsvalidering (Svår) Uppgift: Be användaren ange ett lösenord. Kontrollera att lösenordet är minst 8 tecken långt och innehåller minst en siffra. Använd logiska operatorer för att kombinera villkoren. Skriv ut om lösenordet är giltigt eller inte.

// let password = (prompt('Ange lösenord. Lösenordet måste vara 8 tecken långt, och innehålla minste 1 siffra'))
// let keyCount = password
// let numberCount = password.match(/\d/)

// if ((keyCount.length >= 8) && (numberCount != null )) {
   
//     console.log(`Lösenordet ${password} är giltigt,`)

// } else {
//     console.log('Lösenordet är ogiltigt')
// }
                //Övning 10