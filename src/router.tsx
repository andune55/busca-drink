import { BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexPage from './views/IndexPage'
import FavoritesPage from './views/FavoritesPage'
    
export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/busca-drink/" element={<IndexPage/>}/>
                <Route path="/busca-drink/favoritos" element={<FavoritesPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
    