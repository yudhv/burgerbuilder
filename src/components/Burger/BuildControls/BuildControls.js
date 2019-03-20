import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Salad', type: 'salad' }
]

const buildControls = (props) => {
    return(<div className={classes.BuildControls}>
        {controls.map(control => (
            <BuildControl 
                className={classes.BuildControl} 
                key={control.label} 
                label={control.label} 
                type={control.type} 
                changeIngredients={props.changeIngredients}
                disabled={props.disabled[control.type]}/>
        ))}
    </div>)
}

export default buildControls;