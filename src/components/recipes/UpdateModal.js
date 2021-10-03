import classes from './UpdateModal.module.css';
import React, {useState,useEffect} from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function UpdateModal({title,description,openModal,recipeId,updateRecipe,recipeToUpdate,success}) {
  const [RecipeTitle,setRecipeTitle] = useState(title);
  const [Recipedesc,setRecipeDesc] = useState(description);

  
  const updateModal = (e) => {
    e.preventDefault();
    let items = {
      title: RecipeTitle,
      description: Recipedesc
    }
    updateRecipe(recipeId,items);
  }

 

  const closeModal = () => {
    recipeToUpdate();
  }

  return (
    <div className={openModal ? classes.modal : `${classes.modal} ${classes.active}`}>
      
      <form onSubmit={updateModal}>
      <label className={success ? `${classes.message} ${classes.active}` : classes.message}>Updated Successfully!</label>
        <label>
          Title<br/>
          <input type="text" name="name" value={RecipeTitle} onChange={e=>setRecipeTitle(e.target.value)}/>
        </label>
        <label>
          Description<br/>
          <input type="text" name="name" value={Recipedesc} onChange={e=>setRecipeDesc(e.target.value)}/>
        </label>
          <button type="submit">Update</button>
          <small className={classes.closeModal} onClick={closeModal}><FontAwesomeIcon icon={faTimes}/></small>
      </form>
    </div>
  )

  success.defaultProps(false);
}

export default UpdateModal
