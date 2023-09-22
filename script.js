// Navbar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.backgroundColor = "#171717";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("navbar").style.backgroundColor = "#201f1f";
  }
}

// Slider
let counter = 2;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  // jumlah slide = counter
  if (counter > 3) {
    counter = 1;
  }
}, 7000);
