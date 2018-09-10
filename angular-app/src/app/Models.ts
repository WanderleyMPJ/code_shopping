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
    profile?: UserProfile;
    readonly created_at?: { date: string};
    readonly updated_at?: { date: string};
}

export interface UserProfile{
    photo_url : string;
    phone_number : string;
}

export interface ProductCategory{
    product: Product;
    categories: Category[];
}

export interface ProductInput{
    id?: number;
    amount: number;
    readonly created_at?: {data: string};
    readonly updated_at?: {data: string};
    product: Product
}

export interface ProductPhoto{
    id?: number;
    photo_url: string;
    product?: Product;
    readonly created_at?: {data: string};
    readonly updated_at?: {data: string};
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

