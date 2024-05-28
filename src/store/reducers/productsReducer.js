import {PRODUCTS_ACTION} from "../actionTypes/productActionsTypes";
import { SELECTED_PRODUCT_ACTION } from "../actionTypes/productActionsTypes";

const PRODUCTS_INITIAL_STATE = {
    loading: false,
    products: [],
    error: null
}

const SELECTED_PRODUCT_INITIAL_STATE = {
    loading: false,
    selectedProduct: null,
    error: null
}

const productsReducer = (state = PRODUCTS_INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch(type){
        case PRODUCTS_ACTION.FETCH_PRODUCTS_START :
            return {...state, loading: true};
        case PRODUCTS_ACTION.FETCH_PRODUCTS_SUCCESS :
            return {...state, products: payload, loading: false}
        case PRODUCTS_ACTION.FETCH_PRODUCTS_FAILURE :
            return {...state, error: payload, loading: false}
        default:
            return state
    }
}

const selectedProductReducer = (state = SELECTED_PRODUCT_INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch(type){
        case SELECTED_PRODUCT_ACTION.FETCH_PRODUCT_START :
            return {...state, loading: true}
        case SELECTED_PRODUCT_ACTION.FETCH_PRODUCT_SUCCESS :
            return {...state, selectedProduct: payload, loading: false}
        case SELECTED_PRODUCT_ACTION.FETCH_PRODUCT_FAILURE :
            return {...state, loading: false}
        default :
            return state
    }
}

export { productsReducer, selectedProductReducer };