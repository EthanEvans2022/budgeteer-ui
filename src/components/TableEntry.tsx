import React, { FC, useState } from 'react';
import Transaction from '../schemas/Transaction';
import  TableEntryOptions from './TableEntryOptions';

interface TableEntryProps {
    id: number;
    transaction: Transaction;
    showModal: number;
    toggleModal: (id: number) => void;
}

const edit_transaction = () => {
    alert("Transaction edited")
}

const delete_transaction = () => {
    alert("Transaction deleted")
}

const TransactionTableEntry: FC<TableEntryProps> = ({ id, transaction, showModal, toggleModal}) => {
    const entry_classes = showModal == id ? "transaction-table__entry active" : "transaction-table__entry";

    return (
        <>
            <tr className={entry_classes} onClick={()=>{toggleModal(id)}}>
                <td className="transaction-table__cell">{transaction.group}</td>
                <td className="transaction-table__cell">{transaction.category}</td>
                <td className="transaction-table__cell">{transaction.description}</td>
                <td className="transaction-table__cell">{transaction.amount}</td>
                <td className="transaction-table__cell">{transaction.time.toDateString()}</td>
            </tr>
            {showModal == id && (
                <TableEntryOptions onEdit={edit_transaction} onDelete={delete_transaction}/>    
            )}
        </>
    );
};

export default TransactionTableEntry;