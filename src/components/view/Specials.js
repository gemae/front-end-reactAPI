import React from 'react';
import classes from './Views.module.css';

function Specials({specials}) {
  return (
    <div>
      <p className={classes.specials}>{`-${specials.title}`}</p>
      <p className={classes.specials}>{`-${specials.type}`}</p>
      <p className={classes.specials}>{`-${specials.text}`}</p>
    </div>
  )
}

export default Specials
