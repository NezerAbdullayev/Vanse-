const buttonVisible=document.querySelector('#mobile-menu');
const menu2=document.querySelector('#menu-2');
buttonVisible.addEventListener('click',()=>{
   menu2.classList.toggle('visible')
})
const buttonHidden=document.querySelector('#menu-2  img');
buttonHidden.addEventListener('click', ()=>{
    menu2.classList.toggle('visible')
})
