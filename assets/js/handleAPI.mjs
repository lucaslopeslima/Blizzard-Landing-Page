console.log('handleAPI.js ON')
const url = 'https://api.brchallenges.com/api/blizzard/games'

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