import ColorPicker from './ColorPicker';

export default function ProductOptions() {
  const tamanhos = [38, 39, 40, 41, 42];

  return (
    <div className="mb-6">
      {/* Adiciona o seletor de cores aqui */}
      <ColorPicker />

      <h3 className="font-bold text-dark-gray-2 mb-2">Tamanho</h3>
      <div className="flex gap-2">
        {tamanhos.map((tam) => (
          <button 
            key={tam} 
            className="w-10 h-10 border border-light-gray-2 text-dark-gray-3 rounded flex items-center justify-center font-medium hover:border-primary hover:text-primary transition"
          >
            {tam}
          </button>
        ))}
      </div>
    </div>
  );
}