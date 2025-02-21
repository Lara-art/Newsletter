# Frontend Mentor - Article preview component solution

This is my solution to the <a href="https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv"> Article preview component on Frontend Mentor</a>.<br> Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Overview

### 💻 Screenshot

<table>
  <tr>
    <td style="width: 75%;"><img src="https://github.com/Lara-art/Newsletter/blob/main/screenshot/Desktop.png" alt="Vista de Escritorio" style="width: 100%;"/></td>
    <td style="width: 25%;"><img src="https://github.com/Lara-art/Newsletter/blob/main/screenshot/Mobile.png"  alt="Vista Móvil" style="width: 100%;"/></td>
  </tr>
  <tr>
    <td style="width: 75%;"><img src="https://github.com/Lara-art/Newsletter/blob/main/screenshot/Desktop-Success_Message.png" alt="Vista de Escritorio" style="width: 100%;"/></td>
    <td style="width: 25%;"><img src="https://github.com/Lara-art/Newsletter/blob/main/screenshot/Mobile-Success_Message.png"  alt="Vista Móvil" style="width: 100%;"/></td>
  </tr>
</table>

### 🔗 Links

- Solution URL: [Github](https://github.com/Lara-art/Newsletter)
- Live Site URL: [Deployed](https://lara-art.github.io/Newsletter)

## My process

### 👩‍💻 Built with

- Web font import
- CSS custom properties
- Basic CSS reset
- Base typography settings
- Image styling
- Use of Flexbox
- Use of Grid
- Mobile-first design
- Basic Javascript


### 📚 What I learned

With this exercise, I learned about form with javascript.


```javascript
document.addEventListener("DOMContentLoaded", function () {

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
        loginForm.style.display = "grid";
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

```
And Mobile-first design in CSS.

```css

@media screen and (min-device-width: 600px) {
    body{
        place-content: center;
    }
}

```


## ✨ Author

- Github - [Lara](https://github.com/Lara-art)
- Frontend Mentor - [@Lara-art](https://www.frontendmentor.io/profile/Lara-art)

## 📂 Repository

- All the challenges done: [Github](https://github.com/Lara-art/My-Frontend-Mentor-Repository)
