import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"
import { useMemo } from "react"

export default function IndexPage() {
  const drinks = useAppStore((state) => state.drinks)
  console.log(drinks)

  const hasDrinks = useMemo (() => drinks.drinks.length, [drinks])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
      <h1 className="text-6xl font-extrabold">Inicio</h1>

      {hasDrinks ? (
        <>
          {/* <p>Sí hay bebidas</p> */}     

          {drinks.drinks.map((drink) => (
            <DrinkCard
              key={drink.idDrink}
              drink={drink}
            />
          ))}
          
        </>
      ) : (
        <p className="my-10 text-center text-2xl">
          No hay resultados aún, utiliza el formulario para buscar recetas
        </p>
      )}
    </div>
  )
}
