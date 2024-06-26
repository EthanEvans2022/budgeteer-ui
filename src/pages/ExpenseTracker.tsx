import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Transaction from '../schemas/Transaction';
import Category from '../schemas/Category';
import TransactionTable from '../components/TransactionTable';
import Utils from '../utils/TransactionUtils';

const ExpenseTracker: React.FC = () => {
    const [categories, setCategories] = useState(Utils.generateDummyCategories(10));
    const [transactions, setTransactions] = useState<Transaction[]>(Utils.generateDummyTransactionsFromCategories(categories));

    return (
        <div>
            <TransactionTable transactions={transactions} categories={categories} setTransactions={setTransactions}/>
        </div>
    );
};

export default ExpenseTracker;