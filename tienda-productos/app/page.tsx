import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🛍️ Tienda de Productos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra increíble selección de productos tecnológicos. 
            Encuentra lo que necesitas y cómpralo con un solo click.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Info Footer */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-blue-800 mb-3">
              💡 Información del Proyecto
            </h2>
            <div className="text-sm text-blue-700 space-y-2">
              <p>
                <strong>Frontend:</strong> NextJS con TypeScript y Tailwind CSS
              </p>
              <p>
                <strong>Productos:</strong> Datos hardcoded en el frontend (archivo: data/products.ts)
              </p>
              <p>
                <strong>Backend Simulado:</strong> Las compras envían POST a http://localhost:3001/api/purchase
              </p>
              <p>
                <strong>Estructura de BD conceptual:</strong> Product {'{ id: number, name: string, price: number }'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
