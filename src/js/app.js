function toggleNav() {
    var hC = document.querySelector(".nav--hamburger__content");
    var hB = document.querySelector(".nav--hamburger a");
    if (hC.classList.contains("hidden")) {
        hC.classList.remove("hidden");
        hB.classList.remove("fa-bars");
        hB.classList.add("fa-times");
    } else {
        hC.classList.add("hidden");
        hB.classList.remove("fa-times");
        hB.classList.add("fa-bars");
    }
}