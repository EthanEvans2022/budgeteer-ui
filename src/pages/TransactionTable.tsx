import React, { FC, useState} from 'react';
import Transaction from '../schemas/Transaction';
import TransactionTableEntry from '../components/TableEntry';
import Modal from '../components/Modal';
import '../styles/TransactionTable.css';
import { Button, ButtonModifiers } from '../components/Button';
import TransactionForm from '../forms/TransactionForm';


interface TransactionTableProps {
    transactions: Transaction[];
    setTransactions: (transactions: Transaction[]) => void;
}

const TransactionTable: FC<TransactionTableProps> = ({ transactions, setTransactions }) => {
    const [selectedEntry, setSelectedEntry] = useState("");
    const [showModal, setShowModal] = useState(false);

    const toggleOptions = (id: string) => {
        setSelectedEntry(id);
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


    return (
        <>
            {showModal && 
                <Modal
                    onClose={toggleModal}
                    content={<TransactionForm prevTransaction={
                        transactions.find(transaction => transaction.id === selectedEntry)
                    }/>}
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
                            updateEntry={updateEntry}
                            toggleModal={toggleModal}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TransactionTable;
