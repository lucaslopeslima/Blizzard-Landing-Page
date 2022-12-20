console.log('handleAPI.js ON')
const url = 'https://api.brchallenges.com/api/blizzard/games'
const dropdownJogos = document.querySelector('.dropdown-jogos')
const dropdownEsportes = document.querySelector('.content-esportes')
console.log(dropdownJogos)


fetch(url).then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data)
    data.forEach(element => {
        //console.log(element)
        //console.log(element.logo)
        criarDropdownJogos(element.logo, element.name)
    });
}).catch(e => {
    console.log(e);
    return e;
});




function criarDropdownJogos(logo, titulo){
    console.log('entrou na function')
    dropdownJogos.innerHTML += 
    `<div class="dropdown-jogos-item">
        <img src="${logo}" alt="${titulo}">
        <div class="blog-text">
            <p>${titulo}</p>
        </div>
    </div>`;
}