import React, {useState} from 'react';
import Recipe from './Recipe';
import '../../App.css';

function Recipes({recipes,api_url,getView,updateRecipe,success}) {
 
  return (
    <div>
      <h2>Recipes List</h2>
      <ul className='list_view'>
         {recipes.map((recipe) => 
           <Recipe key={recipe.uuid} recipe = {recipe} api_url={api_url} getView={getView} updateRecipe={updateRecipe} success={success}/>
          )}
      </ul>
    </div>
  )
  
}

export default Recipes
