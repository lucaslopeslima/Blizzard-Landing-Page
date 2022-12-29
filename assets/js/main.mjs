console.log('main.js ON')
const footerBtn = document.querySelector('.footer-btn')
//console.log(footerBtn)
//console.log(window.navigator.userAgent)
if (window.navigator.userAgent.indexOf("Windows")!= -1) footerBtn.innerHTML = `<i class="fa-brands fa-windows"></i><span>Baixar para Windows</span>`;
if (window.navigator.userAgent.indexOf("Linux")!= -1) footerBtn.innerHTML = `<i class="fa-brands fa-linux"></i><span>Baixar para Linux</span>`;
if (window.navigator.userAgent.indexOf("Mac")!= -1) footerBtn.innerHTML = `<i class="fa-brands fa-apple"></i><span>Baixar para Mac OS</span>`;

const logarBtn = document.querySelector('.btn-logar')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal-close')
//console.log('logarBtn é', logarBtn)
logarBtn.addEventListener('click', ()=>{
    modal.style.display = 'flex'
})
modalClose.addEventListener('click', ()=>{
    modal.style.display = 'none'
})