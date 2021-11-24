console.log("Data :", window.data);

function createCardTitle() {
    const h2El = document.createElement("h2");
    h2El.setAttribute("class", "card--title");
    return h2El;
}


function cardText(pokemonCard) {
    const ulEl = document.createElement("ul");
    ulEl.setAttribute("class", "card--text");
    ulEl.style.listStyle = "none";

    const arrayOfStats = ["HP", "ATTACK", "DEFENSE", "SPECIAL-ATTACK", "SPECIAL-DEFENSE", "SPEED"];

    for (let i = 0; i < arrayOfStats.length; i++) {
        const name = arrayOfStats[i];
        const value = pokemonCard.stats[i].base_stat;
        const liEl = document.createElement("li");
        liEl.innerText = `${name}: ${value}`;
        ulEl.append(liEl);
    }
    return ulEl;
}
function cardImage(pokemonCard) {
    const imgEl = document.createElement("img");
    imgEl.setAttribute("width", "256");
    imgEl.setAttribute("class", "card--img");
    imgEl.src = pokemonCard.sprites.other["official-artwork"].front_default;
    return imgEl;
}

function textGames(pokemonCard) {
    const ulEl = document.createElement("ul");
    ulEl.setAttribute("class", "card--text");
    ulEl.style.listStyle = "none";
    ulEl.innerText = "Appeared in:";

    const showedGame = pokemonCard.game_indices.map(function (game) {
        return game.version.name;
    });
    for (const game of showedGame) {
        const liEl = document.createElement("li");
        liEl.innerText = `${game}`;
        ulEl.append(liEl);
    }
    return ulEl;
}

function card(pokemonCard) {
    const liEl = document.createElement("li");
    liEl.setAttribute("class", "card");
    liEl.append(createCardTitle(pokemonCard), cardImage(pokemonCard), cardText(pokemonCard), textGames(pokemonCard));
    ulMainEl.append(liEl);
}

const ulMainEl = document.querySelector(".cards");
ulMainEl.style.listStyle = " none";
for (const pokemon of data) {
    card(pokemon);
}






// function addCard(pokemonName,imgSrc,hp,att,def,spcAtt,spcDef,speed,games){
//     //Main li
//     const cardLiEl = document.createElement('li')
//     cardLiEl.setAttribute('class','card')
//     document.querySelector('ul.cards').append(cardLiEl)
//     //H2
//     const h2El = document.createElement('h2')
//     h2El.setAttribute('class','card--title')
//     h2El.textContent= pokemonName
//     cardLiEl.append(h2El)
//     //Img
//     const imgEl = document.createElement('img')
//     imgEl.setAttribute('width',256)
//     imgEl.setAttribute('class','card--img')
//     imgEl.setAttribute('src',imgSrc)
//     cardLiEl.append(imgEl)
//     //ul
//     const ulEl = document.createElement('ul')
//     ulEl.setAttribute('class','card--text')
//     cardLiEl.append(ulEl)
//     //Multiple li
//     const liHp = document.createElement('li')
//     liHp.textContent= `HP: ${hp}`
//     ulEl.append(liHp)
//     const liAtt = document.createElement('li')
//     liAtt.textContent= `ATTACK: ${att}`
//     ulEl.append(liAtt)
//     const liDef = document.createElement('li')
//     liDef.textContent= `DEFENSE: ${def}`
//     ulEl.append(liDef)
//     const liSpcAtt = document.createElement('li')
//     liSpcAtt.textContent= `SPECIAL ATTACK: ${spcAtt}`
//     ulEl.append(liSpcAtt)
//     const liSpcDef = document.createElement('li')
//     liSpcDef.textContent=`SPECIAL DEFENSE: ${spcDef}`
//     ulEl.append(liSpcDef)
//     const liSpeed = document.createElement('li')
//     liSpeed.textContent=`SPEED: ${speed}`
//     ulEl.append(liSpeed)
//     const liGames = document.createElement('li')
//     liGames.textContent=`Games: ${games}`
//     ulEl.append(liGames)
//
// }
//
// for(let element of data){
//     let gamesText = ''
//     for(let game of element.game_indices){
//         gamesText += game.version.name + ", "
//     }
//     addCard(element.name,element.sprites.other['official-artwork'].front_default,element.stats[0].base_stat,element.stats[1].base_stat,element.stats[2].base_stat,element.stats[3].base_stat,element.stats[4].base_stat,element.stats[5].base_stat,gamesText)
// }
