document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");

    if (name === "" || email === "" || password === "") {
        message.textContent = "Please fill all fields";
        message.style.color = "red";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = "Enter a valid email";
        message.style.color = "red";
    } else {
        message.textContent = "Registration successful!";
        message.style.color = "green";
    }
});
