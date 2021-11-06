const menuBtn = document.getElementById('menuBtn'),
      menu = document.getElementById('navList');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('visible');
})