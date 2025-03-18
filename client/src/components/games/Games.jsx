import { Link } from "react-router";
import { useFetchAllGames } from "../../hooks/useFetch";

export default function Games() {
    const [ games ] = useFetchAllGames('http://localhost:3030/data/games');
    
    return (
        <>
            <section id="catalog-page">
                <h1>All Games</h1>
                {/* Display div: with information about every game (if any) */}
                {games.length > 0 
                ?    games.map((post) => (<div key={post._id} className="allGames">
                        <div className="allGames-info">
                            <img src={post.imageUrl} />
                            <h6>{post.category}</h6>
                            <h2>{post.title}</h2>
                            <Link to={`/games/${post._id}`} className="details-button">
                                Details
                            </Link>
                            </div>
                        </div>
                    ))
                : <h3 className="no-articles">No articles yet</h3>
                }
               
                {/* <div className="allGames">
                    <div className="allGames-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>Zombie lang</h2>
                    <a href="#" className="details-button">
                        Details
                    </a>
                    </div>
                </div>
                <div className="allGames">
                    <div className="allGames-info">
                    <img src="./images/avatar-1.jpg" />
                    <h6>Action</h6>
                    <h2>MineCraft</h2>
                    <a href="#" className="details-button">
                        Details
                    </a>
                    </div>
                </div> */}
                {/* Display paragraph: If there is no games  */}
                {/* <h3 className="no-articles">No articles yet</h3> */}
            </section>
            </>
    );
}