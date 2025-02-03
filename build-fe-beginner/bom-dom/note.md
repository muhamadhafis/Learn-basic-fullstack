## Browser/Document Object Model

### Perbedaan BOM dengan DOM

**BOM** digunakan untuk kita memerintahkan sebuah browser untuk melakukan sesuatu
Sementara, **DOM** digunakan untuk memerintah document page browser

**Contoh BOM :**
`window.alert("pop up bro!")`
`window.promt("masukan kata-kata bro!")`

**Contoh DOM :**
`document.getElementById("heading").innerHTML = "Jokowi turun jawatan!"`

### Browser Enveronment

JS secara default berapa pada **Browser Enveronment** (BE), semua program berjalan di atas browser oleh karna itu ada BOM dan DOM

Kalau kita mencoba program pada BOM atau DOM pada sanbox JS biasanya error karna menggunakan **NodeJS Enveronmnet**
