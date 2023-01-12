import {Ingredient} from "./classes/ingredient.js";

class Pizza
{
    #ingredients;
    
    constructor()
    {
        this.#ingredients = [];
        
    }
    
    get ingredients()
    {
        return this.#ingredients;
    }
    
    addIngredient(ingredient)
    {
        this.#ingredients.push(ingredient);
        
    }
    
    removeIngredient(ingredient)
    {
        let emptyArray = [];
        
        for(let i = 0; i < this.#ingredients.length; i++)
        {
            if(ingredients[i] !== ingredient[i])
            {
                emptyArray[i].push(ingredient);
            }
        }
        
        console.log(emptyArray);
    }
    
    display()
    {
        let order = document.querySelector("aside-composition ul li:last-of-type");
        let ul = document.querySelector("aside-composition ul");
        ul.innerHTML = "";
        
    }
}

export { Pizza };