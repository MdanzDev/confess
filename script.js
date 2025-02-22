function sendEmail() {
    let message = document.getElementById('message');
    message.classList.remove('hidden');
    message.style.animation = "bounce 0.5s ease-in-out";

    fetch("https://formsubmit.co/ajax/nightmaremoon297@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "User has accepted your love! ❤️" })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Email sent:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
