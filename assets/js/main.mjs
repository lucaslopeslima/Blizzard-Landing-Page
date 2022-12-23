console.log('main.js ON')
const footerBtn = document.querySelector('.footer-btn')
console.log(footerBtn)
console.log(window.navigator.userAgent)
if (window.navigator.userAgent.indexOf("Windows")!= -1) footerBtn.innerHTML = `<i class="fa-brands fa-windows"></i><span>Baixar para Windows</span>`;
if (window.navigator.userAgent.indexOf("Linux")!= -1) footerBtn.innerHTML = `<i class="fa-brands fa-linux"></i><span>Baixar para Linux</span>`;
if (window.navigator.userAgent.indexOf("Mac")!= -1) footerBtn.innerHTML = `<i class="fa-brands fa-apple"></i><span>Baixar para Mac OS</span>`;



const leftMenuInterval = document.querySelectorAll('.left-menu-item')

//setInterval(menuInterval, 1000);

function menuInterval() {
    for(let i = 0; i < leftMenuInterval.length; i++){
        //console.log(leftMenuInterval[i])
        let currentLeftBtn = document.querySelectorAll('.left-menu-active')
        currentLeftBtn[0].className = currentLeftBtn[0].className.replace('left-menu-active', '')
        this.className += ' left-menu-active'
        //console.log('this é ', this.id)
        //console.log('this typeof é ', typeof(this.id))
        //updateBanner(this.id)
        
    }
}