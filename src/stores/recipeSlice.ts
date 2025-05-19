import { StateCreator } from 'zustand'
import { getCategories, getRecipes } from '../services/RecipeService.ts'
import type { Categories, Drinks, SearchFilter } from '../types/index.ts'

export type RecipesSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter ) => Promise<void>
}
export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        console.log(categories)
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        //console.log(filters)
        const drinks = await getRecipes(filters)
        console.log(drinks)
        set({
            drinks
        })
    }
})