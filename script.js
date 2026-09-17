/* ================================
MINODI PORTFOLIO JAVASCRIPT
================================ */

/* ================================
TYPING EFFECT
================================ */

const roles = [
"Software Engineering Intern",
"Software Developer",
"Full Stack Developer",
"MLOps Enthusiast"
];

const typingText = document.querySelector(".hero h2");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

if (!typingText) return;

const currentRole = roles[roleIndex];

if (!deleting) {

    typingText.textContent =
        currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {

        deleting = true;

        setTimeout(typeEffect, 1800);

        return;
    }

} else {

    typingText.textContent =
        currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

        deleting = false;

        roleIndex++;

        if (roleIndex === roles.length) {
            roleIndex = 0;
        }
    }
}

const speed = deleting ? 50 : 100;

setTimeout(typeEffect, speed);


}

typeEffect();

/* ================================
SCROLL REVEAL ANIMATION
================================ */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},
{
    threshold: 0.15
}


);

sections.forEach(function (section) {
observer.observe(section);
});

/* ================================
ACTIVE NAVIGATION LINK
================================ */

const navLinks = document.querySelectorAll(".nav-links a");

const pageSections = document.querySelectorAll(
"section[id]"
);

window.addEventListener("scroll", function () {

let currentSection = "";

pageSections.forEach(function (section) {

    const sectionTop =
        section.offsetTop - 120;

    const sectionHeight =
        section.offsetHeight;

    if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
    ) {
        currentSection = section.getAttribute("id");
    }

});

navLinks.forEach(function (link) {

    link.classList.remove("active");

    if (
        link.getAttribute("href") ===
        "#" + currentSection
    ) {
        link.classList.add("active");
    }

});


});

/* ================================
NAVBAR SHADOW ON SCROLL
================================ */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

if (window.scrollY > 50) {

    header.style.boxShadow =
        "0 5px 20px rgba(0, 0, 0, 0.25)";

} else {

    header.style.boxShadow = "none";

}


});

/* ================================
BACK TO TOP BUTTON
================================ */

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.id = "backToTop";

document.body.appendChild(backToTop);

/* Back-to-top button styling */

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";

backToTop.style.width = "45px";
backToTop.style.height = "45px";

backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";

backToTop.style.background = "#38bdf8";
backToTop.style.color = "#082f49";

backToTop.style.fontSize = "22px";
backToTop.style.fontWeight = "bold";

backToTop.style.cursor = "pointer";

backToTop.style.display = "none";

backToTop.style.zIndex = "999";

backToTop.style.boxShadow =
"0 5px 15px rgba(0, 0, 0, 0.2)";

/* Show button after scrolling */

window.addEventListener("scroll", function () {

if (window.scrollY > 400) {

    backToTop.style.display = "block";

} else {

    backToTop.style.display = "none";

}


});

/* Scroll to top */

backToTop.addEventListener("click", function () {

window.scrollTo({
    top: 0,
    behavior: "smooth"
});


});

/* ================================
PROJECT CARD HOVER EFFECT
================================ */

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {

card.addEventListener("mouseenter", function () {

    card.style.transform =
        "translateY(-10px)";

});

card.addEventListener("mouseleave", function () {

    card.style.transform =
        "translateY(0)";

});


});

/* ================================
SKILL CARD INTERACTION
================================ */

const skillCards =
document.querySelectorAll(".skill");

skillCards.forEach(function (skill) {

skill.addEventListener("click", function () {

    skill.style.transform =
        "scale(1.05)";

    setTimeout(function () {

        skill.style.transform =
            "scale(1)";

    }, 200);

});


});

/* ================================
CURRENT YEAR IN FOOTER
================================ */

const footerText =
document.querySelector("footer p");

if (footerText) {

const currentYear =
    new Date().getFullYear();

footerText.innerHTML =
    `© ${currentYear} Minodi Devanga Wettasinghe. All Rights Reserved.`;


}

/* ================================
CONTACT EMAIL CLICK MESSAGE
================================ */

const emailLink =
document.querySelector('a[href^="mailto:"]');

if (emailLink) {

emailLink.addEventListener("click", function () {

    console.log(
        "Opening email client..."
    );

});


}

/* ================================
PAGE LOAD ANIMATION
================================ */

window.addEventListener("load", function () {

document.body.classList.add("loaded");


});
