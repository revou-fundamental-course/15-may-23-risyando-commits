function hitung() {
    var sisi = parseFloat(document.getElementById("sisi").value);

    // Menghitung luas
    var luas = sisi * sisi;

    // Menghitung keliling
    var keliling = 4 * sisi;

    // Menampilkan hasil
    document.getElementById("luas").innerHTML = "Luas: " + luas;
    document.getElementById("keliling").innerHTML = "Keliling: " + keliling;
}