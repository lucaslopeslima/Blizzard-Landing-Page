console.log('handleAPI.js ON')
const url = 'https://api.brchallenges.com/api/blizzard/games'
const dropdownJogos = document.querySelector('.dropdown-jogos')
const dropdownEsportes = document.querySelector('.dropdown-esportes')



fetch(url).then((res)=>{
    return res.json()
}).then((data)=>{
    console.log(data)
    data.forEach(element => {
        console.log(element)

    });
}).catch(e => {
    console.log(e);
    return e;
});