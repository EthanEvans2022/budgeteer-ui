class Transaction {
    group: string;
    category: string;
    description: string;
    amount: number;
    time: Date;

    constructor(group: string, category: string, description: string, amount: number, time: Date) {
        this.group = group;
        this.category = category;
        this.description = description;
        this.amount = amount;
        this.time = time;
    }
}

export default Transaction