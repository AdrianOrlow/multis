function changeClass() {
    var main = document.getElementById('main');
    main.classList.add("mainAnim");
    setTimeout(function(){
        window.location.href = "http://blog.orlow.me";
    }, 2900);
}

window.onload = function() {
    document.getElementById("button").addEventListener("click", changeClass);
}