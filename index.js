// Bagian 1
// Soal 1
// // Fungsi Dasar Javscript
// // Menghitung Luas Persegi Panjang
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function main(){
//     // Validasi apakah input yang diberikan valid menggunakan pengkondisian (tambahan pribadi, tidak ada dalam soal)

//     readline.question("Masukkan panjang: ", function(panjang) {
//         readline.question("Masukkan lebar: ", function(lebar) {
//             if(!isNaN(panjang) && !isNaN(lebar)){
//                 const luas = hitungLuas(parseFloat(panjang), parseFloat(lebar));
//                 const keliling = hitungKeliling(parseFloat(panjang), parseFloat(lebar));
        
//                 console.log("\n" + "Luas persegi panjang adalah: " + luas);
//                 console.log("Keliling persegi panjang adalah: " + keliling);
        
//                 readline.close();
//             }else {
//                 console.log("Input yang diberikan tidak valid. Silahkan masukkan input yang benar.");
//                 readline.close();
//             }
//         });
//     });
// }

// const hitungLuas = (panjang, lebar) => {
//     let hasil = panjang * lebar;
//     return hasil;
// };

// //Menghitung Keliling Persegi Panjang
// const hitungKeliling = (panjang, lebar) => {
//     let hasil = 2 * (panjang + lebar);
//     return hasil;
// }

// main();

// Soal 2
// // Transformasi Array
// function main(){
//     let nilaiSiswa = [70, 75, 80, 65, 90];
//     let nilaiDenganBonus = prosesNilai(nilaiSiswa, tambahBonus);
//     console.log(nilaiDenganBonus);

//     // Untuk fungsi kalikanDua
//     let nilaiKaliDua = prosesNilai(nilaiSiswa, kalikanDua);
//     console.log(nilaiKaliDua);
// };

// // Fungsi untuk Memproses Nilai
// const prosesNilai = (nilaiSiswa, fungsiTransformasi) => {
//     let hasilBaru = [];
//     nilaiSiswa.forEach(nilai => {
//         let nilaiTerubah = fungsiTransformasi(nilai);
//         hasilBaru.push(nilaiTerubah)
//     });
//     return hasilBaru
// };

// const tambahBonus = (nilai) => {
//     return nilai + 10;
// };

// // Fungsi untuk mengalikan nilai dengan 2
// const kalikanDua = (nilai) => {
//     return nilai * 2;
// }

// main();

// Soal 3
// Operasi Dasar Matematika
// function main(){
//     let x = 5;
//     let y = 5;

//     let hasilTambah = lakukan(x, y, tambah);
//     console.log("Hasil penjumlahan: " + hasilTambah);

//     let hasilKali = lakukan(x, y, kali);
//     console.log("Hasil perkalian: " + hasilKali);
// };

// const lakukan = (x, y, operasi) => {
//     let hasil = operasi(x, y);
//     return hasil;
// };

// const tambah = (x, y) => {
//     return x + y;
// };

// const kali = (x, y) => {
//     return x * y;
// };

// main();

// Soal 4
// // Memfilter Nilai Kelulusan
// function main(){
//     let semuaNilai = [55, 70, 45, 80, 65, 50, 90];
//     semuaNilai.sort(); //Method Sort untuk mengurutkan nilai dari Array secara Ascending (inisiatif pribadi, tidak ada di soal)
//     let nilaiLulus = filterArray(semuaNilai, cekLulus);
//     console.log("Nilai yang lulus: " + hasil.lulus);
//     console.log("Nilai yang tidak lulus: " + hasil.tidakLulus);
// };

// const cekLulus = (nilai) => {
//     if(nilai >= 60){
//         return true
//     }else {
//         return false
//     };
// };

// const filterArray = (semuaNilai, cekLulus) => {
//     let arrayLulus = [];
//     let arrayTidakLulus = [];
//     semuaNilai.forEach(nilai => {
//         if(cekLulus(nilai) == true){
//             arrayLulus.push(nilai);
//         }else {
//             arrayTidakLulus.push(nilai);
//         }
//     })
//     return {
//         lulus: arrayLulus,
//         tidakLulus: arrayTidakLulus
//     }
// };

// main();

// Bagian 2
// Soal 5
// // Menentukan Pedikat Nilai
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// function main(){
//     readline.question("Masukkan nilai: ", function(nilai){
//         // Validasi apakah input yang diberikan valid menggunakan pengkondisian (tambahan pribadi, tidak ada dalam soal)
//         if(isNaN(nilai)){
//             console.log("Input yang diberikan tidak valid. Silahkan masukkan input yang benar.");
//             readline.close();
//         }else if(nilai >= 101 || nilai <= 0){
//             // let nilaiMahasiswaTidakValid = parseFloat(nilai);
//             // let gradeTidakValid = tentukanGrade(parseFloat(nilaiMahasiswaTidakValid))
//             console.log("Nilai tidak valid");
//             readline.close()
//         }else {
//             let nilaiMahasiswa = parseFloat(nilai);
//             let grade = tentukanGrade(parseFloat(nilaiMahasiswa));
//             console.log("Grade Anda: " + grade);
//             readline.close();
//             if(grade == "A" ){
//                 console.log("Luar Biasa!");
//             }else if(grade == "B"){
//                 console.log("Bagus!");
//             }else{
//                 console.log("Perlu Belajar Lebih Giat!");
//             }
//         }
//     })
// };

// const tentukanGrade = (nilai) => {
//     if(nilai >= 90 && nilai <= 100){ //Saya asumsikan nilai tertinggi adalah 100, karena tidak ada dalam soal
//         return "A";
//     }else if(nilai >= 80 && nilai <= 89){
//         return "B";
//     }else if(nilai >= 70 && nilai <= 79){
//         return "C";
//     }else if(nilai >= 60 && nilai <= 69){
//         return "D";
//     }else{
//         return "E"
//     }
// };

// main();

// Soal 6
// // Pemilihan Menu Makanan
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function main(){
//     readline.question("Pilih menu (nasi goreng/mie ayam/bakso/soto/nasi uduk/nasi kuning/bubur ayam/nasi padang): ", function(pilihan){
//         let pilihanMenu = pilihan;
//         tampilkanHarga(pilihanMenu);
//         readline.close();
//     })
// };

// const tampilkanHarga = (pilihan) => {
//     switch (pilihan) {
//         case "nasi goreng":
//             console.log("Harga: Rp. 15.000");
//             break;
//         case "mie ayam":
//             console.log("Harga: Rp. 12.000");
//             break;
//         case "bakso":
//             console.log("Harga: Rp. 10.000");
//             break;
//         case "soto":
//             console.log("Harga: Rp. 13.000");
//             break;
//         case "nasi uduk":
//             console.log("Harga: Rp. 7.000");
//             break;
//         case "nasi kuning":
//             console.log("Harga: Rp. 7.000");
//             break;
//         case "bubur ayam":
//             console.log("Harga: Rp. 6.000");
//             break;
//         case "nasi padang":
//             console.log("Menu Spesial");
//             break;
//         default:
//             console.log("Menu tidak tersedia");
//             break;
//     }
// }

// main();

// Soal 7
// // Status Kelulusan
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function main(){
//     readline.question("Masukkan nilai ujian: ", function(nilai){
//          // Validasi apakah input yang diberikan valid menggunakan pengkondisian (tambahan pribadi, tidak ada dalam soal)
//         if(isNaN(nilai)){
//             console.log("Input yang diberikan tidak valid. Silahkan masukkan input yang benar.");
//             readline.close();
//         }else if( nilai >= 101 || nilai <= 0){
//             console.log("Nilai tidak valid");
//             readline.close()
//         }else {
//             let nilaiUjian = parseFloat(nilai);
//             let hasil = cekStatus(nilaiUjian);
//             console.log("Status: " + hasil);
//             readline.close();
//         }
//     })
// };

// const cekStatus = (nilai) => {
//     let status = nilai >= 80 ? "LULUS DENGAN PUJIAN" : (nilai >= 60 ? "LULUS" : "TIDAK LULUS");
//     return status;
// };

// main();

// Soal 8
// // Kategori Usia
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function main(){
//     readline.question("Masukkan usia: ", function(umur){
//         let usia = umur;
//         let kategori = tentukanKategori(usia);
//         console.log("Kategori: " + kategori);
//         readline.close();
//     });
// };

// const tentukanKategori = (umur) => {
//     if( umur <= 0 ){
//         return "Usia tidak valid";
//     }else if( umur <= 12 ){
//         return "Anak-Anak";
//     }else if( umur <= 17 ){
//         return "Remaja";
//     }else if( umur <= 60){
//         return "Dewasa";
//     }else if( umur <= 99){
//         return "Lansia"
//     }else{
//         return "Usia sangat lanjut";
//     }
// };

// main();

// Bagian 3
// Soal 9
// // Menampilkan Bilangan Genap
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function main(){
//     readline.question("Masukkan batas atas: ", function(batas){
//         let batasAtas = parseInt(batas);

//         // Validasi apakah input yang diberikan valid menggunakan pengkondisian (tambahan pribadi, tidak ada dalam soal)
//         if(isNaN(batasAtas) || batasAtas <= 0){
//             console.log("Nilai tidak valid. Angka harus lebih dari 0");
//             readline.close()
//         }else{
//             tampilkanGenap(batasAtas);
//             tampilkanGanjil(batasAtas);
//             readline.close()
//         }
//     });
// };

// const tampilkanGenap = (batas) => {
//     let hasil = [];

//     for(let i = 1; i <= batas; i++){
//         if( i % 2 === 0){
//         //    console.log(i);
//         hasil.push(i);
//         };
//     };

//     console.log("Bilangan genap dari 1 sampai " + batas + ": " + hasil.join(" "));
// };

// const tampilkanGanjil = (batas) => {
//     let hasil = [];
//     for(let i = 1; i <= batas; i++){
//         if(i % 2 === 1){
//             hasil.push(i)
//         };
//     };

//     console.log("Bilangan ganjil dari 1 sampai " + batas + ": " + hasil.join(" "));
//     console.log("Jumlah bilangan ganjil: " + hasil.length)
// }

// main();

// Soal 10
// // Program Hitung Mundur
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function main(){
//     readline.question("Mulai hitung mundur dari: ", function(mulaiDari){
//         let angkaAwal = parseFloat(mulaiDari);
//         mundur(angkaAwal);
//         readline.close()
//     });
// };

// const pause = (ms) => {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function mundur(mulaiDari) {
//     let counter = mulaiDari;
//     while( counter > 0){
//         await pause(1000);
//         console.log(counter);
//         if( counter == 5 ){
//             console.log("Berhenti di angka 5!");
//             break;
//         };
//         counter = counter - 1;
//     };
//     console.log("Selesai!");
// }

// main();

// Soal 11
// // Validasi Password
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const prompt = require("prompt-sync")({
//     sigint: true
// })

// function main(){
//     mintaPassword();
// };

// const mintaPassword = () => {
//     const passwordBenar = "rahasia123";
//     let inputUser;
//     let percobaan = 0;
//     do{
//         inputUser = prompt("Masukkan password: ");
//         percobaan++;
//         if(inputUser != passwordBenar){
//                 console.log("Password salah. Coba lagi.");
//             };
//         if(percobaan === 3 && inputUser !== passwordBenar){
//                 console.log("Akun diblokir!");
//                 process.exit();
//             };
//         }while(inputUser !== passwordBenar);

//         console.log("Password benar! Akses diberikan.");
//         readline.close();
// };

// main();

// Soal 12
// // Pola Bintang
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function main(){
//     readline.question("Masukkan tinggi segitiga: ", function(tinggiSegitiga){
//         tinggiSegitiga = parseInt(tinggiSegitiga);
//         buatSegitiga(tinggiSegitiga);
//         readline.close();
//     })
// };

// const buatSegitiga = (tinggi) => {
//     for(let baris = 1; baris <= tinggi; baris++){
//         let tinggiSegitiga = "";
//         for(let kolom = 1; kolom <= tinggi; kolom++){
//             // console.log("*".repeat(tinggi));
//             tinggiSegitiga += "* ";
//             // console.log("*")
//             readline.close();
//         };
//         console.log(tinggiSegitiga);
//     };
// };

// main();

// Soal 13
// // Rata-Rata Nilai
// function main(){
//     let nilaiSiswa = [80, 75, 90, 85, 70];
//     let rataRataNilai = hitungRataRata(nilaiSiswa);
//     console.log("Rata-rata nilai: " + rataRataNilai);

//     // // Menentukan nilai tertinggi dan terendah (tanpa perulangan)
//     let nilaiTertinggi = Math.max(...nilaiSiswa);
//     let nilaiTerendah = Math.min(...nilaiSiswa);
//     console.log("Nilai tertinggi siswa adalah: " + nilaiTertinggi + " (tanpa perulangan)");
//     console.log("Nilai terendah siswa adalah: " + nilaiTerendah + " (tanpa perulangan)");

//     // Menentukan nilai tertinggi dan terendah (menggunakan perulangan)
//     let tertinggi = nilaiTertinggidanTerendah(nilaiSiswa);
//     let terendah = nilaiTertinggidanTerendah(nilaiSiswa);
//     console.log("Nilai tertinggi siswa adalah: " + tertinggi.max);
//     console.log("Nilai terendah siswa adalah: " + terendah.min);
// };

// const hitungRataRata = (arrayNilai) => {
//     let total = 0;
//     let jumlahData = arrayNilai.length;

//     for(let i = 0; i < jumlahData; i++){
//         total = total + arrayNilai[i];
//     };

//     let rataRata = total / jumlahData;
//     return rataRata;
// }


// const nilaiTertinggidanTerendah = (nilaiSiswa) => {
//     let nilaiMax = nilaiSiswa[0];
//     let nilaiMin= nilaiSiswa[0];

//     for(let i = 1; i < nilaiSiswa.length; i++){
//         if(nilaiSiswa[i] > nilaiMax){
//             nilaiMax = nilaiSiswa[i];
//         };
//         if(nilaiSiswa[i] < nilaiMin){
//             nilaiMin = nilaiSiswa[i];
//         };
//     };
//     return {max: nilaiMax, min:nilaiMin};
// };

// main();

// Bagian 4
// Soal 14
// Mencari Nilai Maksimum
// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
const prompt = require("prompt-sync")({
    sigint: true
})

function main(){
    let a = prompt("Masukkan Angka Pertama: ");
    let b = prompt("Masukkan Angka Kedua: ");
    let c = prompt("Masukkan Angka Ketiga: ");
    let d = prompt("Masukkan Angka Keempat: ");

    let nilaiMaks = cariMaks(a, b, c, d);
    console.log("Nilai maksimum: " + nilaiMaks);

    let nilaiMin = cariMin(a, b, c, d);
    console.log("Nilai minimum: " + nilaiMin);
};

const cariMaks = (a, b, c, d) => {
    let maksimum = a;

    if(b > maksimum){
        maksimum = b;
    };

    if(c > maksimum){
        maksimum = c;
    };

    if(d > maksimum){
        maksimum = d;
    };

    return maksimum;
};

const cariMin = (a, b, c, d) => {
    let minimum = a;

    if(b < minimum){
        minimum = b;
    };

    if(c < minimum){
        minimum = c;
    };

    if(d < minimum){
        minimum = d;
    };

    return minimum;
}

main();