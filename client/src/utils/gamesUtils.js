const baseUrl = 'http://localhost:3030/jsonstore/games';

export default async function createGame(newGameData){
    try{
        return await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({newGameData})
        })
    } catch(err){
        return console.log(err.message);
    }
}