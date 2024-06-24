import React, { FC, useState } from "react";
import Transaction from "../schemas/Transaction";
import { Button, ButtonModifiers } from "../components/Button";
import "../styles/Form.css";

const TransactionForm: FC<{ prevTransaction?: Transaction }> = ({ prevTransaction }) => {
    const [transaction, setTransaction] = useState<Transaction>(prevTransaction || {
        id: "",
        group: "",
        amount: 0,
        description: "",
        category: "",
        time: new Date()
    })

    const handleChange = () => {

    };

    const handleSubmit = () => {

    };

    return (
        <form onSubmit={handleSubmit}>
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
            <Button text="Submit" onClick={handleChange} mod={ButtonModifiers.Primary}/>
        </form>
    );
};

export default TransactionForm;