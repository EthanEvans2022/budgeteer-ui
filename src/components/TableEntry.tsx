import React, { FC, useState } from 'react';
import Transaction from '../schemas/Transaction';
import { TableEntryOptions } from './TableEntryOptions';

interface TableEntryProps {
    transaction: Transaction;
}

const edit_transaction = () => {
    alert("Transaction edited")
}

const delete_transaction = () => {
    alert("Transaction deleted")
}

const TransactionTableEntry: FC<TableEntryProps> = ({ transaction }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }
    return (
        <>
            <tr className="transaction-table__entry" onClick={toggleModal}>
                <td className="transaction-table__cell">{transaction.group}</td>
                <td className="transaction-table__cell">{transaction.category}</td>
                <td className="transaction-table__cell">{transaction.description}</td>
                <td className="transaction-table__cell">{transaction.amount}</td>
                <td className="transaction-table__cell">{transaction.time.toDateString()}</td>
            </tr>
            {showModal && (
                <tr>
                    <TableEntryOptions onEdit={edit_transaction} onDelete={delete_transaction}/>    
                </tr>
            )}
        </>
    );
};

export default TransactionTableEntry;