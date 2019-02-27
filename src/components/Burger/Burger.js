import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    const ingredientKeys = Object.keys(props.ingredients);
    const ingredientValues = Object.values(props.ingredients);
    const ingredientJSX = ingredientKeys.map( (key, i) => {
        return [...Array(ingredientValues[i])].map((_,j) => {
            return <BurgerIngredients type={key} key={key+j}/>
        })
    })

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top'></BurgerIngredients>
            {ingredientJSX}
            <BurgerIngredients type='bread-bottom'></BurgerIngredients>
        </div>
    );
};

export default burger;
