//import games from "backend/games/games.json" assert { type: "json" };

export async function getCard(cardName="random") {
    if (cardName == "random") {
        let response = await fetch('https://api.scryfall.com/cards/random?q=is:first-printing usd>=2 in:paper in:nonfoil' , {
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
