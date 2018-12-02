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

var values = [
    "header", "main", "modalProject", "projectName",
    "projectImg", "projectShortDesc", "projectLongDesc",
    "projectLicense", "projectSource", "projectDemo",
    "projectTechnologies", "body"
];
values.forEach(value => {
    var value = document.getElementById(value);
});

var projects = [{
    "id": "vlocal",
    "name": "vLocal",
    "shortDesc": "System ogłoszeń internetowych",
    "longDesc": "Podstawową funkcjonalnością jest możliwość wstawiania i wyświetlania ogłoszeń sprzedaży przedmiotów wraz ze zdjęciem, za pomocą własnego profilu, którego można utworzyć za pomocą zwykłej rejestracji (email/hasło) lub przez Facebooka.\n\nW vLocal wbudowany jest system wiadomości pomiędzy sprzedającym/kupującym oraz wyświetlanie ich statusów (online/offline).\n\nMożliwe jest wyszukiwanie ofert sprzedaży na podstawie podanych kryteriów.\n\nProjekt był wzorowany na największych polskich i zagranicznych portalach aukcyjnych.",
    "license": "MIT",
    "sourceLink": "https://github.com/TheAdrik/vLocal",
    "demoLink": "http://bit.ly/vLocal",
    "technologies": ["firebase", "vue", "css"]
}, {
    "id": "mypolitics",
    "name": "myPolitics",
    "shortDesc": "Test poglądów politycznych",
    "longDesc": "Wzorowany na takich jak 8values czy PolitiScales. Na podstawie odpowiedzi na pytania dotyczące różnych kwestii wylicza poziom zbliżenia do danych ideologii i przedstawia go na siedmiu osiach oraz w formie tekstowej, czyli tzw. najbliższego dopasowania.\n\nJest możliwość realistycznego generowania odpowiedzi oraz wyświetlania efektów pytań.\n\nW wersji beta zawiera się dodatkowo pokazywanie miejsca na kompasie politycznym oraz \"cechy\", które może przejawiać osoba wypełniająca quiz.",
    "license": "MIT",
    "sourceLink": "https://github.com/TheAdrik/myPolitics",
    "demoLink": "https://mypolitics.orlow.me/",
    "technologies": ["js", "css"]
}, {
    "id": "mylibrary",
    "name": "myLibrary",
    "shortDesc": "System katalogu bibliotecznego",
    "longDesc": "Po zaimplementowaniu ułatwia wyszukiwanie i zarządzanie zasobami biblioteki. Zawiera w sobie panel administratora, poprzez który można edytować, usuwać i dodawać książki.\n\nDane logowania do demo:\nLogin: zvpsbpmf@q.cb, hasło: SJZB4Agw",
    "license": "MIT",
    "sourceLink": "https://github.com/TheAdrik/myLibrary",
    "demoLink": "https://bit.ly/2KAgE55",
    "technologies": ["firebase", "vue", "css"]
}, {
    "id": "mini",
    "name": "Mini",
    "shortDesc": "Ultraminimalistyczny template strony osobistej",
    "longDesc": "Szablon strony z elementami i obciążeniami ograniczonymi do całkowitego minimum",
    "license": "MIT",
    "sourceLink": "https://github.com/TheAdrik/Mini",
    "demoLink": "https://bit.ly/2LdqtXV",
    "technologies": ["css"]
}, {
    "id": "groupadmin",
    "name": "GroupAdmin",
    "shortDesc": "Menadżer blokad",
    "longDesc": "Stworzony z myślą o zarządzeniu grupą \"Nastoletni Programiści\" na Facebooku. Wysyłał podane dane do predefiniowanego formularza, jednak obecnie, ze względu na zmiany w polityce Google, nie działa.",
    "license": "MIT",
    "sourceLink": "https://github.com/TheAdrik/GroupAdmin",
    "demoLink": "javascript:void(0);",
    "technologies": ["jquery", "nodejs"]
}, {
    "id": "orlowblog",
    "name": "Adrian Orłów Blog",
    "shortDesc": "Mój blog osobisty",
    "longDesc": "Wyrażam na nim swoją opinię na bardzo różne tematy. Próbuję stosować język prosty i bezpośredni, zrozumiały dla każdego i przyjemny do czytania o każdej porze dnia.",
    "license": "MIT",
    "sourceLink": "https://github.com/TheAdrik/theadrik.github.io",
    "demoLink": "http://blog.orlow.me",
    "technologies": ["jekyll", "css"]
}, {
    "id": "short-news",
    "name": "ShortNews",
    "shortDesc": "Wiadomości w jednym miejscu",
    "longDesc": "Zaprojektowany z myślą o uczniach, których nauczyciele wiedzy o społeczeństwie wymagają pisania tzw. prasówek, czyli najnowszych, skróconych wiadomości z wybranych dziedzin. Ta aplikacja ten proces całkowicie ułatwia, działa na zasadzie czytnika RSS.",
    "license": "MIT",
    "sourceLink": "https://github.com/TheAdrik/short-news",
    "demoLink": "https://short-news.herokuapp.com/",
    "technologies": ["go", "css"]
}, {
    "id": "schoolbot",
    "name": "SchoolBot",
    "shortDesc": "Szkolny bot",
    "longDesc": "Pierwotnie zaprojektowany dla mojej klasy, obecnie możliwy do zaimplementowania w każdym oddziale CKZiU w Jaworznie. Ma ogrom funkcjonalności, są to m.in. zapisywanie i odczytywanie wydarzeń (np. zadań domowych, sprawdzianów) na dany dzień, podawanie najbliższych odjazdów autobusów, wysyłanie danych logowania do emaila klasowego, obecnej i następnej lekcji (+ czas jaki pozostał do końca), planu lekcji na podstawie Librusa i w formie zrzutu ekranu, liczenie działań matematycznych z pomocą Wolfram Alpha i wiele innych.",
    "license": "MIT",
    "sourceLink": "https://github.com/TheAdrik/SchoolBot",
    "demoLink": "javascript:void(0);",
    "technologies": ["nodejs"]
}, {
    "id": "moje-zdrowie",
    "name": "Moje Zdrowie",
    "shortDesc": "Aplikacja ułatwiająca zarządzanie lekami",
    "longDesc": "Stworzona na ogólnopolski konkurs Hack Heroes, maksymalnie ułatwia zarządzanie lekami (możliwość ich prostego skanowania, szukania, porównywania), sprawdzanie czy są refundowane, szukanie aptek w swoim otoczeniu oraz monitorowanie jakości powietrza na zewnątrz.",
    "license": "MIT",
    "sourceLink": "https://github.com/TheAdrik/moje-zdrowie",
    "demoLink": "https://moje-zdrowie.herokuapp.com/",
    "technologies": ["go", "css"]
}]

