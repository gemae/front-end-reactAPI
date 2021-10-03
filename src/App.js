import React, {useState,useEffect} from 'react';
import './App.css';
import Recipes from './components/recipes/Recipes';
import Views from './components/view/Views';
import Footer from './components/Footer';

function App() {

  const [recipes,setRecipes] = useState([]);
  const [viewRecipe,setViewRecipe] = useState(null);
  const [success,setSuccess] = useState(false);

  const api_url = 'http://localhost:3001';

  const getRecipes = async () => {
    const response = await fetch(`${api_url}/recipes`);
    const data = await response.json();
    setRecipes(data);
  }

  useEffect(() => {
      getRecipes(); 
  },[]);

  useEffect(()=>{
    if(viewRecipe){
      getView(viewRecipe.uuid);
      // console.log(viewRecipe.uuid);
    }
  },[viewRecipe,[]])

  const getView = (id) => {
    const seenRecipe = recipes.filter(x => x.uuid == id).map(x => x);
    setViewRecipe(seenRecipe[0]);
  }

  const updateRecipe = (id,data) => {
    const recipeData= recipes.filter(x => x.uuid == id).map(el => 
        el.uuid === id ? {...el,title:data.title,description:data.description} : el
    );
    console.log(recipeData[0]);
    fetch(`${api_url}/recipes/${id}`,{
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(recipeData[0])
    }).then((result) => {
      result.json().then((resp) => {
        console.warn('Updated');
        getRecipes();
        getView(id);
        setSuccess(true);
        setTimeout(()=> {
          setSuccess(false);
        },4000)
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Our Best Recipes!</h1>
        <div className='main_cont'>
          
          <div className='view_recipe'>
              {viewRecipe != undefined ? <Views viewRecipes={viewRecipe} recipes={recipes} api_url={api_url}/> : <label id="NoRecipe">Please Choose on the Recipe list to view</label>}
          </div>
        
          <div className='all_recipes'>
                <Recipes recipes={recipes} api_url={api_url} getView={getView} updateRecipe={updateRecipe} success={success}/>              
          </div>

        </div>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
