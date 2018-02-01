function changeClass() {
    var header = document.getElementById('header');
    header.removeAttribute("id");
    
    var gallery = document.getElementById('gallery');
    gallery.classList.remove("hidden");
    gallery.classList.add("visible");
}

window.onload = function() {
    document.getElementById("animBtn").addEventListener("click", changeClass);
}