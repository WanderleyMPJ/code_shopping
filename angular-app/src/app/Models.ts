export interface Category{
    id?: number;
    name: string;
    active: boolean;
    readonly created_at?: { date: string};
    readonly updated_at?: { date: string};
}

export interface User{
    id?: number;
    name: string;
    email: string;
    password?: string;
    readonly created_at?: { date: string};
    readonly updated_at?: { date: string};
}

export interface ProductCategory{
    product: Product;
    categories: Category[];
}



export interface Product{
    id?: number;
    name: string;
    readonly slug?: string;
    description: string,
    price?: Number,
 //   stok?: Number,
    active: boolean;
    readonly created_at?: { date: string};
    readonly updated_at?: { date: string};
}

