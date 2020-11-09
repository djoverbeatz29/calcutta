function fetchSimplePlayerInfo() {
    const playerObjects = [];
    fetch('https://www.masters.com/en_US/players/player_list.html')
    .then(r=>r.json())
    .then(data=>{
        const players = document.querySelectorAll("section div[class='item media-card ']");
        players.forEach(player=>{
            const playerOb={};
            playerOb['imageURL'] = player.querySelector('img').src;
            playerOb['name'] = player.querySelector("div[class='name']").innerText;
            playerOb['country'] = player.querySelector("div[class='country']").innerText;
            playerObjects.push(playerOb);
        })
    })
    return playerObjects;
}