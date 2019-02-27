import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 2,
            cheese: 1,
            bacon: 1,
            salad: 2
        }
    }
    
    render() {
        return(
        <Aux>
            <Burger ingredients={this.state.ingredients}></Burger>
            <div>Build Tools</div>
        </Aux>
        );
    }
}

export default BurgerBuilder;
