import { v4 as uuidv4 } from "uuid";
import Transaction from "../schemas/Transaction";
import Category from "../schemas/Category";

const Utils = {
    generateDummyTransactions:  (number: number): Transaction[] => {
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
    },
    generateDummyTransactionsFromCategories: (categories: Map<String, Category>): Transaction[] => {
        const transactions: Transaction[] = [];
        Array.from(categories.values()).forEach((category => {
            category.subCats.forEach((subCat => {
                const transaction: Transaction = {
                    id: uuidv4(),
                    category: category,
                    subCategory: subCat,
                    description: `Description `,
                    amount: Math.round(Math.random() * 100),
                    time: new Date()
                };
                transactions.push(transaction);
            }))
        }))
        return transactions;
    },
    generateDummyCategories: (number: number): Map<String, Category> => {
        const emptyCategory = new Category("", false, []);
        const categories: Map<String, Category> = new Map();
        categories.set("empty", emptyCategory);
        for (let i = 1; i <= number; i++) {
            const subCat = i % 2 === 0 ? [new Category(`SubCategory A`, true, []), new Category(`SubCategory B`, true, [])] : [new Category(`SubCategory A`, true, [])];
            const cat = new Category(`Category ${i}`, false, subCat);
            categories.set(cat.id, cat);
        }
        return categories;
    }
}

export default Utils