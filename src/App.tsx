import React, { useState } from 'react';
import TransactionTable from './pages/TransactionTable';
import Transaction from './schemas/Transaction';
import { v4 as uuidv4 } from 'uuid';

const generateDummyTransactions = (number: number): Transaction[] => {
  const transactions: Transaction[] = [];
  for (let i = 1; i <= number; i++) {

    const transaction: Transaction = {
      id: uuidv4(),
      group: `Group ${i}`,
      category: `Category ${i}`,
      description: `Description ${i}`,
      amount: i * 10,
      time: new Date()
    };
    transactions.push(transaction);
  }
  return transactions;
};

const App = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(generateDummyTransactions(10));
  return (
    <div>
      <TransactionTable transactions={transactions} setTransactions={setTransactions}/>
    </div>
  );
};

export default App;
