
import React, { useContext } from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from '../contexts/GlobalState'

export const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <div className="px-8 my-6">
            <div className="my-4 border-b w-full">
                <h2 className="font-semibold text-lg">History</h2>
            </div>
            {
                transactions.map((transaction) => (<Transaction key={transaction.id} transaction={transaction}/>))
            }
        </div>
    )
}
