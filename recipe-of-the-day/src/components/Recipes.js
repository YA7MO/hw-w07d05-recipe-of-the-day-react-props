import React, { Component } from 'react';
import recipes from '../data/recipes';
import Recipe from './Recipe';
class Recipes extends Component{

    renderRecipes(){

        const allRecipes = recipes.map((elem,index) => {
            return(
              
                   <Recipe name={elem.name} servings={elem.servings} category={elem.category} key={index}/>  
                
                
            )
        })

        return allRecipes;
    }

    render(){

        return(

            <div>
                <h3>Recipes : </h3>
                {this.renderRecipes()}
                
            </div>
        )
    } 
}

export default Recipes;