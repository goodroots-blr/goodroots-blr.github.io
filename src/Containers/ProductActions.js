export default {
    onProductSelection: function (dispatch, parentId) {
        return dispatch({ type: "PRODUCT_SELECTED", payload: parentId })
    },
    onProductRemoval: function (dispatch, parentId) {
        return dispatch({ type: "PRODUCT_REMOVED", payload: parentId })
    }
}