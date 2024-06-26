import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Transaction from '../schemas/Transaction';
import Category from '../schemas/Category';
import TransactionTable from '../components/TransactionTable';
import { generateDummyTransactions, generateDummyCategories } from '../utils/TransactionUtils';

const ExpenseTracker: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>(generateDummyTransactions(10));
    const [categories, setCategories] = useState(generateDummyCategories(10));

    return (
        <div>
            <TransactionTable transactions={transactions} categories={categories} setTransactions={setTransactions}/>
        </div>
    );
};

export default ExpenseTracker;