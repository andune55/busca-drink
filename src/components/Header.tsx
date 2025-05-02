import { useMemo, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom' 
import { useAppStore } from '../stores/useAppStore'
// import Menu from './Menu'

export default function Header() {

  const {pathname} = useLocation()
  //console.log(pathname)
  const isHome = useMemo (() => pathname=== '/busca-drink/', [pathname])

  const fetchCategories = useAppStore((state) => state.fetchCategories)
  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <header className={isHome ? 'bg-[url(./bg.jpg)] bg-center bg-cover' : 'bg-slate-800'}>
    {/* <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}> */}
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
            <div>
                <img className="w-32" src="./logo.svg" alt="logotipo" />
            </div>

            {/* <Menu /> */}

            <nav className='flex gap-4'>    
              <NavLink 
                end
                to="/busca-drink/" 
                className={({isActive}) => 
                  isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                  }>Inicio</NavLink>                    
              <NavLink 
                to="/busca-drink/favoritos" 
                className={({isActive}) => 
                  isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                }>Favoritos</NavLink>                    
            </nav>
          </div>

          {isHome && (
            <form
              className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6'
            >
              <div className='space-y-4'>
                <label 
                  htmlFor="ingredient"
                  className="block text-white uppercase font-extrabold text-lg"
                >Nombre o Ingredientes</label>

                <input 
                  id="ingredient"
                  type="text" 
                  name="ingredient"
                  className='p-3  w-full rounded-lg focus:outline-none bg-white'
                  placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Café"
                />
              </div>

              <div className='space-y-4'>
                <label 
                  htmlFor="categoria"
                  className="block text-white uppercase font-extrabold text-lg"
                >Categoría</label>

                <select 
                  id="categoria"
                  name="categoria"
                  className='p-3  w-full rounded-lg focus:outline-none bg-white'
                >
                  <option value="">-- Seleccione --</option>
                </select>
              </div>
              <input 
                type="submit"
                value="Buscar Recetas" 
                className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase'/>
            </form>
          )}

        </div>
    </header>
  )
}
