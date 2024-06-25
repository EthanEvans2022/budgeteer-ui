import { v4 as uuidv4 } from "uuid";
import Transaction from "../schemas/Transaction";
import Category from "../schemas/Category";

const generateDummyTransactions = (number: number): Transaction[] => {
    const transactions: Transaction[] = [];
    for (let i = 1; i <= number; i++) {
        const subCat = new Category(`SubCategory ${i}`, true, []);
        const cat = new Category(`Category ${i}`, false, [subCat]);
        const transaction: Transaction = {
        id: uuidv4(),
        category: new Category(`Group ${i}`, false, []),
        subCategory: subCat,
        description: `Description ${i}`,
        amount: i * 10,
        time: new Date()
        };
        transactions.push(transaction);
    }
    return transactions;
};

export default generateDummyTransactions;