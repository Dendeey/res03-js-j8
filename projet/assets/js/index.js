import { Ingredient } from "./classes/ingredient.js";
    
window.addEventListener("DOMContentLoaded", function(){
    
    let availableIngredients = [];
    let Bacon = new Ingredient("Bacon","assets/img/bacon.png");
    let Carotte = new Ingredient("Carotte","assets/img/carrots.png");
    let Fromage = new Ingredient("Fromage","assets/img/cheese.png");
    let Oeuf = new Ingredient("Oeuf","assets/img/egg.png");
    let Aubergine = new Ingredient("Aubergine","assets/img/eggplant.png");
    let FromageDeChevre = new Ingredient("Fromage De Chèvre","assets/img/goat-cheese.png");
    let Miel = new Ingredient("Miel","assets/img/honey.png");
    let Champignon = new Ingredient("Champignon","assets/img/mushroom.png");
    let Olive = new Ingredient("Olive","assets/img/olive.png");
    let Piment = new Ingredient("Piment","assets/img/pepper.png");
    let PommeDeTerre = new Ingredient("Pomme De Terre","assets/img/potato.png");
    let Tomate = new Ingredient("Tomate","assets/img/tomato.png");
    
    availableIngredients.push(Bacon, Carotte, Fromage, Oeuf, Aubergine, FromageDeChevre, Miel, Champignon, Olive, Piment, PommeDeTerre, Tomate);
    console.log(availableIngredients);
    
    let Stage = document.getElementById("stage");
    let title = document.createElement("h2");
    let ul = document.createElement("ul");
    let titleText = document.createTextNode("Choix des ingrédients");
    Stage.appendChild(title);
    title.appendChild(titleText);
    Stage.appendChild(ul);
    
    for(let i = 0; i < availableIngredients.length; i++)
    {
        
        let li = document.createElement("li");
        let article = document.createElement("article");
        let header = document.createElement("header");
        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let ingredientTitle = document.createElement("h3");
        let ingredientText = document.createTextNode(availableIngredients[i].name);
        
        ul.appendChild(li);
        li.appendChild(article);
        article.appendChild(header);
        header.appendChild(figure);
        header.appendChild(ingredientTitle);
        figure.appendChild(img);
        ingredientTitle.appendChild(ingredientText);
        
        img.setAttribute("src", availableIngredients[i].file);
        img.setAttribute("alt", availableIngredients[i].name);
        
        article.classList.add("not:selected");
    }
    
    let liBtn = document.querySelectorAll("body > main > section:first-of-type > ul:first-of-type > li");
    let articleSelected = document.querySelectorAll("#stage article");
    
    for(let i = 0; i < articleSelected.length; i++)
    {
        liBtn[i].addEventListener("click", function()
        {
            articleSelected[i].classList.toggle("selected");
                
        });
    }
        
    
    
});