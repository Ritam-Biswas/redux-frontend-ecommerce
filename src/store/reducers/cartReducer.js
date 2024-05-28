import CART_ACTION from "../actionTypes/cartActionTypes";

const CART_INITIAL_STATE = {
    cartItems: [],
    totalPrice: 0,
    noOfItems: 0
}

const cartReducer = (state = CART_INITIAL_STATE, action) => {
    const {type, payload} = action;
    const product = payload
    switch(type){
        case CART_ACTION.ADD_TO_CART:

            const existingProduct = state.cartItems.find((item)=> item.id==product.id)

            if(existingProduct){
                return{
                    ...state,
                    cartItems : state.cartItems.map((item)=>
                        product.id == item.id ? {...item, quantity: item.quantity+1} : item
                    ),
                    totalPrice: state.totalPrice + Number(product.price.toFixed(2)),
                }
            }else{
                return{
                    cartItems: [...state.cartItems, {...product, quantity: 1}],
                    totalPrice: state.totalPrice + Number(product.price.toFixed(2)),
                    noOfItems: state.noOfItems + 1
                }
            }

        case CART_ACTION.ADD_ITEM_QUANTITY:

            return{
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id == product.id ? {...item, quantity: item.quantity+1} : item
                ),
                totalPrice: state.totalPrice + Number(product.price.toFixed(2))
            }

        case CART_ACTION.REMOVE_ITEM_QUANTITY:

            if(product.quantity==1){
                return{
                    ...state,
                    cartItems: state.cartItems.filter((item)=>
                        product.id != item.id
                    ),
                    totalPrice: state.totalPrice - Number(product.price.toFixed(2))
                }
            }else{
                return{
                    ...state,
                    cartItems: state.cartItems.map((item)=>
                        product.id == item.id ? {...item, quantity: item.quantity-1} : item
                    ),
                    totalPrice: state.totalPrice - Number(product.price.toFixed(2))
                }
            }

        case CART_ACTION.CLEAR_ITEM:

            return{
                ...state,
                cartItems: state.cartItems.filter((item)=>
                    product.id != item.id
                ),
                totalPrice: state.totalPrice - (product.quantity * Number(product.price.toFixed(2)))
            }

        default:
            return state;
    }
}

export default cartReducer