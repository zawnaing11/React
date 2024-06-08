import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount > 0 ? '+' : '-';
    const color = transaction.amount > 0 ? 'border-green-500' : 'border-red-500';
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <div className={`ml-6 relative bg-white p-4 border-r-8 shadow-md my-2 flex justify-between ${color}`}>
        <div className="absolute -left-6">
            <div
                className="cursor-pointer bg-red-600 p-2 w-6 flex items-center text-xs text-white justify-center"
                onClick={() => deleteTransaction(transaction.id)}
            >
                x
            </div>
        </div>
        <div>
            <p>{transaction.text}</p>
        </div>
        <div>
            <p>{sign} { Math.abs(transaction.amount) } MMK</p>
        </div>
    </div>
  )
}
