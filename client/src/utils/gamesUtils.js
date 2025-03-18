const baseUrl = 'http://localhost:3030/data/games';

export default async function createGame(newGameData, accessToken){
    try{
        return await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": accessToken
            },
            body: JSON.stringify(newGameData)
        })
    } catch(err){
        console.log(err.message);
        return {error: err.message}
    }
}