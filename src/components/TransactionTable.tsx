import React, {FC} from 'react';
import Transaction from '../schemas/Transaction'

const TransactionTable: FC<{ transactions: Transaction[] }> = ({ transactions }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Group</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={index}>
                        <td>{transaction.group}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.time.toDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionTable;
