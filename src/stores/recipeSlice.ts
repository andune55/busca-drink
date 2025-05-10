import { StateCreator } from 'zustand'
import { getCategories } from '../services/RecipeService.ts'
import type { Categories, SearchFilter } from '../types/index.ts'

export type RecipesSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter ) => Promise<void>
}
export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
    categories: {
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
        //console.log('Desde recipeSlice.ts')
        console.log(filters)
    }
})