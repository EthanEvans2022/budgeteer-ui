import { v4 as uuidv4 } from "uuid";
import Transaction from "../schemas/Transaction";

const generateDummyTransactions = (number: number): Transaction[] => {
    const transactions: Transaction[] = [];
    for (let i = 1; i <= number; i++) {
        const transaction: Transaction = {
        id: uuidv4(),
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

export default generateDummyTransactions;