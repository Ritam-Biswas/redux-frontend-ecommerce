import CART_ACTION from "../actionTypes/cartActionTypes"

const addToCart = (product) => {
    return {
        type: CART_ACTION.ADD_TO_CART,
        payload: product
    }
}

const addItemQuantity = (product) => {
    return {
        type: CART_ACTION.ADD_ITEM_QUANTITY,
        payload: product
    }
}

const removeItemQuantity = (product) => {
    return {
        type: CART_ACTION.REMOVE_ITEM_QUANTITY,
        payload: product
    }
}

const clearItem = (product) => {
    return {
        type: CART_ACTION.CLEAR_ITEM,
        payload: product
    }
}

export { addToCart, addItemQuantity, removeItemQuantity, clearItem}