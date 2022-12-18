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
const bannerGifLogo = document.querySelector('presentation-gif-logo')
const bannerGif = document.querySelector('presentation-gif-item')
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
          break;
        case 'heartstone':
          console.log('case heartstone');
          
          bannerTitle.innerHTML = 'Novo pacote de expansão de Heartstone'
          bannerTxt.innerHTML = 'A Horda e a Aliança se encontram no Vale Alterac para lutar.'
          bannerBtn.innerHTML = 'Reserve agora na pré-venda'
          // expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        case 'wow':
          console.log('case wow');
          // expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        default:
          console.log(`Sorry`);
      }

}