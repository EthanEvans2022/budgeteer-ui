import React, { useState } from 'react';
import TransactionTable from './pages/TransactionTable';
import Transaction from './schemas/Transaction';

const generateDummyTransactions = (number: number): Transaction[] => {
  const transactions: Transaction[] = [];
  for (let i = 1; i <= number; i++) {
    const transaction: Transaction = {
      id: i.toString(),
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
