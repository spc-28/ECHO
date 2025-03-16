import { RecoilRoot } from 'recoil'
import './App.css'
import DashBoard from './pages/dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/authPage';
import Home from './pages/home';


function App() {

    return (
        <BrowserRouter>
            <RecoilRoot>
                <Routes>
                    <Route path='/dashboard' element={<DashBoard />}></Route>
                    <Route path='/auth' element={<AuthPage />}></Route>
                    <Route path='/' element={<Home />}></Route>
                </Routes>
            </RecoilRoot>
        </BrowserRouter>
    )
}

export default App
