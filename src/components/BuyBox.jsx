import ProductOptions from './ProductOptions';

export default function BuyBox({ price }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-2xl font-bold text-primary">R$ {price}</p>
      
      <ProductOptions />
      
      <button className="bg-primary text-white py-3 rounded-lg font-bold hover:bg-tertiary transition w-full md:w-2/3">
        Comprar Agora
      </button>
    </div>
  );
}