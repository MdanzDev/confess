function sendEmail() {
    let message = document.getElementById('message');
    message.classList.remove('hidden');
    message.style.animation = "bounce 0.5s ease-in-out";

    // Create a hidden form to send the email
    let form = document.createElement("form");
    form.action = "https://formsubmit.co/nightmaremoon297@gmail.com";
    form.method = "POST";

    let inputEmail = document.createElement("input");
    inputEmail.type = "hidden";
    inputEmail.name = "email";
    inputEmail.value = "User has accepted your love! ❤️";

    let submitButton = document.createElement("input");
    submitButton.type = "submit";

    form.appendChild(inputEmail);
    form.appendChild(submitButton);
    document.body.appendChild(form);

    // Automatically submit the form
    form.submit();
}