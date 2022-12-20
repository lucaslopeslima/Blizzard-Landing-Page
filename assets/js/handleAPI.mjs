console.log('handleAPI.js ON')
const url = 'https://api.brchallenges.com/api/blizzard/games'
const dropdownJogos = document.querySelector('.dropdown-jogos')
const dropdownEsportes = document.querySelector('.dropdown-esportes')
console.log(dropdownJogos)


fetch(url).then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data)
    data.forEach(element => {
        //console.log(element)
        //console.log(element.logo)
        //criarDropdownJogos(element.logo, element.name)
    });
}).catch(e => {
    console.log(e);
    return e;
});




function criarDropdownJogos(logo, titulo){
    console.log('entrou na function')
    dropdownJogos.innerHTML += 
    `<div class="dropdownJogosItem">
        <a href="" target="_blank" rel="noopener">
            <img src="${logo}" alt="">
            <div class="blog-text">
            <h4>${titulo}</h4>
            <p></p>
            </div>
        </a>
    </div>`;
}