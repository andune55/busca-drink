import axios from 'axios'
import { CategoriesAPIResponseSchema } from '../utils/recipes-schema'
import { SearchFilter } from '../types/index.ts'

export async function getCategories(){
    //console.log('desde RecipeService')
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data} = await axios (url)
    //console.log(data)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    //console.log(result) 
    if(result.success){
        return result.data
    }   
}   

export async function getRecipes(filters: SearchFilter){
    console.log(filters)
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const data = await axios(url)
    console.log(data)
}