var technologies = [{
    "id": "js",
    "name": "Javascript",
    "link": "https://en.wikipedia.org/wiki/JavaScript"
}, {
    "id": "css",
    "name": "CSS",
    "link": "https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
}, {
    "id": "electron",
    "name": "Electron",
    "link": "https://electronjs.org/"
}, {
    "id": "go",
    "name": "Golang",
    "link": "https://golang.org/"
}, {
    "id": "firebase",
    "name": "Firebase",
    "link": "https://firebase.google.com/"
}, {
    "id": "jekyll",
    "name": "Jekyll",
    "link": "https://jekyllrb.com/"
}, {
    "id": "jquery",
    "name": "jQuery",
    "link": "https://jquery.com/"
}, {
    "id": "nodejs",
    "name": "Node.js",
    "link": "https://nodejs.org/en/about/"
}, {
    "id": "vue",
    "name": "Vue.js",
    "link": "https://vuejs.org/"
}]

function toggleProjectModal() {
    header.classList.toggle('block--blur');
    main.classList.toggle('block--blur');
    modalProject.classList.toggle('block--none');
    body.classList.toggle('block--scroll')
}

function showProjectInfo(name) {
    projects.forEach(el => {
        if (el.id == name) {
            projectTechnologies.innerHTML = "";
            projectName.innerHTML = el.name;
            projectShortDesc.innerHTML = el.shortDesc;
            projectLongDesc.innerText = el.longDesc;
            projectLicense.innerHTML = el.license;

            projectSource.href = el.sourceLink;
            projectDemo.href = el.demoLink;

            projectImg.src = `img/projects/${el.id}/0.jpg`
            projectImg.setAttribute("value", "0");
            projectImg.setAttribute("project", el.id);

            el.technologies.forEach(projectTech => {
                technologies.forEach(tech => {
                    if (projectTech == tech.id) {
                        let newEl = document.createElement("a");
                        newEl.href = tech.link;
                        newEl.title = tech.name;
                        let newImg = document.createElement("img");
                        newImg.src = `img/technologies/${tech.id}.jpg`
                        newEl.appendChild(newImg);
                        projectTechnologies.appendChild(newEl);
                    }
                });
            });

            toggleProjectModal();
        }
    })
}

function checkImageExists(imageUrl, callBack) {
    var imageData = new Image();
    imageData.onload = function () {
        callBack(true);
    };
    imageData.onerror = function () {
        callBack(false);
    };
    imageData.src = imageUrl;
}

function getImage(val) {
    let valNow = JSON.parse(projectImg.getAttribute("value"));
    let projectName = projectImg.getAttribute("project");
    let newVal = valNow + JSON.parse(val);

    if (newVal >= 0) {
        let newSrc = `img/projects/${projectName}/${newVal}.jpg`;
        checkImageExists(newSrc, function (imageExists) {
            if (imageExists) {
                projectImg.src = newSrc;
                projectImg.setAttribute("value", JSON.stringify(newVal));
            } else {
                projectImg.src = `img/projects/${projectName}/0.jpg`;
                projectImg.setAttribute("value", "0");
            }
        });
    }
}