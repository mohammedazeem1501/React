import React,{Component} from 'react'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'
class OrderSummary extends Component{ 

    componentWillUpdate(){
        console.log("[ordersummary] will update");
        
    }

    render(){

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (<li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}</span> : {this.props.ingredients[igKey]}
            </li>)
        })


        return(
            <Aux>
            <h3>Your Order Summary  </h3>
            <p>A Delicious burger with the following ingredients : </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Payable Price : {this.props.price}</strong></p>
            <p>Continue to Checkout ..?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        )
    }
    
  
}


export default OrderSummary