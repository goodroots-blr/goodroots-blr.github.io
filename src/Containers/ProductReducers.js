import { REHYDRATE } from 'redux-persist';
import _cloneDeep from 'lodash/cloneDeep'
const intialState = { 
    selectedProducts: {}
}
const productsReducers = (state = intialState, action) => {
    let newState = _cloneDeep(state);
    switch (action.type) {
        case "PRODUCT_SELECTED" : {
            newState.selectedProducts = {... newState.selectedProducts, ...action.payload}
            break;
        }
        case "PRODUCT_REMOVED" : {
            delete newState.selectedProducts[action.payload]
            break;
        }
        case REHYDRATE : {
            newState = action.payload ?
                {selectedProducts: action.payload.ProductReducers.selectedProducts} : newState
            break;
        }
        default:
            break;
    }
    return newState
}

export default productsReducers;