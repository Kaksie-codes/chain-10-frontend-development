const menuBtn = document.querySelector('#menu-icon');
const closeBtn = document.querySelector('.close-icon');
const navLinks = document.querySelector('.nav-links');

console.log(menuBtn);

// For opening the mobile navbar
menuBtn.addEventListener('click', () => {
    navLinks.classList.add('show')
})


// For closing the mobile navbar
closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('show')
})