console.clear();

console.info("Задание 1:");
function sqr(a,b){
  return a = b !== undefined ? a*b : a*a;
}
console.log(sqr(5,3));
console.log(sqr(5));

console.info("Задание 2:");
var counterNumber = (function(){
  var i = 0;
  return function(b){
    i = b !== undefined ? b + i : i ;
    return i++;
  }
}());

console.log(counterNumber());
console.log(counterNumber());
console.log(counterNumber(0));
console.log(counterNumber(2));
console.log(counterNumber(25));

console.log(counterNumber());
console.log(counterNumber());
console.log(counterNumber(1000));
console.log(counterNumber());
console.log(counterNumber());

console.info("Задание 3:");
var chtoNapisanoPerom = (function(){
  var i = "";
  return function(b){
    return i = b === undefined ? i :
    typeof b !== "string" ? i + b :
    i.charAt(0) === ""? i + b :
    b.charAt(0) === "," && i.charAt(i.length - 1) === " " ? i.slice(0, -1) + b :
    b.charAt(0) === "," ? i + b :
    i + " " + b;
    }
}());

console.log(chtoNapisanoPerom("Что"));
console.log(chtoNapisanoPerom("написано"));
console.log(chtoNapisanoPerom("пером "));
console.log(chtoNapisanoPerom(","));
console.log(chtoNapisanoPerom("то не изменишь в замыкании"));
console.log(chtoNapisanoPerom(":)"));
console.log(chtoNapisanoPerom(""));
console.log(chtoNapisanoPerom(2016));
console.log(chtoNapisanoPerom());
