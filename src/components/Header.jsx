import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-white w-full">
      {/* Barra superior (Roxa) */}
      <div className="bg-primary text-white text-xs py-2 text-center font-medium">
        <p>Frete grátis para todo o Brasil nas compras acima de R$ 200</p>
      </div>

      {/* Header Principal (Branco) */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        
        {/* Logo */}
        <Logo />

        {/* Barra de Pesquisa */}
        <div className="flex-1 max-w-xl relative hidden md:block">
          <input 
            type="text" 
            placeholder="Pesquisar produto..." 
            className="w-full bg-light-gray-3 text-dark-gray-3 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-primary transition"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-light-gray">
            🔍
          </span>
        </div>

        {/* Links e Ícones */}
        <nav className="flex items-center gap-6">
          <Link to="/cadastro" className="text-primary font-bold text-sm hover:underline hidden md:block">
            Cadastre-se
          </Link>
          
          <Link to="/login" className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-tertiary transition">
            Entrar
          </Link>
          
          <Link to="/carrinho" className="text-dark-gray-3 text-xl hover:text-primary transition">
            🛒
          </Link>
        </nav>

      </div>
    </header>
  );
}