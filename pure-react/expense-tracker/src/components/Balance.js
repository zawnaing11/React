import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

export const Balance = () => {
  const { transactions } =  useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((a, b) => ( a + b ), 0);
  return (
    <div className="px-8 py-2">
        <h4 className="text-lg text-gray-500 font-thin">Your Balance</h4>
        <h4 className="text-2xl font-semibold">{total} MMK</h4>
    </div>
  )
}
