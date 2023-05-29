// MENGHITUNG lUAS & KELILING LINGKARAN

// Mulai
// Masukkan jari-jari (r) lingkaran
// Mengambil nilai pi dari objek Math Pi (22/7 || 3.14)
// Hitung Luas = pi * (r * r)
// Hitung Lingkaran = 2 * pi * r
// Tampilkan Luas & Tampilkan Lingkaran
// Selesai

// Input jari-jari

let r = prompt('Masukkan jari-jari :');
let phi = Math.PI;
let L = phi * (r * r);
let K = 2 * phi * r;

// console.log('Luas: ' + Math.round(L));
// console.log('Keliling: ' + Math.round(K));

alert(`Luas Lingkaran : ${Math.round(L)} 
Keliling Lingkaran : ${Math.round(K)}`);
