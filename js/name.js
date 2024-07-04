//Membuat tools yang akan menanyakan nama 
//anda kemudian ia akan menginput nya di website ini

function replacename() {
  let name = prompt("Masukkan Nama Anda")
  document.getElementById("name").innerHTML = name
}

replacename()