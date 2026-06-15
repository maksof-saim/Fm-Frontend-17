export interface Product {
    id: number;
    name: string;
    price: number;
    image?: string;
    discount?: number;
    rating?: number;
    category?: string;
}

export interface CartItem extends Product {
    qty: number;
    subtitle?: string;
}
