import Category from "./Category";

class Transaction {
    id: string;
    category: Category;
    subCategory: Category;
    description: string;
    amount: number;
    time: Date;

    constructor(id: string, category: Category, subCategory: Category, description: string, amount: number, time: Date) {
        this.id = id; 
        this.category = category;
        this.subCategory = subCategory;
        this.description = description;
        this.amount = amount;
        this.time = time;
    }
}

export default Transaction;