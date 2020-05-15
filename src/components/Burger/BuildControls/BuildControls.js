import React from 'react'
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
const controls = [
    {label: 'Salad', type : 'salad'},
    {label: 'Meat', type : 'meat'},
    {label: 'Bacon', type : 'bacon'},
    {label: 'Cheese', type : 'cheese'}
]


const buildControls =  (props) =>(
    <div className={styles.BuildControls}>
        <p>Price to be paid : <strong>{props.Price}</strong> <strong>Rupees</strong></p>
        {controls.map(ctrl =>(
            <BuildControl key ={ctrl.label} 
            label = {ctrl.label}
            added = {() => props.ingredientAdded(ctrl.type)} 
            removed = {() => props.ingredientRemoved(ctrl.type)}
            disabled = {props.disabled[ctrl.type]}/>
        ))}
       <button
            className={styles.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'PLEASE..LOGIN to ORDER'}</button>
    
    </div>
)

export default buildControls