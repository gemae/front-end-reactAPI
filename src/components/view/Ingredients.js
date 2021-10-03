import React,{useState,useEffect} from 'react';
import Specials from './Specials';
import classes from './Views.module.css';

function Ingredients({ing,api_url}) {
  const [specials,setSpecials] = useState();
  
  useEffect(()=>{
    fetch(`${api_url}/specials`)
    .then(response => {
      return response.json();
    })
    .then( data => {
      data.map((spec) => {
        if(spec.ingredientId === ing.uuid){
         setSpecials({
            title: spec.title,
            type: spec.type,
            text:spec.text
          })
        }
        })
    })
    
  },[ing])
  

  return (
    <div>
      <li><p>{ing.name}</p></li>
      {specials !== undefined ? <Specials specials={specials}/> : null}
    </div>
  )
}

export default Ingredients
