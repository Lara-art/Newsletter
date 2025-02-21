# Frontend Mentor - Article preview component solution

This is my solution to the <a href="https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT"> Article preview component on Frontend Mentor</a>.<br> Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Overview

### 💻 Screenshot

<table>
  <tr>
    <td style="width: 75%;"><img src="https://github.com/Lara-art/Article-preview-component/blob/main/screenshot/Desktop.png" alt="Vista de Escritorio" style="width: 100%;"/></td>
    <td style="width: 25%;"><img src="https://github.com/Lara-art/Article-preview-component/blob/main/screenshot/Desktop-active.png"  alt="Vista de Escritorio activo" style="width: 100%;"/></td>
  </tr>
  <tr>
    <td style="width: 75%;"><img src="https://github.com/Lara-art/Article-preview-component/blob/main/screenshot/Mobile.png" alt="Vista Móvil" style="width: 100%;"/></td>
    <td style="width: 25%;"><img src="https://github.com/Lara-art/Article-preview-component/blob/main/screenshot/Mobile-active.png"  alt="Vista Móvil activo" style="width: 100%;"/></td>
  </tr>
</table>

### 🔗 Links

- Solution URL: [Github](https://github.com/Lara-art/Article-preview-component)
- Live Site URL: [Deployed](https://lara-art.github.io/Article-preview-component)

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

With this exercise, I learned about the javascript and ::after.


```javascript

   function share() {
      let profile = document.querySelector('.profile');
      let icons = document.querySelector('.icons');
      let user = document.querySelector('.user');
      let share = document.querySelector('.share');

      if (icons.style.display === 'none') {
        icons.style.display = 'flex';
        if (window.matchMedia("(max-width: 600px)").matches) {
          profile.style.display = 'none';
          user.style.backgroundColor = '#48546a';

        }
      } else {
        icons.style.display = 'none';
        profile.style.display = 'flex';
        user.style.backgroundColor = '#ffffff';
      }
    }

```
And ::after.

```css

 .icons::after {
        content: "";
        position: absolute;
        bottom: -50%;
        left: 52%;
        transform: translateX(-50%);
        border-width: 15px;
        border-style: solid;
        border-color: var(--color-Grayish-Blue) transparent transparent transparent;
    }

```


## ✨ Author

- Github - [Lara](https://github.com/Lara-art)
- Frontend Mentor - [@Lara-art](https://www.frontendmentor.io/profile/Lara-art)

## 📂 Repository

- All the challenges done: [Github](https://github.com/Lara-art/My-Frontend-Mentor-Repository)
