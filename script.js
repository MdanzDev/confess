function sendEmail() {
    let message = document.getElementById('message');
    message.classList.remove('hidden');
    message.style.animation = "bounce 0.5s ease-in-out";

    // Create a hidden form and submit it
    let form = document.createElement("form");
    form.action = "https://formsubmit.co/nightmaremoon297@gmail.com";
    form.method = "POST";

    let inputEmail = document.createElement("input");
    inputEmail.type = "hidden";
    inputEmail.name = "email";  // Required for FormSubmit
    inputEmail.value = "nightmaremoon297@gmail.com"; // Use a valid email

    let inputMessage = document.createElement("input");
    inputMessage.type = "hidden";
    inputMessage.name = "content"; // Change 'message' to 'content'
    inputMessage.value = "User has accepted your love! ❤️";

    let submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.style.display = "none";

    form.appendChild(inputEmail);
    form.appendChild(inputMessage);
    form.appendChild(submitButton);
    document.body.appendChild(form);

    form.submit();
}
