import axios from 'axios'
import { CategoriesAPIResponseSchema } from '../utils/recipes-schema'

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