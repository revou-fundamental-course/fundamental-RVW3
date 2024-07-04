//Membuat tools banner autolide

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("portofolio1");
  if (n > x.length) slideIndex = 1;
  else if(n < 1) slideIndex = x.length;

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  } 

  //Mengatur supaya ada 1 gambar yang terlihat
  x[slideIndex -1].style.display = "block";
}