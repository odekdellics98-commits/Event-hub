// DELLIEPRIME GUEST REGISTRATION

const registrationForm = document.getElementById("registration-form");

if (registrationForm) {
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const guestName = document.getElementById("guest-name").value;
        const guestEmail = document.getElementById("guest-email").value;
        const guestPhone = document.getElementById("guest-phone").value;
        const attendance = document.getElementById("attendance").value;

        const guest = {
            name: guestName,
            email: guestEmail,
            phone: guestPhone,
            attendance: attendance
        };

        let registrations = JSON.parse(
            localStorage.getItem("dellieprimeGuests")
        ) || [];

        registrations.push(guest);

        localStorage.setItem(
            "dellieprimeGuests",
            JSON.stringify(registrations)
        );

        const msgElem = document.getElementById("registration-message");
        if (msgElem) {
            msgElem.textContent = "Thank you, " + guestName + "! Your interest has been recorded.";
        }

        registrationForm.reset();
    });
}

// HAMBURGER MENU FUNCTIONALITY

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // CLOSE MENU WHEN A LINK IS CLICKED
    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        });
    });
}
