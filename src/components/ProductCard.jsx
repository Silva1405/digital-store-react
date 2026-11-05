import { Link } from 'react-router-dom';

export default function ProductCard({ id, title, price, image }) {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition cursor-pointer">
      
      {/* Área da imagem */}
      <div className="w-full h-40 bg-light-gray-3 rounded mb-4 flex items-center justify-center p-2">
        <img 
          src={image} 
          alt={title} 
          className="max-h-full max-w-full object-contain" 
          // Esse onError vai te avisar no console se a imagem não carregar
          onError={(e) => console.log("Erro ao carregar imagem:", image)} 
        />
      </div>

      <h3 className="text-dark-gray-2 font-semibold text-sm text-left w-full mb-1 truncate">
        {title}
      </h3>
      
      <p className="text-primary font-bold text-lg w-full text-left mb-4">
        R$ {price}
      </p>
      
      <Link 
        to={`/product/${id}`} 
        className="mt-auto w-full text-center bg-light-gray-3 text-dark-gray-2 py-2 rounded hover:bg-light-gray-2 transition font-bold text-sm"
      >
        Ver Detalhes
      </Link>
    </div>
  );
}