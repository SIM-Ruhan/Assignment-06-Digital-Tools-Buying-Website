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