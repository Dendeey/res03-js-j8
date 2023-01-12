import {Ingredient} from "./ingredient.js";
    
window.addEventListener("DOMContentLoaded", function(){
    
    let availableIngredients = [];
    let Bacon = new Ingredient("assets/img/bacon.png");
    let Carotte = new Ingredient("assets/img/carrots.png");
    let Fromage = new Ingredient("assets/img/cheese.png");
    let Oeuf = new Ingredient("assets/img/egg.png");
    let Aubergine = new Ingredient("assets/img/eggplant.png");
    let FromageDeChevre = new Ingredient("assets/img/goat-cheese.png");
    let Miel = new Ingredient("assets/img/honey.png");
    let Champignon = new Ingredient("assets/img/mushroom.png");
    let Olive = new Ingredient("assets/img/olive.png");
    let Piment = new Ingredient("assets/img/pepper.png");
    let PommeDeTerre = new Ingredient("assets/img/potato.png");
    let Tomate = new Ingredient("assets/img/tomato.png");
    
    availableIngredients.push(Bacon, Carotte, Fromage, Oeuf, Aubergine, FromageDeChevre, Miel, Champignon, Olive, Piment, PommeDeTerre, Tomate);
    
    let Stage = document.getElementById("stage");
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let article = document.createElement("article");
    let header = document.createElement("header");
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    
    
    for(let i = 0; i < availableIngredients.length; i++)
    {
        Stage[i].appendChild(ul);
        Stage[i].appendChild(li);
        Stage[i].appendChild(article);
        Stage[i].appendChild(header);
        Stage[i].appendChild(figure);
        Stage[i].appendChild(img);
    }
    
    console.log(availableIngredients);
});