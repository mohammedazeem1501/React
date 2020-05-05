import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICES = {
    salad : 39,
    cheese : 29,
    meat : 99,
    bacon : 79
}

class BurgerBuilder extends Component {
    
        state = {
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0    
        },
        totalPrice : 49,
        purchasable: false,
        purcahsing : false
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key] <= 0  
        }



        return (
           <Aux>
               <Modal show ={this.state.purcahsing} modalClosed =  {this.purchaseCancelHandler}>
                   <OrderSummary 
                   ingredients = {this.state.ingredients}
                   price = {this.state.totalPrice}
                   purchaseCanceled = {this.purchaseCancelHandler}
                   purchaseContinued = {this.purchaseContinueHandler}/>
               </Modal>
               <Burger ingredients = {this.state.ingredients}/>
               <BuildControls 
                ingredientAdded = {this.addIngredientHandler} 
                ingredientRemoved = {this.removeIngredientHandler}  
                disabled = {disabledInfo}  
                purchasable={this.state.purchasable}
                ordered = {this.purchaseHandler}
                Price = {this.state.totalPrice}/>
           </Aux>
        )
    }

    addIngredientHandler=(type) => {
        const oldCount = this.state.ingredients[type]
        const UpdatedCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        } 
        updatedIngredients[type] = UpdatedCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({totalPrice : newPrice, ingredients : updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if(oldCount <=0){
            return
        }

        const UpdatedCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        } 
        updatedIngredients[type] = UpdatedCount
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.setState({totalPrice : newPrice, ingredients : updatedIngredients})
        this.updatePurchaseState(updatedIngredients)

    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    purchaseHandler = () => {
        this.setState({purcahsing : true})
    }

    purchaseCancelHandler = () => {
        this.setState({purcahsing : false})
    }

    purchaseContinueHandler = () => {
      alert('You can continue ....!')
    }
}

export default BurgerBuilder
