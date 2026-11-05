import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      
      {/* BANNER PRINCIPAL */}
      <div className="relative w-full rounded-xl overflow-hidden mb-12 h-[400px]">
        <img 
          src="/home-slide-1.jpeg" 
          alt="Banner Principal" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-12 bg-black/40">
          <h1 className="text-5xl font-bold text-white mb-4 max-w-md">
            Queima de Estoque
          </h1>
          <p className="text-white text-lg mb-6 max-w-sm">
            Os melhores tênis com até 50% de desconto.
          </p>
          <Link 
            to="/products" 
            className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-tertiary transition"
          >
            Ver Ofertas
          </Link>
        </div>
      </div>

      {/* COLEÇÕES */}
      <h2 className="text-2xl font-bold text-dark-gray mb-6">Coleções em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/products" className="relative rounded-xl overflow-hidden group h-40">
          <img src="/collection-1.png" alt="Coleção 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          <div className="absolute inset-0 bg-black/40 flex items-end p-4">
            <h3 className="text-white font-bold text-xl">Nova Coleção</h3>
          </div>
        </Link>

        <Link to="/products" className="relative rounded-xl overflow-hidden group h-40">
          <img src="/collection-2.png" alt="Coleção 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          <div className="absolute inset-0 bg-black/40 flex items-end p-4">
            <h3 className="text-white font-bold text-xl">Adidas</h3>
          </div>
        </Link>

        <Link to="/products" className="relative rounded-xl overflow-hidden group h-40">
          <img src="/collection-3.png" alt="Coleção 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          <div className="absolute inset-0 bg-black/40 flex items-end p-4">
            <h3 className="text-white font-bold text-xl">Beats Bass</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}