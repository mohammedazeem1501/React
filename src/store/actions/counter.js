import * as actionTypes from './actionsTypes'
export const incerment = () => {
    return {
        type : actionTypes.INCREMENT
    }
}

export const decerment = () => {
    return {
        type : actionTypes.DECREMENT
    }
}
export const add = (value) => {
    return {
        type : actionTypes.ADD,
        value : value
    }
}
export const subtract = (value) => {
    return {
        type : actionTypes.SUBTRACT,
        value : value
    }
}