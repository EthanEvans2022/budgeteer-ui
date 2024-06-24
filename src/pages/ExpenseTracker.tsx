import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Transaction from '../schemas/Transaction';
import TransactionTable from '../components/TransactionTable';
import generateDummyTransactions from '../utils/TransactionUtils';

const ExpenseTracker: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>(generateDummyTransactions(10));

    return (
        <div>
            <TransactionTable transactions={transactions} setTransactions={setTransactions}/>
        </div>
    );
};

export default ExpenseTracker;