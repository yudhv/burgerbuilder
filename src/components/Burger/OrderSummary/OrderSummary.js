import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map(igKey => (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        ));

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <Button btnType='Danger' clicked={props.purchaseCancelHandler}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinueHandler}>CONTINUE: ${props.price}</Button>

        </Aux>
    );
}

export default orderSummary;