import React, { Component } from 'react';
import rOfTheDay from '../data/recipeOfTheDay';

class Ingredient extends Component{

renderIngredients(){
            
    const ingredientsInfo = rOfTheDay.ingredients.map((elem, index) => {
        return(
            <div key ={index}>
                <li> {elem.ingredient} - {elem.amount}</li>
            </div>
        )
    })
    return ingredientsInfo;
}

render(){
    return(
        <div>
            {this.renderIngredients()}
        </div>
)
}


}

export default Ingredient;