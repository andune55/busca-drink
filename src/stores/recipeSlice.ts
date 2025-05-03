import { StateCreator } from 'zustand'
import { getCategories } from '../services/RecipeService.ts'
import type { Categories } from '../types/index.ts'

export type RecipesSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
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
    }
})