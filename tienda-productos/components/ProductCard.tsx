'use client';

import { Product } from '@/types/product';
import { usePurchase } from '@/hooks/usePurchase';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { purchaseProduct, isLoading } = usePurchase();

  const handlePurchase = async () => {
    await purchaseProduct({
      productId: product.id,
      productName: product.name,
      price: product.price,
      quantity: 1
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
      {/* Imagen del producto */}
      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="text-blue-500 text-6xl">📦</div>
        )}
      </div>

      {/* Información del producto */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
        
        {product.description && (
          <p className="text-gray-600 text-sm">{product.description}</p>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500">ID: {product.id}</span>
        </div>

        {/* Botón de compra */}
        <button
          onClick={handlePurchase}
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 hover:shadow-md'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Procesando...</span>
            </div>
          ) : (
            'Comprar Ahora'
          )}
        </button>
      </div>
    </div>
  );
} 