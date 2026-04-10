import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({ model, carts, setCarts }) => {
  const [isAdded, setIsAdded] = useState(false);

  function handleClick() {
  const exists = carts.find(item => item.id === model.id);

  if (!exists) {
    setCarts([...carts, model]);
    setIsAdded(true);
toast.success('Item added')
  }else{
    toast.error('Item already added')
  }
}
    

  return (
    <div className='border border-[#f2f2f2] p-6 rounded-2xl'>
      
      <div className="flex justify-between">
        <div className="border border-[#F2F2F2] rounded-full">
          <img className='w-12 h-12 p-2' src={model.icon} alt="" />
        </div>
        <p className="bg-gray-100 px-4 rounded-full flex items-center">
          {model.tag}
        </p>
      </div>

      <h3 className="text-xl font-bold mt-4">{model.name}</h3>
      <p className="text-[#627382] py-2">{model.description}</p>

      <p>
        <span className="text-2xl font-bold">${model.price}</span>
        <span className='text-[#627382]'>/{model.period}</span>
      </p>

    
      <ul className='py-4 space-y-1'>
        {model.features.map((f, i) => (
          <li key={i} className='text-[#627382]'>
            <i className="fa-solid fa-check text-green-500"></i> {f}
          </li>
        ))}
      </ul>

      <button 
        onClick={handleClick}
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-2 rounded-full text-white"
      >
        {isAdded ? "Added to Cart" : "Buy Now"}
      </button>

    </div>
  );
};

export default ModelCard;