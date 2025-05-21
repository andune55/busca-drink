import { StateCreator } from 'zustand'
import { getCategories, getRecipeById, getRecipes } from '../services/RecipeService.ts'
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from '../types/index.ts'

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    selectedRecipe: Recipe
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter ) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) =>Promise<void>
}
export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe:{} as Recipe,
    fetchCategories: async () => {
        const categories = await getCategories()
        console.log(categories)
        set({
            categories: categories
        })
    },
    searchRecipes: async (filters) => {
        //console.log(filters)
        const drinks = await getRecipes(filters)
        //console.log(drinks)
        set({
            drinks: drinks
        })
    },
    selectRecipe: async (id) => {
        //console.log(id)
        const selectedRecipe = await getRecipeById(id) 
        //console.log(selectedRecipe)
        set({
            selectedRecipe
        })
    }
}) 
 
 
 
 
 
 
 
