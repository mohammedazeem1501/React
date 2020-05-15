import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import axios from '../../axios-order'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/index'


class BurgerBuilder extends Component {
    state = {
       // ingredients: null,
       // totalPrice: 49,
       // purchasable: false,
        purchasing: false,
        // loading: false,
        // error: false
    }
    componentDidMount() {
       // console.log(this.props);
        this.props.onInitIngredients()   
    }
    render() {
        const disabledInfo = {
            ...this.props.ings
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null
        let burger = this.props.error ? <p>Sorry for the <strong>Incovenience..!</strong></p> : <Spinner />
        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredirentAdded}
                        ingredientRemoved={this.props.onIngredirentRemoved}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ordered={this.purchaseHandler}
                        isAuth = {this.props.isAuthenticated}
                        Price={this.props.price} />
                </Aux>)
            orderSummary = <OrderSummary
                ingredients={this.props.ings}

                price={this.props.price}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />
        }
        // if (this.state.loading) {
        //     orderSummary = <Spinner />
        // }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
    // addIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type]
    //     const UpdatedCount = oldCount + 1
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }
    //     updatedIngredients[type] = UpdatedCount
    //     const priceAddition = INGREDIENT_PRICES[type]
    //     const oldPrice = this.state.totalPrice
    //     const newPrice = oldPrice + priceAddition
    //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    //     this.updatePurchaseState(updatedIngredients)
    // }
    // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type]
    //     if (oldCount <= 0) {
    //         return
    //     }
    //     const UpdatedCount = oldCount - 1
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }
    //     updatedIngredients[type] = UpdatedCount
    //     const priceDeduction = INGREDIENT_PRICES[type]
    //     const oldPrice = this.state.totalPrice
    //     const newPrice = oldPrice - priceDeduction
    //     this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    //     this.updatePurchaseState(updatedIngredients)
    // }
    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
       return sum > 0 
    }
    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
          //  console.log("purchse true");
            this.setState( { purchasing: true } );
           // console.log(this.state.purchasing);
            
        } else {
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }
    }
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }
    purchaseContinueHandler = () => {
        this.props.onInitPurchase()
        this.props.history.push('/checkout')

        // const queryParams = []
        // for(let i in this.state.ingredients){
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        // }
        // queryParams.push('price=' + this.state.totalPrice)
        // const queryString = queryParams.join('&')
        // this.props.history.push({
        //     pathname : '/checkout',
        //     search : '?' + queryString
        // })
        //alert('You can continue ....!')
    }
}

const mapStateToProps = state => {
   // console.log(state);
    return {
        ings : state.burgerBuilder.ingredients,
        price : state.burgerBuilder.totalPrice,
        error : state.burgerBuilder.error ,
        isAuthenticated : state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onIngredirentAdded : (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredirentRemoved : (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients : () => dispatch(actions.initIngredients()),
        onInitPurchase : () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios)) 
