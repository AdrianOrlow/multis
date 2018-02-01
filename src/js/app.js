function toggleForm() {
    var about = document.getElementById('about-container');
    var form = document.getElementById('contact-form');
    
    if (about.classList.contains("visible")) {
        about.classList.remove("visible");
        about.classList.add("hidden");
        form.classList.remove("hidden");
        form.classList.add("visible");
    } else {
        form.classList.remove("visible");
        form.classList.add("hidden");
        about.classList.remove("hidden");
        about.classList.add("visible");
    }
}

var slideIndex = 1;
function openGallery() {
    var header = document.getElementById('header');
    header.removeAttribute("id");
    
    var gallery = document.getElementById('gallery');
    gallery.classList.remove("hidden");
    gallery.classList.add("visible");
}

if (document.getElementById("gallery")) {
    showSlides(slideIndex);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slide");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}

window.onload = function() {
    if (document.getElementById("form-container")) {
        document.getElementById("formPopupBtn").addEventListener("click", toggleForm);
        document.getElementById("formCloseBtn").addEventListener("click", toggleForm);
    }
    
    if (document.getElementById("gallery")) {
    document.getElementById("animBtn").addEventListener("click", openGallery);
    }
}
