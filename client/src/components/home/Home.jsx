import useFetch from "../../hooks/useFetch";

export default function Home() {
    const [ games ] = useFetch('http://localhost:3030/jsonstore/games');

    const newGames = games.slice().reverse().slice(0, 3);
    
    
    return (
        <>
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="/images/four_slider_img01.png" alt="hero" />
            <div id="home-page">
                <h1>Latest Games</h1>
                {/* Display div: with information about every game (if any) */}

                {newGames.length > 0 ? newGames.map((post) => 
                <div key={post[0]} className="game">
                    <div className="image-wrap">
                        <img src={post[1].imageUrl} />
                    </div>
                    <h3>{post[1].title}</h3>
                    <div className="rating">
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                        <span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">
                        Details
                        </a>
                    </div>
                </div>) : <p className="no-articles">No games yet</p>}
                {/* <div className="game">
                <div className="image-wrap">
                    <img src="/images/CoverFire.png" />
                </div>
                <h3>Cover Fire</h3>
                <div className="rating">
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                </div>
                <div className="data-buttons">
                    <a href="#" className="btn details-btn">
                    Details
                    </a>
                </div>
                </div> */}
                {/* <div className="game">
                <div className="image-wrap">
                    <img src="/images/ZombieLang.png" />
                </div>
                <h3>Zombie Lang</h3>
                <div className="rating">
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                </div>
                <div className="data-buttons">
                    <a href="#" className="btn details-btn">
                    Details
                    </a>
                </div>
                </div>
                <div className="game">
                <div className="image-wrap">
                    <img src="/images/MineCraft.png" />
                </div>
                <h3>MineCraft</h3>
                <div className="rating">
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                </div>
                <div className="data-buttons">
                    <a href="#" className="btn details-btn">
                    Details
                    </a>
                </div> 
                 </div> */}
                {/* Display paragraph: If there is no games  */}
                {/* <p className="no-articles">No games yet</p> */}
            </div>
            </section>

        </>
    );
}