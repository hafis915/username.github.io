// console.log(" HELLO WORLD ")

/**
 * VARIABEL
 * FUNGSI
 * SELECTOR
 * MANIPULASI
 */


let namaVariabel = "INPUT"


function namaFungsi(par1, par2) {
  console.log(par1, "<<< PAR 1")
  console.log(par2, "<<< PAR 2")
  console.log("==================")
  return
  console.log(" PERINTAH DI DALAM FUNGSI")
}

function jumlah(num1, num2) {
  let num3 = 5
  console.log(num1 + num2 + num3)
}


let warnaMerah = document.querySelector(".warna-merah")
let warnaKuning = document.querySelector("#par")
let tagP = document.querySelector("p")

// warnaMerah.addEventListener("click", () => {
//   if (warnaKuning.style.color == "white") {
//     warnaKuning.style.color = "black"
//   } else {
//     warnaKuning.style.color = "white"

//   }
// })

// let fungsiKlil = () => {

// }

let kucing = document.getElementById('kucing')

// warnaMerah.addEventListener("click", fungsiKlik)
function fungsiKlik() {
  // console.log(aa);
  if (kucing.src == 'https://placekitten.com/300/300') {
    kucing.src = 'https://placekitten.com/200/300'
  } else {
    kucing.src = 'https://placekitten.com/300/300'

  }
}

// console.log(warnaKuning);
// console.log(warnaMerah);
// console.log(tagP);

// let warnaKuning = document.getElementById("par")
warnaKuning.onclick = () => {

};
// // document.getElementById("par").onclick =

// function myFunction() {
//   warnaMerah.style.display = "none"
// }



// warnaKuning.style.display = "none"
// console.log(warnaKuning.style)
// console.log(warnaMerah)
// console.log(warnaMerah2)

// namaFungsi(2, "NAME")  // par1 = 2 , par2 = name
// namaFungsi("NAME", 3)

// jumlah(3, 5)
// console.log(namaVariabel)
