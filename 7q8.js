var tds = []; 
var num;  

console.log("Informe um número:");

while (true) {
    num = parseInt(prompt("Informe um número:")); 
    if (num === 0) { 
   break } 

tds.push(num)
}

console.log (tds.join (","))
