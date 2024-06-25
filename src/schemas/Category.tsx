import { v4 as uuidv4 } from 'uuid';

class Category {
    id: string;
    name: string;
    isSubCat: boolean;
    subCats: Category[];

    constructor(name: string, isSubCat: boolean, subCats: Category[]) {
        this.id = uuidv4();
        this.name = name;
        this.isSubCat = isSubCat;
        if(isSubCat && subCats.length > 0) {
            throw new Error("Subcategories cannot have subcategories");
        }
        this.subCats = subCats;
    }
}

export default Category;