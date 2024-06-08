import React, { useState, useContext, useId } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

export const TransactionForm = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const newTransaction = {
        id: useId(),
        text,
        amount: +amount
    }

    const submitHandler = (e) => {
        e.preventDefault();
        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }

  return (
    <div className="px-8 my-6">
        <div className="my-4 border-b w-full">
        <h2 className="font-semibold text-lg">Add new transaction</h2>
        </div>
        <div className="bg-white p-4 border-2 rounded-md">
        <form className="mt-4" onSubmit={submitHandler}>
            <div className="my-5 text-sm">
            <label htmlFor="text" className="block text-black">
                Text
            </label>
            <input
                type="text"
                autoFocus=""
                className="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full"
                placeholder="Enter Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            </div>
            <div className="my-5 text-sm">
            <label htmlFor="amount" className="block text-black">
                Amount
                <small className="text-gray-600">
                {" "}
                (<span className="text-red-400"> negative-expense</span> ,
                <span className="text-green-400"> positive-income</span>)
                </small>
            </label>
            <input
                type="number"
                autoFocus=""
                className="rounded-sm px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            </div>
            <div className="my-5">
            <button className="rounded-sm block text-center text-white bg-gray-800 p-3 duration-300  hover:bg-black w-full">
                Add Transaction
            </button>
            </div>
        </form>
        </div>
    </div>
  )
}
