const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value;
    const dob = document.getElementById("dob").value;
    const address = document.getElementById("address").value.trim();

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (name === "") {
        showMessage("Please enter your name.");
        return;
    }

    if (email === "") {
        showMessage("Please enter your email.");
        return;
    }

    if (phone === "") {
        showMessage("Please enter your phone number.");
        return;
    }

    if (!gender) {
        showMessage("Please select your gender.");
        return;
    }

    if (course === "") {
        showMessage("Please select a course.");
        return;
    }

    if (dob === "") {
        showMessage("Please select your date of birth.");
        return;
    }

    if (address === "") {
        showMessage("Please enter your address.");
        return;
    }

    message.textContent =
        "✅ Registration successful! Welcome, " + name + ".";

    message.style.color = "green";

    form.reset();
});

function showMessage(text) {
    message.textContent = "❌ " + text;
    message.style.color = "red";
}
