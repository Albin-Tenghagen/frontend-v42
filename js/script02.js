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

//övning 9
// Max av Tre Tal (Svår) Uppgift: Be användaren ange tre tal. Använd jämförelseoperatorer för att bestämma vilket tal som är störst. Skriv ut det största talet.
let num1 = parseFloat(prompt('välj nummer 1'));
let num2 = parseFloat(prompt('välj nummer 2'));
let num3 = parseFloat(prompt('välj nummer 3'));

console.log(num1, num2, num3 )