import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button
                className={classes.Less}
                onClick={() => props.changeIngredients(props.type, -1)}
                disabled={props.disabled}>-</button>
            <button
                className={classes.More}
                onClick={() => props.changeIngredients(props.type, 1)}>+</button>
        </div>
    )
}

export default buildControl;