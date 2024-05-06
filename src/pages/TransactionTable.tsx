import React, {FC} from 'react';
import Transaction from '../schemas/Transaction'
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
                    <tr className="transaction-table__entry" key={index}>
                        <td className="transaction-table__cell">{transaction.group}</td>
                        <td className="transaction-table__cell">{transaction.category}</td>
                        <td className="transaction-table__cell">{transaction.description}</td>
                        <td className="transaction-table__cell">{transaction.amount}</td>
                        <td className="transaction-table__cell">{transaction.time.toDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionTable;
