const menuBtn = document.getElementById('menuBtn'),
      menu = document.getElementById('navList'),
      strategies = document.querySelector('.strategies__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('visible');
})

console.log("Hi");

