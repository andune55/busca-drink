import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout'
import IndexPage from './views/IndexPage'
import FavoritesPage from './views/FavoritesPage'
    
export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/busca-drink/" element={<IndexPage/>} index />
                    <Route path="/busca-drink/favoritos" element={<FavoritesPage/>}/>   
                </Route>         
            </Routes>
        </BrowserRouter>
    )
}
    