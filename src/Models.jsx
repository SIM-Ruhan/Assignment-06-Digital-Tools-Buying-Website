import React, { useEffect, useState } from 'react';
import ModelCard from './ModelCard';

const Models = ({ carts, setCarts }) => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch("/models.json")
      .then(res => res.json())
      .then(data => setModels(data));
  }, []);

  return (
    <div>
      <div className="mt-20 text-center">
        <h2 className='font-extrabold text-4xl'>Premium Digital Tools</h2>
        <p className="text-[#627382] mt-3">
          Choose from our curated collection of premium digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {models.map(model => (
          <ModelCard 
            key={model.id}
            model={model}
            carts={carts}
            setCarts={setCarts}
          />
        ))}
      </div>
    </div>
  );
};

export default Models;