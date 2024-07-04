function validateForm() {
  const nama = document.forms['form']['input-nama'].value
  const tanggal = document.forms['form']['input-tanggal'].value
  const gender = document.forms['form']['input-gender'].value
  const pesan = document.forms['form']['input-pesan'].value

  if (nama == '') {
    document.getElementById("error-name").innerHTML = "Masukkan Nama"


    return false
  }

  if (tanggal == '') {
    document.getElementById("error-date").innerHTML = "Masukkan Tanggal Lahir"

    return false
  }
  
  setName(nama);
  setDate(tanggal);
  setGender(gender); 
  setMessage(pesan);

  return false
}

function setName(nama) {
  document.getElementById("hasil-nama").innerHTML = nama;
  document.getElementById("error-name").innerHTML = ""
}

function setDate(tanggal) {
  document.getElementById("hasil-tanggal").innerHTML = tanggal;
  document.getElementById("error-date").innerHTML = ""
}

function setGender(gender) {
  document.getElementById("hasil-kelamin").innerHTML = gender;
}


function setMessage(pesan) {
  document.getElementById("hasil-pesan").innerHTML = pesan;
}