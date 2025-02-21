document.addEventListener("DOMContentLoaded", function () {
    function media() {
        //Cambio de imagen en pantallas pequeñas
        let image = document.querySelector("#img");
        let mediaQuery = window.matchMedia("(max-width: 800px)");

        if (mediaQuery.matches) {
            image.src = "assets/images/illustration-sign-up-mobile.svg";
        } else {
            image.src = "assets/images/illustration-sign-up-desktop.svg";
        }

    }

    
    // Validamos el email
    function validateEmail(email) {
        if (!email) return "Email is required";

        const isValidEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
        if (!isValidEmail.test(email)) {
            return "Please enter a valid email";
        }

        return "";
    }

    // Errores en el email
    function handleSignupFormSubmit(e) {
        e.preventDefault();
        const email = emailInput.value.trim();
        const emailErrorMessage = validateEmail(email);

        if (emailErrorMessage) {
            emailErrorMessageElement.innerText = emailErrorMessage;
            emailErrorMessageElement.style.color = "red";
            emailErrorMessageElement.style.fontSize = "11px";
            emailErrorMessageElement.style.fontWeight = "500";
            emailInput.style.border = "2px solid red";
        } else {
            emailErrorMessageElement.innerText = "";
            emailInput.style.border = "2px solid green";

            showSuccessMessage();
        }
    }

    // Sin errores en el email
    function showSuccessMessage() {
        const successMessage = document.querySelector(".success");
        const loginForm = document.querySelector(".login");

        loginForm.style.display = "none";
        successMessage.style.display = "flex";
    }

    // Volvemos a la pantalla principal
    function returnToLogin() {
        const successMessage = document.querySelector(".success");
        const loginForm = document.querySelector(".login");

        successMessage.style.display = "none";
        loginForm.style.display = "flex";
    }

    media();
    window.addEventListener("resize", media);



    // Volvemos a la pantalla principal
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('return-button')) {
            returnToLogin();
        }
    });

    const signupForm = document.getElementById("signup-form");
    const emailInput = document.getElementById("email");
    const emailErrorMessageElement = document.querySelector(".email-error");

    signupForm.addEventListener("submit", handleSignupFormSubmit);
})
