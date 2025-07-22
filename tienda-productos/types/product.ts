export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  image?: string;
}

export interface PurchaseRequest {
  product_name: string;
  product_price: number;
} 