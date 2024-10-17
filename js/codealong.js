//1.2
let text = 'hej';
console.log(text);

//1.2.1 (UPPER,lower)
let firstText = 'Albin är bäst';
let toUpperCaseText = firstText.toUpperCase();
let toLowerCaseText = firstText.toLowerCase();

//1.2.2 (char)
let secondText = 'Albin är bästast';
let firstChar = firstText.charAt(0);
let secondChar = firstText.charAt(0).toUpperCase();//Kollar första karaktär och displayar, lägger till STOR bokstav dessutom
let thirdChar = firstText.charAt(2).toLowerCase();//kollar tredje karaktär(börjar räkna på noll)

//1.2.3 (slice)
let paragraf = 'Här är vi bara goda gubbar!'
let sliceOfParagraf = paragraf.slice(4, 6)
console.log(sliceOfParagraf)
//.slice slicear ut en del av en string baserat på parametrarna

//1.2.4 (split, användingsområden-Array)
let secondParagraf = 'Nu är vi goda gubbar tillsammans'
let splitSecondParagraf = secondParagraf.split();

//1.2.5 (replace)
let textOfAlbin = 'Albin är 20';
let newAlbin = textOfAlbin.replace("Albin", "Tenghagen");
let newAlbin02 = textOfAlbin.replace("20", 500)
console.log(newAlbin);


//1.2.6 (includes(searchString))
let thirdText = 'Albin är bäst'
let includeText = thirdText.includes("är", 7 )
console.log(includeText)