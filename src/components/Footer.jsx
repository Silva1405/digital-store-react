import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white pt-12 pb-6 mt-12 w-full">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Coluna 1: Logo e Texto */}
        <div>
          {/* O logo no rodapé geralmente é branco */}
          <h2 className="text-2xl font-bold mb-4 text-primary">Digital Store</h2>
          <p className="text-light-gray text-sm leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          {/* Redes Sociais (usando emojis para facilitar) */}
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-primary transition">📸</a>
            <a href="#" className="hover:text-primary transition">🐦</a>
            <a href="#" className="hover:text-primary transition">📘</a>
            <a href="#" className="hover:text-primary transition">📺</a>
          </div>
        </div>

        {/* Coluna 2: Informações */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-white">Informações</h3>
          <ul className="flex flex-col gap-2 text-sm text-light-gray-2">
            <li><Link to="#" className="hover:text-primary transition">Sobre a Digital Store</Link></li>
            <li><Link to="#" className="hover:text-primary transition">Segurança</Link></li>
            <li><Link to="#" className="hover:text-primary transition">Blog</Link></li>
            <li><Link to="#" className="hover:text-primary transition">Trabalhe conosco</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Categorias */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-white">Categorias</h3>
          <ul className="flex flex-col gap-2 text-sm text-light-gray-2">
            <li><Link to="/products" className="hover:text-primary transition">Camisetas</Link></li>
            <li><Link to="/products" className="hover:text-primary transition">Calças</Link></li>
            <li><Link to="/products" className="hover:text-primary transition">Tênis</Link></li>
            <li><Link to="/products" className="hover:text-primary transition">Acessórios</Link></li>
          </ul>
        </div>

        {/* Coluna 4: Contato */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-white">Contato</h3>
          <p className="text-sm text-light-gray-2 mb-2">
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
          </p>
          <p className="text-sm text-light-gray-2 font-bold mb-4">
            (85) 3051-3411
          </p>
        </div>

      </div>

      {/* Linha divisória e Copyright */}
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-dark-gray-2 text-center text-xs text-light-gray">
        <p>© 2026 Digital Store. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}