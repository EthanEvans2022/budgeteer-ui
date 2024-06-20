class Transaction {
    id: number;
    group: string;
    category: string;
    description: string;
    amount: number;
    time: Date;

    constructor(id: number, group: string, category: string, description: string, amount: number, time: Date) {
        this.id = id; 
        this.group = group;
        this.category = category;
        this.description = description;
        this.amount = amount;
        this.time = time;
    }
}

export default Transaction