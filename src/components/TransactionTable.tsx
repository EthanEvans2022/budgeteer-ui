import React, { FC, useState} from 'react';
import Transaction from '../schemas/Transaction';
import TransactionTableEntry from './TableEntry';
import Modal from './Modal';
import '../styles/TransactionTable.css';
import { Button, ButtonModifiers } from './Button';
import TransactionForm from '../forms/TransactionForm';
import { v4 as uuidv4 } from 'uuid';


interface TransactionTableProps {
    transactions: Transaction[];
    setTransactions: (transactions: Transaction[]) => void;
}

const TransactionTable: FC<TransactionTableProps> = ({ transactions, setTransactions }) => {
    const [selectedEntry, setSelectedEntry] = useState("");
    const [showModal, setShowModal] = useState(false);

    const toggleOptions = (id: string) => {
        if(selectedEntry === id) {
            setSelectedEntry("");
        }else{
            setSelectedEntry(id);
        }
    }

    const deleteEntry = (id: string) => {
        console.log("deleting entry")
        const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
        console.log("Count of updatedTransactions:", updatedTransactions.length);
        setTransactions(updatedTransactions);
    };

    const updateEntry = (id: string, updatedTransaction: Transaction) => {
        const updatedTransactions = transactions.map(transaction => {
            if (transaction.id === id) {
                return updatedTransaction;
            }
            return transaction;
        });
        setTransactions(updatedTransactions);
    };

    const displayAddModal = () => {
        setSelectedEntry("");
        setShowModal(true);
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const formSubmit = (transaction: Transaction) => {
        console.log(transaction)
        if (transactions.some(t => t.id === transaction.id)) {
            console.log("updating entry")
            updateEntry(selectedEntry, transaction);
        } else {
            console.log("adding entry")
            transaction.id = uuidv4();
            setTransactions([...transactions, transaction]);
        }
        toggleModal();
    }


    return (
        <>
            {showModal && 
                <Modal
                    onClose={toggleModal}
                    content={<TransactionForm prevTransaction={
                        transactions.find(transaction => transaction.id === selectedEntry)
                    }
                    onSubmit={formSubmit}
                    />}
                /> 
            }   
            <Button text="Add" onClick={displayAddModal} mod={ButtonModifiers.Primary}/>
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
                    {transactions.map((transaction) => (
                        <TransactionTableEntry 
                            key={transaction.id} 
                            transaction={transaction} 
                            selectedEntry={selectedEntry} 
                            toggleOptions={toggleOptions}
                            deleteEntry={deleteEntry}
                            toggleModal={toggleModal}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TransactionTable;
