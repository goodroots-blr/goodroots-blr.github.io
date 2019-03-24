export default {
    onProductSelection: function (dispatch, parentId) {
        return dispatch({ type: "PRODUCT_SELECTED", payload: parentId })
    }
}