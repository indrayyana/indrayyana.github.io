// Navbar active
function setActiveMenu() {
  const menuItems = document.querySelectorAll(".menu");
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", function () {
      // Hapus kelas 'active' dari semua elemen menu dan
      // Tambahkan kelas 'active' pada elemen menu yang sedang aktif
      menuItems.forEach((item) => item.classList.toggle("active", item === this));
    });
  });
}

// Panggil fungsi setActiveMenu() saat dokumen selesai dimuat
document.addEventListener("DOMContentLoaded", setActiveMenu);

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

// let articles = document.querySelectorAll("article");
// let menuItems = document.querySelectorAll("header nav ul li a");

// window.onscroll = () => {
//   articles.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       menuItems.forEach((links) => {
//         links.classList.remove("active");
//         document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
//       });
//     }
//   });
// };

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.backgroundColor = "#171717";
  } else {
    document.getElementById("navbar").style.top = "-50px";
    document.getElementById("navbar").style.backgroundColor = "#201f1f";
  }
}
