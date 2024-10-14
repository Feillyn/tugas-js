function findRootType(a, b, c) {
    let D = b * b - 4 * a * c;
    if (D > 0) {
        alert("Akar real berbeda");
    } else if (D === 0) {
        alert("Akar real sama");
    } else {
        alert("Akar imajiner");
    }
}

// Contoh penggunaan
let a = parseFloat(prompt("Masukkan koefisien a:"));
let b = parseFloat(prompt("Masukkan koefisien b:"));
let c = parseFloat(prompt("Masukkan konstanta c:"));
findRootType(a, b, c);