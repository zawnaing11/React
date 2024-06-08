import React, { createContext, useReducer } from "react";
import TransactionReducer from "../reducers/TransactionReducer";

const initialState = {
    datas: [
        { id: 1, text: 'Flower', amount: -20000 },
        { id: 2, text: 'Salary', amount: 50000 },
        { id: 3, text: 'Book', amount: -10000 },
        { id: 4, text: 'Camera', amount: 15000 },
    ]
}

// global context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
    // action
    function addTransaction(newTransaction) {
        dispatch({
            type: 'add_trans',
            payload: newTransaction
        })
    }
    function deleteTransaction(id) {
        dispatch({
            type: 'delete_trans',
            payload: id
        })
    }
    const [state, dispatch] = useReducer(TransactionReducer, initialState);
    return (
        <GlobalContext.Provider value={{
            transactions: state.datas,
            deleteTransaction,
            addTransaction
         }}>
            { children }
        </GlobalContext.Provider>
    )
}



