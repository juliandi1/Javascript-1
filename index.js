/* 1. Buat deret bilangan prima (angka 1-100) ! */ 
/*
for (var i = 1; i <= 100; i++) {
    var div = 0;
    for (var j = 1; j <= i; j++) {
        if (i % j == 0) div++;
    }
    if (div == 2) console.log(i);
}
*/



/* 2. Buat deret bilangan ganjil (angka 1-100) ! */
/*
for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) console.log(i);
}
*/



/* 3. Buat deret bilangan genap (angka 1-100) ! */
/*
for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) console.log(i);
}
*/



/* 4. Buat deret bilangan fibonacci (angka 1-100) ! */
/*
let x = 0;
let y = 1;
let next;
for (let i = 1; i <= 100; i++) {
    console.log(x);
    next = x + y;
    x = y;
    y = next;
}
*/



/* 5. Buat pola segitiga siku-siku, dan pola lainnya */
/*
let result = '';
for (let x = 1; x <= 5; x++) {
    for (let y = 1; y <= x; y++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);
*/



/* 6. Tampilkan 5 angka random dari 1-100 :  */
/*
let numbers = [];
for (let x = 0; x <= 5; x++) {
    let rand = Math.floor(Math.random() * 101);
    numbers.push(rand);
}
numbers.forEach(item => {
    let status;
    let number = Math.ceil(item / 5) * 5;
    if (item <= 60) {
        status = 'Kurang';
    } else if ((item > 60) && (item <= 70)) {
        status = 'Cukup';
    } else if ((item > 70) && (item <= 80)) {
        status = 'Baik';
    } else {
        status = 'Luar Biasa';
    }
    console.log(`${number} ${status}`);
});
*/



/* 7. Tampilkan deret angka kelipatan 3 (angka 1-100) ! */
/*
for (let x = 1; x <= 100; x++) {
    if (x % 3 == 0) console.log(x);
}
*/



/* 8. Buatlah fungsi yang menerima masukan sebuah string nama kota dan mengembalikan boolean jika kota tersebut ada di dalam arr. */
/*
function searchCity(keyword) {
    let arr = ['Jakarta', 'Yogyakarta', 'Bandung', 'Bogor', 'Semarang'];
    let trans_keyword = keyword.charAt(0).toUpperCase() + keyword.slice(1);
    let result = arr.find(item => item == trans_keyword);
    return (result) ? true : false;
}
console.log(searchCity('jakarta'));
*/
