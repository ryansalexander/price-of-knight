export async function loadCard(gameNumber=2) {
    const response = await fetch('./games.json');
    const json = await response.json();
    return json["game-" + gameNumber];
}

export async function getCard(cardName="random") {
    if (cardName == "random") {
        let response = await fetch('https://api.scryfall.com/cards/random?q=is:first-printing usd>=2 in:paper in:nonfoil is:first-printing' , {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
        });
        console.log(response)
        let cardData = await response.json();
        console.log(cardData)
        return cardData;
    } else {
        let response = await fetch('https://api.scryfall.com/cards/named?exact=' + cardName.replaceAll(' ','+'), {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            }
        });
        console.log(response)
        let cardData = await response.json();
        console.log(cardData)
        return cardData;
    }
}
