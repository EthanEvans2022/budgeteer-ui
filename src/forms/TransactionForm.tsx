import React, { FC, useState } from "react";
import Transaction from "../schemas/Transaction";
import { Button, ButtonModifiers } from "../components/Button";
import "../styles/Form.css";
import Category from "../schemas/Category";

interface TransactionFormProps {
    prevTransaction?: Transaction; 
    categories: Map<String, Category>;
    onSubmit:(t: Transaction)=>void; 
}

const TransactionForm: FC<TransactionFormProps> = ({ prevTransaction, categories, onSubmit}) => {
    const [transaction, setTransaction] = useState<Transaction>(prevTransaction || {
        id: "",
        category: categories.get("empty") || new Category("", false, []),
        subCategory: categories.get("empty") || new Category("", false, []),
        amount: 0,
        description: "",
        time: new Date()
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        var { name, value } = event.target;
        setTransaction(transaction => {
            if (name === "category") {
                const selectedCategory = categories.get(value) || new Category("", false, []);
                return {
                    ...transaction,
                    category: selectedCategory, 
                    subCategory: selectedCategory?.subCats[0] || new Category("", false, [])
                };
            } else if (name === "subCategory") {
                const selectedSubCategory = transaction.category?.subCats.find(cat => cat.id === value);
                return {
                    ...transaction,
                    subCategory: selectedSubCategory || new Category("", false, [])
                };
            } else {
            return {
                ...transaction,
                [name]: value
            };
            }
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(transaction);
    };

    return (
        <form onSubmit={handleSubmit}>
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
                Category:
                <select
                    name="category"
                    value={transaction.category ? transaction.category.id : ""}
                    onChange={handleChange}
                    className="input-field"
                >
                    {
                        Array.from(categories.values()).map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </label>
            <br />
            <label className="input-label">
                Sub-Category:
                <select
                    name="subCategory"
                    value={transaction.subCategory ? transaction.subCategory.id : ""}
                    onChange={handleChange}
                    className="input-field"
                >
                    { categories.get(transaction.category.id) ? transaction.category.subCats.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    )): null }
                </select>
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