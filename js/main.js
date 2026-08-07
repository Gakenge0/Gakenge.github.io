/*==========================================
    PORTFOLIO MAIN.JS
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
        PRELOADER
    ==========================================*/

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {

        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

        setTimeout(() => {
            preloader.remove();
        }, 500);

    });

    /*==========================================
        AOS
    ==========================================*/

    AOS.init({

        duration: 1000,

        once: true,

        offset: 100

    });

    /*==========================================
        NAVBAR
    ==========================================*/

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

    /*==========================================
        SCROLL PROGRESS BAR
    ==========================================*/

    const progress = document.getElementById("progress-bar");

    window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const percentage = (scrollTop / scrollHeight) * 100;

        progress.style.width = percentage + "%";

    });

    /*==========================================
        BACK TO TOP
    ==========================================*/

    const backButton = document.getElementById("backToTop");

   window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backButton.classList.add("show");

    } else {

        backButton.classList.remove("show");

    }

});

    backButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*==========================================
        TYPING EFFECT
    ==========================================*/

    const typing = document.getElementById("typing-text");

    const titles = [

        "Geospatial Engineer",

        "GIS Analyst",

        "Python Developer",

        "Remote Sensing Specialist"

    ];

    let titleIndex = 0;

    setInterval(() => {

        titleIndex++;

        if (titleIndex >= titles.length) {

            titleIndex = 0;

        }

        typing.textContent = titles[titleIndex];

    }, 2500);

    /*==========================================
        COUNTERS
    ==========================================*/

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = +counter.dataset.target;

            const count = +counter.innerText;

            const increment = Math.ceil(target / 60);

            if (count < target) {

                counter.innerText = count + increment;

                setTimeout(updateCounter, 30);

            }

            else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

    /*==========================================
        ACTIVE NAVIGATION
    ==========================================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.href.includes(current)) {

                link.classList.add("active");

            }

        });

    });

});

/*==========================================
    LEAFLET MAP
==========================================*/

const mapContainer = document.getElementById("leaflet-map");

if (mapContainer) {

    const map = L.map("leaflet-map").setView([-0.3031, 36.0800], 7);

    const streetLayer = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors"
        }
    );

    const satelliteLayer = L.tileLayer(
        "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors"
        }
    );

    streetLayer.addTo(map);

    L.control.layers(
        {
            "Street Map": streetLayer,
            "Alternative View": satelliteLayer
        }
    ).addTo(map);

    /* ==========================================
       PROJECT MARKERS
    ========================================== */

    L.marker([-0.4246, 36.9476])
        .addTo(map)
        .bindPopup("<strong>Nyeri County</strong><br>Surveying & GIS Projects");

    L.marker([-0.6340, 35.3153])
        .addTo(map)
        .bindPopup("<strong>Konoin Constituency</strong><br>Deforestation & Soil Erosion Research");

    L.marker([-1.2864, 36.8172])
        .addTo(map)
        .bindPopup("<strong>Nairobi</strong><br>University of Nairobi & Professional Experience");

}

/*==========================================
    DARK MODE
==========================================*/

const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeButton.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");

    }

});

/*==========================================
    LOAD SAVED THEME
==========================================*/

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    const icon = themeButton.querySelector("i");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

}

/*==========================================
    MOBILE MENU
==========================================*/

const menuLinks = document.querySelectorAll(".navbar-collapse .nav-link");

const navbarCollapse = document.querySelector(".navbar-collapse");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth < 992) {

            bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();

        }

    });

});

/*==========================================
    SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});

console.log("Portfolio Loaded Successfully 🚀");
