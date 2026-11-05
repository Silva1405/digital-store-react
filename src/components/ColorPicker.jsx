import { useState } from 'react';

export default function ColorPicker() {
  // Cores do Figma
  const colors = [
    { name: 'Cinza', hex: '#CCCCCC' },
    { name: 'Vermelho', hex: '#EE4266' },
    { name: 'Preto', hex: '#1F1F1F' },
  ];

  // Estado para saber qual cor está selecionada (começa na primeira)
  const [selectedColor, setSelectedColor] = useState(colors[0].hex);

  return (
    <div className="mb-6">
      <h3 className="font-bold text-dark-gray-2 mb-2">Cor: <span className="font-normal text-dark-gray-3">{colors.find(c => c.hex === selectedColor)?.name}</span></h3>
      
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color.hex}
            onClick={() => setSelectedColor(color.hex)}
            className={`w-8 h-8 rounded-full border-2 transition-all ${
              selectedColor === color.hex ? 'border-primary scale-110' : 'border-transparent hover:scale-105'
            }`}
            style={{ backgroundColor: color.hex }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
}