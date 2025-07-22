export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  image?: string;
}

export interface PurchaseRequest {
  productId: number;
  productName: string;
  price: number;
  quantity?: number;
} 