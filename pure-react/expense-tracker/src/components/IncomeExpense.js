import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

export const IncomeExpense = () => {
    const { transactions } =  useContext(GlobalContext);
    const amount = transactions.map((transaction) => transaction.amount);

    const income = amount.filter((value) => value > 0).reduce((a, b) => (a + b), 0);
    const expense = amount.filter((value) => value < 0).reduce((a, b) => (a + b), 0);

    return (
      <div className="flex space-x-0 flex-col lg:flex-row lg:space-x-2 my-2 px-6">
          <div className="bg-green-600 border-2 rounded-md shadow-lg w-full text-white text-center">
          <div className="items-center p-4">
              <small className="font-light">INCOME</small>
              <h1 className="text-xl text-green-100 font-semibold">{income}</h1>
              <small>MMK</small>
          </div>
          </div>
          <div className="bg-red-600 border-2 rounded-md shadow-lg w-full text-white text-center">
            <div className="items-center p-4">
              <small className="font-light">EXPENSE</small>
              <h1 className="text-xl text-red-100 font-semibold">{expense}</h1>
              <small>MMK</small>
            </div>
          </div>
      </div>
    )
}
