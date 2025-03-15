import Header from "./components/header/Header"
import Home from './components/home/Home';
import { Route, Routes } from 'react-router';
import Create from './components/create-game/Create';
import Games from './components/games/Games';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Details from "./components/game-details/Details";


function App() {
    return (
        <>
        <Header /> 
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/create-game'} element={<Create />} />
                <Route path={'/games'} element={<Games />} />
                <Route path={'/register'} element={<Register />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/games/:gameId'} element={<Details />} />
            </Routes>
        </>
    )
}

export default App