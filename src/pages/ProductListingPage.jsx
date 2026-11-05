import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { todosOsProdutos } from '../data/produtos'; // Importando os dados

export default function ProductListingPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 bg-light-gray-3 min-h-screen">
      
      {/* Filtros Laterais (mantenha os seus) */}
      <aside className="w-full md:w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
        <h2 className="text-xl font-bold mb-4 text-dark-gray">Filtrar por</h2>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Marca</h3>
          <label className="flex items-center gap-2 mb-1 text-sm"><input type="checkbox" /> Nike</label>
          <label className="flex items-center gap-2 mb-1 text-sm"><input type="checkbox" /> Adidas</label>
        </div>
      </aside>

      <main className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-dark-gray">Produtos</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mapeando os dados importados */}
          {todosOsProdutos.map((produto) => (
            <ProductCard 
              key={produto.id} 
              id={produto.id}
              title={produto.title}
              price={produto.price}
              image={produto.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
}