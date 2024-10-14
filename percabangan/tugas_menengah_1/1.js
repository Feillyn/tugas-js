function findMax(x, y) {
    if (x > y) {
        alert("Bilangan terbesar adalah: " + x);
    } else if (y > x) {
        alert("Bilangan terbesar adalah: " + y);
    } else {
        alert("Kedua bilangan sama besar: " + x);
    }
}

// Contoh penggunaan
let x = parseInt(prompt("Masukkan bilangan x:"));
let y = parseInt(prompt("Masukkan bilangan y:"));
findMax(x, y);