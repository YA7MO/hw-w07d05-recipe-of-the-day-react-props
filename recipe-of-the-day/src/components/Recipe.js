import React from 'react';

const Recipe = (props) => {

    return(
<div>
    
    
    <ul>
        <li>Name  - {props.name}</li>
        <li>Servings -  {props.servings}</li>
        <li>Category -  {props.category}</li>
    </ul>
</div>
    )
}

export default Recipe;