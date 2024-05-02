import React from 'react';
import TransactionTable from './components/TransactionTable';
import Transaction from './schemas/Transaction';

const generateDummyTransactions = (number: number): Transaction[] => {
  const transactions: Transaction[] = [];
  for (let i = 1; i <= number; i++) {
    const transaction: Transaction = {
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
  return (
    <div>
      <TransactionTable transactions={generateDummyTransactions(10)} />
    </div>
  );
};

export default App;
