import { Link } from 'react-router';
import localStorageUtils from '../../utils/localStorageUtils';
import { useEffect, useState } from 'react';
export default function Header({ setIsUser, isUser }) {
    const [isUserState, setIsUserState] = useState(localStorageUtils.isUser());

    useEffect(() => {
        setIsUserState(localStorageUtils.isUser());
    }, [isUser]);
 
    return (
        <>
            <header>
                <h1>
                    <Link to={'/'} className="home">
                    GamesPlay
                    </Link>
                </h1>
                <nav>
                    <Link to={'/games'}>All games</Link>
                    {isUser ? 
                    <div id="user">
                        <Link to={'/create-game'}>Create Game</Link>
                        <Link to={'/logout'}>Logout</Link>
                    </div>
                    : <div id="guest">
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </div>
                    }
                </nav>
            </header>
        </>
    );
}