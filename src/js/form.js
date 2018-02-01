function changeClass() {
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

window.onload = function() {
    document.getElementById("formPopupBtn").addEventListener("click", changeClass);
    document.getElementById("formCloseBtn").addEventListener("click", changeClass);
}