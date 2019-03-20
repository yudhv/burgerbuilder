import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 2,
            cheese: 1,
            bacon: 0,
            salad: 0
        }
    }

    ingredientHandler = (type, diff) => {
        let newCount = this.state.ingredients[type] + diff;
        if(newCount<0) return;
        const newIngredients = {
            ...this.state.ingredients
        }; 
        newIngredients[type] = newCount;
        this.setState({ingredients: newIngredients});
    }
    
    render() {
        const displayStatus = {
            ...this.state.ingredients
        };
        for(let key in displayStatus){
            displayStatus[key] = displayStatus[key] === 0;
        }
        return(
        <Aux>
            <Burger ingredients={this.state.ingredients}></Burger>
            <BuildControls 
                changeIngredients={this.ingredientHandler}
                disabled={displayStatus}/>
        </Aux>
        );
    }
}

export default BurgerBuilder;
