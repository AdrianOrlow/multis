var scroll = new SmoothScroll('a[href*="#"]');
new WOW().init();

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-51375799-4');


function initMap() {
    var city = {
        lat: 50.204987,
        lng: 19.273931
    };
    var map = new google.maps.Map(
        document.getElementsByClassName('contact--map')[0], {
            zoom: 11,
            center: city,
            styles: [{
                "featureType": "all",
                "stylers": [{
                    "saturation": -100
                }]
            }]
        });
    var marker = new google.maps.Marker({
        position: city,
        map: map
    });
}

function toggleNav() {
    var hC = document.querySelector(".nav--hamburger__content").classList;
    var hB = document.querySelector(".hamburger--btn").classList;
    if (hC.contains("hidden")) {
        hC.remove("hidden");
        hB.add("open");
    } else {
        hC.add("hidden");
        hB.remove("open");
    }
}