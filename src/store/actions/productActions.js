import { PRODUCTS_ACTION, SELECTED_PRODUCT_ACTION} from "../actionTypes/productActionsTypes"


// fetching products
const fetchProducts =  () => {
    return async (dispatch) => {
        dispatch(fetchProductsStart)
        try{
            const response = await fetch('https://fakestoreapi.com/products');
            const products = await response.json();
            dispatch(fetchProductsSuccess(products))
          }catch(error){
            console.log('Error fetching products\n', error)
            dispatch(fetchProductsFailure(error.message))
          }
    }
  } 

const fetchProductsStart = () => {
    return{
        type: PRODUCTS_ACTION.FETCH_PRODUCTS_START
    }
}

const fetchProductsSuccess = (products) => {
    return {
        type: PRODUCTS_ACTION.FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

const fetchProductsFailure = (error) => {
    return {
        type: PRODUCTS_ACTION.FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}


//fetching single product
const fetchSelectedProduct = (productId) => {
    fetchSelectedProductStart()
    return async (dispatch) => {
        try{
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
            const product = await response.json()
            dispatch(fetchSelectedProductSuccess(product))
        }catch(error){
            console.error('Error fetching product\n', error)
            dispatch(fetchSelectedProductFailure(error))
        }
    }
}


const fetchSelectedProductStart = () => {
    return {
        type: SELECTED_PRODUCT_ACTION.FETCH_PRODUCT_START
    }
}

const fetchSelectedProductSuccess = (product) => {
    return{
        type: SELECTED_PRODUCT_ACTION.FETCH_PRODUCT_SUCCESS,
        payload: product
    }
}

const fetchSelectedProductFailure = (error) => {
    return {
        type: SELECTED_PRODUCT_ACTION.FETCH_PRODUCT_FAILURE,
        payload: error
    }
}
 


export { fetchProducts, fetchProductsStart, fetchProductsFailure, fetchSelectedProduct, fetchSelectedProductFailure, fetchSelectedProductStart, fetchSelectedProductSuccess }