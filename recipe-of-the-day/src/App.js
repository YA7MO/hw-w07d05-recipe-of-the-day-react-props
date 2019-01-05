import React, { Component } from 'react';
import './App.css';
import RecipeOfTheDay from './components/RecipeOfTheDay';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipeOfTheDay/>
        <div className ="recipe">
        <Recipes/>
        </div>
      </div>
    );
  }
}

export default App;
