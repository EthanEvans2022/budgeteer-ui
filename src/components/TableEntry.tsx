import React, { FC, useState } from 'react';
import Transaction from '../schemas/Transaction';
import  TableEntryOptions from './TableEntryOptions';

interface TableEntryProps {
    transaction: Transaction;
    selectedEntry: string;
    toggleOptions: (id: string) => void;
    updateEntry: (id: string, updatedTransaction: Transaction) => void;
    deleteEntry: (id: string) => void;
    toggleModal: (id: string) => void;
}

const TransactionTableEntry: FC<TableEntryProps> = (props) => {
    const entry_classes = props.selectedEntry == props.transaction.id ? "transaction-table__entry active" : "transaction-table__entry";

    return (
        <>
            <tr className={entry_classes} onClick={()=>{props.toggleOptions(props.transaction.id)}}>
                <td className="transaction-table__cell">{props.transaction.group}</td>
                <td className="transaction-table__cell">{props.transaction.category}</td>
                <td className="transaction-table__cell">{props.transaction.description}</td>
                <td className="transaction-table__cell">{props.transaction.amount}</td>
                <td className="transaction-table__cell">{props.transaction.time.toDateString()}</td>
            </tr>
            {props.selectedEntry == props.transaction.id && (
                <TableEntryOptions onEdit={()=>props.toggleModal(props.transaction.id)} onDelete={()=>props.deleteEntry(props.transaction.id)}/>    
            )}
        </>
    );
};

export default TransactionTableEntry;