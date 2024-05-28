import { combineReducers } from "redux";

import {productsReducer, selectedProductReducer} from "./productsReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    selectedProduct: selectedProductReducer,
    cart: cartReducer
})

export default rootReducer;