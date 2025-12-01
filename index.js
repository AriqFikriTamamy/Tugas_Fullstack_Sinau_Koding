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
// Pemilihan Menu Makanan
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

function main(){
    readline.question("Pilih menu (nasi goreng/mie ayam/bakso/soto/nasi uduk/nasi kuning/bubur ayam/nasi padang): ", function(pilihan){
        let pilihanMenu = pilihan;
        tampilkanHarga(pilihanMenu);
        readline.close();
    })
};

const tampilkanHarga = (pilihan) => {
    switch (pilihan) {
        case "nasi goreng":
            console.log("Harga: Rp. 15.000");
            break;
        case "mie ayam":
            console.log("Harga: Rp. 12.000");
            break;
        case "bakso":
            console.log("Harga: Rp. 10.000");
            break;
        case "soto":
            console.log("Harga: Rp. 13.000");
            break;
        case "nasi uduk":
            console.log("Harga: Rp. 7.000");
            break;
        case "nasi kuning":
            console.log("Harga: Rp. 7.000");
            break;
        case "bubur ayam":
            console.log("Harga: Rp. 6.000");
            break;
        case "nasi padang":
            console.log("Menu Spesial");
            break;
        default:
            console.log("Menu tidak tersedia");
            break;
    }
}

main();
