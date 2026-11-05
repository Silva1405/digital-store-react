import { useParams, Link } from 'react-router-dom';
import BuyBox from '../components/BuyBox';
import ProductCard from '../components/ProductCard';
import { todosOsProdutos } from '../data/produtos'; // Importando os dados

export default function ProductViewPage() {
  const { id } = useParams();
  
  // 1. Transformamos o ID da URL em número
  const produtoId = Number(id);
  
  // 2. Procuramos o produto no array que tem o mesmo ID
  const produtoAtual = todosOsProdutos.find(p => p.id === produtoId);

  // 3. Se o usuário digitar um ID que não existe na URL, mostramos um erro
  if (!produtoAtual) {
    return (
      <div className="p-8 text-center mt-20">
        <h1 className="text-3xl font-bold text-error mb-4">Produto não encontrado!</h1>
        <Link to="/products" className="text-primary hover:underline">Voltar para a loja</Link>
      </div>
    );
  }

  // 4. Separamos alguns produtos para a seção "Relacionados" (menos o atual)
  const relacionados = todosOsProdutos.filter(p => p.id !== produtoId).slice(0, 4);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <Link to="/products" className="text-primary hover:underline mb-6 block font-bold">
        &larr; Voltar para a listagem
      </Link>
      
      <div className="bg-white rounded-xl p-6 flex flex-col md:flex-row gap-10 shadow-sm mb-12">
        {/* Lado Esquerdo - Imagem Dinâmica */}
        <div className="md:w-1/2 flex flex-col items-center">
          <div className="w-full h-[400px] bg-light-gray-3 rounded-lg flex items-center justify-center p-8 mb-4">
            {/* Aqui usamos a imagem do produto que foi clicado! */}
            <img src={produtoAtual.image} alt={produtoAtual.title} className="max-h-full max-w-full object-contain" />
          </div>

          <div className="flex gap-4">
            <div className="w-20 h-20 bg-light-gray-3 rounded border-2 border-primary p-2 cursor-pointer flex items-center justify-center">
              <img src={produtoAtual.image} alt="Ângulo 1" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="w-20 h-20 bg-light-gray-3 rounded border border-light-gray-2 p-2 cursor-pointer hover:border-primary flex items-center justify-center">
              <img src="/product-thumb-2.jpeg" alt="Ângulo 2" className="max-h-full max-w-full object-contain" />
            </div>
          </div>
        </div>
        
        {/* Lado Direito - Informações Dinâmicas */}
        <div className="md:w-1/2 flex flex-col">
          {/* Título e preço vêm do produto que foi clicado */}
          <h1 className="text-3xl font-bold text-dark-gray mb-2">{produtoAtual.title}</h1>
          <p className="text-light-gray mb-4 text-sm uppercase tracking-wider">Código: #{produtoAtual.id}</p>
          
          {/* Passamos o preço do produto para o BuyBox */}
          <BuyBox price={produtoAtual.price} />
          
          <div className="mt-8">
            <h3 className="font-bold text-dark-gray-2 mb-2">Descrição do Produto</h3>
            <p className="text-dark-gray-3 text-sm leading-relaxed">
              {produtoAtual.desc}
            </p>
          </div>
        </div>
      </div>

      {/* SEÇÃO DE PRODUTOS RELACIONADOS (Dinâmica) */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-6">Produtos Relacionados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relacionados.map((produto) => (
            <ProductCard 
              key={produto.id} 
              id={produto.id}
              title={produto.title}
              price={produto.price}
              image={produto.image}
            />
          ))}
        </div>
      </div>

    </div>
  );
}