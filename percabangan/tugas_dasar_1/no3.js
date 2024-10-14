let x = parseInt(prompt("Masukkan bilangan pertama: "));
let y = parseInt(prompt("Masukkan bilangan kedua: "));

if (x > y) {
    console.log(x + " lebih besar dari " + y);
} else if (x < y) {
    console.log(x + " lebih kecil dari " + y);
} else {
    console.log(x + " sama dengan " + y);
}