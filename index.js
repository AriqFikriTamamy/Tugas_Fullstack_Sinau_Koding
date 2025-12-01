// Soal 1
// Menghitung Luas Persegi Panjang
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function main(){
    // Validasi apakah input yang diberikan valid menggunakan pengkondisian (tambahan pribadi, tidak ada dalam soal)

    readline.question("Masukkan panjang: ", function(panjang) {
        readline.question("Masukkan lebar: ", function(lebar) {
            if(!isNaN(panjang) && !isNaN(lebar)){
                const luas = hitungLuas(parseFloat(panjang), parseFloat(lebar));
                const keliling = hitungKeliling(parseFloat(panjang), parseFloat(lebar));
        
                console.log("\n" + "Luas persegi panjang adalah: " + luas);
                console.log("Keliling persegi panjang adalah: " + keliling);
        
                readline.close();
            }else {
                console.log("Input yang diberikan tidak valid. Silahkan masukkan input yang benar.");
                readline.close();
            }
        });
    });
}

const hitungLuas = (panjang, lebar) => {
    let hasil = panjang * lebar;
    return hasil;
};

//Menghitung Keliling Persegi Panjang
const hitungKeliling = (panjang, lebar) => {
    let hasil = 2 * (panjang + lebar);
    return hasil;
}

main();