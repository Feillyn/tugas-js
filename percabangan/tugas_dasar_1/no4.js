let x = parseInt(prompt("Masukkan sebuah bilangan: "));
let b = parseInt(prompt("Masukkan bilangan pembagi: "));

if (x % b === 0 && b > 0) {
    console.log(x + " adalah kelipatan dari " + b);
} else {
    console.log(x + " bukan kelipatan dari " + b);
}