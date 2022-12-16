// Sticky Navbar | Start
var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("sticky-navbar").style.bottom = "15px";
  } else {
    document.getElementById("sticky-navbar").style.bottom = "-200px";
  }
  // Sticky Navbar | End

  // Top Button | Start
  if (currentScrollPos > 20) {
    document.getElementById("goTop").style.bottom = "50px";
  } else {
    document.getElementById("goTop").style.bottom = "-50px";
  }
  // Top Button | End

  prevScrollPos = currentScrollPos;
};
