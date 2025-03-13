import './Typography.css';
import './Global.css';
import Header from "./components/header/Header"
import Home from './components/home/Home';
import { Route, Routes } from 'react-router';
import Create from './components/create-game/Create';


function App() {
    return (
        <>
        <Header /> 
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/create-game'} element={<Create />} />
            </Routes>
        </>
    )
}

export default App