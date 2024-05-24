//Hamburger Menu

const hamburger=document.querySelector('.hamburger-menu');
const list=document.querySelector('#nav-menu');

hamburger.addEventListener('click', ()=>{
     list.classList.toggle('slide');
});