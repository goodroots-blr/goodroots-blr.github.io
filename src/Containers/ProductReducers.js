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
        }
        case "REHYDRATE": {

        }
        default:
            break;
    }
    return newState
}

export default productsReducers;