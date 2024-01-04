let sonuc;
let a = 10, b = 20, c= 30;
// 1 - Aritmetik Operatörler
sonuc = a + b;
sonuc = a - b;
sonuc = a * b;
sonuc = a / b;
sonuc = c % a;
sonuc = a++;    // a + 1
sonuc = ++a;    // a + 1
sonuc = --a;
sonuc = a--;

// 2 - Atama Operatörleri
sonuc = a;
sonuc += a  // sonuc = sonuc + a
sonuc -= a  // sonuc = sonuc - a
sonuc *= a  // sonuc = sonuc * a
sonuc /= a  // sonuc = sonuc / a
sonuc %= a  // sonuc = sonuc % a

// 3 - Karşılaştırma Operatörleri
sonuc = (a == b) // eşitse false yada true
sonuc = (a != b) // eşit değilse
sonuc = (3 === "3") // tip kontrolü yapar false verir
sonuc = (a > b) // büyükmü
sonuc = (a < b) // küçükmü
sonuc = (a <= b) // küçük ve eşitse


// 4 - Mantıksal Operatörler

console.log(sonuc);
console.log(a);