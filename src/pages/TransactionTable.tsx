import React, { FC } from 'react';
import Transaction from '../schemas/Transaction';
import TransactionTableEntry from '../components/TableEntry';
import '../styles/TransactionTable.css';


const TransactionTable: FC<{ transactions: Transaction[] }> = ({ transactions }) => {
    return (
        <table className="transaction-table">
            <thead>
                <tr className="transaction-table__header">
                    <th className="transaction-table__header-cell">Group</th>
                    <th className="transaction-table__header-cell">Category</th>
                    <th className="transaction-table__header-cell">Description</th>
                    <th className="transaction-table__header-cell">Amount</th>
                    <th className="transaction-table__header-cell">Time</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, index) => (
                    <TransactionTableEntry key={index} transaction={transaction} />
                ))}
            </tbody>
        </table>
    );
};

export default TransactionTable;
