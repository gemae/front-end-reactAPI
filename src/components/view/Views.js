import React, {useState,useEffect} from 'react';
import icons from '../../icons';
import classes from './Views.module.css';
import Ingredients from './Ingredients';
import Procedure from './Procedure';
import { v4 as uuid_v4 } from "uuid";

function Views({viewRecipes,api_url}) {
  const [viewIng,setViewIng] = useState([]);
  const [viewDir,setViewDir] = useState([])

  useEffect(() => {
    setViewIng(viewRecipes.ingredients);
    setViewDir(viewRecipes.directions);
  },[viewRecipes])
  

  return (
    <div>
      <h2 className="view_recipe_title">{viewRecipes.title}</h2>
        <figure> 
        <img className={classes.view_recipe_img} src={api_url + viewRecipes.images.medium}/>
        <figcaption className={classes.cont_time}>
          <p className={classes.view_recipe_desc}>{viewRecipes.description}</p>
          <div className={classes.view_recipe_serving}>
            <img src={icons.serv}/>
            <p className={classes.serving_time}>{viewRecipes.servings}</p>
          </div>
          <div className={classes.view_recipe_time}>
            <div className={classes.prep_time_cont}>
              <img src={icons.prep}/>
              <p className={classes.prep_time}>{`${viewRecipes.prepTime} min`}</p>
            </div>
            <div className={classes.cook_time_cont}>
              <img src={icons.cook}/>
              <p className={classes.cook_time}>{`${viewRecipes.cookTime} min`}</p>
            </div>
          </div>
        </figcaption>
      </figure>
      
    <div className={classes.view_process}>

      <div>
        <h5 className={classes.process_header}>Ingredients</h5>
          <ul className={classes.ingredients}>
            {viewIng.map((ing) =>
               <Ingredients 
               ing={ing}
               key={ing.uuid}
               api_url={api_url}/>
            )}
          </ul>
      </div>

      <div>
        <h5 className={classes.process_header}>Procedure</h5>
          <ul className={classes.procedure}>
            {viewDir.map((dir) =>
               <Procedure
               dir={dir}
               key={uuid_v4()}
               />
            )}
          </ul>
      </div>

    </div>

    </div>
  )
}

export default Views
