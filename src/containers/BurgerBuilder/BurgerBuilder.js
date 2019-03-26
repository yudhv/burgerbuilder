import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    meat: 1,
    cheese: 0.5,
    bacon: 1,
    salad: 0.5
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            bacon: 0,
            salad: 0
        },
        totalPrice: 4,
        purchasable: false,
        summaryModal: false
    }

    ingredientHandler = (type, diff) => {
        let newCount = this.state.ingredients[type] + diff;
        if (newCount < 0) return;
        const newIngredients = {
            ...this.state.ingredients
        };
        const newPrice = this.state.totalPrice + diff * INGREDIENT_PRICE[type];
        newIngredients[type] = newCount;
        this.setState({ ingredients: newIngredients, totalPrice: newPrice });
        this.checkPurchasable(newIngredients);
    }

    summaryModalHandler = (bool) => {
        this.setState({ summaryModal: bool });
    }

    purchaseContinueHandler = () => {
        alert('Purchase Continued');
    }

    purchaseCancelHandler = () => {
        this.summaryModalHandler(false);

    }

    checkPurchasable = (newIngredients) => {
        const totalIngredients = Object.values(newIngredients).reduce((sum, el) => {
            sum += el;
            return sum;
        }, 0);
        totalIngredients > 0 ? this.setState({ purchasable: true }) : this.setState({ purchasable: false });

    }



    render() {
        const displayStatus = {
            ...this.state.ingredients
        };
        for (let key in displayStatus) {
            displayStatus[key] = displayStatus[key] === 0;
        }
        return (
            <Aux>
                <Modal show={this.state.summaryModal} switch={this.summaryModalHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancelHandler={this.purchaseCancelHandler}
                        purchaseContinueHandler={this.purchaseContinueHandler} 
                        price={this.state.totalPrice}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls
                    changeIngredients={this.ingredientHandler}
                    disabled={displayStatus}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    switch={this.summaryModalHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;
