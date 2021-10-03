import React, {useState} from 'react';
import classes from './Recipes.module.css';
import UpdateModal from './UpdateModal';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Recipe({recipe,api_url,getView,updateRecipe,success}) {
  const [openModal,setOpenModal] = useState(false);

  const viewRecipe = () => {
    getView(recipe.uuid);
  }
  
  const recipeToUpdate = () => {
    setOpenModal(!openModal);
  }

  return (
    <div> 
      <li>
        <div className={classes.recipes_list} onClick={viewRecipe}> 
          <img className={classes.recipes_img_s} src={api_url + recipe.images.small}/>
            <div className={classes.recipes_capt}>
              <h4 className={classes.recipes_title}>{recipe.title}</h4>
              <p className={classes.recipes_desc}>{recipe.description}</p>
            </div>
        </div>
        <a onClick={recipeToUpdate} className={classes.editBtn}><FontAwesomeIcon icon={faEdit} className={classes.icon}/></a>
      </li>
      
      {openModal ? <UpdateModal title={recipe.title} description={recipe.description} recipeId={recipe.uuid} openModal={openModal} updateRecipe={updateRecipe} recipeToUpdate={recipeToUpdate} success={success}/> : null}
    </div>
  )
}

export default Recipe
