import ProductCard from '../components/ProductCard';

export default function ProductListingPage() {
    const produtos = [
    { id: 1, title: 'Tênis Nike Air', price: '599,90', image: '/produc-image-1.jpeg' },
    { id: 2, title: 'Tênis Adidas Ultra', price: '499,90', image: '/produc-image-2.jpeg' },
    { id: 3, title: 'Tênis Puma Runner', price: '299,90', image: '/produc-image-3.jpeg' },
    { id: 4, title: 'Tênis Vans Old Skool', price: '399,90', image: '/produc-image-4.jpeg' },
    { id: 5, title: 'Tênis Nike Jordan', price: '899,90', image: '/produc-image-5.jpeg' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 bg-light-gray-3 min-h-screen">
      
      {/* BARRA LATERAL DE FILTROS (Esquerda) */}
      <aside className="w-full md:w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
        <h2 className="text-xl font-bold mb-4 text-dark-gray">Filtrar por</h2>
        
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Marca</h3>
          <label className="flex items-center gap-2 mb-1 text-sm"><input type="checkbox" /> Nike</label>
          <label className="flex items-center gap-2 mb-1 text-sm"><input type="checkbox" /> Adidas</label>
          <label className="flex items-center gap-2 mb-1 text-sm"><input type="checkbox" /> Puma</label>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Categoria</h3>
          <label className="flex items-center gap-2 mb-1 text-sm"><input type="checkbox" /> Masculino</label>
          <label className="flex items-center gap-2 mb-1 text-sm"><input type="checkbox" /> Feminino</label>
          <label className="flex items-center gap-2 mb-1 text-sm"><input type="checkbox" /> Infantil</label>
        </div>
      </aside>

      {/* ÁREA DOS PRODUTOS (Direita) */}
      <main className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-dark-gray">Produtos</h1>
          <button className="text-primary font-bold text-sm">Ordenar por: mais relevantes</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtos.map((produto) => (
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