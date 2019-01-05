import React, { Component } from 'react';
import rOfTheDay from '../data/recipeOfTheDay';
import Ingredient from './Ingredient';

class RecipeOfTheDay extends Component{


    render(){

        return(
            <div>
            <center><h1>Recipe Of The Day</h1></center>
            <center><h2>{rOfTheDay.name}</h2></center>
            <div className= 'block'>
            </div>
            <div className="content">
            <h2>Description</h2>
            <p>{rOfTheDay.description}</p>
            </div>  
            <div className = 'ingredientsInfo'>
            <ul>
            <h2>ingredients :</h2>
            <Ingredient/>
            </ul>

            </div>
            </div>
            
        )
    }
}

export default RecipeOfTheDay;