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
    return (
        <div className={classes.BuildControls}>
            <p><strong>
                Current Price: {props.price}
            </strong></p>
            {controls.map(control => (
                <BuildControl
                    className={classes.BuildControl}
                    key={control.label}
                    label={control.label}
                    type={control.type}
                    changeIngredients={props.changeIngredients}
                    disabled={props.disabled[control.type]} />
            ))}
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={() => props.switch(true)}
            >
                ORDER NOW
        </button>
        </div>)
}

export default buildControls;