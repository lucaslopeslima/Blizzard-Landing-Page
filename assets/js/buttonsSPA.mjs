console.log('buttonsSPA.js ON')

const leftBtn = document.querySelectorAll('.left-menu-item')
//console.log(leftBtn)

for(let i = 0; i < leftBtn.length; i++){
    //console.log(sectBtn[i])
    leftBtn[i].addEventListener('click', function(){
        let currentBtn = document.querySelectorAll('.left-menu-active')
        currentBtn[0].className = currentBtn[0].className.replace('left-menu-active', '')
        this.className += ' left-menu-active'
        //console.log('this é ', this.id)
        //console.log('this typeof é ', typeof(this.id))
        updateBanner(this.id)
    })
}
const banner = document.querySelector('header')
const bannerTitle = document.querySelector('.banner-title')
const bannerTxt = document.querySelector('.banner-txt')
const bannerBtn = document.querySelector('.banner-btn')
const bannerGifLogo = document.querySelector('.presentation-gif-logo')
const bannerGif = document.querySelector('.presentation-gif-item')
const progressBar = document.querySelector('.header-progress-bar')
//console.log(bannerGifLogo)
//console.log(bannerGif)
//console.log(banner)
//console.log(bannerTitle)
//console.log(bannerTxt)
//console.log(bannerBtn)
function updateBanner(prop){
    //console.log('prop é ',prop)
    //console.log('prop typeof é ',typeof(prop))
    banner.className = prop
    switch (prop) {
        case 'diabloiv':
          console.log('case diabloiv');
          bannerTitle.innerHTML = 'Retorne à escuridão com o game DiabloIV'
          bannerTxt.innerHTML = 'O retorno de Lilith traz uma era de escuridão e sofrimento.'
          bannerBtn.innerHTML = 'jogue agora'
          bannerGifLogo.className = 'presentation-gif-logo diabloiv-gif-logo'
          bannerGif.className = 'presentation-gif-item flex-center diablo-gif'
          progressBar.style.width = '30%'
          break;
        case 'heartstone':
          console.log('case heartstone');
          bannerTitle.innerHTML = 'Novo pacote de expansão de Heartstone'
          bannerTxt.innerHTML = 'A Horda e a Aliança se encontram no Vale Alterac para lutar.'
          bannerBtn.innerHTML = 'Reserve agora na pré-venda'
          bannerGifLogo.className = 'presentation-gif-logo heartstone-gif-logo'
          bannerGif.className = 'presentation-gif-item flex-center heartstone-gif'
          progressBar.style.width = '50%'
          break;
        case 'wow':
          console.log('case wow');
          bannerTitle.innerHTML = 'Desbrave as Terras Sombrias e Shadowlands!'
          bannerTxt.innerHTML = 'O que faz além do mundo que você conhece?.'
          bannerBtn.innerHTML = 'Reserve agora na pré-venda'
          bannerGifLogo.className = 'presentation-gif-logo wow-gif-logo'
          bannerGif.className = 'presentation-gif-item flex-center wow-gif'
          progressBar.style.width = '70%'
          break;
        default:
          console.log(`Sorry`);
      }

}