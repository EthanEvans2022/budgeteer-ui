import React, { FC, useState } from "react";
import Transaction from "../schemas/Transaction";
import { Button, ButtonModifiers } from "../components/Button";
import "../styles/Form.css";

const TransactionForm: FC<{ prevTransaction?: Transaction, onSubmit:(t: Transaction)=>void }> = ({ prevTransaction, onSubmit}) => {
    const [transaction, setTransaction] = useState<Transaction>(prevTransaction || {
        id: "",
        group: "",
        amount: 0,
        description: "",
        category: "",
        time: new Date()
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTransaction(transaction => ({
            ...transaction,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(transaction);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="input-label">
                Group:
                <input
                    type="text"
                    name="group"
                    value={transaction.group}
                    onChange={handleChange}
                    className="input-field"
                />
            </label>
            <br />
            <label className="input-label">
                Amount:
                <input
                    type="number"
                    name="amount"
                    value={transaction.amount}
                    onChange={handleChange}
                    className="input-field"
                />
            </label>
            <br />
            <label className="input-label">
                Description:
                <input
                    type="text"
                    name="description"
                    value={transaction.description}
                    onChange={handleChange}
                    className="input-field"
                />
            </label>
            <br />
            <label className="input-label">
                Category:
                <input
                    type="text"
                    name="category"
                    value={transaction.category}
                    onChange={handleChange}
                    className="input-field"
                />
            </label>
            <br />
            <label className="input-label">
                Date:
                <input
                    type="date"
                    name="date"
                    value={transaction.time.toISOString().split("T")[0]}
                    onChange={handleChange}
                    className="input-field"
                />
            </label>
            <br />
            <Button 
                text="Submit" 
                onClick={() => {console.log("Submitting element")} }
                mod={ButtonModifiers.Primary}
                type="submit"
            />
            
        </form>
    );
};

export default TransactionForm;