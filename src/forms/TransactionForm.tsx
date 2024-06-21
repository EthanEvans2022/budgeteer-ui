import React, { FC, useState } from "react";
import Transaction from "../schemas/Transaction";

const TransactionForm: FC<{ prevTransaction?: Transaction }> = ({ prevTransaction }) => {
    const [transaction, setTransaction] = useState<Transaction>(prevTransaction || {
        id: "",
        group: "",
        amount: 0,
        description: "",
        category: "",
        time: new Date()
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setTransaction((prevTransaction) => ({
            ...prevTransaction,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log(transaction);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Amount:
                <input
                    type="number"
                    name="amount"
                    value={transaction.amount}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Description:
                <input
                    type="text"
                    name="description"
                    value={transaction.description}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Category:
                <input
                    type="text"
                    name="category"
                    value={transaction.category}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Date:
                <input
                    type="date"
                    name="date"
                    value={transaction.time.toISOString().split("T")[0]}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default TransactionForm;