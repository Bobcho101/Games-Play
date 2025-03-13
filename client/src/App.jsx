import './Typography.css';
import './Global.css';
import Header from "./components/header/Header"
import Home from './components/home/Home';
import { Route, Routes } from 'react-router';


function App() {
    return (
        <>
        <Header /> 
            <Routes>
                <Route path={'/'} element={<Home />} />
            </Routes>
        </>
    )
}

export default App