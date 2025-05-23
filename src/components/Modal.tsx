import { Dialog, Transition } from '@headlessui/react'
import { Fragment,JSX } from 'react'
import { useAppStore } from '../stores/useAppStore'
import { Recipe } from '../types/index'
export default function Modal() {

  const modal = useAppStore((state) => state.modal)
  const closeModal = useAppStore((state) => state.closeModal)
  const selectedRecipe = useAppStore((state) => state.selectedRecipe)

  const renderIngredients = () => {
    const ingredients : JSX.Element[] = []
    for (let i = 1; i <= 6; i++) {
      const ingredient = selectedRecipe[`strIngredient${i}` as keyof Recipe]
      const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe]
      if (ingredient && measure) {
        ingredients.push(
          <li key={i} className="text-lg text-gray-500">
             {ingredient} - {measure}
          </li>
        )
      }
    }
    return ingredients.length > 0 ? (
      <ul className="list-disc pl-5">
        {ingredients}
      </ul>
    ) : (
      <p className="text-gray-500">No hay ingredientes disponibles.</p>
    )
    return <p>Desde render Ingredients</p>
  }

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                  <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                      {selectedRecipe.strDrink}
                  </Dialog.Title>

                  <img 
                    src={selectedRecipe.strDrinkThumb} 
                    alt={`Imagen de ${selectedRecipe.strDrink}`} 
                    className='mx-auto w-96'
                  />
                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Ingredientes y Cantidades
                  </Dialog.Title>

                  {renderIngredients()}
                  <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                    Instrucciones
                  </Dialog.Title>

                  <p className="text-gray-500 text-base">
                    {selectedRecipe.strInstructions}
                  </p>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}