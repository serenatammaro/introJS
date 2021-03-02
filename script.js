//alert('Hello world');
//create var
var myFirstVar = 1;
alert(myFirstVar);
console.log(myFirstVar);

/*adding doc.write*/

document.write(myFirstVar);   
var a = 5;
var b = 3;

alert('a - b = ' + (a-b));
document.write(" a + b = " +(a+b));
document.write('a * b = ' + (a*b));
console.log("a % b = " + (a%b));

var firstName = 'Serena';
var lastName = 'Tammaro';
console.log('Greeting ' + `${firstName} ${lastName}`);

var preTipTotal = 20.65;
var tipPercentage = 10;
var newTotal = preTipTotal + ((preTipTotal*tipPercentage)/100);
document.write('your total bill, with tip, is £ ' + `${newTotal.toFixed(2)}`);
console.log('Tip amount:' + `${preTipTotal/tipPercentage}`);

