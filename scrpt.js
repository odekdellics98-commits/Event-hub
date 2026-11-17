
// DELLIEPRIME GUEST REGISTRATION

const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", function(event) {

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

    document.getElementById("registration-message").textContent =
        "Thank you, " + guestName + "! Your interest has been recorded.";

    registrationForm.reset();

});