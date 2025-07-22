# 🛍️ Tienda de Productos - NextJS

Proyecto de tienda online desarrollado en NextJS con TypeScript y Tailwind CSS.

## 🚀 Características

- ✅ **Ver productos**: Lista de productos con información detallada
- ✅ **Comprar productos**: Botón de compra con funcionalidad POST al backend
- ✅ **Cards responsivas**: Diseño adaptable para móviles y desktop
- ✅ **Estado de carga**: Indicadores visuales durante el proceso de compra
- ✅ **Datos quemados**: Productos hardcoded en el frontend

## 📁 Estructura del Proyecto

```
tienda-productos/
├── app/
│   ├── page.tsx                 # Página principal con grid de productos
│   ├── layout.tsx              # Layout principal
│   └── globals.css             # Estilos globales
├── components/
│   └── ProductCard.tsx         # Componente de tarjeta de producto
├── hooks/
│   └── usePurchase.ts          # Hook para manejar compras
├── types/
│   └── product.ts              # Tipos TypeScript para productos
└── data/
    └── products.ts             # Productos hardcoded
```

## 🏗️ Arquitectura

### Frontend (NextJS)
- **Productos**: Almacenados en `data/products.ts` (hardcoded)
- **UI**: Componentes con Tailwind CSS
- **Estado**: React hooks para manejo de estado local
- **Tipos**: TypeScript para type safety

### Backend (Conceptual)
```typescript
// Endpoint esperado: POST /api/purchase
interface PurchaseRequest {
  product_id: number;
  product_name: string;
  product_price: number;
  timestamp: string;
  userId: string;
}
```

### Base de Datos (Conceptual)
```sql
-- Tabla de productos
CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  description TEXT
);

-- Tabla de compras/pedidos
CREATE TABLE purchases (
  id INTEGER PRIMARY KEY,
  product_id INTEGER,
  user_id VARCHAR(255),
  quantity INTEGER,
  total_price DECIMAL(10,2),
  timestamp DATETIME,
  FOREIGN KEY (product_id) REFERENCES products(id)
);
```

## 🛠️ Tecnologías Utilizadas

- **NextJS 15** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hooks** - Estado y efectos

## 🚀 Cómo ejecutar

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   ```
   http://localhost:3000
   ```

## 💡 Funcionalidades

### 1. Visualización de Productos
- Grid responsivo con tarjetas de productos
- Información clara: nombre, precio, descripción
- Diseño moderno con Tailwind CSS

### 2. Proceso de Compra
- Botón "Comprar Ahora" en cada producto
- Estado de carga durante el proceso
- Envío de datos al backend (simulado)
- Confirmación visual de la compra

### 3. Datos del POST
Cuando se hace click en "Comprar", se envía:
```json
{
  "product_id": 1,
  "product_name": "Laptop Gaming Pro",
  "product_price": 1299.99,
  "timestamp": "2024-01-15T10:30:00.000Z",
  "userId": "user-123"
}
```

## 🔧 Configuración

### Variables de Entorno
```env
# URL del backend (opcional)
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001/api/purchase
```

### Productos Hardcoded
Los productos están definidos en `data/products.ts`. Para agregar más productos:

```typescript
{
  id: 7,
  name: 'Nuevo Producto',
  price: 99.99,
  description: 'Descripción del producto'
}
```

## 🎯 Próximos Pasos

Para convertir esto en una aplicación completa:

1. **Backend Real**:
   - Crear API REST (Node.js, Python, etc.)
   - Endpoint POST `/api/purchase`
   - Base de datos (PostgreSQL, MySQL, etc.)

2. **Autenticación**:
   - Sistema de usuarios
   - Login/Register
   - Sesiones

3. **Carrito de Compras**:
   - Múltiples productos
   - Gestión de cantidades
   - Checkout completo

4. **Pagos**:
   - Integración con Stripe/PayPal
   - Procesamiento de pagos
   - Confirmaciones

## 📝 Notas de Desarrollo

- En modo desarrollo, las compras muestran un popup con los datos que se enviarían
- El backend URL por defecto es `http://localhost:3001/api/purchase`
- Los productos se renderizan desde el array en `data/products.ts`
- Cada producto tiene un ID único que se envía en las compras

## 🐛 Debugging

Si hay problemas:
1. Verificar que NextJS esté corriendo en puerto 3000
2. Revisar la consola del navegador para errores
3. Verificar que los tipos TypeScript coincidan

---

**¡Tu tienda está lista! 🎉**

Ahora puedes:
- Ver los productos en http://localhost:3000
- Hacer click en "Comprar Ahora" para simular compras
- Modificar los productos en `data/products.ts`
- Personalizar los estilos en los componentes 