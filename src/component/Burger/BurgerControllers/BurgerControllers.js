import React from 'react';
import classes from './BuildControls.css';
import BurgerControll from './BurgerControll/BurgerControll';
const controlls=[
    {label:"Salad", type:"salad"},
    {label:"Bacon", type:"bacon"},
    {label:"Cheese", type:"cheese"},
    {label:"Meat", type:"meat"}

]
const BurgerControlls =(props)=>{
    return (
        <div className={classes.BuildControls}>
      {controlls.map(element=>{
          return (
              <BurgerControll key={element.label}
               label={element.label}
                   added={()=>props.addIngred(element.type)}
                   remove={()=>props.removeIngred(element.type)}
                   disabled={props.disabled[element.type]}
               />
          )
      })}
           
        </div>
    )

}

export default BurgerControlls;