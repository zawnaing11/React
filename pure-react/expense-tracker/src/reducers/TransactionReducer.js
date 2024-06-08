const TransactionReducer = (state, action) => {
    switch(action.type) {
        case 'add_trans':
            return {
                ...state,
                datas: [...state.datas, action.payload]
            }
        case 'delete_trans':
            return {
                ...state,
                datas: state.datas.filter((data) => data.id != action.payload)
            }
        default:
            return state;
    }
}
export default TransactionReducer;
