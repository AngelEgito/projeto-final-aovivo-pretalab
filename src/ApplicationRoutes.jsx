import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Menu } from './components/Menu'
import { Contato } from './pages/Contato'

import { Home } from './pages/Home'
import { Sobre } from './pages/Sobre'
import { Portfolio } from './pages/Portfolio'

export function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contato' element={<Contato />} />
            </Routes>
        </BrowserRouter>
    )
}