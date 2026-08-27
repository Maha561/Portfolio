/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");


    if (navMenu.classList.contains("open")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});


/* Close menu when clicking a link */

const navLinks =
    document.querySelectorAll("nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuBtn.textContent = "☰";

    });

});



/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");


    if (
        document.body.classList.contains("light-mode")
    ) {

        themeToggle.textContent = "☀️";

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});


/* Load saved theme */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeToggle.textContent = "☀️";

}



/* =====================================================
   TYPING EFFECT
===================================================== */

const typingText =
    document.getElementById("typingText");


const roles = [

    "Software Developer",

    "Full Stack Developer",

    "Java Developer",

    "Web Developer"

];


let roleIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];


    /* Typing */

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        /* Finished typing */

        if (
            charIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1200
            );

            return;

        }

    }


    /* Deleting */

    else {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        /* Finished deleting */

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;


            if (
                roleIndex >=
                roles.length
            ) {

                roleIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 80
    );

}


typeEffect();



/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;


        if (
            window.scrollY >=
            sectionTop
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});



/* =====================================================
   IMAGE LIGHTBOX
===================================================== */

function openImage(imageSrc) {

    const modal =
        document.getElementById(
            "imageModal"
        );


    const modalImage =
        document.getElementById(
            "modalImage"
        );


    modalImage.src = imageSrc;


    modal.classList.add("show");


    document.body.style.overflow =
        "hidden";

}



/* =====================================================
   CLOSE IMAGE
===================================================== */

function closeImage() {

    const modal =
        document.getElementById(
            "imageModal"
        );


    modal.classList.remove("show");


    document.body.style.overflow =
        "";

}



/* =====================================================
   CLOSE WHEN CLICKING OUTSIDE
===================================================== */

document
    .getElementById("imageModal")
    .addEventListener(
        "click",
        event => {

            if (
                event.target.id ===
                "imageModal"
            ) {

                closeImage();

            }

        }
    );



/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeImage();

        }

    }
);
