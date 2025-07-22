'use client';

import { useState } from 'react';
import { PurchaseRequest } from '@/types/product';

export function usePurchase() {
  const [isLoading, setIsLoading] = useState(false);

  const purchaseProduct = async (purchaseData: PurchaseRequest) => {
    setIsLoading(true);
    
    try {
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // URL del backend (esto sería configurado según tu backend real)
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001/api/purchase';
      
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...purchaseData,
          timestamp: new Date().toISOString(),
          userId: 'user-123', // Esto vendría de un sistema de auth real
        }),
      });

      if (!response.ok) {
        throw new Error(`Error en la compra: ${response.status}`);
      }

      const result = await response.json();
      
      // Mostrar confirmación de compra
      alert(`¡Compra exitosa! 
      
Producto: ${purchaseData.product_name}
Precio: $${purchaseData.product_price.toFixed(2)}
ID de transacción: ${result.transactionId || 'DEMO-' + Date.now()}

En un entorno real, esto se enviaría al backend.`);
      
      console.log('Compra exitosa:', {
        purchaseData,
        response: result
      });

    } catch (error) {
      console.error('Error en la compra:', error);
      
      // En desarrollo, mostrar que el POST se habría enviado
      if (process.env.NODE_ENV === 'development') {
        alert(`[MODO DESARROLLO] 
        
Se habría enviado al backend:
${JSON.stringify(purchaseData, null, 2)}

Backend URL: ${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001/api/purchase'}`);
      } else {
        alert('Error al procesar la compra. Por favor, intenta nuevamente.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    purchaseProduct,
    isLoading
  };
} 